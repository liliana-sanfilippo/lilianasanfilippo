// DecisionTree.tsx
// React-Komponente für den Entscheidungs-Navigator.
//
// Navigation läuft über einen Pfad aus Knoten-IDs. Weil Knoten nur per ID
// referenziert werden, funktioniert das auch, wenn mehrere Wege beim selben
// Knoten landen (Graph statt Baum).

import {useMemo, useState} from "react";
import type {
    Choice,
    DecisionGraph,
    DecisionNode,
    NodeId,
    Option,
    QuestionNode,
    SolutionNode,
} from "./decisionTree.types";
import {isSolution, nodeLabel} from "./decisionTree.types";
import "../../componentStyling/DecisionTree.css";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-bootstrap";

export interface DecisionTreeProps {
    /** Der Entscheidungsgraph (flache Knotentabelle + Wurzel-ID). */
    graph: DecisionGraph;
    /** Optional: JSON-Export des aktuellen Pfads bei der Lösung anzeigen. */
    showPathJson?: boolean;
}

export default function DecisionTree({
                                         graph,
                                         showPathJson = false,
                                     }: DecisionTreeProps) {
    // path[i] = Knoten-ID an Position i; aktueller Knoten ist das letzte Element.
    const [path, setPath] = useState<NodeId[]>([graph.rootId]);
    // choices[i] = Auswahl, die von path[i] nach path[i+1] geführt hat.
    const [choices, setChoices] = useState<Choice[]>([]);

    const currentId = path[path.length - 1];
    const current = graph.nodes[currentId];

    const pathNodes = useMemo(
        () => path.map((id) => graph.nodes[id]).filter(Boolean) as DecisionNode[],
        [path, graph],
    );

    function choose(option: Option): void {
        if (!graph.nodes[option.childId]) return;
        setChoices((cs) => [
            ...cs,
            {
                nodeId: currentId,
                question: isSolution(current) ? current.title : current.question,
                choice: option.label,
            },
        ]);
        setPath((p) => [...p, option.childId]);
    }

    function goBack(): void {
        if (path.length <= 1) return;
        setPath((p) => p.slice(0, -1));
        setChoices((cs) => cs.slice(0, -1));
    }

    function goTo(index: number): void {
        if (index >= path.length - 1) return;
        setPath((p) => p.slice(0, index + 1));
        setChoices((cs) => cs.slice(0, index));
    }

    function reset(): void {
        setPath([graph.rootId]);
        setChoices([]);
    }

    if (!current) {
        return (
            <div className="decision-tree">
                <div className="warning">
                    <strong>⚠ Fehler:</strong> Knoten „{currentId}“ wurde nicht gefunden.
                </div>
            </div>
        );
    }

    return (
        <div className="decision-tree">
            <Breadcrumbs nodes={pathNodes} onNavigate={goTo} onReset={reset}/>
            <p> Hinweis: Schlüssel insgesamt noch nicht vollständig!</p>
            {isSolution(current) ? (
                <SolutionView
                    node={current}
                    choices={choices}
                    rootId={graph.rootId}
                    canGoBack={path.length > 1}
                    showPathJson={showPathJson}
                    onBack={goBack}
                    onReset={reset}
                />
            ) : (
                <QuestionView
                    node={current}
                    canGoBack={path.length > 1}
                    onChoose={choose}
                    onBack={goBack}
                />
            )}
        </div>
    );
}

/* --------------------------------- Teile --------------------------------- */

interface BreadcrumbsProps {
    nodes: DecisionNode[];
    onNavigate: (index: number) => void;
    onReset: () => void;
}

function Breadcrumbs({nodes, onNavigate, onReset}: BreadcrumbsProps) {
    return (
        <div className="dt-header">
            <div className="breadcrumbs">
                {nodes.map((node, i) => (
                    <span key={`${node.id}-${i}`} className="crumb-wrap">
            {i > 0 && <span className="sep">›</span>}
                        <button
                            type="button"
                            className={"crumb" + (i === nodes.length - 1 ? " current" : "")}
                            onClick={() => onNavigate(i)}
                        >
              {nodeLabel(node, `Schritt ${i + 1}`)}
            </button>
          </span>
                ))}
            </div>
            <button type="button" className="btn" onClick={onReset}>
                Reset
            </button>
        </div>
    );
}

interface QuestionViewProps {
    node: QuestionNode;
    canGoBack: boolean;
    onChoose: (option: Option) => void;
    onBack: () => void;
}

function QuestionView({node, canGoBack, onChoose, onBack}: QuestionViewProps) {
    return (
        <>
            <h2 className="question">{node.question || node.title || "Auswahl"}</h2>

            {node.description && <div className="description">{node.description}</div>}

            <div className="options">
                {node.options.map((option, i) => (
                    <button
                        key={`${option.childId}-${i}`}
                        type="button"
                        className="option"
                        onClick={() => onChoose(option)}
                    >
                        <span className="badge">{i + 1}</span>
                        <span className="option-body">
              <strong>{option.label}</strong>
                            {option.description && <small>{option.description}</small>}
                            {option.list && option.list.length > 0 && (
                                <small>
                                    <ul>
                                        {option.list.slice(0, 3).map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </small>
                            )}
            </span>
                    </button>
                ))}
            </div>

            <div className="footer">
                <button
                    type="button"
                    className="btn"
                    disabled={!canGoBack}
                    onClick={onBack}
                >
                    ← Zurück
                </button>
            </div>
        </>
    );
}

interface SolutionViewProps {
    node: SolutionNode;
    choices: Choice[];
    rootId: NodeId;
    canGoBack: boolean;
    showPathJson: boolean;
    onBack: () => void;
    onReset: () => void;
}

function SolutionView({
                          node,
                          choices,
                          rootId,
                          canGoBack,
                          showPathJson,
                          onBack,
                          onReset,
                      }: SolutionViewProps) {
    const [copied, setCopied] = useState(false);
    const pathJson = useMemo(
        () => buildPathJson(rootId, node, choices),
        [rootId, node, choices],
    );

    function copyJson(): void {
        navigator.clipboard?.writeText(JSON.stringify(pathJson, null, 2));
        setCopied(true);
    }

    return (
        <>
            <div className="kicker">Lösung {node.id}</div>
            {
                !node.fertig && <div className="">
                    <strong>(Noch nicht final kontrolliert / vollständig)</strong>
                </div>
            }
            <div className="solution">
                <h2>{node.title}</h2>

                {node.points && node.points.length > 0 && (
                    <ul>
                        {node.points.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                )}

                {typeof node.warning == "string" && (
                    <div className="warning">
                        <strong>⚠ Hinweis:</strong> {node.warning}
                    </div>
                )}

                {typeof node.warning != "string" && node.warning && (
                   node.warning.map((w, i) => (
                       <div className="warning">
                           <strong>⚠ Hinweis:</strong> {w}
                       </div>
                       )
                   )
                )}

                {node.references && node.references.length > 0 && (
                    <div className="description references">
                        <strong>Ref:</strong> {node.references.join(" · ")}
                    </div>
                )}
            </div>

            {node.aufgaben && node.aufgaben.length > 0 && (
                <div className="aufgaben">
                    <h3>Aufgaben aus der Vorlesung:</h3>
                    <Accordion>
                        {node.aufgaben.map((a, i) => (
                            <AccordionItem eventKey={i.toString()}>
                                <AccordionHeader>
                                    <span> {a.nummer}{a.title && <span>: <small>{a.title}</small></span>}</span>
                                </AccordionHeader>
                                <AccordionBody>
                                   <p> <div><b>Aufgabenstellung:</b>
                                   </div>
                                       {a.text}</p>
                                    {
                                        a.loesung &&
                                        <div>
                                            <div><b>Lösung:</b>
                                            </div>
                                            {a.loesung}
                                        </div>
                                    }
                                </AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            )}

            {showPathJson && (
                <div className="path-json">
                    <h3>Auswahlpfad als JSON</h3>
                    <div className="code-actions">
                        <button type="button" className="btn" onClick={copyJson}>
                            {copied ? "Kopiert ✓" : "JSON kopieren"}
                        </button>
                    </div>
                    <pre>{JSON.stringify(pathJson, null, 2)}</pre>
                </div>
            )}

            <div className="footer">
                <button
                    type="button"
                    className="btn"
                    disabled={!canGoBack}
                    onClick={onBack}
                >
                    ← Zurück
                </button>
                <button type="button" className="btn primary" onClick={onReset}>
                    Neu starten
                </button>
            </div>
        </>
    );
}

/* -------------------------------- Helpers -------------------------------- */

interface PathJson {
    key: NodeId;
    solution: NodeId;
    solutionTitle: string;
    path: Array<{
        step: number;
        node: NodeId;
        question: string | null;
        choice: string;
    }>;
}

function buildPathJson(
    rootId: NodeId,
    solution: SolutionNode,
    choices: Choice[],
): PathJson {
    return {
        key: rootId,
        solution: solution.id,
        solutionTitle: solution.title,
        path: choices.map((c, i) => ({
            step: i + 1,
            node: c.nodeId,
            question: c.question,
            choice: c.choice,
        })),
    };
}
