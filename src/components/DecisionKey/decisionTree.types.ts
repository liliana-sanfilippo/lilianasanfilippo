// decisionTree.types.ts
// Zentrale Typen für den Entscheidungs-Navigator.
//
// WICHTIG (Strukturänderung gegenüber dem alten Code):
// Früher enthielt jede Option ihr Ziel als verschachteltes `child`-Objekt.
// Damit war jeder Knoten nur über GENAU EINEN Weg erreichbar (echter Baum).
// Jetzt liegen alle Knoten flach in `DecisionGraph.nodes` und Optionen
// verweisen über `childId`. Dadurch dürfen mehrere Optionen/Pfade auf
// DENSELBEN Knoten (z. B. dieselbe Lösung) zeigen -> Graph statt Baum.

import { ReactNode } from "react";
import {StatistikAufgabe} from "../../types/statistik_types";

export type NodeId = string;

/** Gemeinsame Felder aller Knoten. */
interface NodeBase {
    id: NodeId;
    /** Optionaler Titel für Breadcrumb/Anzeige. */
    title?: string;
    fertig?: boolean
}

/** Ein Entscheidungsknoten mit Auswahlmöglichkeiten. */
export interface QuestionNode extends NodeBase {
    type?: "question";
    question: string;
    description?: string;
    options: Option[];
    crumb?: string;
}

/** Ein Endknoten mit der Lösung. */
export interface SolutionNode extends NodeBase {
    type: "solution";
    title: string;
    points?: ReactNode[];
    aufgaben?: StatistikAufgabe[];
    warning?: string | ReactNode[];
    references?: string[];
    crumb?: string;
    frage?: ReactNode[];
}

export type StatistikItem =  string | React.ReactNode |HTMLElement;

export type DecisionNode = QuestionNode | SolutionNode;

/** Eine Option verweist per ID auf ihren Zielknoten (kein Inline-Objekt mehr!). */
export interface Option {
    label: string;
    description?: string;
    /** Kurze Beispielliste (z. B. typische Aufgabenformulierungen). */
    list?: string[];
    /** Verweis auf den nächsten Knoten in `DecisionGraph.nodes`. */
    childId: NodeId;
    klausur_irrelevant?: boolean
}

/** Der komplette Graph: flache Knotentabelle + Wurzel-ID. */
export interface DecisionGraph {
    rootId: NodeId;
    nodes: Record<NodeId, DecisionNode>;
}

/** Eine getroffene Auswahl entlang des aktuellen Pfads. */
export interface Choice {
    nodeId: NodeId;
    question: string | null;
    choice: string;
}

/** Type Guard: Handelt es sich um einen Lösungsknoten? */
export function isSolution(
    node: DecisionNode | undefined,
): node is SolutionNode {
    return !!node && node.type === "solution";
}

/** Lesbares Label für einen Knoten (Breadcrumb-Anzeige o. Ä.). */
export function nodeLabel(node: DecisionNode, fallback = "Schritt"): string {
    if (node.crumb) return node.crumb;
    else if (node.title) return node.title;
    if (!isSolution(node) && node.question) return node.question;
    return fallback;
}
