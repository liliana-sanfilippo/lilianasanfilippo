// flattenGraph.ts
// Migrationshilfe + Validierung.
//
// Dein bestehendes JSON ist verschachtelt (Optionen mit inline `child`).
// `flattenGraph` wandelt das in das neue flache Format (`DecisionGraph`) um.
// Knoten mit GLEICHER `id` werden dabei zusammengeführt: Wenn du also an
// mehreren Stellen im Baum denselben `id`-Wert benutzt, entsteht daraus
// automatisch EIN gemeinsamer Knoten -> mehrere Wege, eine Antwort.

import type {
  DecisionGraph,
  DecisionNode,
  NodeId,
  Option,
} from "./decisionTree.types";
import { isSolution } from "./decisionTree.types";

/** Rohformat: verschachtelter Baum mit inline `child`-Objekten (altes Format). */
export interface RawOption {
  label: string;
  description?: string;
  list?: string[];
  child: RawNode;
}

export interface RawNode {
  id?: NodeId;
  type?: "solution" | "question";
  question?: string;
  title?: string;
  description?: string;
  options?: RawOption[];
  points?: string[];
  aufgaben?: string[];
  warning?: string;
  references?: string[];
}

/**
 * Wandelt den alten, verschachtelten Baum in einen flachen Graphen um.
 * Erste Definition einer `id` gewinnt; spätere gleiche `id`s werden als
 * Verweis auf denselben Knoten behandelt.
 */
export function flattenGraph(root: RawNode): DecisionGraph {
  const nodes: Record<NodeId, DecisionNode> = {};
  let auto = 0;
  const ensureId = (n: RawNode): NodeId => n.id ?? `__auto_${auto++}`;

  function visit(raw: RawNode): NodeId {
    const id = ensureId(raw);

    // Bereits vorhanden -> zusammenführen (nicht erneut verarbeiten).
    if (nodes[id]) return id;

    if (raw.type === "solution") {
      nodes[id] = {
        id,
        type: "solution",
        title: raw.title ?? "Lösung",
        points: raw.points,
        aufgaben: raw.aufgaben,
        warning: raw.warning,
        references: raw.references,
      };
      return id;
    }

    // Platzhalter zuerst registrieren, damit Mehrfach-/Rückverweise
    // während der Rekursion aufgelöst werden können.
    const question: DecisionNode = {
      id,
      type: "question",
      question: raw.question ?? raw.title ?? "Auswahl",
      title: raw.title,
      description: raw.description,
      options: [],
    };
    nodes[id] = question;

    question.options = (raw.options ?? []).map<Option>((o) => ({
      label: o.label,
      description: o.description,
      list: o.list,
      childId: visit(o.child),
    }));

    return id;
  }

  const rootId = visit(root);
  return { rootId, nodes };
}

/**
 * Prüft einen flachen Graphen auf Konsistenz.
 * Wirft einen Fehler bei fehlender Wurzel oder ungültigen `childId`-Verweisen.
 */
export function validateGraph(graph: DecisionGraph): void {
  if (!graph.nodes[graph.rootId]) {
    throw new Error(`Wurzelknoten "${graph.rootId}" fehlt in nodes.`);
  }
  for (const node of Object.values(graph.nodes)) {
    if (isSolution(node)) continue;
    if (!Array.isArray(node.options)) {
      throw new Error(`Knoten "${node.id}" benötigt ein options-Array.`);
    }
    node.options.forEach((o, i) => {
      if (!o.label) {
        throw new Error(`Option ${i + 1} in "${node.id}" benötigt ein label.`);
      }
      if (!graph.nodes[o.childId]) {
        throw new Error(
          `Option "${o.label}" in "${node.id}" verweist auf unbekannte childId "${o.childId}".`,
        );
      }
    });
  }
}
