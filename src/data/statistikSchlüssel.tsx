// noinspection JSNonASCIINames

import type {DecisionGraph} from "../components/DecisionKey/decisionTree.types";
import {statistikAufgaben} from "./statistikAufgaben";
// @ts-ignore
import {BlockMath, InlineMath} from 'react-katex';
import 'katex/dist/katex.min.css';

/*
  {
                    label: "",
                    list: [

                    ],
                    childId: "",
                },
 */

/*
DIREKTES_ABZÄHLEN: {
            type: "solution",
            title: "",
            id: ""
        },
 */


/*
 {
                    label: "ZV erst als Abbildung definieren",
                    list: [],
                    childId: "ZV_DEF",
                },

                Dazu: 1.5.3b Stellen Sie die Zufallsvariable X mit Hilfe der Zufallsvariablen T1, T2, T3 und T4 dar
                2.1.1b-c
                2.1.3d-e
                1.6.1b
                2.2.3b
                2.3.3b-c
 */

// VF GRaph zeichnen:  "1.3.1b"
// TODO Wfl bestimmen wie bei 1.3.1...
// 2.1.3b-c keine Ahnung wie man die löst

// STAND: als nächstes PÜs

// TODO K-3a-d einordnen & K5 noch irgendwie einbringen, evtl. doch Multiple Choice

// TODO Verteilungen erkennen

export const statistik_schlüssel_json: DecisionGraph = {
    rootId: "START",
    nodes: {

        START: {
            id: "START",
            type: "question",
            crumb: "Aufgabentyp",
            question: "Welchen Aufgabentyp oder welche Teilaufgabe möchtest du lösen?",
            options: [
                {
                    label:
                        "Wahrscheinlichkeitsraum / Ereignisraum / statistisches Modell angeben",
                    list: [
                        "Geben Sie einen geeigneten Ereignisraum Ω an ...",
                        "Geben Sie eine für dieses Zufallsexperiment geeignete Wahrscheinlichkeitsfunktion µ ...",
                        "Geben Sie einen geeigneten Wahrscheinlichkeitsraum (Ω , µ) an, der dieses Experiment beschreibt...",
                        "Definieren Sie Ereignisse A, B und C als Teilmengen von Ω ...",
                        "Geschenke werden am Ende der Feier zufällig verteilt, so daß jede der Freundinnen genau" +
                        " ein Geschenk bekommt",
                    ],
                    childId: "M1",
                },
                {
                    label: "Definieren von Ereignissen, Zufallsvariablen etc.",
                    list: [
                        "Definieren Sie eine Zufallsvariable X, die..."
                    ],
                    childId: "DEFINIEREN",
                },
                {
                    label:
                        "Wahrscheinlichkeit P(…) eines konkreten Ereignisses bzw. einer Zufallsvariable berechnen",
                    list: [
                        "Berechnen Sie mit Hilfe der Wahrscheinlichkeitsfunktion µ die Wahrscheinlichkeiten von A, B" +
                        " und C.",
                        "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                        "Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf",
                        "Bestimmen Sie deren Wahrscheinlichkeiten bzw. bedingte" +
                        " Wahrscheinlichkeiten.",
                        "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht"
                    ],
                    childId: "W1",
                },
                {
                    label: "Etwas zu Zufallsvariablen, Verteilungen und Dichten", // TODO Es möglich machen hierüber
                    // (weil Dichte) die WS einer ZV zu berechnen
                    list: [
                        "Berechnen Sie die Verteilung von X, indem Sie die zugehörige Wahrscheinlichkeitsfunktion μX bestimmen.",
                        "bestimmen Sie jeweils die Verteilung der Zufallsvariablen",
                        "Bestimmen Sie c so, daß f eine Dichte ist"
                    ],
                    childId: "ZVG",
                },
                {
                    label: "Unabhängigkeit prüfen oder bestimmen",
                    list: [
                        "Die Ereignisse A, B, C, D seien unabhängig",
                        "Sind die Ereignisse {X ≤ a} und {Y ≤ b} für alle a, b ∈ R unabhängig",
                        "Beweisen Sie, dass X und Y unabhängige Zufallsvariablen sind.",
                        "Zeigen Sie, dass A und B unabhängig sind"
                    ],
                    childId: "UNABHÄNGIGKEIT",
                },
                {
                    label: "Erwartungswert oder Varianz berechnen",
                    list: [
                        "Verteilungstabelle oder Wahrscheinlichkeiten gegeben oder errechenbar",
                        "Berechnen Sie den erwarteten Gewinn",
                        "Berechnen Sie den Erwartungswert von 2X - Y",
                        "Varianz für Y = -2X + 4",
                        "Berechnen Sie Erwartungswert und Varianz von -4X - 1"
                    ],
                    childId: "ERWARTUNGSWERT_VARIANZ",
                },
                {
                    label: "Etwas näherungsweise/approximativ oder eine Schranke oder einen Grenzwert berechnen",
                    list: [
                        "Bestimmen Sie näherungsweise...",
                        "Geben Sie eine untere Schrank an..."
                    ],
                    childId: "APPROXIMATIONEN_GRENZWERTE_SCHRANKEN",
                },
                {
                    label: "Kennzahlen berechnen, für die ein konkreter Datensatz gegeben ist",
                    list: [
                        "Bestimmen Sie arithmetisches Mittel, Median und Modalwert der Stichprobe.",
                        "Bestimmen Sie die mittlere absolute Abweichung vom Median und vom arithmetischen Mittel",
                        "Bestimmen Sie das untere Quartil und das 90%-Quantil der Stichprobe",
                        "Bestimmen Sie die Varianz und Standardabweichung der Stichprobe."
                    ],
                    childId: "DESKRIPTIVE_STATISTIK",
                },
                {
                    label: "Aussage über einen Schätzer treffen",
                    list: [
                        "Berechnen Sie das Risiko des Schätzers",
                        "Ist t1 mindestens so gut wie t2?",
                    ],
                    childId: "SCHÄTZER",
                },
                {
                    label: "Etwas mit Konfidenzintervallen",
                    list: [
                        "Bestimmen Sie das Konfidenzintervall approximativ mit ..."
                    ],
                    childId: "KONFIDENZINTERVALL",
                },
                {
                    label: "Hypothese testen", // TODO noch aufteilen in Testart und dann ob einseitig ider
                    // zweiseitig...
                    list: [
                        "Verwenden Sie einen geeigneten Hypothesentest zum Signifikanzniveau ..."
                    ],
                    childId: "HYPOTHESENTEST",
                },
                /*
                   {
                       label: "Wahr/Falsch-Ankreuzen / reine Theoriefrage",
                       list: [
                           "Kennzeichnen Sie durch Ankreuzen, welche Aussagen wahr und welche falsch sind"
                       ],
                       childId: "THEORIE_WAHR_FALSCH",
                   },
                 */
            ],
        },

        DEFINIEREN: {
            id: "DEFINIEREN",
            type: "question",
            crumb: "Definieren",
            question: "Was genau sollst du definieren?",
            description: "Reihenfolge fast immer: (1) Definitions-/Wertebereich, (2) Bildbereich, (3) Zuordnungsvorschrift.",
            options: [
                {
                    label: "Ereignis(se) als Teilmenge von Ω",
                    childId: "EREIGNIS_DEF",
                    list: [
                        "Definieren Sie Ereignisse A, B und C als Teilmengen von Ω",
                        "A: mindestens ein Würfel zeigt eine gerade Zahl",
                    ],
                },
                {
                    label: "Eine Zufallsvariable als Abbildung ω↦X(ω)",
                    childId: "ZV_DEF",
                    list: [
                        "Definieren Sie eine Zufallsvariable X, die …",
                        "Geben Sie Definitions-, Werte- und Bildbereich an",
                    ],
                },
                {
                    label: "Eine ZV aus anderen ZV (max/min/Summe/Differenz)",
                    childId: "ZV_AUS_ZV",
                    list: [
                        "Stellen Sie X mit Hilfe der Zufallsvariablen T1, T2, T3 und T4 dar",
                        "Definieren Sie G mit Hilfe der Zufallsvariablen M und N",
                    ],
                },
                {
                    label: "Zähl- oder Indikatorvariable („Anzahl von …“)",
                    childId: "ZAEHL_INDIKATOR_DEF",
                    list: [
                        "Definieren Sie X_i, das genau dann 1 ist, wenn …",
                        "Definieren Sie eine Zufallsvariable S, die angibt, wie viele …",
                    ],
                },
            ],
        },

        EREIGNIS_DEF: {
            id: "EREIGNIS_DEF",
            type: "solution",
            title: "Ereignis als Teilmenge",
            points: [
                "Ereignis explizit als Teilmenge von Ω schreiben (Aufzählung oder {ω : Bedingung}).",
                "„und“ = ∩, „oder“ = ∪, „nicht“ = Komplement; „mindestens ein“ oft über das Komplement leichter.",
                "Prüfen: Liegt jedes aufgezählte ω wirklich in Ω?",
            ],
            aufgaben: [
                statistikAufgaben["1.1.1c"], statistikAufgaben["1.1.3c"], statistikAufgaben["1.2.3b"],
                statistikAufgaben["1.4.4b"], statistikAufgaben["1.6.1b"], statistikAufgaben["1.6.4b"],
            ],
        },

        ZV_DEF: {
            id: "ZV_DEF",
            type: "solution",
            title: "Zufallsvariable als Abbildung",
            points: [
                "Angeben: Definitionsbereich Ω, Wertebereich, Bildbereich X(Ω), Vorschrift ω↦X(ω).",
                "Wertebereich (mögliche Argumente) ≠ Bildbereich (tatsächlich angenommene Werte).",
                "X ist eine Funktion auf Ω, keine Zahl: erst sagen, was ω ist, dann was X(ω) ist.",
            ],
            warning: "Hinschreiben ∀ ω ∈ Ω, da es nur auf diese zutrifft.",
            aufgaben: [
                statistikAufgaben["1.3.1a"], statistikAufgaben["1.3.3b-c"], statistikAufgaben["K-1b"]
            ],
        },

        ZV_AUS_ZV: {
            id: "ZV_AUS_ZV",
            type: "solution",
            title: "ZV aus anderen ZV zusammensetzen",
            points: [
                "Zielgröße als Term in den gegebenen ZV ausdrücken (max, min, +, -, ·).",
                "System-Zuverlässigkeit: Reihe ⇒ min, Parallel ⇒ max. „K1,K2 oder K3,K4“ ⇒ X=max{min(T1,T2), min(T3,T4)}.",
                "Gewinn/Auszahlung: Auszahlung minus Einsatz, z.B. G=(M-N)-Einsatz.",
            ],
            aufgaben: [
                statistikAufgaben["1.5.3b"], statistikAufgaben["2.1.1c"],
            ],
        },

        ZAEHL_INDIKATOR_DEF: {
            id: "ZAEHL_INDIKATOR_DEF",
            type: "solution",
            title: "Zähl-/Indikatorvariable",
            points: [
                "Indikator: X_i = 1, falls Ereignis_i eintritt, sonst 0  (X_i = 1_{Ereignis_i}).",
                "Zählgröße als Summe: S = Σ X_i (zählt, wie oft das Ereignis eintritt).",
                "Für den Erwartungswert später: E(S)=Σ P(X_i=1) (Linearität) → Knoten „Indikator-Zerlegung“.",
            ],
            aufgaben: [
                statistikAufgaben["2.1.3d-e"], statistikAufgaben["2.1.1b"], statistikAufgaben["2.2.3b"],
                statistikAufgaben["2.3.3b-c"], statistikAufgaben["K-3b"],
            ],
        },

        UNABHÄNGIGKEIT: {
            id: "UNABHÄNGIGKEIT",
            crumb: "Unabhängigkeit",
            type:
                "question",
            question:
                "Unabhängigkeit prüfen, welcher Fall liegt vor?",
            options:
                [
                    {
                        label: "Zwei Ereignisse",
                        childId: "ZWEI_EREIGNISSE_UNABHÄNGIGKEIT",
                        list: [
                            "Sind A und B unabhängig?"
                        ]
                    },
                    {
                        label: "Mehrere Ereignisse „gemeinsam unabhängig?“",
                        childId: "MEHRERE_EREIGNISSE_UNABHÄNGIGKEIT",
                        list: [
                            "Die Ereignisse A, B, C, D seien unabhängig",
                            "Zeigen Sie, dass A und B unabhängig sind"
                        ]
                    },
                    {
                        label: "P(B)∈{0,1}",
                        childId: "TRIVIALES_EREIGNIS",
                        list: [
                            "Zeigen Sie, dass A und B unabhängig sind; mit P(B)∈{0,1}"
                        ]
                    },
                    {
                        label: "ZV über gemeinsame Dichte",
                        childId: "UNABHÄNGIGKEIT_DICHTE",
                        list: [
                            "Sind die Ereignisse {X ≤ a} und {Y ≤ b} für alle a, b ∈ R unabhängig"
                        ]
                    },
                    {
                        label: "Funktionen unabhängiger ZV",
                        childId: "FUNKTIONEN_UNABHÄNGIGER_ZV",
                        list: [
                            "Beweisen Sie, dass X und Y unabhängige Zufallsvariablen sind."
                        ]
                    },
                ],
        },

        ZWEI_EREIGNISSE_UNABHÄNGIGKEIT: {
            id: "ZWEI_EREIGNISSE_UNABHÄNGIGKEIT",
            type:
                "solution",
            title:
                "Zwei Ereignisse",
            points:
                ["A,B unabhängig ⇔ P(A∩B)=P(A)·P(B)."],
            // TODO keine Aufgabe
        },

        MEHRERE_EREIGNISSE_UNABHÄNGIGKEIT:
            {
                id: "MEHRERE_EREIGNISSE_UNABHÄNGIGKEIT",
                type:
                    "solution",
                title:
                    "Mehrere Ereignisse",
                points:
                    [
                        "Produktregel muss für jede Teilmenge der Indizes gelten.",
                        "Paarweise ⇏ gemeinsam: zusätzlich z.B. P(A∩B∩C)=P(A)P(B)P(C) prüfen.",
                    ],
                aufgaben: [statistikAufgaben["1.4.1"], statistikAufgaben["1.4.4"]],
            },

        TRIVIALES_EREIGNIS: {
            id: "TRIVIALES_EREIGNIS",
            type: "solution",
            title: "Triviales Ereignis",
            points: ["P(B)∈{0,1}⇒B ist von jedem A unabhängig."],
            aufgaben: [statistikAufgaben["1.4.1b"]],
        },

        UNABHÄNGIGKEIT_DICHTE: {
            id: "UNABHÄNGIGKEIT_DICHTE",
            type: "solution",
            title: "ZV über gemeinsame Dichte",
            points: [
                "Unabhängig ⇔ f(x,y)=f_X(x)f_Y(y) UND Träger ist ein Rechteck.",
                "Schräger Träger {0≤x≤y≤1} koppelt die Variablen ⇒ nicht unabhängig.",
            ],
            aufgaben: [
                statistikAufgaben["1.4.2e"], statistikAufgaben["1.4.5"],
                statistikAufgaben["1.5.4d"], statistikAufgaben["1.5.1d"],
            ],
        },

        FUNKTIONEN_UNABHÄNGIGER_ZV: {
            id: "FUNKTIONEN_UNABHÄNGIGER_ZV",
            type: "solution",
            title: "Funktionen unabhängiger ZV",
            points: [
                "Disjunkte Variablengruppen ⇒ unabhängig (max{X,Y} ⊥ Z).",
                "Gemeinsame Variable ⇒ i.A. nicht.",
            ],
            aufgaben: [statistikAufgaben["1.5.5"], statistikAufgaben["1.5.3c"]],
        },

        DISKRETE_VERTEILUNG: {
            id: "DISKRETE_VERTEILUNG",
            type: "solution",
            title: "Diskrete Verteilung",
            points: [
                "Für jedes x∈X(Ω): P(X=x) bestimmen; Σ=1 prüfen. Bei Laplace: abzählen.",
                "Gewichte müssen nicht gleich sein — Wahrscheinlichkeit ∝ Feldgröße/Fläche (1.3.1a: µ_X(1)=2/5, sonst 1/5).",
                "Parameter so wählen, dass alle P ≥ 0 und Σ = 1 (2.1.4a: p ∈ [0,1]).",
                // TODO "Ref: K-1c/d; 1.3.4d.",
            ],
            aufgaben: [statistikAufgaben["1.3.1a"], statistikAufgaben["1.3.3d"]],
        },

        NORMKONSTANTE: {
            id: "NORMKONSTANTE",
            type: "solution",
            title: "Dichte / Konstante c",
            points: [
                "c aus ∫_Träger c·g(x)dx=1 ⇒ c=(∫g)^-1. Danach f≥0 und ∫f=1 bestätigen.",
                // TODO "Ref: K-2a; 1.5.4a.",
            ],
            aufgaben: [
                statistikAufgaben["1.2.2a"], statistikAufgaben["1.3.1b"], statistikAufgaben["1.4.2a"],
                statistikAufgaben["1.5.1a"], statistikAufgaben["2.1.2a"], statistikAufgaben["1.5.4a"],
            ],
        },

        VERTEILUNG: {
            id: "VERTEILUNG",
            type: "question",
            crumb: "Verteilung",
            question: "Verteilungen",
            options: [
                {
                    label: "Diskrete Verteilung µ_X(x)=P(X=x) oder μ(X,Y) als Tabelle",
                    list: [
                        "Berechnen Sie die Verteilung von X, indem Sie die zugehörige Wahrscheinlichkeitsfunktion μX bestimmen.",
                        "Bestimmen Sie jeweils die Verteilung der Zufallsvariablen"
                    ],
                    childId: "DISKRETE_VERTEILUNG",
                },
                {
                    childId: "GEMEINSAME_VERTEILUNG",
                    list: ["Bestimmen Sie die gemeinsame Verteilung von X1 und Y"],
                    label: "Gemeinsame Verteilung zweier ZV"
                },
                {
                    childId: "RANDVERTEILUNG",
                    label: "Randverteilung aus gemeinsamer Verteilung bestimmen",
                    list: ["Berechnen Sie die Randverteilungen μX von X und μY von Y"]
                }
            ]
        },

        F_X: {
            id: "F_X",
            type: "question",
            crumb: "Verteilungsfunktion",
            question: "Welche Art von Verteilungsfunktion soll es sein?",
            options: [
                {
                    childId: "F_X_DISKRET",
                    label: "Diskrete Verteilungsfunktion",
                    list: [
                        "Aus Wahrscheinlichkeiten P(X=x)",
                        "Aus Verteilungsfunktion F(x) mit Sprüngen",
                        "Aus Wahrscheinlichkeitsfunktion μX"
                    ],
                },
                {
                    label: "Stetige Verteilungsfunktion",
                    childId: "F_X_STETIG",
                    list: [
                        "Aus Dichte f(x)",
                        "Aus Verteilungsfunktion F(x) ohne Sprünge",
                        "Aus Randdichte fX(x)"
                    ],
                }
            ]
        },

        F_X_AUS_RANDDICHTE: {
            id: "F_X_AUS_RANDDICHTE",
            type: "solution",
            title: "Verteilungsfunktion aus Randdichte berechnen",
            aufgaben: [statistikAufgaben["1.4.2d"], statistikAufgaben["1.5.1c"]],
        },

        F_X_AUS_DICHTE: {
            id: "F_X_AUS_DICHTE",
            type: "solution",
            title: "Verteilungsfunktion aus Dichte berechnen",
            points: [
                <span> Integrieren: F(x)=∫<sup>x</sup><sub>{"-∞"}</sub> f</span>,
                "Stückweise über Trägerintervalle", "f=F'"
            ],
        },

        F_X_AUS_VF: {
            id: "F_X_AUS_VF",
            type: "solution",
            title: "Diskrete Verteilungsfunktion aus Graph ablesen",
            points: ["Rechtsstetige Treppenfunktion, Sprunghöhe an x=P(X=x). Stückweise angeben."],
            aufgaben: [statistikAufgaben["1.3.2b"]],
        },

        F_X_STETIG: {
            id: "F_X_STETIG",
            type: "question",
            crumb: "Stetig",
            question: "Stetige Verteilungsfunktion bestimmen aus...",
            options: [
                {
                    label: "Randdichte fX(x)",
                    childId: "F_X_AUS_RANDDICHTE",
                    list: ["Berechnen Sie die Verteilungsfunktion aus fX(x)"]
                },
                {
                    label: "Verteilungsfunktion F(x) ohne Sprünge",
                    childId: "F_X_AUS_GRAPH",
                    list: ["Die Funktion F sei durch den folgenden Graphen gegeben..."]
                },
                {
                    label: " Dichte f(x)",
                    childId: "F_X_AUS_DICHTE",
                    list: ["Berechnen Sie die Verteilungsfunktion aus fX"]
                }
            ]
        },

        F_X_AUS_WFK: {
            id: "F_X_AUS_WFK",
            type: "solution",
            title: "Verteilungsfunktion aus Wahrscheinlichkeitsfunktion berechnen",
            aufgaben: [statistikAufgaben["1.3.1a"]],
        },

        F_X_AUS_WS: {
            id: "F_X_AUS_WS",
            type: "solution",
            title: "Verteilungsfunktion aus Wahrscheinlichkeiten P(X=x) berechnen",
            points: [
                "F(x)=Σ_{x_i ≤ x} P(X=x_i): Wahrscheinlichkeiten von links aufaddieren.",
                "Stückweise angeben (Treppe); rechtsstetig, Sprunghöhe an x = P(X=x).",
            ],
            aufgaben: [statistikAufgaben["K-1e"], statistikAufgaben["1.3.3e"]],
        },

        F_X_AUS_GRAPH: {
            id: "F_X_AUS_GRAPH",
            type: "solution",
            title: "Stetige Verteilungsfunktion aus Graph ablesen",
            points: [
                "Kein Sprung ⇒ stetige Verteilung; stückweise ablesen.",
                "Dichte = Steigung: f(x)=F'(x) abschnittsweise.",
                "P(a<X≤b)=F(b)-F(a); P(X=x)=0.",
            ],
            aufgaben: [statistikAufgaben["1.3.2a"]],
        },

        F_X_DISKRET: {
            id: "F_X_DISKRET",
            type: "question",
            crumb: "Diskret",
            question: "Diskrete Verteilungsfunktion bestimmen aus...",
            options: [
                {
                    label: "Aus Verteilungsfunktion F(x) mit Sprüngen",
                    childId: "F_X_AUS_VF",
                    list: ["Die Funktion F sei durch den folgenden Graphen gegeben..."]
                },
                {
                    label: "Aus Wahrscheinlichkeiten P(X=x)",
                    childId: "F_X_AUS_WS",
                    list: ["Berechnen Sie die Verteilungsfunktion aus den gegebenen Wahrscheinlichkeiten"]
                },
                {
                    label: "Aus Wahrscheinlichkeitsfunktion μX",
                    childId: "F_X_AUS_WFK",
                    list: ["Berechnen Sie die Verteilungsfunktion aus μX"]
                }
            ]
        },

        RANDDICHTE: {
            id: "RANDDICHTE",
            type: "solution",
            title: "Randdichte",
            aufgaben: [statistikAufgaben["1.4.2c"], statistikAufgaben["1.5.1b"]],
        },
        /*
                GEMEINSAME_VERTEILUNG_DISKRET : {
                    id: "GEMEINSAME_VERTEILUNG_DISKRET",
                    type: "solution",
                    title: "",
                    points: [
                        "Bei diskreten Zufallsvariablen berechnet man die gemeinsame Wahrscheinlichkeitsfunktion"
                    ]
                },

                GEMEINSAME_VERTEILUNG_UNABHÄNGIG : {
                    id: "GEMEINSAME_VERTEILUNG_UNABHÄNGIG",
                    type: "solution",
                    title: "",
                    points: [
                        "Multiplizieren der Einzelverteilungen"
                    ]
                },

                GEMEINSAME_VERTEILUNG_STETIG : {
                    id: "GEMEINSAME_VERTEILUNG_STETIG",
                    type: "solution",
                    title: ""
                },

         */

        GEMEINSAME_VERTEILUNG: {
            id: "GEMEINSAME_VERTEILUNG",
            type: "solution",
            title: "Gemeinsame Verteilung zweier ZV",
            points: [
                "Matrix P(X=x,Y=y).",
                <ul>
                    <li>
                        Bei <b>diskreten</b> Zufallsvariablen berechnet man die gemeinsame Wahrscheinlichkeitsfunktion
                    </li>
                    <ul>
                        <li>µ<sub>X,Y</sub>(x,y)=P(X=x,Y=y)</li>
                    </ul>
                    <li>Bei <b>unabhängigen</b> Zufallsvariablen multipliziert man die Einzelverteilungen</li>
                    <ul>
                        <li>P(X=x,Y=y)=P(X=x)⋅P(Y=y)
                        </li>
                    </ul>
                    <li>Bei <b>stetigen</b> Zufallsvariablen verwendet man die gemeinsame Dichte</li>
                    <ul>
                        <li>f<sub>X,Y</sub>(x,y)</li>
                    </ul>
                </ul>,
                "Mit Zurücklegen ⇒ unabhängig; ohne Zurücklegen oder bspw. min/max ⇒ nicht.",
                //<span> ∑<sub>x ∈ Bx</sub>  ∑<sub>y ∈ By</sub> µ<sub></sub>  </span>,
            ],
            aufgaben: [statistikAufgaben["1.3.3f-g"], statistikAufgaben["K-1c"]],
        },

        RANDVERTEILUNG: {
            id: "RANDVERTEILUNG",
            type: "solution",
            title: "Randverteilung",
            points: [
                "P(X=x)=Σ_y P(X=x,Y=y) (Zeilen-/Spaltensummen).",
                // TODO "Ref: K-1d; 2.1.5d.",
            ],
        },

        VERTEILUNG_ERKENNEN: {
            id: "VERTEILUNG_ERKENNEN",
            type: "solution",
            title: "Welche Verteilung liegt vor?",
            points: [
                "Einzelner Ja/Nein-Versuch ⇒ Bernoulli(p): E=p, Var=p(1-p).",
                "Anzahl Erfolge in n unabhängigen, gleichen Versuchen ⇒ Binomial(n,p): E=np, Var=np(1-p).",
                "Wartezeit „bis zum ersten Erfolg“ (Nummer des Versuchs) ⇒ Geometrisch(p): E=1/p, Var=(1-p)/p².",
                "Anzahl seltener Ereignisse / „im Schnitt λ pro Einheit“ ⇒ Poisson(λ): E=Var=λ.",
                "Rein zufällig aus [a,b] ⇒ Gleichverteilung: E=(a+b)/2, Var=(b-a)²/12.",
                "Kontinuierliche Wartezeit/Lebensdauer, „exponentialverteilt mit Parameter λ“ ⇒ Exp(λ): E=1/λ, Var=1/λ², P(X>t)=e^(-λt).",
                "Summe/Mittel vieler iid (Näherung) ⇒ Normal(µ,σ²).",
            ],
            warning: "Geometrisch: zwei Konventionen (ab 1 mit E=1/p vs. ab 0 mit E=(1-p)/p) — „Nummer des Wurfs“ ⇒ ab 1. Exp: „Parameter 1/5“ heißt λ=1/5, also E=5 (nicht 1/5). Binomial nur bei UNABHÄNGIGEN, gleichverteilten Versuchen (mit Zurücklegen / feste Erfolgs-W.).",
            aufgaben: [
                statistikAufgaben["K-3c"], statistikAufgaben["2.2.3b"], statistikAufgaben["2.3.3b-c"],
                statistikAufgaben["2.2.6d"], statistikAufgaben["1.5.2"],
            ],
        },

        VF_SKIZZIEREN: {
            id: "VF_SKIZZIEREN",
            type: "solution",
            title: "Verteilungsfunktion skizzieren",
            points: [
                "Immer: links 0, rechts 1, monoton steigend, rechtsstetig.",
                "Diskret: Treppenfunktion; Sprunghöhe an x = P(X=x); dazwischen waagerecht.",
                "Stetig: stückweise steigende Kurve (Steigung = Dichte), keine Sprünge.",
                "Gemischt: Sprünge UND steigende Stücke kombinieren.",
            ],
            aufgaben: [
                statistikAufgaben["1.3.1a"], statistikAufgaben["1.3.1b"],
                statistikAufgaben["K-1f"], statistikAufgaben["K-2c"],
            ],
        },

        VF_GRAPH_LESEN: {
            id: "VF_GRAPH_LESEN",
            type: "solution",
            title: "VF-Graph lesen",
            points: [
                "Sprünge⇒diskreter Anteil, P(X=x)=Sprunghöhe.",
                "Stetig steigend⇒Dichteanteil, f=F'.",
                "Beides⇒gemischte Verteilung.",
                "P(a<X≤b)=F(b)-F(a).",
                "Bei einem Sprung ist P(X=x)>0: offene/geschlossene Grenzen sind dann nicht egal.",
            ],
            aufgaben: [statistikAufgaben["1.3.1a-b"], statistikAufgaben["1.3.2a-b"]],
        },

        ZVG: {
            id: "ZVG",
            type: "question",
            crumb: "Verteilungen & Dichten",
            question: "",
            options: [
                {
                    label: "Verteilungen bestimmen",
                    list: [
                        "Berechnen Sie die Verteilung von X, indem Sie die zugehörige Wahrscheinlichkeitsfunktion μX bestimmen.",
                        "Bestimmen Sie jeweils die Verteilung der Zufallsvariablen",
                        "Bestimmen Sie die gemeinsame Verteilung von X1 und Y "
                    ],
                    childId: "VERTEILUNG",
                },
                {
                    label: "Verteilung erkennen",
                    list: [],
                    childId: "VERTEILUNG_ERKENNEN",
                },
                {
                    label: "Dichteeigenschaften / Normkonstante c",
                    list: ["Bestimmen Sie c so, daß f eine Dichte ist."],
                    childId: "NORMKONSTANTE",
                },
                {
                    label: "Verteilungsfunktion F_X bestimmen",
                    list: [
                        "Bestimmen Sie jeweils die Verteilungsfunktion der Zufallsvariablen",
                        "Bestimmen Sie die Verteilungsfunktionen von X und Y",
                        "Berechnen Sie die Verteilungsfunktion FX von X"
                    ],
                    childId: "F_X",
                },
                {
                    label: "Verteilungsfunktion skizzieren",
                    list: ["Skizzieren Sie den Graphen der Verteilungsfunktion."],
                    childId: "VF_SKIZZIEREN",
                },
                {
                    label: "VF-Graph analysieren (gegebener Graph)",
                    list: ["Die Funktion F sei durch den folgenden Graphen gegeben"],
                    childId: "VF_GRAPH_LESEN",
                },
                {
                    label: "Randdichte bestimmen",
                    list: ["Bestimmen Sie die Randdichten von X und Y "],
                    childId: "RANDDICHTE",
                }
                // TODO Dichte bestimmen generell / uniformverteilt
            ]
        },

        W1: {
            id: "W1",
            type: "question",
            crumb: "Anzahl & Typ",
            question: "Was und wie viele sind jeweils beteiligt?",
            options: [
                {
                    label: "Ein Ereignis",
                    childId: "W_EIN_ERG",
                    list: ["Berechnen Sie mit Hilfe der Wahrscheinlichkeitsfunktion µ die Wahrscheinlichkeiten von A, B und C."],
                },
                {
                    label: "Mehrere Ereignisse",
                    childId: "W_MEHR_ERG",
                    list: [
                        "Bestimmen Sie deren Wahrscheinlichkeiten bzw. bedingte Wahrscheinlichkeiten.",
                        "Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf",
                        "Berechnen Sie P(A ∪ B ∪ C)"
                    ]
                },
                {
                    label: "Eine Zufallsvariable",
                    childId: "W_EIN_ZV",
                    list: [
                        "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                        "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht",
                        "Wahrscheinlichkeit, daß Jean länger als 10 Minuten warten muß?"
                    ]
                },
                {
                    label: "Mehrere Zufallsvariablen",
                    childId: "W_MEHR_ZV",
                    list: [
                        "Wahrscheinlichkeit, daß Jean insgesamt nicht länger als 20 Minuten benötigt vom Eintreffen" +
                        " an der Haltestelle bis zur Ankunft an der Universität"
                    ]
                },
                {
                    label: "Unsicher, ob Ereignis oder Zufallsvariable",
                    childId: "EREIGNIS_ODER_ZV" // TODO list
                },
            ],
        },

        EREIGNIS_ODER_ZV: {
            id: "EREIGNIS_ODER_ZV",
            type: "solution",
            title: "Ereignis oder Zufallsvariable?",
            points: [
                "Ereignis = eine Ja/Nein-Aussage über den Ausgang (Teilmenge von Ω); man fragt P(Ereignis).",
                "Zufallsvariable = eine Zahl, die vom Ausgang abhängt (Abbildung Ω→ℝ); man fragt P(X≤x), E(X) usw.",
                "Faustregel: steht eine Zahl/Größe im Zentrum (Anzahl, Wartezeit, Summe, Maximum) ⇒ ZV; steht ein Sachverhalt im Zentrum ⇒ Ereignis.",
            ],
        },

        W_EIN_ERG: {
            id: "W_EIN_ERG",
            type: "question",
            crumb: "Ein Ereignis",
            question: "Fallunterscheidung: Wahrscheinlichkeit eines Ereignisses berechnen",
            options: [
                {
                    label: "Laplace / abzählbar (zählen)",
                    childId: "WLP1",
                    list: [
                        "Wir würfeln zweimal mit einem fairen Würfel...",
                        "Wir drehen ein Glücksrad dreimal hintereinander .. Das Glücksrad ist in vier gleich große" +
                        " Viertel unterteilt"
                    ]
                },
                /*
                 {
                     label: "Nur mit Rechenregeln / Schranken (kein konkreter Raum)",
                     childId: "SCHRANKEN_FRECHET",
                     list: [
                         "Welche Mengen können die Wahrscheinlichkeit 0 besitzen?",
                         "Finden Sie c mit P(A\\B) ≤ c"
                     ]
                 },
                 {
                     label: "Folge A_n mit Grenzmenge: lim P(A_n)",
                     childId: "STETIGKEIT_MASS",
                     list: ["Zeigen Sie limₙ P(A_n) = P(A)"]
                 },
                 */
            ]
        },

        /*
         SCHRANKEN_FRECHET: {
             id: "SCHRANKEN_FRECHET",
             type: "solution",
             title: "Schranken / Rechenregeln ohne konkreten Raum",
             points: [
                 "P(Aᶜ)=1-P(A); A⊆B ⇒ P(A)≤P(B); P(A∪B)=P(A)+P(B)-P(A∩B).",
                 "Fréchet-/Bonferroni: max{0, P(A)+P(B)-1} ≤ P(A∩B) ≤ min{P(A),P(B)}.",
                 "„Kann Menge M die W. 0 haben?“ ⇒ prüfe, ob M leer sein kann. P(D∩Eᶜ)=0 nur möglich, wenn P(D)≤P(E).",
                 "„Finde c mit P(A\\B)≤c“ ⇒ Extremfall über die Schranken konstruieren.",
             ],
             aufgaben: [statistikAufgaben["1.2.1"]],
         },
         STETIGKEIT_MASS: {
             id: "STETIGKEIT_MASS",
             type: "solution",
             title: "Stetigkeit des Maßes: lim P(A_n)",
             points: [
                 "A_n ↑ A (aufsteigend) ⇒ P(A_n) → P(A) (Stetigkeit von unten).",
                 "A_n ↓ A (absteigend) ⇒ P(A_n) → P(A) (Stetigkeit von oben).",
                 "Zwei Wege: (i) P(A_n) explizit über die Dichte ausrechnen und Grenzwert bilden; (ii) allgemein nur über die Rechenregeln.",
                 "Randpunkte beachten: [1, 2-1/n] ↑ [1,2) — der offene Rand ist NICHT dabei.",
             ],
             aufgaben: [statistikAufgaben["1.2.2b-d"]],
         },

         */


        GR_KL_EXP: {
            id: "GR_KL_EXP",
            type: "solution",
            title: "P(X>t) / P(X<t) einer exponentialverteilten ZV",
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "Exp(λ): P(X>t)=e^(-λt), P(X≤t)=1-e^(-λt) (t≥0).",
                "„länger als t warten“ ⇒ direkt e^(-λt) (Survival-Funktion, kein Integral nötig).",
                "Parameter-Konvention: „Parameter 1/5“ ⇒ λ=1/5, E=5. Beispiel 1.5.2a: P(X>10)=e^(-10/5)=e^(-2).",
            ],
            aufgaben: [statistikAufgaben["1.5.2a"]], // TDP
        },

        W_MEHR_ERG: {
            id: "W_MEHR_ERG",
            type: "question",
            crumb: "Mehrere Ereignisse",
            question: "Wahrscheinlichkeit mehrerer Ereignisse berechnen",
            options: [
                {
                    label: "Bedingte Wahrscheinlichkeit P(A|B), „gegeben, dass“, Rückwärts-Frage",
                    childId: "BEDINGTE_WS",
                    list: [
                        "Bestimmen Sie deren Wahrscheinlichkeiten bzw. bedingte Wahrscheinlichkeiten.",
                        "Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf"
                    ]
                },
                {
                    label: "Teilbarkeit, Vereinigung",
                    childId: "EIN_AUSSCHLUSS",
                    list: ["Berechnen Sie P(A ∪ B ∪ C)"]
                }
            ]
        },

        BEDINGTE_WS: {
            id: "BEDINGTE_WS",
            crumb: "Bedingte Wahrscheinlichkeit",
            type: "question",
            question: "Bedingte Wahrscheinlichkeit & Bayes",
            options: [
                {
                    label: "Direkt P(A|B)",
                    list: [], // TODO
                    childId: "DIREKT_BEDINGT",
                },
                {
                    label: "Zweistufig",
                    list: [
                        "erst Urne/Münze wählen, dann ziehen, P(A) gesucht",
                        "eine faire oder unfaire Münze zufällig wählen und werfen"
                    ],
                    childId: "TOTALE_WS",
                },
                {
                    label: "Vorwärts gegeben, rückwärts gesucht",
                    list: ["Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf"],
                    childId: "BAYES",
                },
                {
                    label: "Rechenregeln für bedingte W.",
                    list: [],
                    childId: "RECHENREGELN_BEDINGTE_WS",
                },
                {
                    label: "Gedächtnislosigkeit der Exp-Verteilung",
                    list: [],
                    childId: "GEDÄCHTNISLOSIGKEIT",
                }
            ]
        },

        DIREKT_BEDINGT: {
            id: "DIREKT_BEDINGT",
            type: "solution",
            title: "Direkte bedingte Wahrscheinlichkeit",
            points: [
                "P(A|B)=P(A∩B)/P(B), P(B)>0.",
                // TODO  "Ref: 1.6.5.",
            ]
        },

        TOTALE_WS: {
            id: "TOTALE_WS",
            type: "solution",
            title: "Totale Wahrscheinlichkeit",
            points: [
                "P(A)=Σ_i P(A|B_i)P(B_i).",
                // TODO "Ref: 1.6.4d, 1.6.6d",
            ],
            aufgaben: [statistikAufgaben["1.6.1c"]],
        },

        BAYES: {
            id: "BAYES",
            type: "solution",
            title: "Bayes",
            points: [
                "P(B_k|A)=P(A|B_k)P(B_k)/Σ_iP(A|B_i)P(B_i).",
                "Zweistufiges Experiment erkennen.",
                "Ohne Zurücklegen ⇒ Züge abhängig.",
                // TODO "Ref: 1.6.4e, 1.6.6e",
            ],
            aufgaben: [statistikAufgaben["1.6.1d"]],
        },

        RECHENREGELN_BEDINGTE_WS: {
            id: "RECHENREGELN_BEDINGTE_WS",
            type: "solution",
            title: "Rechenregeln anwenden",
            points: [
                "P(Aᶜ|D)=1-P(A|D); P(A∪B|D)=P(A|D)+P(B|D)-P(A∩B|D).",
                "P(A∩B|D) folgt nicht allein aus P(A|D),P(B|D).",
                // TODO "Ref: 1.6.5.",
            ]
        },

        GEDÄCHTNISLOSIGKEIT: {
            id: "GEDÄCHTNISLOSIGKEIT",
            type: "solution",
            title: "Gedächtnislosigkeit",
            points: ["P(X>t+s|X>s)=P(X>t)=e^(-λt)."],
            aufgaben: [statistikAufgaben["1.6.2"]],
        },

        W_EIN_ZV: {
            id: "W_EIN_ZV",
            type: "question",
            crumb: "Eine Zufallsvariable",
            question: "Fall: Wahrscheinlichkeit einer Zufallsvariablen",
            options: [
                {
                    label: "Summe/Anzahl unabhängiger Ja-Nein-Versuche (Binomial) oder Wartezeit",
                    childId: "GR_KL_EINE_ZV",
                    list: [
                        "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                        "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht",
                        "Wahrscheinlichkeit, daß Jean länger als 10 Minuten warten muss"
                    ]
                },
                {
                    label: "Kontinuierliche Dichte einer einzelnen ZV",
                    childId: "KONTINUIERLICHE_DICHTE",
                    list: ["Gegeben Dichte: P(X > 0), P(( 1/2, unendl.)), P(X = 0)"]
                },
                /*
                    {
                        label: "Exakte Berechnung auf Basis von Wahrscheinlichkeiten",
                        childId: "ZV_WS_EXAKT",
                        list: [
                            ""
                        ]
                    }
                    */
            ]
        },
        /*
              ZV_WS_EXAKT: {
                  type: "solution",
                  title: "Wahrscheinlichkeit einer Zufallsvariable exakt berechnen",
                  id: "ZV_WS_EXAKT",
                  aufgaben: [
                      "2.3.1b"
                  ]
                  // TODO
              },
      */

        GR_KL_EINE_ZV: {
            id: "GR_KL_EINE_ZV",
            type: "question",
            crumb: "Bedingungen",
            question: "Unter welchen Bedingungen?",
            options: [
                {
                    label: "Summe/Anzahl unabhängiger Ja-Nein-Versuche (Binomial): P(S≥k) / P(S≤k)",
                    //  label: "Zufallsvariablen sind unabhängig",
                    childId: "UNABHÄNGIG_GEQ_LEQ",
                    list: [
                        "Wahrscheinlichkeit, dass René besteht (≥ 2K richtig)",
                        "Bernoulli-Experiment"
                    ]
                },
                {
                    label: "Einzelne exponentialverteilte Wartezeit: P(X>t) / P(X<t)",
                    childId: "GR_KL_EXP",
                    list: ["Wahrscheinlichkeit, dass Jean länger als 10 Minuten warten muss"]
                }
            ]
        },

        W_MEHR_ZV: {
            id: "W_MEHR_ZV",
            type: "question",
            crumb: "Mehrere Zufallsvariablen",
            question: "Fall: Wahrscheinlichkeit mehrerer Zufallsvariablen",
            options: [
                {
                    label: "P(max ≤ x) oder P(min ≤ x) unabhängiger ZV",
                    childId: "VERTEILUNGSFUNKTION_MAX_MIN",
                    list: ["P(min≤x)"]
                },
                {
                    label: "Bedingte Wahrscheinlichkeit P(A|B), „gegeben, dass“, Rückwärts-Frage",
                    childId: "BEDINGTE_WS",
                    list: [
                        // TODO
                    ]
                },
                {
                    label: "Gemeinsame Dichte zweier ZV",
                    childId: "GEMEINSAME_DICHTE",
                    list: [
                        "Bereich wie {2X>Y}, {X>Y}",
                        "Berechnen Sie die Wahrscheinlichkeit P(X > Y )"
                    ]
                },
                {
                    label: "P(X+Y ≤ c) oder Dichte der Summe",
                    childId: "SUMME_ZV",
                    list: [
                        "Wahrscheinlichkeit, daß Jean insgesamt nicht länger als 20 Minuten benötigt vom Eintreffen" +
                        " an der Haltestelle bis zur Ankunft an der Universität"
                    ]
                },
            ]
        },

        SUMME_ZV: {
            id: "SUMME_ZV",
            type: "question",
            crumb: "Bedingungen",
            question: "Unter welchen Bedingungen?",
            options: [
                {
                    label: "X und Y unabhängig",
                    childId: "FALTUNG_SUMME_UNABHÄNGIGER_ZV",
                    list: [
                        "Wahrscheinlichkeit, daß Jean insgesamt nicht länger als 20 Minuten benötigt vom Eintreffen" +
                        " an der Haltestelle bis zur Ankunft an der Universität"
                    ]
                },
                /* TODO nicht unabhängig
                  {
                      label: "X, Y NICHT unabhängig (gemeinsame Dichte gegeben)",
                      childId: "GEMEINSAME_DICHTE",
                      list: ["P(X+Y ≤ c) über Doppelintegral im Bereich {x+y ≤ c} ∩ Träger"]
                  },
                 */
            ]
        },

        FALTUNG_SUMME_UNABHÄNGIGER_ZV: {
            id: "FALTUNG_SUMME_UNABHÄNGIGER_ZV",
            type: "solution",
            title: "Faltung / Summe unabhängiger ZV",
            points: [
                "f_{X+Y}(z)=∫f_X(x)f_Y(z-x)dx.",
                "Summe von n unabh. Exp(λ)=Erlang: f_{S_n}(z)=λ^n z^{n-1}/(n-1)!·e^(-λz).",
                "Alternativ Doppelintegral über {x+y≤c}∩Träger.",
                "Setzt Unabhängigkeit voraus.",
            ],
            aufgaben: [statistikAufgaben["1.5.2b-c"]],
        },

        VERTEILUNGSFUNKTION_MAX_MIN: {
            id: "VERTEILUNGSFUNKTION_MAX_MIN",
            type: "solution",
            title: "Verteilungsfunktion von max / min",
            points: [
                "P(max≤x)=∏F_i(x).",
                "P(min≤x)=1-∏(1-F_i(x)).",
                "Minimum von n unabh. Exp(λ) ist Exp(nλ).",
                "Reihe⇒min, Parallel⇒max.",
            ],
            aufgaben: [statistikAufgaben["1.5.3a"]],
        },

        GEMEINSAME_DICHTE: {
            id: "GEMEINSAME_DICHTE",
            type: "solution",
            title: "Doppelintegral aus gemeinsamer Dichte",
            points: [
                "Integrationsbereich {Bedingung} ∩ Träger skizzieren, dann integrieren.",
                "z.B. P(X>Y)=∬_{x>y}f(x,y)dxdy.",
                // TODO "Ref: 1.5.4e; HA 1.4.2b",
            ],
            aufgaben: [statistikAufgaben["1.5.1e"]],
        },

        KONTINUIERLICHE_DICHTE: {
            id: "KONTINUIERLICHE_DICHTE",
            type: "solution",
            title: "Wahrscheinlichkeit über eine Dichte",
            points: [
                "P((a,b]) = ∫_a^b f. Grenzen auf den Träger {f>0} einschränken.",
                "P(a ≤ X ≤ b) = |[a,b]| / |I|",
                "P(Punkt)=0 (stetig) → offen/geschlossen egal: außer bei einem Sprung.",
                // TODO "Ref: K-2d; HA 1.2.4.",
            ]
        },

        UNABHÄNGIG_GEQ_LEQ: {
            id: "UNABHÄNGIG_GEQ_LEQ",
            type: "solution",
            title: "P(S≥k)/P(S≤k) einer Summe unabhängiger Bernoulli (Binomial)",
            points: [
                "S = Σ X_i mit X_i iid Bernoulli(p) ⇒ S ~ Binomial(n,p).",
                "P(S≥k)=Σ_{j=k}^n C(n,j) p^j (1-p)^(n-j); „mindestens k“ ⇒ untere Summationsgrenze k.",
                "1.4.3: „besteht“ = ≥2K von 4K ⇒ P(S≥2K); „Note 2,3“ = ≥3K ⇒ P(S≥3K). Für konkrete K explizit ausrechnen.",
                "Bei großem n statt exakt: Normal-/Poisson-Approximation (siehe Approximationen).",
            ],
            aufgaben: [statistikAufgaben["1.4.3b-d"]],
        },

        WLP1: {
            id: "WLP1",
            crumb: "Laplace-Fall",
            type: "question",
            question: "Laplace / abzählbar: welcher Unterfall?",
            options: [
                {
                    label: "Direktes Abzählen",
                    childId: "DIREKTES_ABZÄHLEN",
                    list: [
                        "das Ereignis ist, daß die zweite Drehung eine 3 ergibt",
                        "A: Sie finden das Buch auf Anhieb",
                        "das Ereignis, daß die Nummer der gezogenen Kugel durch 2 teilbar ist"
                    ]
                },
                {
                    label: "„mindestens einmal / mindestens ein“",
                    childId: "GEGENEREIGNIS",
                    list: ["A das Ereignis ist, daß mindestens ein Würfel eine gerade Zahl zeigt"]
                },
                {
                    label: "x-groß oder größer / mindestens Wert x hat",
                    childId: "MAX_MIN_DISKRET_LAPLACE",
                    list: [
                        "das Ereignis, daß die größte gewürfelte Zahl größer als 4 ist",
                        "das Ereignis, daß die größte gewürfelte Zahl kleiner als 5 ist"
                    ]
                },
                {
                    label: "Ereignis lässt sich auf mehrere andere Ereignisse herunterbrechen; „mindestens eine" +
                        " von mehreren Eigenschaften“, Teilbarkeit, Vereinigung",
                    childId: "EIN_AUSSCHLUSS",
                    list: ["Berechnen Sie P(A ∪ B ∪ C)"]
                },
                {
                    label: "Fixpunkte einer Permutation (genau k / mindestens k)",
                    childId: "FIXPUNKTE_PERMUTATIONEN",
                    list: [
                        "Wie groß ist die Wahrscheinlichkeit, daß mindestens eine der Freundinnen ihr eigenes" +
                        " Geschenk zurückerhält?"
                    ]
                },
            ]
        },

        MAX_MIN_DISKRET_LAPLACE: {
            id: "MAX_MIN_DISKRET_LAPLACE",
            type: "solution",
            title: "„größte/kleinste Zahl > / < x“ im Produkt-Laplace",
            points: [
                "„alle ≤ k“ ⇒ (k/m)^n bei n Würfen mit m Seiten. „größte < 5“ = „alle ≤ 4“ = (4/6)^n.",
                "„größte > k“ = 1 - „alle ≤ k“ (Gegenereignis).",
                "„kleinste ≥ k“ = „alle ≥ k“ = ((m-k+1)/m)^n.",
            ],
            aufgaben: [statistikAufgaben["1.4.4b"]],
        },

        FIXPUNKTE_PERMUTATIONEN: {
            id: "FIXPUNKTE_PERMUTATIONEN",
            type: "solution",
            title: "Fixpunkte einer Permutation (genau k / mindestens k)",
            points: [
                "A_l={ω(l)=l}, dann Inklusion-Exklusion.",
                "Schnitt: P(A_{l₁}∩…∩A_{lⱼ})=(n-j)!/n!.",
                "Genau k Fixpunkte: (1/k!)Σ_{j=0}^{n-k}(-1)^j/j! → e⁻¹/k! für n→∞.",
                "„mindestens ein“: 1 - Σ_{k=0}^N (-1)^k/k! → 1 - e^(-1) ≈ 0,632.",
                "Kein Fixpunkt: D_n=n!Σ_{j=0}^n(-1)^j/j!.",
                "„mindestens k“ ≠ „genau k“; P(B_k)=P(C_k)-P(C_{k+1}).",
                // TODO "Ref: 1.0.3",
            ],
            aufgaben: [statistikAufgaben["2.1.3"]],
        },

        EIN_AUSSCHLUSS: {
            id: "EIN_AUSSCHLUSS",
            type: "solution",
            title: "Ein-/Ausschlussprinzip",
            points: [
                "P(A∪B∪C) = ΣP - ΣP(Zweier-Schnitt) + P(Dreier-Schnitt) (Vorzeichen alternieren).",
                "Teilbarkeit in {1,…,n}: #{k:d|k}=⌊n/d⌋; „durch d₁ und d₂“ = Teilbarkeit durch kgV(d₁,d₂).",
                "Nicht P(durch 2)·P(durch 3), sondern ⌊n/6⌋/n für den Schnitt.",
            ],
            aufgaben: [statistikAufgaben["1.2.3c"]],
        },

        GEGENEREIGNIS: {
            id: "GEGENEREIGNIS",
            type: "solution",
            title: "Gegenereignis",
            points: [
                "„mindestens einmal“ ist mühsam direkt: nimm das Komplement.",
                "P(mind. einmal) = 1 - P(keinmal).",
            ],
            aufgaben: [statistikAufgaben["1.1.1c-d"], statistikAufgaben["1.1.5b"]],
        },

        DIREKTES_ABZÄHLEN: {
            id: "DIREKTES_ABZÄHLEN",
            type: "solution",
            title: "Direktes Abzählen",
            points: [
                // "P(A) = #A/#Ω. Kombinatorik-Tabelle nutzen (siehe Anhang K)."
            ],
            aufgaben: [
                statistikAufgaben["1.1.1c-d"], statistikAufgaben["1.1.2b-c"], statistikAufgaben["1.1.3c-d"],
                statistikAufgaben["1.4.4"], statistikAufgaben["1.2.3b"],
            ],
        },

        M1: {
            id: "M1",
            type: "question",
            crumb: "Bedingungen",
            question: "Modellieren unter welcher Bedingung oder Verteilung?",
            options: [
                {
                    label: "Endlich viele, gleichwahrscheinliche Ausgänge?",
                    list: [
                        "Wir würfeln zweimal mit einem fairen Würfel...",
                        "...die von 1 bis 1000 nummeriert sind...",
                        "Wir drehen ein Glücksrad dreimal hintereinander ... Das Glücksrad ist in vier gleichgroße Viertel unterteil",
                        "3 Kugeln, die in jeder Hinsicht identisch sind abgesehen von ihrer Nummer...",
                        "Geschenke werden am Ende der Feier zufällig verteilt, so daß jede der Freundinnen genau" +
                        " ein Geschenk bekommt"
                    ],
                    childId: "LAPLACE",
                },
                {
                    label: "Endlich viele, nicht gleichwahrscheinliche Ausgänge?",
                    list: [
                        "Wir drehen ein Glücksrad mit vier Feldern. Dabei sei das Feld, das mit 1 beschriftet ist, doppelt so groß wie die anderen Felder..."
                    ],
                    childId: "ALLGEMEINER_ENDLICHER_RAUM",
                },
                {
                    label: "Eine oder mehrere Ja/Nein oder Richtig/Falsch Ausgänge?",
                    list: [
                        "Multiple Choice... beantwortet jede einzelne der Fragen, unabhängig von allen anderen Fragen, nur mit einer Wahrscheinlichkeit von 60% richtig"
                    ],
                    childId: "BERNOULLI_MODELL",
                },
                {
                    label: "„Wiederhole, bis zum ersten Mal …“: Wartezeit, unbekannt viele Schritte?",
                    childId: "ABZÄHLBAR_UNENDLICHER_RAUM",
                    list: ["bis die Augensumme zum ersten Mal gleich 5 ist"]
                },
                {
                    childId: "ÜBERABZÄHLBARER_RAUM",
                    label: "Rein zufällig aus einem Intervall / einer Fläche, kontinuierlich?",
                    list: [
                        "Sei (X, Y) uniform verteilt auf der Menge ...",
                        "Aus dem Intervall [0, 1] wird rein zufällig eine Zahl gezogen",
                        "Sowohl Gerd als auch Andrea treffen mit uniformer Verteilung zwischen 12:00 und 13:00 Uhr ein..."
                    ]
                },
                {
                    childId: "MEHRERE_FAKTOREN",
                    label: "Ereignisraum aus mehreren Faktoren",
                    list: [
                        "Eine faire oder unfaire Münze zufällig wählen und werfen",
                        "erst Urne wählen, dann ziehen"
                    ]
                },
                {
                    childId: "HYPOTHESENTEST",
                    label: "Eine Stichprobe soll ausgewertet werden (Statistik-Aufgabe)",
                    list: ["HIERFÜR BITTE ZU HYPOTHESENTEST GEHEN"]
                }
                /*
                 {
                     childId: "STATISTISCHES_MODELL",
                     label: "Eine Stichprobe soll ausgewertet werden (Statistik-Aufgabe)",
                     list: ["Geben Sie das zugehörige statistische Modell vollständig an"]
                 }
                 */
            ],
        },

        MEHRERE_FAKTOREN: { // TODO
            id: "MEHRERE_FAKTOREN",
            type: "solution",
            title: "Zusammengesetzter endlicher Ereignisraum",
            aufgaben: [statistikAufgaben["1.6.1a"]],
        },


        ABZÄHLBAR_UNENDLICHER_RAUM: {
            id: "ABZÄHLBAR_UNENDLICHER_RAUM",
            type: "solution",
            title: "Abzählbar unendlicher Raum",
            points: [
                "Ω = ℕ (oder ℕ₀), Wahrscheinlichkeitsfunktion P({k}) = p_k mit Σ p_k = 1.",
                "Weitere sinnvolle Wahlen: fein (ganze Wurffolge) vs. grob (nur Endsumme): die interessierende Größe muss messbar bleiben.",
                // TODO "Ref: 1.0.2, 1.1.6, 2.2.6.",
            ],
            aufgaben: [statistikAufgaben["2.3.3a"]],
            // TODO zu 2.3.3 mehr erklären
        },

        ÜBERABZÄHLBARER_RAUM: {
            id: "ÜBERABZÄHLBARER_RAUM",
            type: "solution",
            title: "Überabzählbarer (kontinuierlicher) Raum",
            points: [
                "Ω ⊆ ℝ^d, P(A) = ∫_A f. Gleichverteilung: f = 1/Vol(Ω) auf Ω.",
                "Wahrscheinlichkeit = Länge/Fläche/Volumen des Ereignisses / des Grundgebiets.",
                "P(einzelner Punkt) = 0. „exakt 1/7“ hat W. 0; „höchstens 1/100 entfernt“ ist ein Intervall.",
                // TODO "Ref: K-2; 1.0.1, 1.4.5, 2.3.6.",
            ]
        },

        BERNOULLI_MODELL: {
            id: "BERNOULLI_MODELL",
            type: "solution",
            title: "Bernoulli-Experiment(e)",
            points: [
                "Jeder Versuch: Erfolg mit Ws. p, Misserfolg mit 1-p, unabhängig.",
                <ul>
                    <li>{"Ω = {0,1}^n"}</li>
                    <li> ω = (ω1, ..., ωn)</li>
                    <li>{"P({ω}) = p^(#Einsen)·(1-p)^(#Nullen)"}</li>
                </ul>,
                "NUR für p=1/2 ist das Laplace!",
                "Anzahl Erfolge S = Σ ω_i ~ Binomial(n,p).",
                "Annahmen benennen: Versuche unabhängig, gleiche Erfolgs-Ws. p.",
            ],
            warning: [
                "Verwechslungsgefahr mit Laplace: {0,1}^n ist NICHT gleichverteilt, sobald p≠1/2.",
                "Wenn Ω = {0,1}^n, dann ist ein ω sowas wie (0,0) bzw. (0,...,0)! Also nicht stolpern und angeben" +
                " P({0})=..., sondern unbedingt korrekt entweder P({(0,0)}) bzw. μ((0,0)). Sonst ist das nicht" +
                " vollständig."
            ],
            aufgaben: [
                statistikAufgaben["1.4.3a"], statistikAufgaben["2.2.3a"], statistikAufgaben["2.3.1a"],
                statistikAufgaben["K-1a"], statistikAufgaben["K-3a"],
            ],
        },

        ALLGEMEINER_ENDLICHER_RAUM: {
            id: "ALLGEMEINER_ENDLICHER_RAUM",
            type: "solution",
            title: "Allgemeiner endlicher Wahrscheinlichkeitsraum",
            points: [
                "Ω endlich, aber Ergebnisse NICHT gleichwahrscheinlich: P({ω}) einzeln festlegen, Σ P({ω})=1.",
                "Gewichte oft aus der Geometrie: Feldgröße/Fläche ∝ Wahrscheinlichkeit.",
                // TODO "Beispiel 1.3.1a (Glücksrad, Feld „1“ doppelt so groß): P(1)=2/5, P(2)=P(3)=P(4)=1/5.",
            ],
            warning: "Dies ist kein Laplace-Raum! Ein Laplace-Raum liegt nur vor, wenn alle Elementarergebnisse dieselbe Wahrscheinlichkeit haben.",
            aufgaben: [statistikAufgaben["1.3.1"]],
        },

        LAPLACE: {
            id: "LAPLACE",
            type: "solution",
            title: "Endlicher Laplace-Raum",
            points: [
                "Je nach Aufgabenstellung:",
                <ul>
                    <li>Ω explizit als Menge angeben</li>
                    <li>{"Ω als Produktraum Ω = {...}^n, wenn mehrstufig/wiederholt"}</li>
                </ul>,
                "P(A) = #A / #Ω = günstige / mögliche",
                "µ({ω}) = 1/#Ω",
                "Nur bei echter Gleichwahrscheinlichkeit! Auf dem Grundraum zählen, nicht auf der Summenebene (siehe" +
                " Warnung).",
            ],
            fertig: false,
            warning: "Die Augensumme mehrerer Würfel ist nicht Laplace-verteilt – auf dem Grundraum zählen!",
            aufgaben: [
                statistikAufgaben["1.1.1a-b"], statistikAufgaben["1.1.2a"], statistikAufgaben["1.1.3a-b"],
                statistikAufgaben["1.1.4"], statistikAufgaben["1.2.3a"], statistikAufgaben["1.3.3a"],
                statistikAufgaben["2.1.1a"], statistikAufgaben["2.1.3a"],
            ], // TODO 1.1.4??// "2.2.2a", ??????

        },

        ERWARTUNGSWERT_VARIANZ: {
            id: "ERWARTUNGSWERT_VARIANZ",
            crumb: "Umstände",
            type: "question",
            question: "Erwartungswert & Varianz in welcher Variation?",
            description:
                "Existenz zuerst begründen: Endlicher Bildbereich ⇒ E und Var existieren stets; sonst Reihe/Integral auf Konvergenz prüfen.",
            options: [
                {
                    label: "Diskret",
                    childId: "ERWARTUNGSWERT_DISKRET",
                    list: [
                        "Verteilungstabelle oder Wahrscheinlichkeiten gegeben oder errechenbar",
                        "Berechnen Sie den erwarteten Gewinn"
                    ]
                },
                {
                    label: "Stetig",
                    childId: "ERWARTUNGSWERT_STETIG",
                    list: ["Dichte gegeben oder errechenbar"]
                },
                {
                    label: "Lineare Transformation Y=aX+b",
                    childId: "LINEARE_TRANSFORMATION",
                    list: [
                        "Varianz für Y = -2X + 4",
                        "Berechnen Sie Erwartungswert und Varianz von -4X - 1"
                    ]
                },
                {
                    label: "Erwartungswert einer Summe",
                    childId: "ERWARTUNGSWERT_SUMME",
                    list: [
                        "Berechnen Sie den Erwartungswert von 2X - Y"
                    ]
                },
                {
                    label: "Varianz einer Summe",
                    childId: "VARIANZ_SUMME",
                    list: [
                        "Var(2X + Y - 1)"
                    ]
                },
                {
                    label: "„erwartete Anzahl von …“",
                    childId: "INDIKATOR_ZERLEGUNG",
                    list: [
                        "Die gesuchte Größe ist eine Anzahl",
                        "Anzahl der Treffen im Jahr",
                        "wie viele Freundinnen ihr eigenes Geschenk bekommen"
                    ]
                },
                {
                    label: "Warum existiert der Erwartungswert?",
                    childId: "EXISTENZ_EW",
                    list: ["Begründungen angeben"]
                },
                /*
                 {
                    label: "E von max/min oder Gewinn",
                    childId: "ERWARTUNGSWERT_MAX_MIN_GEWINN",
                    list: [
                        "Berechnen Sie den erwarteten Gewinn",
                        "Ist das Spiel fair?"
                    ]
                },
                 */
            ],
        },

        EXISTENZ_EW: {
            id: "EXISTENZ_EW",
            type: "solution",
            title: "Warum existieren E und Var?",
            points: [
                "Endlicher Bildbereich (endlich viele Werte) ⇒ E und Var existieren IMMER (endliche Summe).",
                "Beschränkte ZV auf kompaktem Träger (z.B. Dichte auf [a,b]) ⇒ existieren (Integral über beschränkten Bereich).",
                "Sonst prüfen: Σ|x|·P(X=x) < ∞ bzw. ∫|x|·f(x) dx < ∞ (absolute Konvergenz); für Var zusätzlich E(X²) < ∞.",
            ],
            aufgaben: [
                statistikAufgaben["2.1.5c"], statistikAufgaben["2.1.6a"], statistikAufgaben["2.1.2b"],
                statistikAufgaben["K-1g"], statistikAufgaben["K-2e"],
            ],
        },

        ERWARTUNGSWERT_MAX_MIN_GEWINN: {
            id: "ERWARTUNGSWERT_MAX_MIN_GEWINN",
            type: "solution",
            title: "E von max/min bzw. Gewinn",
            points: [
                "Erst Verteilung von M=max bzw. N=min bestimmen (Bildbereich + Wahrscheinlichkeiten), dann E(M), E(N).",
                "E(M-N)=E(M)-E(N) (Linearität). Gewinn G=(M-N)-Einsatz ⇒ E(G)=E(M-N)-Einsatz.",
                "Zwei faire Würfel: E(M)=161/36, E(N)=91/36, E(M-N)=70/36=35/18. Bei Einsatz 2€: E(G)=35/18-2=-1/18 ⇒ nicht fair.",
                "„Fair?“ ⇔ E(Gewinn)=0.",
            ],
            aufgaben: [
                statistikAufgaben["2.1.1b"], statistikAufgaben["2.1.1c"], statistikAufgaben["2.1.1d-e"],
            ],
        },

        // TODO Aufteilen für einzelne Verteilungen?
        ERWARTUNGSWERT_DISKRET: {
            id: "ERWARTUNGSWERT_DISKRET",
            type: "solution",
            title: "Diskret",
            points: [
                "E(X)=Σx·P(X=x), Var(X)=E(X²)-E(X)².",
                "Standardverteilungen kennen!", // TODO
            ],
            aufgaben: [
                statistikAufgaben["2.1.1d-e"], statistikAufgaben["2.2.3c"],
                statistikAufgaben["2.1.4"], statistikAufgaben["2.1.5"],
                statistikAufgaben["K-1g"]
            ],
        },

        ERWARTUNGSWERT_STETIG: {
            id: "ERWARTUNGSWERT_STETIG",
            type: "solution",
            title: "Stetig",
            points: [
                "E(X)=∫ x * f dx", "Var(X)=∫ x² * f dx - (E(X))²"],
            aufgaben: [statistikAufgaben["2.1.6"], statistikAufgaben["2.1.2b"], statistikAufgaben["K-2e"]],
        },

        LINEARE_TRANSFORMATION: {
            id: "LINEARE_TRANSFORMATION",
            type: "solution",
            title: "Lineare Transformation",
            points: [
                "E(aX+b)=aE(X)+b, Var(aX+b)=a²Var(X).",
                "b fällt in der Varianz weg, a wird quadriert.",
            ],
            aufgaben: [statistikAufgaben["2.1.4d"], statistikAufgaben["2.1.6b"]],
        },

        ERWARTUNGSWERT_SUMME: {
            id: "ERWARTUNGSWERT_SUMME",
            type: "solution",
            title: "Erwartungswert einer Summe",
            points: ["E(X+Y)=E(X)+E(Y): immer; keine Unabhängigkeit nötig."],
            aufgaben: [statistikAufgaben["2.1.5f"], statistikAufgaben["2.1.2c"]],
        },

        VARIANZ_SUMME: {
            id: "VARIANZ_SUMME",
            type: "solution",
            title: "Varianz einer Summe",
            points: [
                "Var(X+Y)=Var(X)+Var(Y) nur bei Unkorreliertheit/Unabhängigkeit; sonst Kovarianz.",
                "Bei Unabh.: Var(aX+bY+c)=a²Var(X)+b²Var(Y).",
            ],
            references: ["K-5"],
        },

        INDIKATOR_ZERLEGUNG: {
            id: "INDIKATOR_ZERLEGUNG",
            type: "solution",
            title: "Indikator-Zerlegung",
            points: [
                "Zählgröße S=ΣX_i mit X_i=1_Ereignis_i.",
                "E(1_E)=P(E), also E(S)=ΣP(X_i=1), auch bei abhängigen X_i.",
                "Fixpunkte/Geschenke: E(S_N)=1; P(mind. ein Fixpunkt)→1-e^-1.",
            ],
            aufgaben: [statistikAufgaben["2.1.3"], statistikAufgaben["2.3.6b"]],
        },

        APPROXIMATIONEN_GRENZWERTE_SCHRANKEN: {
            id: "APPROXIMATIONEN_GRENZWERTE_SCHRANKEN",
            crumb: "Nährungen",
            type: "question",
            question: "Approximationen, Grenzwerte, Schranken",
            options: [
                {
                    label: "Nur Schranke / zeige b_n→0",
                    childId: "TSCHEBYSCHEFF",
                    list: [
                        "Geben Sie mit Hilfe der Tschebyscheff-Ungleichung untere Schranke an",
                        "Zeigen Sie mit Hilfe der Tschebyscheffschen Ungleichung, dass...",
                        "Bestimmen Sie mit Hilfe der Tschebyscheffschen Ungleichung eine obere Schranke"
                    ]
                },
                {
                    label: "n groß, p klein, np=λ moderat",
                    childId: "POISSON_APPROXIMATION",
                    list: [
                        "Im Schnitt weist eins von tausend produzierten Rotweingläsern kleine Bläschen auf",
                        "im Schnitt jedes 50. Bauteil fehlerhaft",
                        "Wahrscheinlichkeit für jeden Druckfehler 1/1000"
                    ]
                },
                {
                    label: "n groß, np(1-p) groß",
                    childId: "NORMAL_DE_MOIVRE_LAPLACE",
                    list: [
                        "Bestimmen Sie näherungsweise unter Verwendung des Satzes von de Moivre-Laplace",
                        "Wahrscheinlichkeit einer Überbuchung maximal 5% betragen soll...",
                        "Approximieren Sie mit Hilfe des Satzes von de Moivre-Laplace "
                    ]
                },
                {
                    label: "Summe/Mittel vieler iid, standardisieren",
                    childId: "ZENTRALER_GRENZWERTSATZ",
                    list: ["Summe/Mittel vieler unabhängiger, identisch verteilter Größen"]
                },
                {
                    label: "„wie viele Runden/Stichproben n für W. ≥ …“",
                    childId: "STICHPROBENUMFANG_BESTIMMEN",
                    list: [
                        "Schätzen Sie mit Hilfe der Tschebyscheff-Ungleichung ab, wie viele Runden mit dem" +
                        " bestimmten Spieleinsatz pro Runde mindestens gespielt werden müssen"
                    ]
                },
                {
                    label: "µ gesucht bei Normalverteilung",
                    childId: "NORMAL_MU_QUANTIL",
                    list: ["Wie groß muss μ mindestens sein, damit..."]
                },
            ],
        },

        TSCHEBYSCHEFF: {
            id: "TSCHEBYSCHEFF",
            type: "solution",
            title: "Tschebyscheff",
            points: [
                "P(|X-E(X)|≥ε)≤Var(X)/ε².",
                "Nur obere Schranke, oft grob.",
                "Vielfaches des Erwartungswerts: P(X ≥ k·E(X)) ≤ Var(X)/((k-1)²·E(X)²).",
                "Nur obere Schranke, oft grob — starke Abweichung vom exakten Wert ist normal, kein Rechenfehler.",
            ],
            aufgaben: [
                statistikAufgaben["2.2.5"], statistikAufgaben["2.2.6"],
                statistikAufgaben["2.2.1c"], statistikAufgaben["2.2.2b"],
            ],
        },

        POISSON_APPROXIMATION: {
            id: "POISSON_APPROXIMATION",
            type: "solution",
            title: "Poisson-Approximation",
            points: ["Bin(n,p)≈Poi(λ), λ=np; P(X=k)≈e^-λ λ^k/k!."],
            aufgaben: [
                statistikAufgaben["2.3.4"], statistikAufgaben["2.3.5"], statistikAufgaben["2.3.1b"],
            ],
        },

        NORMAL_DE_MOIVRE_LAPLACE: {
            id: "NORMAL_DE_MOIVRE_LAPLACE",
            type: "solution",
            title: "Normal / de Moivre-Laplace",
            points: [
                "µ=np, σ=√(np(1-p)); Stetigkeitskorrektur ±½ beachten.",
                "P(a≤S_n≤b)≈Φ((b+½-µ)/σ)-Φ((a-½-µ)/σ).",
                "Φ^-1(0,95)≈1,645.",
            ],
            // warning: "''mehr als 140'' = S ≥ 141, also Schnittgrenze 140,5: P(S>140) ≈ 1 - Φ((140,5 - 125)/10) = 1
            // -" +
            //   " Φ(1,55) ≈ 0,061. Die Grenze 140,5 (Mitte zwischen 140 und 141) ist der springende Punkt — mit
            //   139,5 (→ Φ(1,45)) würde man versehentlich P(S ≥ 140) rechnen.",
            warning: "Richtung der Stetigkeitskorrektur genau prüfen: „> 140“ = „≥ 141“ ⇒ Schnittgrenze 140,5 (nicht 139,5). P(S>140)≈1-Φ((140,5-µ)/σ).",
            aufgaben: [
                statistikAufgaben["2.2.4"], statistikAufgaben["2.3.6"], statistikAufgaben["2.2.3d-e"],
                statistikAufgaben["2.3.1b"], statistikAufgaben["K-3e"],
            ],
        },

        ZENTRALER_GRENZWERTSATZ: {
            id: "ZENTRALER_GRENZWERTSATZ",
            type: "solution",
            title: "Zentraler Grenzwertsatz",
            points: ["(S_n-nµ)/(σ√n) bzw. (X̄-µ)/(σ/√n)≈N(0,1), dann Φ."],
            aufgaben: [statistikAufgaben["2.3.3c"]],
        },

        STICHPROBENUMFANG_BESTIMMEN: {
            id: "STICHPROBENUMFANG_BESTIMMEN",
            type: "solution",
            title: "n bestimmen",
            points: [
                "Ungleichung mit [Tschebyscheff] oder [Normal-Approximation] aufstellen und nach n auflösen.",
            ],
            aufgaben: [statistikAufgaben["2.2.1d"], statistikAufgaben["2.2.2c"]],
        },

        NORMAL_MU_QUANTIL: {
            id: "NORMAL_MU_QUANTIL",
            type: "solution",
            title: "µ über Quantil bestimmen",
            points: ["P(Z≥µ-x)=Φ(x/σ), nach µ mit Quantil auflösen."],
            aufgaben: [statistikAufgaben["2.3.2c-d"]],
        },

        DESKRIPTIVE_STATISTIK: {
            id: "DESKRIPTIVE_STATISTIK",
            crumb: "Deskriptive Statistik",
            type: "question",
            question: "Deskriptive Statistik",
            options: [
                {
                    label: "Lagemaße", childId: "LAGEMASSE",
                    list: [
                        "Bestimmen Sie arithmetisches Mittel, Median und Modalwert der Stichprobe",
                        "Berechnen Sie den Modalwert der erreichten Punkte"
                    ]
                },
                {
                    label: "Streumaße", childId: "STREUMASSE",
                    list: [
                        "Bestimmen Sie die mittlere absolute Abweichung vom Median und vom arithmetischen Mittel",
                        "Bestimmen Sie die Varianz und Standardabweichung der Stichprobe."
                    ]
                },
                {
                    label: "Quantile / Quartile", childId: "QUANTILE",
                    list: ["Bestimmen Sie das untere Quartil und das 90%-Quantil der Stichprobe"]
                },
                {
                    label: "Alle Werte um c verschoben", childId: "VERSCHIEBUNG_KENNZAHLEN",
                    list: ["Angenommen jede(r) der Studierenden hätte 3 Punkte mehr erreicht"]
                },
                {
                    label: "Robustheit", childId: "ROBUSTHEIT",
                    list: ["Wie groß kann der Median der oben genannten Daten höchstens werden, wenn ..."]
                },
                /*
                 {label: "„Ist … ein Streumaß?“ “, childId: "STREUMASS_BEWEISEN"},
                 */
            ],
        },

        LAGEMASSE: {
            id: "LAGEMASSE",
            type: "solution",
            title: "Lagemaße",
            points: [
                "Mittel x̄=1/n Σx_i; Median: sortieren, bei geradem n Mittel der beiden mittleren; Modus: häufigster Wert.",
            ],
            aufgaben: [statistikAufgaben["2.4.1b"], statistikAufgaben["2.4.5a-c"]],
        },

        STREUMASSE: {
            id: "STREUMASSE",
            type: "solution",
            title: "Streumaße",
            points: [
                "Spannweite=max-min; Varianz s²=1/nΣ(x_i-x̄)²; SD=√s²; mittlere abs. Abw. vom Median=1/nΣ|x_i-x̃|.",
                "1/n vs. 1/(n-1) nach Vorlesung prüfen.",
            ],
            aufgaben: [statistikAufgaben["2.4.5f"], statistikAufgaben["2.4.1e-f"]],
        },

        QUANTILE: {
            id: "QUANTILE",
            type: "solution",
            title: "Quantile",
            points: ["Q₁=x_0.25, Q₃=x_0.75; IQR=Q₃-Q₁; p-Quantilabstand=x_{1-p}-x_p."],
            aufgaben: [statistikAufgaben["2.4.1c-d"]],
        },

        VERSCHIEBUNG_KENNZAHLEN: {
            id: "VERSCHIEBUNG_KENNZAHLEN",
            type: "solution",
            title: "Verschiebung",
            points: ["x̄+c und x̃+c verschieben sich; Varianz/SD/Spannweite unverändert."],
            aufgaben: [statistikAufgaben["2.4.5g-i"]],
        },

        ROBUSTHEIT: {
            id: "ROBUSTHEIT",
            type: "solution",
            title: "Robustheit",
            points: ["Median ändert sich kaum bei wenigen extrem veränderten Werten; Mittel stark."],
            aufgaben: [statistikAufgaben["2.4.1g"]],
        },

        STREUMASS_BEWEISEN: {
            id: "STREUMASS_BEWEISEN",
            type: "solution",
            title: "Streumaß beweisen",
            points: [
                "s≥0; translationsinvariant s(x+c)=s(x); homogen s(ax)=|a|s(x); s=0 genau bei konstanten Daten.",
            ],
            aufgaben: [statistikAufgaben["2.4.2"]],
        },

        SCHÄTZER: {
            id: "SCHÄTZER",
            crumb: "Schätzer",
            type: "question",
            question: "Schätzer",
            options: [

                /*
                 {label: "Erwartungstreu?", childId: "ERWARTUNGSTREUE"}, TODO anders einbringen
                 */
                {
                    label: "Risiko / MSE", childId: "RISIKO_MSE",
                    list: [
                        "Berechnen Sie das Risiko des Schätzers",
                        "Wie verhält sich das Risiko von t für ..."
                    ]
                },
                {
                    label: "Zwei Schätzer vergleichen", childId: "SCHÄTZER_VERGLEICHEN",
                    list: [
                        "Ist t1 mindestens so gut wie t2?",
                        "Ist einer der beiden Schätzer besser als der andere?"
                    ]
                },
                /*
                 {label: "Varianzschätzer p̂(1-p̂)", childId: "VARIANZSCHÄTZER"}, TODO Anders einbringen
                 */
            ],
        },

        ERWARTUNGSTREUE: {
            id: "ERWARTUNGSTREUE",
            type: "solution",
            title: "Erwartungstreue",
            points: [
                "t erwartungstreu ⇔ E_θ[t(X)]=θ für alle θ; Bias=E_θ[t]-θ.",
                "E(X̄)=E(X₁)=µ ⇒ erwartungstreu.",
            ],
            aufgaben: [statistikAufgaben["2.4.4a"], statistikAufgaben["2.4.3d"]],
        },

        RISIKO_MSE: {
            id: "RISIKO_MSE",
            type: "solution",
            title: "Risiko / MSE",
            points: ["R(θ,t)=E[(t-θ)²]=Var_θ(t)+Bias(t)².", "X̄: R=Var(X₁)/n→0."],
            aufgaben: [statistikAufgaben["2.4.4b/c"]],
        },

        SCHÄTZER_VERGLEICHEN: {
            id: "SCHÄTZER_VERGLEICHEN",
            type: "solution",
            title: "Schätzer vergleichen",
            points: [
                "t₁ mindestens so gut wie t₂ ⇔ R(θ,t₁)≤R(θ,t₂) für alle θ.",
                "Erst Bias, dann R=Var+Bias²; erwartungstreu ≠ risikominimal.",
            ],
            aufgaben: [statistikAufgaben["2.4.3e"]],
        },

        VARIANZSCHÄTZER: {
            id: "VARIANZSCHÄTZER",
            type: "solution",
            title: "Varianzschätzer",
            points: [
                "p̂=1/nΣx_i: E[t]=(1-1/n)θ(1-θ) ⇒ nicht erwartungstreu, aber asymptotisch.",
            ],
            aufgaben: [statistikAufgaben["2.5.1"]],
        },

        KONFIDENZINTERVALL: {
            id: "KONFIDENZINTERVALL",
            crumb: "Konfidenzintervalle",
            type: "question",
            question: "Konfidenzintervall",
            options: [
                {
                    label: "Anteil, Normal/Wald",
                    childId: "WALD_KI",
                    list: [
                        "Bestimmen Sie das Konfidenzintervall approximativ mit Hilfe der Normalverteilung"
                        // TODO
                    ]
                },
                {
                    label: "Exakt, ohne Approximation", childId: "EXAKTES_KI",
                    list: ["Bestimmen Sie das Konfidenzintervall ohne jede Approximation"]
                },
                {
                    label: "t-Approximation", childId: "STUDENT_T_KI",
                    list: [
                        "Bestimmen Sie das Konfidenzintervall approximativ mit Hilfe der Studentschen t-Verteilung"
                    ]
                },
                /*
                 {label: "Theorie: Überdeckung, Schnitt, Länge", childId: "KI_THEORIE"}, // TODO anders
                 */
            ],
        },

        WALD_KI: {
            id: "WALD_KI",
            type: "solution",
            title: "Wald-KI",
            points: [
                "Ĵ=[p̂-z_{1-α/2}√(p̂(1-p̂)/n), p̂+z_{1-α/2}√(p̂(1-p̂)/n)]; z_0.975≈1,96.",
                "Niveau 1-α bestimmt z_{1-α/2}=Φ^-1(1-α/2).",
            ],
            aufgaben: [statistikAufgaben["2.5.4"], statistikAufgaben["2.5.2c"]],
        },

        EXAKTES_KI: {
            id: "EXAKTES_KI",
            type: "solution",
            title: "Exaktes KI",
            points: ["Ohne Approximation (Computer)."],
            aufgaben: [statistikAufgaben["2.5.2a"]],
        },

        STUDENT_T_KI: {
            id: "STUDENT_T_KI",
            type: "solution",
            title: "Student-t",
            points: ["t_{n-1}-Quantil statt z."],
            aufgaben: [statistikAufgaben["2.5.2b"]],
        },

        KI_THEORIE: {
            id: "KI_THEORIE",
            type: "solution",
            title: "KI-Theorie",
            points: [
                "Überdeckung P_p(p∈J_n)≥1-α; p ist fest, Intervall zufällig.",
                "Niveau verdoppeln verdoppelt nicht die Länge. Schnitt zweier (1-α/2)-KI ist ein (1-α)-KI.",
            ],
            aufgaben: [statistikAufgaben["2.5.5"], statistikAufgaben["2.5.3"]],
        },

        HYPOTHESENTEST: {
            id: "HYPOTHESENTEST",
            type: "question",
            crumb: "Hypothesentest",
            question: "Schritt auswählen",
            description: "Dies folgt nicht dem strikt gelisteten Vorgehen, das wir in der Vorlesung gelernt haben." +
                " Aber es ist meiner Ansicht nach so intuitiver.",
            options: [
                {
                    label: "Schritt 1: Statistisches Modell angeben",
                    childId: "STATISTISCHES_MODELL"
                },
                {
                    label: "Schritt 2: Hypothese und Alternative wählen",
                    childId: "HYPOTHESE_ALTERNATIVE"
                },
                {
                    label: "Schritt 3: Art von Test wählen",
                    childId: "TEST_BESTIMMEN"
                },
                {
                    label: "Schritt 4: Teststatistik aufstellen",
                    childId: "TESTSTATISTIK"
                },
                {
                    label: "Schritt 5: z bzw. t berechnen",
                    childId: "Z_T",
                    list: [
                        "Anmerkung: Es ginge auch der p-Wert"
                    ]
                },
                {
                    label: "Schritt 6: Test durchführen (φ(x) berechnen)",
                    childId: "TEST_MACHEN",
                },
                {
                    label: "Schritt 7: Entscheidung über Verwerfung",
                    childId: "VERWERFUNGSBEREICHE",
                },
            ],
        },

        TESTSTATISTIK: {
            id: "TESTSTATISTIK",
            type: "question",
            question: "Teststatistik aufstellen",
            options: [
                {
                    label: "Einfacher Gauß-Test",
                    childId: "EGT"
                },
                {
                    label: "Einfacher T-Test",
                    childId: "ETT"
                },
            ]
        },

        EGT: {
            type: "solution",
            title: "Einfacher Gauß-Test",
            id: "EGT",
            points: [
                <span> Allgemeine Formel:  <InlineMath
                    math="T(x) = \dfrac{\bar x - \theta_0}{ \sigma} \sqrt{n}"/> </span>,
                <ul>
                    <li><b>Bei Bernoulli:</b> <InlineMath
                        math="T(x) =  \dfrac{\bar x - \theta_0}{ \sqrt{\theta_0 (1- \theta_0)}} \sqrt{n} \quad"/>,
                        da <InlineMath math="\sigma^2 =  \theta_0 (1- \theta_0)"/></li>
                </ul>,
            ],
            warning: [
                <span>
                    <InlineMath math="\theta_0 > \bar x"/>? Dann wäre es sinnvoll ein - vor die Formel zu setzen, damit etwas positives heraus kommt. Aber Vorsicht: Dann müssen auch bei allen weiteren Schritten die {"</>"} umgekehrt werden.
                </span>
            ]
        },


        ETT: {
            type: "solution",
            title: "Einfacher T-Test",
            id: "ETT",
            points: [
                <span> Allgemeine Formel:  <InlineMath math="T(x) = \dfrac{\bar X - \mu_0}{ \widehat\sigma} \sqrt{n}"/> </span>,
                <span>Dabei ist <InlineMath
                    math="\widehat\sigma = \sqrt{\dfrac{1}{n-1} \sum^n_{i=1} (X_i - \bar X)^2 }"/>  </span>
            ],
            warning: [
                <span>
                    <InlineMath math="\theta_0 > \bar x"/>? Dann wäre es sinnvoll ein - vor die Formel zu setzen, damit etwas positives heraus kommt. Aber Vorsicht: Dann müssen auch bei allen weiteren Schritten die {"</>"} umgekehrt werden.
                </span>
            ]
        },

        TEST_MACHEN: {
            id: "TEST_MACHEN",
            type: "question",
            question: "Für welchen Test?",
            crumb: "Durchführung",
            options: [
                {
                    label: "Zweiseitiger einfacher Gauß-Test",
                    childId: "ZEG_PHI"
                },
                {
                    label: "Linksseitiger einfacher Gauß-Test",
                    childId: "LEG_PHI"
                },
                {
                    label: "Rechtsseitiger einfacher Gauß-Test",
                    childId: "REG_PHI"
                },
                {
                    label: "Zweiseitiger einfacher T-Test",
                    childId: "ZET_PHI"
                },
                {
                    label: "Linksseitiger einfacher T-Test",
                    childId: "LET_PHI"
                },
                {
                    label: "Rechtsseitiger einfacher T-Test",
                    childId: "RET_PHI"
                },
            ]
        },


        ZEG_PHI: {
            type: "solution",
            fertig: true,
            title: "Zweiseitiger einfacher Gauß-Test",
            id: "ZEG_PHI",
            points: [
                <p><InlineMath
                    math="\varphi(x) = \begin{cases} 1 & \text{falls } T(x) \geq z_{1-\alpha/2} \\ 0 & \text{sonst} \end{cases}"/>
                </p>,
                //  <span>Also Verwerfungsbereich: <InlineMath math="|T| > z_{1-\alpha/2}"/></span>
            ]
        },

        LEG_PHI: {
            type: "solution",
            //fertig: true,
            title: "Linksseitiger einfacher Gauß-Test",
            id: "LEG_PHI",
            points: [
                <p><InlineMath
                    math="\varphi(x) = \begin{cases} 1 & \text{falls } T(x) \leq -z_{1-\alpha} \\ 0 & \text{sonst} \end{cases}"/>
                </p>,
            ]
        },

        REG_PHI: {
            type: "solution",
            //fertig: true,
            title: "Rechtsseitiger einfacher Gauß-Test",
            id: "REG_PHI",
            points: [
                <p><InlineMath
                    math="\varphi(x) = \begin{cases} 1 & \text{falls } T(x) \geq z_{1-\alpha} \\ 0 & \text{sonst} \end{cases}"/>
                </p>,
            ]
        },

        ZET_PHI: {
            type: "solution",
            fertig: true,
            title: "Zweiseitiger einfacher T-Test",
            id: "ZET_PHI",
            points: [
                <p><InlineMath
                    math="\varphi(x) = \begin{cases} 1 & \text{falls } T(x) \geq t_{n-1,1-\alpha/2} \\ 0 & \text{sonst} \end{cases}"/>
                </p>,
            ]
        },

        LET_PHI: {
            type: "solution",
            //fertig: true,
            title: "Linksseitiger einfacher T-Test",
            id: "LET_PHI",
            points: [
                <p><InlineMath
                    math="\varphi(x) = \begin{cases} 1 & \text{falls } T(x) \leq -t_{n-1,1-\alpha} \\ 0 & \text{sonst} \end{cases}"/>
                </p>,
            ]
        },

        RET_PHI: {
            type: "solution",
            //fertig: true,
            title: "Rechtsseitiger einfacher T-Test",
            id: "RET_PHI",
            points: [
                <p><InlineMath
                    math="\varphi(x) = \begin{cases} 1 & \text{falls } T(x) \geq t_{n-1,1-\alpha} \\ 0 & \text{sonst} \end{cases}"/>
                </p>,
            ]
        },


        VERWERFUNGSBEREICHE: {
            id: "VERWERFUNGSBEREICHE",
            type: "question",
            question: "Für welchen Test?",
            crumb: "Verwerfungsbereich",
            options: [
                {
                    label: "Linksseitiger einfacher Gauß-Test",
                    childId: "LEG"
                },
                {
                    label: "Rechtsseitiger einfacher Gauß-Test",
                    childId: "REG"
                },
                {
                    label: "Zweiseitiger einfacher Gauß-Test",
                    childId: "ZEG"
                },
                {
                    label: "Linksseitiger einfacher T-Test",
                    childId: "LET"
                },
                {
                    label: "Rechtsseitiger einfacher T-Test",
                    childId: "RET"
                },
                {
                    label: "Zweiseitiger einfacher T-Test",
                    childId: "ZET"
                },
            ]
        },


        REG: {
            type: "solution",
            title: "Rechtsseitiger einfacher Gauß-Test",
            id: "REG",
            fertig: true,
            points: [
                <span>
                    Verwerfungsbereich: <InlineMath math="T>z_{1-\alpha}"/>
                </span>
            ]
        },

        LEG: {
            type: "solution",
            title: "Linksseitiger einfacher Gauß-Test",
            id: "LEG",
            fertig: true,
            points: [
                <span>
                    Verwerfungsbereich: <InlineMath math="T < - z_{1-\alpha}"/>
                </span>
            ],
            warning: [
                <span>Nicht verwirren lassen! <InlineMath math="T< -z_{1-\alpha}  \Leftrightarrow T< z_{\alpha}"/> </span>
            ]
        },


        RET: {
            type: "solution",
            title: "Rechtsseitiger einfacher T-Test",
            id: "RET",
            fertig: true,
            points: [
                <span>
                    Verwerfungsbereich: <InlineMath math="T>t_{n-1, 1-\alpha}"/>
                </span>
            ]
        },

        LET: {
            type: "solution",
            title: "Linksseitiger einfacher T-Test",
            id: "LET",
            fertig: true,
            points: [
                <span>
                    Verwerfungsbereich: <InlineMath math="T< -t_{n-1, 1-\alpha}"/>
                </span>
            ],
            warning: [
                <span>Nicht verwirren lassen! <InlineMath math="T< -t_{n-1, 1-\alpha}  \Leftrightarrow T< t_{n-1,\alpha}"/> </span>
            ]
        },

        ZEG: {
            type: "solution",
            title: "Zweiseitiger einfacher Gauß-Test",
            id: "ZEG",
            fertig: true,
            points: [
                <span>
                    Verwerfungsbereich: <InlineMath math="|T| > z_{1-\alpha / 2}"/>
                </span>
            ]
        },

        ZET: {
            type: "solution",
            title: "Zweiseitiger einfacher T-Test",
            id: "ZET",
            fertig: true,
            points: [
                <span>
                    Verwerfungsbereich: <InlineMath math="|T| > t_{n-1, 1-\alpha / 2}"/>
                </span>
            ]
        },


        Z_T: {
            id: "Z_T",
            type: "question",
            question: "Für welchen Test?",
            crumb: "Quantil",
            options: [
                {
                    label: "Zweiseitiger einfacher Gauß-Test",
                    childId: "ZEG_Z_T"
                },
                {
                    label: "Einseitiger einfacher Gauß-Test",
                    childId: "EEG_Z_T"
                },
                {
                    label: "Zweiseitiger einfacher T-Test",
                    childId: "ZET_Z_T"
                },
                {
                    label: "Einseitiger einfacher T-Test",
                    childId: "EET_Z_T"
                },
            ]
        },

        ZEG_Z_T: {
            type: "solution",
            fertig: true,
            title: "Zweiseitiger einfacher Gauß-Test",
            id: "ZEG_Z_T",
            points: [
                <span>Berechne <InlineMath math="z_{1-\alpha/2}"/></span>
            ]
        },

        EEG_Z_T: {
            type: "solution",
            fertig: true,
            title: "Einseitiger einfacher Gauß-Test",
            id: "EEG_Z_T",
            points: [
                <span>Berechne <InlineMath math="z_{1-\alpha}"/></span>
            ]
        },

        ZET_Z_T: {
            type: "solution",
            fertig: true,
            title: "Zweiseitiger einfacher T-Test",
            id: "ZET_Z_T",
            points: [
                <span>Berechne <InlineMath math="t_{n-1, 1-\alpha/2}"/></span>
            ]
        },

        EET_Z_T: {
            type: "solution",
            fertig: true,
            title: "Einseitiger einfacher T-Test",
            id: "EET_Z_T",
            points: [
                <span>Berechne <InlineMath math="t_{n-1, 1-\alpha}"/></span>
            ]
        },


        STATISTISCHES_MODELL: {
            id: "STATISTISCHES_MODELL",
            type: "solution",
            title: "Statistisches Modell",
            fertig: true,
            points: [
                <span> <b> IMMER hinschreiben:</b> {"𝒫 = { P_θ : θ ∈ Θ }"} </span>,
                <ol className={"ml-3"} style={{listStyle: "n"}}>
                    <li><b>Was ist der Stichprobenraum Θ?</b> (Gegenstück zum Ereignisraum): Woraus besteht die
                        Stichprobe?
                    </li>
                    <ol className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li><b>Anteil/Prozentsatz:</b> [0,1]</li>
                        <li><b>kontinuierliche Messwerte:</b> ℝ (bzw. ℝ×(0,∞), wenn σ mitgeschätzt wird)</li>
                    </ol>
                    <li><b>Was ist P<sub>θ</sub>?</b> Generell gegeben durch Wahrscheinlichkeitsfunktion
                        μ<sub>θ</sub> oder Dichte f<sub>θ</sub></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li>
                            <b>Bernoulli:</b> µ<sub>θ</sub>(x)=θ<sup>(Σx_i)</sup>(1-θ)<sup>(n-Σx_i)</sup>
                        </li>
                        <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                            <li>Also: Bernoulli-Verteilung mit Parametern n
                                und θ (Varianz automatisch bekannt)
                            </li>
                        </ul>
                        <li>
                            <b>Normal:</b> f ~ N(µ,σ²)
                        </li>
                        <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                            <li>Also: Normalverteilt normalveretilt mit EW μ und Varianz
                                σ<sup>2</sup> (Varianz unbekannt, nur eine Variable)
                            </li>
                        </ul>
                    </ul>
                    <li><b>Stichprobenvariablen?</b></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li>X₁,…,X_n unabhängig</li>
                        <li>identisch verteilt gemäß P_θ (also bspw. Bernoulli-verteilt)</li>
                    </ul>
                </ol>,
            ],
            warning: ["n explizit angeben, wenn vorhanden!",
                "Nicht vergessen die Wahrscheinlichkeitsfunktion anzugeben! (P_θ ist durch sie gegeben)"],
            frage: [
                <span><b>Wie legt man bei Bernoulli fest, was der Erfolg ist?</b> Bernoulli-Erfolg (X_i=1) = das Ergebnis, auf dessen Anteil sich die Behauptung bezieht — so wählen, dass p = P(Erfolg) dem Wert p₀ entspricht </span>
            ],
            aufgaben: [statistikAufgaben["2.4.3a"], statistikAufgaben["2.5.1"], //statistikAufgaben["K-4a"]
            ],
        },

        TEST_BESTIMMEN: {
            id: "TEST_BESTIMMEN",
            type: "question",
            question: "Test wählen",
            options: [
                {
                    label: "Schritt 1: Welcher allgemeine Typ ist es?",
                    childId: "TEST_ART"
                },
                {
                    label: "Schritt 2: Einseitig oder zweiseitig?",
                    childId: "TESTRICHTUNG_BESTIMMEN"
                },
                {
                    label: "Muss ich approximieren?",
                    childId: "HT_APPROX",
                    list: ["n groß, Binomial exakt unhandlich"]
                },
            ]
        },

        TEST_ART: {
            id: "TEST_ART",
            type: "question",
            question: "Wie sieht die Stichprobe aus?",
            crumb: "Test-Art",
            options: [
                {
                    label: "Anteil/Wahrscheinlichkeit p, eine Stichprobe", childId: "ANTEILSTEST",
                    list: [
                        "Anteil/Häufigkeit in Vergleich zu früherem Wert: letzte Wahl, etc.",
                        "Anteil/Häufigkeit in Bezug auf Behauptung: Mindestens 90%, etc."
                    ],
                    klausur_irrelevant: true
                },
                {
                    label: "Normalverteilt und Varianz bekannt oder Bernoulli-verteilt", childId: "GAUSS_TEST",
                    list: [
                        "Kontinuierliche Messgröße; Messwerte; ein physikalischer Wert pro Objekt",
                        "Varianz von (5 g)² / σ = ... / σ² = ..."
                    ]
                },
                {
                    label: "Normalverteilt, Varianz unbekannt", childId: "T_TEST",
                    list: [
                        "Kontinuierliche Messgröße; Messwerte; ein physikalischer Wert pro Objekt",
                        "Keine Varianz / σ² / σ gegeben"
                    ]
                },
                {
                    label: "Verbundene Messpaare", childId: "GEPAARTER_T_TEST",
                    list: [
                        "Kontinuierliche Messgröße; Messwerte; ein physikalischer Wert pro Objekt",
                        "zwei Messungen an derselben Einheit: vorher/nachher, links/rechts, dominante/andere Hand",
                        "Tabelle mit gepaarten Spalten pro Person/Objekt"
                    ],
                    klausur_irrelevant: true
                },
                {
                    label: "Zwei getrennte Stichproben, Anteile vergleichen",
                    childId: "ZWEI_STICHPROBEN_ANTEILSTEST",
                    list: [
                        "Anteil/Häufigkeit",
                        "im Hörsaal … vs. im Internet …"
                    ],
                    klausur_irrelevant: true
                }
            ]
        },

        HYPOTHESE_ALTERNATIVE: {
            id: "HYPOTHESE_ALTERNATIVE",
            type: "solution",
            title: "Hypothesen",
            fertig: true,
            points: [
                <ol className={"ml-3"} style={{listStyle: "n"}}>
                    <li><b>Was ist H<sub>0</sub>?</b> Immer “Situation unverändert“ bzw. “sie sagen die Wahrheit“ in
                        Bezug auf Behauptungen wie “Die
                        durchschnittliche Verspätung ist 60 Sekunden“.
                    </li>
                    <li><b>Was ist H<sub>A</sub>?</b> Dass die wahre Situation anders ist als H<sub>0</sub>. Also
                        größer, kleiner oder schlicht ungleich.
                    </li>
                </ol>, <br/>,
                <span>Beispiele:</span>,
                <ul style={{listStyle: "circle"}}>
                    <li><b>Beispiel Keimrate:</b></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li><b> H<sub>0</sub>: θ = θ<sub>0</sub> = 0,9 </b>, weil das ursprünglich angegebene (von der
                            Firma) 90% ist
                        </li>
                        <li><b> H<sub>0</sub>: θ {"<"} θ<sub>0</sub> </b>, weil die Fragestellung ist,
                            ob es tatsächlich niedriger ist
                        </li>
                    </ul>
                    <li><b>Beispiel Veränderung der Unterstützung:</b></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li><b> H<sub>0</sub>: θ = θ<sub>0</sub> = 0,3 </b>, weil es darum geht, ob es gesunken
                            ist von der ursprünglichen Zustimmung
                            (30%) oder nicht
                        </li>
                        <li><b> H<sub>0</sub>: θ {"<"} θ<sub>0</sub> </b>, weil die Fragestellung ist,
                            ob es tatsächlich niedriger ist
                        </li>
                    </ul>
                    <li><b>Beispiel Mensa Variante 1</b></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li><b> H<sub>0</sub>: θ = θ<sub>0</sub> = 0,2 </b>, ursprünglich waren es 20%
                        </li>
                        <li><b> H<sub>0</sub>: θ {"<"} θ<sub>0</sub> </b>, weil es die Leute interessiert, ob es
                            gesunken
                            ist
                        </li>
                    </ul>
                    <li><b>Beispiel Mensa Variante 2</b></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li><b> H<sub>0</sub>: θ = θ<sub>0</sub> = 0,2 </b>, ursprünglich waren es 20%
                        </li>
                        <li><b> H<sub>0</sub>: θ {"<"} θ<sub>0</sub> </b>, weil es die Leute interessiert, ob es
                            gestiegen
                            ist
                        </li>
                    </ul>
                    <li><b>Beispiel Durchschnittliche Verspätung</b></li>
                    <ul className={"pl-5 ml-5"} style={{listStyle: "circle"}}>
                        <li><b> H<sub>0</sub>: μ = μ<sub>0</sub> = 60 (Sekunden)</b>, weil gefragt ist, ob der
                            Durchschnitt 60 ist
                            oder nicht und μ ist der Erwartungswert
                        </li>
                        <li><b> H<sub>A</sub>: μ /= μ<sub>0</sub></b>, weil gefragt ist, ob der Durchschnitt 60 ist
                            oder nicht und μ ist der Erwartungswert
                        </li>
                    </ul>
                </ul>
            ]
        },

        ANTEILSTEST: {
            id: "ANTEILSTEST",
            type: "solution",
            title: "Anteilstest",
            points: [
                "Z=(p̂-p₀)/√(p₀(1-p₀)/n)≈N(0,1). Beispiel H₀:p=p₀ gegen H₁:p<p₀: verwerfe bei Z<-z_{1-α}.",
            ],
            references: ["K-4"],
            aufgaben: [statistikAufgaben["2.6.4"]],
        },

        GAUSS_TEST: {
            id: "GAUSS_TEST",
            type: "solution",
            title: "Einfacher Gauß-Test",
            points: ["Z=(X̄-µ₀)/(σ/√n)≈N(0,1). Varianz bekannt."],
            aufgaben: [statistikAufgaben["2.6.1"]],
        },

        T_TEST: {
            id: "T_TEST",
            type: "solution",
            title: "Einfacher t-Test",
            points: ["T=(X̄-µ₀)/(S/√n)~t_{n-1}, S²=1/(n-1)Σ(X_i-X̄)²."],
            references: ["Theorie 2.6"],
            aufgaben: [statistikAufgaben["2.5.2b"]],
        },

        GEPAARTER_T_TEST: {
            id: "GEPAARTER_T_TEST",
            type: "solution",
            title: "Gepaarter t-Test",
            points: [
                "D_i=X_i-Y_i; Ein-Stichproben-Test auf H₀:µ_D=0.",
                "Gepaarte Daten nicht als zwei unabhängige Stichproben behandeln.",
            ],
            aufgaben: [statistikAufgaben["2.6.3"]],
        },

        // Kommt in Klausur glaube ich nicht dran
        ZWEI_STICHPROBEN_ANTEILSTEST: {
            id: "ZWEI_STICHPROBEN_ANTEILSTEST",
            type: "solution",
            title: "Zwei-Stichproben-Anteilstest",
            points: [
                "gepoolt p̂=(X₁+X₂)/(n₁+n₂); Z=(p̂₁-p̂₂)/√(p̂(1-p̂)(1/n₁+1/n₂))≈N(0,1).",
            ],
            aufgaben: [statistikAufgaben["2.6.2"]],
        },

        TESTRICHTUNG_BESTIMMEN: {
            id: "TESTRICHTUNG_BESTIMMEN",
            type: "question",
            question: "Richtung bestimmen",
            options: [
                {
                    label: "Gleichheit und Ungleichheit",
                    list: [
                        "„beträgt / verändert / gleich“",
                        "μ = μ0  und μ  ̸= μ0 ",
                        "θ = θ_0  und θ  ̸= θ_0 "
                    ],
                    childId: "ZWEISEITIG"
                },
                {
                    label: "Größer oder kleiner",
                    list: [
                        "gesunken / niedriger / stärker / häufiger / mindestens / höchstens“",
                        "μ =/</> μ0  und μ  </> μ0 ",
                        "θ =/</>  θ_0  und θ </>  θ_0 "
                    ],
                    childId: "EINSEITIG"
                }
            ]
        },

        EINSEITIG: {
            id: "EINSEITIG",
            type: "question",
            options: [
                {
                    label: "H_A: θ < θ_0",
                    childId: "LINKS_SEITIG"
                },
                {
                    label: "H_A: θ > θ_0",
                    childId: "RECHTS_SEITIG"
                }
            ],
            question: "Links- oder rechtsseitig?"
        },

        ZWEISEITIG: {
            id: "ZWEISEITIG",
            type: "solution",
            fertig: true,
            points: ["Einfach merken für die Auswahl der korrekten Formeln später"],
            title: "Zweiseitiger Test"
        },

        LINKS_SEITIG: {
            id: "LINKS_SEITIG",
            type: "solution",
            fertig: true,
            points: ["Einfach merken für die Auswahl der korrekten Formeln später"],
            title: "Linksseitiger Test",
            frage: [
                <span><b>Merksatz:</b> Wenn man von klein zu groß geht ({"<"}), dann steht θ auf der linken Seite: {"θ < θ_0"}  </span>
            ]
        },

        RECHTS_SEITIG: {
            id: "RECHTS_SEITIG",
            type: "solution",
            fertig: true,
            points: ["Einfach merken für die Auswahl der korrekten Formeln später"],
            title: "Rechtsseitiger Test",
            frage: [
                <span><b>Merksatz:</b> Wenn man von klein zu groß geht ({"<"}), dann steht θ auf der rechten Seite: {"θ_0 < θ"}  </span>
            ]
        },


        HT_APPROX: {
            id: "HT_APPROX",
            type: "solution",
            title: "Approximativ?",
            points: [
                "Exakte Verteilung unhandlich (Binomial) und n groß ⇒ Normal-Approximation (de Moivre-Laplace / ZGS): Teststatistik ≈ N(0,1).",
                "Anteilstest: Varianz unter H₀ fest (p₀(1-p₀)) ⇒ „Varianz bekannt“, approximativer Gauß-Test.",
                "Gauß-Test (σ bekannt) und t-Test (unter Normalannahme) sind dagegen EXAKT, keine Approximation nötig.",
            ],
            frage: [
                "Sollte in der Klausur nicht nötig sein..."
            ]
        },

        TESTENTSCHEIDUNG_FEHLER: {
            id: "TESTENTSCHEIDUNG_FEHLER",
            type: "solution",
            title: "Entscheidung und Fehler",
            points: [
                "Im Verwerfungsbereich ⇒ H₀ verwerfen; sonst „nicht verwerfen“ (nicht „H₀ bewiesen“).",
                "Fehler 1. Art: H₀ verwerfen, obwohl wahr (≤α). Fehler 2. Art: H₀ behalten, obwohl falsch.",
                "p-Wert = kleinstes α, bei dem noch verworfen wird.",
            ],
        },

        // TODO noch nicht benutzt:
        THEORIE_WAHR_FALSCH: {
            id: "THEORIE_WAHR_FALSCH",
            type: "solution",
            title: "Wahr/Falsch & Theorie — Schnellchecks",
            points: [
                "Median: mind. Hälfte ≥ und mind. Hälfte ≤ Median ⇒ WAHR (Definition).",
                "p-Quantil ist ein Lagemaß ⇒ WAHR.",
                "X̄ erwartungstreu für E(X) bei iid ⇒ WAHR (E(X̄)=E(X_1)); gilt auch für Exp-Stichprobe.",
                "P(A|B)=P(A) ⇒ P(A|Bᶜ)=P(A) ⇒ WAHR (A,B unabhängig ⇒ A,Bᶜ unabhängig).",
                "Var(X) ≤ E(X²) ⇒ WAHR (Var=E(X²)-E(X)² ≤ E(X²)).",
                "Var(2X+Y-1)=4Var(X)+Var(Y) bei Unabh. ⇒ die Formel „2Var(X)+Var(Y)-1“ ist FALSCH (a wird quadriert, Konstante fällt weg).",
                "Geometrisch(½): P(X≤3|X>2)=½ ⇒ WAHR (Gedächtnislosigkeit; {X≤3}∩{X>2}={X=3}, ½).",
                "E(X)=0 ⇒ P(X>0)=P(X<0) ⇒ FALSCH (Gegenbeispiel: X=-1 mit 2/3, X=+2 mit 1/3).",
            ],
            references: ["K-5"],
            warning: "Nicht auswendig lernen, sondern die 1-Zeilen-Begründung mitdenken — in der Klausur variieren die Zahlen.",
        },
    },
}