// noinspection JSNonASCIINames

import type {DecisionGraph} from "../components/DecisionKey/decisionTree.types";

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
 "list": ["Definieren Sie eine Zufallsvariable X, die..."],
                            "child": {
                                "id": "R0",
                                "type": "solution",
                                "title": "ZV als Abbildung",
                                "points": [
                                    "Definitionsbereich Ω, Wertebereich/Bildbereich X(Ω), Vorschrift ω↦X(ω).",
                                    "Wertebereich (Argumente) ≠ Bildbereich (angenommene Werte).",
                                    "Ref: K-1b."
                                ],
                                "aufgaben": [
                                    "1.3.1a", "1.3.3b-c"
                                ]
                            }
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

// TODO warum existiert Erwartungswert Schlüssel machen als Option in Erwartungswert und Varianz

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
           // TODO aufgaben: ["1.1.1c", "1.1.3c", "1.2.3b", "PÜ 1.4.4b", "1.6.1b", "PÜ 1.6.4b"],
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
            // TODO aufgaben: ["1.3.1a", "1.3.3b-c", "K-1b"],
        },

        ZV_AUS_ZV: {
            id: "ZV_AUS_ZV",
            type: "solution",
            title: "ZV aus anderen ZV zusammensetzen",
            points: [
                "Zielgröße als Term in den gegebenen ZV ausdrücken (max, min, +, −, ·).",
                "System-Zuverlässigkeit: Reihe ⇒ min, Parallel ⇒ max. „K1,K2 oder K3,K4“ ⇒ X=max{min(T1,T2), min(T3,T4)}.",
                "Gewinn/Auszahlung: Auszahlung minus Einsatz, z.B. G=(M−N)−Einsatz.",
            ],
            // TODO aufgaben: ["1.5.3b", "2.1.1c"],
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
            // TODO aufgaben: ["2.1.3d-e", "2.1.1b", "2.2.3b", "2.3.3b-c", "K-3b"],
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
                aufgaben:
                    ["1.4.1", "1.4.4"],
            },

        TRIVIALES_EREIGNIS: {
            id: "TRIVIALES_EREIGNIS",
            type:
                "solution",
            title:
                "Triviales Ereignis",
            points:
                ["P(B)∈{0,1}⇒B ist von jedem A unabhängig."],
            aufgaben:
                ["1.4.1b"],
        },

        UNABHÄNGIGKEIT_DICHTE: {
            id: "UNABHÄNGIGKEIT_DICHTE",
            type:
                "solution",
            title:
                "ZV über gemeinsame Dichte",
            points:
                [
                    "Unabhängig ⇔ f(x,y)=f_X(x)f_Y(y) UND Träger ist ein Rechteck.",
                    "Schräger Träger {0≤x≤y≤1} koppelt die Variablen ⇒ nicht unabhängig.",
                ],
            aufgaben:
                ["1.4.2e", "PÜ 1.4.5", "PÜ 1.5.4d", "1.5.1d"],
        },

        FUNKTIONEN_UNABHÄNGIGER_ZV: {
            id: "FUNKTIONEN_UNABHÄNGIGER_ZV",
            type:
                "solution",
            title:
                "Funktionen unabhängiger ZV",
            points:
                [
                    "Disjunkte Variablengruppen ⇒ unabhängig (max{X,Y} ⊥ Z).",
                    "Gemeinsame Variable ⇒ i.A. nicht.",
                ],
            aufgaben:
                ["PÜ 1.5.5", "1.5.3c"],
        },


        DISKRETE_VERTEILUNG: {
            type: "solution",
            title:
                "Diskrete Verteilung",
            id:
                "DISKRETE_VERTEILUNG",
            points:
                [
                    "Für jedes x∈X(Ω): P(X=x) bestimmen; Σ=1 prüfen. Bei Laplace: abzählen.",
                    "Ref: K-1c/d; PÜ 1.3.4d."
                ],
            aufgaben:
                [
                    "1.3.1a", "1.3.3d"
                ]
        },

        NORMKONSTANTE: {
            type: "solution",
            title:
                "Dichte / Konstante c",
            // TODO noch für einfache / mehrfache dichte?
            id:
                "NORMKONSTANTE",
            points:
                [
                    "c aus ∫_Träger c·g(x)dx=1 ⇒ c=(∫g)^−1. Danach f≥0 und ∫f=1 bestätigen.",
                    "Ref: K-2a; PÜ 1.5.4a."
                ],
            aufgaben:
                [
                    "1.2.2a", "1.3.1b", "1.4.2a (gemeinsam)", "1.5.1a", "2.1.2a (gemeinsam)"
                ]
        },

        VERTEILUNG: {
            type: "question",
            question:
                "Verteilungen",
            crumb: "Verteilung",
            id:
                "VERTEILUNG",
            options:
                [
                    {
                        label: "Diskrete Verteilung µ_X(x)=P(X=x) oder μ(X,Y) als Tabelle", // TODO Aufteilen in
                        // μ(X,Y ) und μX
                        list: [
                            "Berechnen Sie die Verteilung von X, indem Sie die zugehörige Wahrscheinlichkeitsfunktion μX bestimmen.",
                            "Bestimmen Sie jeweils die Verteilung der Zufallsvariablen"
                        ],
                        childId: "DISKRETE_VERTEILUNG",
                    },
                    {
                        childId: "GEMEINSAME_VERTEILUNG",
                        list: [
                            "Bestimmen Sie die gemeinsame Verteilung von X1 und Y"
                        ],
                        label: "Gemeinsame Verteilung zweier ZV"
                    },
                    {
                        childId: "RANDVERTEILUNG",
                        label: "Randverteilung aus gemeinsamer Verteilung bestimmen",
                        list: [
                            "Berechnen Sie die Randverteilungen μX von X und μY von Y"
                        ]
                    }
                ]
        },

        F_X: {
            type: "question",
            crumb: "Verteilungsfunktion",
            question:
                "Welche Art von Verteilungsfunktion soll es sein?",
            id:
                "F_X",
            options:
                [
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
            type: "solution",
            id: "F_X_AUS_RANDDICHTE",
            title: "Verteilungsfunktion aus Randdichte berechnen",
            aufgaben: [
                "1.4.2d", "1.5.1c"
            ]
        },

        F_X_AUS_DICHTE: {
            type: "solution",
            id: "F_X_AUS_DICHTE",
            title: "Verteilungsfunktion aus Dichte berechnen",
            points: [
                "Integrieren: F(x)=∫_{−∞}^x f. Stückweise über Trägerintervalle; f=F'.",
            ]
        },

        F_X_AUS_GRAPH: {
            type: "solution",
            id: "F_X_AUS_GRAPH",
            title: "Diskrete Verteilungsfunktion aus Graph ablesen",
            points: [
                "Rechtsstetige Treppenfunktion, Sprunghöhe an x=P(X=x). Stückweise angeben."
            ],
            aufgaben: [
                "1.3.2b"
            ]
        },

        // , "K-2b/c"
        F_X_STETIG: {
            type: "question",
            crumb: "Stetig",
            question:
                "Stetige Verteilungsfunktion bestimmen aus...",
            id:
                "F_X_STETIG",
            options: [
                {
                    label: "Randdichte fX(x)",
                    childId: "F_X_AUS_RANDDICHTE",
                    list: [
                        "Berechnen Sie die Verteilungsfunktion aus fX(x)"
                    ]
                },
                {
                    label: "Verteilungsfunktion F(x) ohne Sprünge",
                    childId: "F_X_AUS_GRAPH",
                    list: [
                        "Die Funktion F sei durch den folgenden Graphen gegeben..."
                    ]
                },
                {
                    label: " Dichte f(x)",
                    childId: "F_X_AUS_DICHTE",
                    list: [
                        "Berechnen Sie die Verteilungsfunktion aus fX"
                    ]
                }
            ]
        },

        F_X_AUS_WFK: {
            type: "solution",
            id: "F_X_AUS_WFK",
            title: "Verteilungsfunktion aus Wahrscheinlichkeitsfunktion berechnen",
            aufgaben: [
                "1.3.1a"
            ]
        },
        F_X_AUS_WS: {
            type: "solution",
            id: "F_X_AUS_WS",
            title: "Verteilungsfunktion aus Wahrscheinlichkeiten P(X=x) berechnen",
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "F(x)=Σ_{x_i ≤ x} P(X=x_i): Wahrscheinlichkeiten von links aufaddieren.",
                "Stückweise angeben (Treppe); rechtsstetig, Sprunghöhe an x = P(X=x).",
            ],
            aufgaben: ["K-1e??", "1.3.3e??"], // TODO überprüfen
        },
        F_X_AUS_VF: {
            type: "solution",
            id: "F_X_AUS_VF",
            title: "Stetige Verteilungsfunktion aus Graph ablesen",
            aufgaben: [
                "1.3.2b"
            ]
        },

        //  "1.3.3e", "K-1e/f"
        F_X_DISKRET: {
            type: "question",
            crumb: "Diskret",
            question:
                "Diskrete Verteilungsfunktion bestimmen aus...",
            id:
                "F_X_DISKRET",
            options: [
                {
                    label: "Aus Verteilungsfunktion F(x) mit Sprüngen",
                    childId: "F_X_AUS_VF",
                    list: [
                        "Die Funktion F sei durch den folgenden Graphen gegeben..."
                    ]
                },
                {
                    label: "Aus Wahrscheinlichkeiten P(X=x)",
                    childId: "F_X_AUS_WS",
                    list: [
                        "Berechnen Sie die Verteilungsfunktion aus den gegebenen Wahrscheinlichkeiten"
                    ]
                },
                {
                    label: "Aus Wahrscheinlichkeitsfunktion μX",
                    childId: "F_X_AUS_WFK",
                    list: [
                        "Berechnen Sie die Verteilungsfunktion aus μX"
                    ]
                }
            ]
        },

        RANDDICHTE: {
            type: "solution",
            title:
                "Randdichte",
            id:
                "RANDDICHTE",
            aufgaben:
                [
                    "1.4.2c", "1.5.1b"
                ]
        },

        GEMEINSAME_VERTEILUNG: {
            type: "solution",
            title:
                "Gemeinsame Verteilung zweier ZV",
            id:
                "GEMEINSAME_VERTEILUNG",
            points:
                [
                    "Matrix P(X=x,Y=y).",
                    "Mit Zurücklegen ⇒ unabhängig ⇒ Produkt der Ränder; ohne Zurücklegen ⇒ nicht.",
                    "Ref: K-1c; PÜ 1.3.4f/g"
                ],
            aufgaben:
                [
                    "1.3.3f-g", "K1-c"
                ]
        },

        RANDVERTEILUNG: {
            type: "solution",
            title:
                "Randverteilung",
            id:
                "RANDVERTEILUNG",
            points:
                [
                    "P(X=x)=Σ_y P(X=x,Y=y) (Zeilen-/Spaltensummen).",
                    "Ref: K-1d; PÜ 2.1.5d."
                ]
        },

        VERTEILUNG_ERKENNEN: { // Anmerkung: Von Claude erstellt
            id: "VERTEILUNG_ERKENNEN",
            type: "solution",
            title: "Welche Verteilung liegt vor?",
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "Einzelner Ja/Nein-Versuch ⇒ Bernoulli(p): E=p, Var=p(1−p).",
                "Anzahl Erfolge in n unabhängigen, gleichen Versuchen ⇒ Binomial(n,p): E=np, Var=np(1−p).",
                "Wartezeit „bis zum ersten Erfolg“ (Nummer des Versuchs) ⇒ Geometrisch(p): E=1/p, Var=(1−p)/p².",
                "Anzahl seltener Ereignisse / „im Schnitt λ pro Einheit“ ⇒ Poisson(λ): E=Var=λ.",
                "Rein zufällig aus [a,b] ⇒ Gleichverteilung: E=(a+b)/2, Var=(b−a)²/12.",
                "Kontinuierliche Wartezeit/Lebensdauer, „exponentialverteilt mit Parameter λ“ ⇒ Exp(λ): E=1/λ, Var=1/λ², P(X>t)=e^(−λt).",
                "Summe/Mittel vieler iid (Näherung) ⇒ Normal(µ,σ²).",
            ],
            warning: "Geometrisch: zwei Konventionen (ab 1 mit E=1/p vs. ab 0 mit E=(1−p)/p) — „Nummer des Wurfs“ ⇒ ab 1. Exp: „Parameter 1/5“ heißt λ=1/5, also E=5 (nicht 1/5). Binomial nur bei UNABHÄNGIGEN, gleich­verteilten Versuchen (mit Zurücklegen / feste Erfolgs-W.).",
            aufgaben: ["K-3c", "2.2.3b", "2.3.3b", "PÜ 2.2.6d", "1.5.2"],
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
            // TODO aufgaben: ["1.3.1a(v)", "1.3.1b(iii)", "K-1f", "K-2c"],
        },

        VF_GRAPH_LESEN: {
            type: "solution",
            title:
                "VF-Graph lesen",
            id:
                "VF_GRAPH",
            points:
                [
                    "Sprünge⇒diskreter Anteil, P(X=x)=Sprunghöhe.",
                    "Stetig steigend⇒Dichteanteil, f=F'.",
                    "Beides⇒gemischte Verteilung.",
                    "P(a<X≤b)=F(b)−F(a).",
                    "Bei einem Sprung ist P(X=x)>0: offene/geschlossene Grenzen sind dann nicht egal."
                ],
            aufgaben:
                ["1.3.1a-b", "1.3.2a-b"]
        },

        ZVG: {
            question: "",
            crumb: "Verteilungen & Dichten",
            type:
                "question",
            id:
                "ZVG",
            options:
                [
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
                        childId: "VERTEILUNG_ERKENNEN", // TODO
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
                        label: "Verteilungsfunktionen aus Graph", //  diskret / stetig / gemischt
                        list: [
                            "Skizzieren Sie den Graphen der Verteilungsfunktion.",
                            //"Die Funktion F sei durch den folgenden Graphen gegeben"
                        ],
                        childId: "VF_SKIZZIEREN",
                    },
                    {
                        label: "Randdichte bestimmen",
                        list: [
                            "Bestimmen Sie die Randdichten von X und Y "
                        ],
                        childId: "RANDDICHTE",
                    }
                ]
        },

        W1: {
            id: "W1",
            type:
                "question",
            crumb: "Anzahl & Typ",
            question:
                "Was und wie viele sind jeweils beteiligt?",
            options:
                [
                    {
                        label: "Ein Ereigniss",
                        childId: "W_EIN_ERG",
                        list: [
                            "Berechnen Sie mit Hilfe der Wahrscheinlichkeitsfunktion µ die Wahrscheinlichkeiten von A, B und C."
                        ],
                    },
                    {
                        label: "Mehrere Ereignisse",
                        childId: "W_MEHR_ERG",
                        list: [
                            "Bestimmen Sie deren Wahrscheinlichkeiten bzw. bedingte" +
                            " Wahrscheinlichkeiten.",
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
                            "Wahrscheinlichkeit, daß Jean insgesamt nicht länger als 20 Minuten benötigt vom Eintre!en" +
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
            type: "question",
            crumb: "Ein Ereignis",
            question:
                "Fallunterscheidung: Wahrscheinlichkeit eines Ereignisses berechnen",
            id:
                "W_EIN_ERG",
            options:
                [
                    {
                        label: "Laplace / abzählbar (zählen)",
                        childId: "WLP1",
                        list: [
                            "Wir würfeln zweimal mit einem fairen Würfel...",
                            "Wir drehen ein Glücksrad dreimal hintereinander .. Das Glücksrad ist in vier" +
                            " gleichgroße Viertel unterteilt"
                        ]
                    }
                ]
        },


        GR_KL_EXP: {
            type: "solution",
            id: "GR_KL_EXP",
            title: "P(X>t) / P(X<t) einer exponentialverteilten ZV",
            //title: "X < / > x berechnen",
            aufgaben: [
                "1.5.2a"
            ], // TODO
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "Exp(λ): P(X>t)=e^(−λt), P(X≤t)=1−e^(−λt) (t≥0).",
                "„länger als t warten“ ⇒ direkt e^(−λt) (Survival-Funktion, kein Integral nötig).",
                "Parameter-Konvention: „Parameter 1/5“ ⇒ λ=1/5, E=5. Beispiel 1.5.2a: P(X>10)=e^(−10/5)=e^(−2).",
            ],
        },

        W_MEHR_ERG: {
            type: "question",
            crumb: "Mehrere Ereignisse",
            question:
                "Wahrscheinlichkeit mehrerer Ereignisse berechnen",
            id:
                "W_MEHR_ERG",
            options:
                [
                    {
                        label: "Bedingte Wahrscheinlichkeit P(A|B), „gegeben, dass“, Rückwärts-Frage",
                        childId: "BEDINGTE_WS",
                        list: [
                            "Bestimmen Sie deren Wahrscheinlichkeiten bzw. bedingte" +
                            " Wahrscheinlichkeiten.",
                            "Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf"
                        ]
                    },
                    {
                        label: "Teilbarkeit, Vereinigung",
                        childId: "EIN_AUSSCHLUSS",
                        list: [
                            "Berechnen Sie P(A ∪ B ∪ C)"
                        ]
                    }
                ]
        },

        BEDINGTE_WS: {
            question: "Bedingte Wahrscheinlichkeit & Bayes",
            id:
                "BEDINGTE_WS",
            crumb: "Bedingte Wahrscheinlichkeit",
            type:
                "question",
            options:
                [
                    {
                        label: "Direkt P(A|B)",
                        list: [],
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
                        list: [
                            "Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf"
                        ],
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
            type: "solution",
            title:
                "Direkte bedingte Wahrscheinlichkeit",
            id:
                "DIREKT_BEDINGT",
            points:
                [
                    "P(A|B)=P(A∩B)/P(B), P(B)>0.",
                    "Ref: PÜ 1.6.5."
                ]
        },

        TOTALE_WS: {
            type: "solution",
            title:
                "Totale Wahrscheinlichkeit",
            id:
                "TOTALE_WS",
            points:
                [
                    "P(A)=Σ_i P(A|B_i)P(B_i).",
                    "Ref: PÜ 1.6.4d, 1.6.6d"
                ],
            aufgaben: [
                "1.6.1c"
            ]
        },

        BAYES: {
            type: "solution",
            title:
                "Bayes",
            id:
                "BAYES",
            points:
                [
                    "P(B_k|A)=P(A|B_k)P(B_k)/Σ_iP(A|B_i)P(B_i).",
                    "Zweistufiges Experiment erkennen.",
                    "Ohne Zurücklegen ⇒ Züge abhängig.",
                    "Ref: PÜ 1.6.4e, 1.6.6e"
                ],
            aufgaben: [
                "1.6.1d"
            ]
        },

        RECHENREGELN_BEDINGTE_WS: {
            type: "solution",
            title:
                "Rechenregeln anwenden",
            id:
                "RECHENREGELN_BEDINGTE_WS",
            points:
                [
                    "P(Aᶜ|D)=1−P(A|D); P(A∪B|D)=P(A|D)+P(B|D)−P(A∩B|D).",
                    "P(A∩B|D) folgt nicht allein aus P(A|D),P(B|D).",
                    "Ref: PÜ 1.6.5."
                ]
        },

        GEDÄCHTNISLOSIGKEIT: {
            type: "solution",
            title:
                "Gedächtnislosigkeit",
            id:
                "GEDÄCHTNISLOSIGKEIT",
            points:
                [
                    "P(X>t+s|X>s)=P(X>t)=e^(−λt)."
                ],
            aufgaben: ["1.6.2"]
        },

        W_EIN_ZV: {
            type: "question",
            crumb: "Eine Zufallsvariable",
            question:
                "Fall: Wahrscheinlichkeit einer Zufallsvariablen",
            id:
                "W_EIN_ZV",
            options:
                [
                    {
                        //label: "P(X ≤ x) bzw. P(X ≤ x) / dass eine Zufallsvariable mindestens oder maximal" +
                        //    " einen bestimmten Wert hat",
                        label: "Summe/Anzahl unabhängiger Ja-Nein-Versuche (Binomial): P(S≥k) / P(S≤k)",
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
                        list: [
                            "Gegeben Dichte: P(X > 0), P(( 1/2, unendl.)), P(X = 0)"
                        ]
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
            question: "Unter welchen Bedingungen?",
            type: "question",
            crumb: "Bedingungen",
            id: "GR_KL_EINE_ZV",
            options: [
                {
                    label: "Zufallsvariablen sind unabhängig",
                    childId: "UNABHÄNGIG_GEQ_LEQ",
                    list: [
                        "Bernoulli-Experiment"
                    ]
                },
                {
                    //label: "Zufallsvariablen sind nicht unabhängig? Oder Exponentialverteilt?",
                    label: "Einzelne exponentialverteilte Wartezeit: P(X>t) / P(X<t)",
                    childId: "GR_KL_EXP",
                    list: [
                        "Wartezeit"
                    ]
                }
            ]

        },

        W_MEHR_ZV: {
            type: "question",
            crumb: "Mehrere Zufallsvariablen",
            question:
                "Fall: Wahrscheinlichkeit mehrerer Zufallsvariablen",
            id:
                "W_MEHR_ZV",
            options:
                [
                    {
                        label: "P(max ≤ x) oder P(min ≤ x) unabhängiger ZV",
                        childId: "VERTEILUNGSFUNKTION_MAX_MIN",
                        list: [
                            "P(min≤x)"
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
                            "Wahrscheinlichkeit, daß Jean insgesamt nicht länger als 20 Minuten benötigt vom Eintre!en" +
                            " an der Haltestelle bis zur Ankunft an der Universität"
                        ]
                    },
                ]
        },


        SUMME_ZV: {
            type: "question",
            crumb: "Bedigungen",
            question: "Unter welchen Bedingungen?",
            id: "SUMME_ZV",
            options: [
                {
                    label: "X und Y unabhängig",
                    childId: "FALTUNG_SUMME_UNABHÄNGIGER_ZV",
                    list: [
                        "Wahrscheinlichkeit, daß Jean insgesamt nicht länger als 20 Minuten benötigt vom Eintre!en" +
                        " an der Haltestelle bis zur Ankunft an der Universität"
                    ]
                }, // TODO nicht unabhängig
            ]
        },

        FALTUNG_SUMME_UNABHÄNGIGER_ZV: {
            type: "solution",
            title:
                "Faltung / Summe unabhängiger ZV",
            id:
                "FALTUNG_SUMME_UNABHÄNGIGER_ZV",
            points:
                [
                    "f_{X+Y}(z)=∫f_X(x)f_Y(z−x)dx.",
                    "Summe von n unabh. Exp(λ)=Erlang: f_{S_n}(z)=λ^n z^{n−1}/(n−1)!·e^(−λz).",
                    "Alternativ Doppelintegral über {x+y≤c}∩Träger.",
                    "Setzt Unabhängigkeit voraus."
                ],
            aufgaben: [
                "1.5.2b-c"
            ]
        },

        VERTEILUNGSFUNKTION_MAX_MIN: {
            type: "solution",
            title:
                "Verteilungsfunktion von max / min",
            id:
                "VERTEILUNGSFUNKTION_MAX_MIN",
            points:
                [
                    "P(max≤x)=∏F_i(x).",
                    "P(min≤x)=1−∏(1−F_i(x)).",
                    "Minimum von n unabh. Exp(λ) ist Exp(nλ).",
                    "Reihe⇒min, Parallel⇒max."
                ],
            aufgaben: [
                "1.5.3a"
            ]
        },

        GEMEINSAME_DICHTE: {
            type: "solution",
            title:
                "Doppelintegral aus gemeinsamer Dichte",
            id:
                "GEMEINSAME_DICHTE",
            points:
                [
                    "Integrationsbereich {Bedingung} ∩ Träger skizzieren, dann integrieren.",
                    "z.B. P(X>Y)=∬_{x>y}f(x,y)dxdy.",
                    "Ref: PÜ 1.5.4e; HA 1.4.2b"
                ],
            aufgaben: [
                "1.5.1e"
            ]
        },

        KONTINUIERLICHE_DICHTE: {
            type: "solution",
            title:
                "Wahrscheinlichkeit über eine Dichte",
            id:
                "KONTINUIERLICHE_DICHTE",
            points:
                [
                    "P((a,b]) = ∫_a^b f. Grenzen auf den Träger {f>0} einschränken.",
                    "P(Punkt)=0 (stetig) → offen/geschlossen egal: außer bei einem Sprung.",
                    "Ref: K-2d; HA 1.2.4."
                ]
        },

        UNABHÄNGIG_GEQ_LEQ: {
            type: "solution",
            // title:  "Wahrscheinlichkeit, dass eine ZV",
            title: "P(S≥k)/P(S≤k) einer Summe unabhängiger Bernoulli (Binomial)",
            id:
                "UNABHÄNGIG_GEQ_LEQ",
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "S = Σ X_i mit X_i iid Bernoulli(p) ⇒ S ~ Binomial(n,p).",
                "P(S≥k)=Σ_{j=k}^n C(n,j) p^j (1−p)^(n−j); „mindestens k“ ⇒ untere Summationsgrenze k.",
                "1.4.3: „besteht“ = ≥2K von 4K ⇒ P(S≥2K); „Note 2,3“ = ≥3K ⇒ P(S≥3K). Für konkrete K explizit ausrechnen.",
                "Bei großem n statt exakt: Normal-/Poisson-Approximation (siehe Approximationen).",
            ],
            aufgaben:
                [
                    "1.4.3b-d"
                ]
        },

        WLP1: {
            id: "WLP1",
            crumb: "Laplace-Fall",
            type:
                "question",
            question:
                "Laplace / abzählbar: welcher Unterfall?",
            options:
                [
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
                        list: [
                            "A das Ereignis ist, daß mindestens ein Würfel eine gerade Zahl zeigt"
                        ]
                    },
                    {
                        label: "x-groß oder größer / mindestens Wert x hat",
                        childId: "MAX_MIN_DISKRET_LAPLACE"
                         // TODO list
                    },
                    {
                        label: "Ereignis lässt sich auf mehrere andere Ereignisse herunterbrechen; „mindestens eine" +
                            " von mehreren Eigenschaften“, Teilbarkeit," +
                            " Vereinigung",
                        childId: "EIN_AUSSCHLUSS",
                        list: [
                            "Berechnen Sie P(A ∪ B ∪ C)"
                        ]
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
                "„größte > k“ = 1 − „alle ≤ k“ (Gegenereignis).",
                "„kleinste ≥ k“ = „alle ≥ k“ = ((m−k+1)/m)^n.",
            ],
            aufgaben: ["PÜ 1.4.4b (B, D)"],
        },

        FIXPUNKTE_PERMUTATIONEN: {
            type: "solution",
            title:
                "Fixpunkte einer Permutation (genau k / mindestens k)",
            id:
                "FIXPUNKTE_PERMUTATIONEN",
            points:
                [
                    "A_l={ω(l)=l}, dann Inklusion-Exklusion.",
                    "Schnitt: P(A_{l₁}∩…∩A_{lⱼ})=(n−j)!/n!.",
                    "Genau k Fixpunkte: (1/k!)Σ_{j=0}^{n−k}(−1)^j/j! → e⁻¹/k! für n→∞.",
                    "Kein Fixpunkt: D_n=n!Σ_{j=0}^n(−1)^j/j!.",
                    "„mindestens k“ ≠ „genau k“; P(B_k)=P(C_k)−P(C_{k+1}).",
                    "Ref: PÜ 1.0.3"
                ],
            aufgaben: [
                "2.1.3"
            ]
        },

        EIN_AUSSCHLUSS: {
            type: "solution",
            title:
                "Ein-/Ausschlussprinzip",
            id:
                "EIN_AUSSCHLUSS",
            points:
                [
                    "P(A∪B∪C) = ΣP − ΣP(Zweier-Schnitt) + P(Dreier-Schnitt) (Vorzeichen alternieren).",
                    "Teilbarkeit in {1,…,n}: #{k:d|k}=⌊n/d⌋; „durch d₁ und d₂“ = Teilbarkeit durch kgV(d₁,d₂).",
                    "Nicht P(durch 2)·P(durch 3), sondern ⌊n/6⌋/n für den Schnitt."
                ],
            aufgaben:
                ["1.2.3c"]
        },

        GEGENEREIGNIS: {
            type: "solution",
            title:
                "Gegenereignis",
            id:
                "GEGENEREIGNIS",
            points:
                [
                    "„mindestens einmal“ ist mühsam direkt: nimm das Komplement.",
                    "P(mind. einmal) = 1 − P(keinmal)."
                ],
            aufgaben:
                [
                    "1.1.1c-d", "1.1.5b."
                ]
        },

        DIREKTES_ABZÄHLEN: {
            type: "solution",
            title:
                "Direktes Abzählen",
            id:
                "DIREKTES_ABZÄHLEN",
            "aufgaben":
                [
                    "1.1.1c-d", "1.1.2b-c", "1.1.3c-d", "1.4.4", "1.2.3b(-c)"
                ],
            points:
                [
                    "P(A) = #A/#Ω. Kombinatorik-Tabelle nutzen (siehe Anhang K)."
                ]
        },

        M1: {
            id: "M1",
            type:
                "question",
            crumb: "Bedingungen",
            question:
                "Modellieren unter welcher Bedingung oder Verteilung?",
            options:
                [
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
                        list: [
                            "bis die Augensumme zum ersten Mal gleich 5 ist"
                        ]
                    },
                    {
                        childId: "ÜBERABZÄHLBARER_RAUM",
                        label: "Rein zufällig aus einem Intervall / einer Fläche, kontinuierlich?",
                        list: [
                            "Sei (X, Y) uniform verteilt auf der Menge ...",
                            "Aus dem Intervall [0, 1] wird rein zufällig eine Zahl gezogen",
                            "Sowohl Gerd als auch Andrea treffen mit uniformer Verteilung zwischen 12:00 und 13:00" +
                            " Uhr ein..."
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
                        childId: "STATISTISCHES_MODELL",
                        label: "Eine Stichprobe soll ausgewertet werden (Statistik-Aufgabe)",
                        list: [
                            "Geben Sie das zugehörige statistische Modell vollständig an"
                        ]
                    }

                ],
        },

        MEHRERE_FAKTOREN: { // TODO
            type: "solution",
            title: "Zusammengesetzter endlicher Ereignisraum",
            aufgaben: [
                "1.6.1a"
            ],
            id: "MEHRERE_FAKTOREN"
        },

        STATISTISCHES_MODELL: {
            id: "STATISTISCHES_MODELL",
            title:
                "Statistisches Modell",
            type:
                "solution",
            points:
                [
                    "Angeben: Stichprobenraum X, Parameterraum Θ, Verteilungsannahme (P_θ)_{θ∈Θ}.",
                    "Bernoulli-Fall: X = {0,1}^n, Θ = (0,1) (bzw. [0,1]), X_i iid Bernoulli(θ).",
                    "Annahmen benennen (unabhängig, identisch verteilt).",
                    "Ref: K-4a, 2.5.1."
                ],
            aufgaben: [
                "2.4.3a"
            ]
        },

        ABZÄHLBAR_UNENDLICHER_RAUM:
            {
                id: "ABZÄHLBAR_UNENDLICHER_RAUM",
                type:
                    "solution",
                title:
                    "Abzählbar unendlicher Raum",
                points:
                    [
                        "Ω = ℕ (oder ℕ₀), Wahrscheinlichkeitsfunktion P({k}) = p_k mit Σ p_k = 1.",
                        "Weitere sinnvolle Wahlen: fein (ganze Wurffolge) vs. grob (nur Endsumme): die interessierende Größe muss messbar bleiben.",
                        "Ref: PÜ 1.0.2, 1.1.6, 2.2.6."
                    ],
                aufgaben: [
                    "2.3.3a", // TODO zu 2.3.3 mehr erklären
                ]

            },

        ÜBERABZÄHLBARER_RAUM: {
            id: "ÜBERABZÄHLBARER_RAUM",
            type:
                "solution",
            title:
                "Überabzählbarer (kontinuierlicher) Raum",
            points:
                [
                    "Ω ⊆ ℝ^d, P(A) = ∫_A f. Gleichverteilung: f = 1/Vol(Ω) auf Ω.",
                    "Wahrscheinlichkeit = Länge/Fläche/Volumen des Ereignisses / des Grundgebiets.",
                    "P(einzelner Punkt) = 0. „exakt 1/7“ hat W. 0; „höchstens 1/100 entfernt“ ist ein Intervall.",
                    "Ref: K-2; PÜ 1.0.1, 1.4.5, 2.3.6."
                ]
        },

        BERNOULLI_MODELL: {
            id: "BERNOULLI_MODELL",
            type:
                "solution",
            title:
                "Bernoulli-Experiment(e)",
            aufgaben:
                [
                    "1.4.3a", "2.2.3a", "2.3.1a", "K-1a", "K-3a"
                ],
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "Jeder Versuch: Erfolg mit W. p, Misserfolg mit 1−p, unabhängig.",
                "Ω = {0,1}^n; P({ω}) = p^(#Einsen)·(1−p)^(#Nullen). NUR für p=1/2 ist das Laplace!",
                "Anzahl Erfolge S = Σ ω_i ~ Binomial(n,p).",
                "Annahmen benennen: Versuche unabhängig, gleiche Erfolgs-W. p.",
            ],
            warning: "Verwechslungsgefahr mit Laplace: {0,1}^n ist NICHT gleichverteilt, sobald p≠1/2.",

        },

        ALLGEMEINER_ENDLICHER_RAUM: {
            id: "ALLGEMEINER_ENDLICHER_RAUM",
            type:
                "solution",
            title:
                "Allgemeiner endlicher Wahrscheinlichkeitsraum",
            "aufgaben":
                [
                    "1.3.1"
                ],
            points: [
                "(Von Claude erstellt, noch nicht vollständig überprüft)",
                "Ω endlich, aber Ergebnisse NICHT gleichwahrscheinlich: P({ω}) einzeln festlegen, Σ P({ω})=1.",
                "Gewichte oft aus der Geometrie: Feldgröße/Fläche ∝ Wahrscheinlichkeit.",
                "Beispiel 1.3.1a (Glücksrad, Feld „1“ doppelt so groß): P(1)=2/5, P(2)=P(3)=P(4)=1/5.",
            ],
            warning:
                "Dies ist kein Laplace-Raum! Ein Laplace-Raum liegt nur vor, wenn alle Elementarergebnisse dieselbe Wahrscheinlichkeit haben."
        },

        LAPLACE: {
            id: "LAPLACE",
            type:
                "solution",
            title:
                "Endlicher Laplace-Raum",
            points:
                [
                    "Ω explizit als Menge angeben; bei mehrstufig/wiederholt als Produktraum Ω = {…}^n.",
                    "P(A) = #A / #Ω = günstige / mögliche, µ({ω}) = 1/#Ω.",
                    "Nur bei echter Gleichwahrscheinlichkeit. Auf dem Grundraum zählen, nicht auf der Summenebene (die Augensumme dreier Würfel ist nicht Laplace-verteilt)."
                ],
            aufgaben:
                [
                    "1.1.1a-b", "1.1.2a", "1.1.3a-b", "1.1.4??", "1.2.3a", "1.3.3a", "2.1.1a", "2.1.3a",
                    "1.4.4??", "2.2.3a",
                    // "2.2.2a",
                ],
            warning:
                "Die Augensumme mehrerer Würfel ist nicht Laplace-verteilt – auf dem Grundraum zählen!",
        },

        ERWARTUNGSWERT_VARIANZ: {
            crumb: "Umstände",
            id: "ERWARTUNGSWERT_VARIANZ",
            type: "question",
            question: "Erwartungswert & Varianz in welcher Variation?",
            description:
                "Existenz zuerst begründen: Endlicher Bildbereich ⇒ E und Var existieren stets; sonst Reihe/Integral auf Konvergenz prüfen.",
            options: [
                {
                    label:
                        "Diskret",
                    childId: "ERWARTUNGSWERT_DISKRET",
                    list: [
                        "Verteilungstabelle oder Wahrscheinlichkeiten gegeben oder errechenbar",
                        "Berechnen Sie den erwarteten Gewinn"
                    ]
                },
                {
                    label: "Stetig",
                    childId: "ERWARTUNGSWERT_STETIG",
                    list: [
                        "Dichte gegeben oder errechenbar"
                    ]
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
                        "Var(2X + Y − 1)"
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
                    list: [
                        "Begründungen angeben"
                    ]
                }

                /*
                 {label: "E von max/min oder Gewinn", childId: "ERWARTUNGSWERT_MAX_MIN_GEWINN"},
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
            // TODO aufgaben: ["PÜ 2.1.5c", "PÜ 2.1.6a", "2.1.2b", "K-1g", "K-2e"],
        },

        // TODO Aufteilen für einzelne Verteilungen?
        ERWARTUNGSWERT_DISKRET: {
            id: "ERWARTUNGSWERT_DISKRET",
            type: "solution",
            title: "Diskret",
            points: [
                "E(X)=Σx·P(X=x), Var(X)=E(X²)−E(X)².",
                "Standardverteilungen über Anhang V erkennen.",
            ],
            references: ["K-1g"],
            aufgaben: ["2.1.1d-e", "2.2.3c", "PÜ 2.1.4", "PÜ 2.1.5"],
        },

        ERWARTUNGSWERT_STETIG: {
            id: "ERWARTUNGSWERT_STETIG",
            type: "solution",
            title: "Stetig",
            points: ["E(X)=∫xf dx, Var(X)=∫x²f dx−E(X)²."],
            references: ["K-2e"],
            aufgaben: ["PÜ 2.1.6", "2.1.2b"],
        },

        LINEARE_TRANSFORMATION: {
            id: "LINEARE_TRANSFORMATION",
            type: "solution",
            title: "Lineare Transformation",
            points: [
                "E(aX+b)=aE(X)+b, Var(aX+b)=a²Var(X).",
                "b fällt in der Varianz weg, a wird quadriert.",
            ],
            aufgaben: ["PÜ 2.1.4d", "PÜ 2.1.6b"],
        },

        ERWARTUNGSWERT_SUMME: {
            id: "ERWARTUNGSWERT_SUMME",
            type: "solution",
            title: "Erwartungswert einer Summe",
            points: ["E(X+Y)=E(X)+E(Y): immer; keine Unabhängigkeit nötig."],
            aufgaben: ["PÜ 2.1.5f", "2.1.2c"],
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
                "Fixpunkte/Geschenke: E(S_N)=1; P(mind. ein Fixpunkt)→1−e^−1.",
            ],
            aufgaben: ["HA 2.1.3?", "PÜ 2.3.6b"],
        },

        /*
          ERWARTUNGSWERT_MAX_MIN_GEWINN: {
              id: "ERWARTUNGSWERT_MAX_MIN_GEWINN",
              type: "solution",
              title: "E von max/min-Gewinn",
              points: [
                  "Verteilung von M=max, N=min bestimmen, dann E.",
                  "„Ist das Spiel fair?“ ⇔ E(Gewinn)=0.",
              ],
              aufgaben: ["2.1.1"],
          },
         */

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
                    label: "n groß, np(1−p) groß",
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
                    list: [
                        "TODO" // TODO
                    ]
                },
                {
                    label: "„wie viele Runden/Stichproben n für W. ≥ …“",
                    childId: "STICHPROBENUMFANG_BESTIMMEN",
                    list: [
                        "Schätzen Sie mit Hilfe der Tschebyscheff-Ungleichung ab, wie viele Runden mit dem in" +
                        " bestimmten Spieleinsatz pro Runde mindestens gespielt werden müssen"
                    ]
                },
                {
                    label: "µ gesucht bei Normalverteilung",
                    childId: "NORMAL_MU_QUANTIL",
                    list: [
                        "Wie groß muss μ mindestens sein, damit..."
                    ]
                },
            ],
        },

        TSCHEBYSCHEFF: {
            id: "TSCHEBYSCHEFF",
            type: "solution",
            title: "Tschebyscheff",
            points: [
                "P(|X−E(X)|≥ε)≤Var(X)/ε².",
                "Nur obere Schranke, oft grob.",
                "Vielfaches des Erwartungswerts: P(X ≥ k·E(X)) ≤ Var(X)/((k−1)²·E(X)²)",
                "Nur obere Schranke, oft grob — starke Abweichung vom exakten Wert ist normal, kein Rechenfehler."
            ],
            aufgaben: ["PÜ 2.2.5", "PÜ 2.2.6", "2.2.1c", "2.2.2b"],
        },

        POISSON_APPROXIMATION: {
            id: "POISSON_APPROXIMATION",
            type: "solution",
            title: "Poisson-Approximation",
            points: ["Bin(n,p)≈Poi(λ), λ=np; P(X=k)≈e^−λ λ^k/k!."],
            aufgaben: ["PÜ 2.3.4", "PÜ 2.3.5", "2.3.1b"],
        },

        NORMAL_DE_MOIVRE_LAPLACE: {
            id: "NORMAL_DE_MOIVRE_LAPLACE",
            type: "solution",
            title: "Normal / de Moivre-Laplace",
            points: [
                "µ=np, σ=√(np(1−p)); Stetigkeitskorrektur ±½ beachten.",
                "P(a≤S_n≤b)≈Φ((b+½−µ)/σ)−Φ((a−½−µ)/σ).",
                "Φ^−1(0,95)≈1,645.",
            ],
           // warning: "''mehr als 140'' = S ≥ 141, also Schnittgrenze 140,5: P(S>140) ≈ 1 − Φ((140,5 − 125)/10) = 1
            // −" +
             //   " Φ(1,55) ≈ 0,061. Die Grenze 140,5 (Mitte zwischen 140 und 141) ist der springende Punkt — mit
            //   139,5 (→ Φ(1,45)) würde man versehentlich P(S ≥ 140) rechnen.",
            warning: "Richtung der Stetigkeitskorrektur genau prüfen: „> 140“ = „≥ 141“ ⇒ Schnittgrenze 140,5 (nicht 139,5). P(S>140)≈1−Φ((140,5−µ)/σ).",
            aufgaben: ["PÜ 2.2.4", "PÜ 2.3.6", "2.2.3d-e", "2.3.1b", "K-3e"],
        },

        ZENTRALER_GRENZWERTSATZ: {
            id: "ZENTRALER_GRENZWERTSATZ",
            type: "solution",
            title: "Zentraler Grenzwertsatz",
            points: ["(S_n−nµ)/(σ√n) bzw. (X̄−µ)/(σ/√n)≈N(0,1), dann Φ."],
            aufgaben: ["2.3.3c"],
        },

        STICHPROBENUMFANG_BESTIMMEN: {
            id: "STICHPROBENUMFANG_BESTIMMEN",
            type: "solution",
            title: "n bestimmen",
            points: [
                "Ungleichung mit [Tschebyscheff] oder [Normal-Approximation] aufstellen und nach n auflösen.",
            ],
            aufgaben: ["2.2.1d", "2.2.2c"],
        },

        NORMAL_MU_QUANTIL: {
            id: "NORMAL_MU_QUANTIL",
            type: "solution",
            title: "µ über Quantil bestimmen",
            points: ["P(Z≥µ−x)=Φ(x/σ), nach µ mit Quantil auflösen."],
            aufgaben: ["2.3.2c-d"],
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
                    list: [
                        "Bestimmen Sie das untere Quartil und das 90%-Quantil der Stichprobe"
                    ]
                },
                {
                    label: "Alle Werte um c verschoben", childId: "VERSCHIEBUNG_KENNZAHLEN",
                    list: [
                        "Angenommen jede(r) der Studierenden hätte 3 Punkte mehr erreicht"
                    ]
                },
                {
                    label: "Robustheit", childId: "ROBUSTHEIT",
                    list: [
                        "Wie groß kann der Median der oben genannten Daten höchstens werden, wenn ..."
                    ]
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
            aufgaben: [
                "2.4.1b",
                "PÜ 2.4.5a-c"],
        },

        STREUMASSE: {
            id: "STREUMASSE",
            type: "solution",
            title: "Streumaße",
            points: [
                "Spannweite=max−min; Varianz s²=1/nΣ(x_i−x̄)²; SD=√s²; mittlere abs. Abw. vom Median=1/nΣ|x_i−x̃|.",
                "1/n vs. 1/(n−1) nach Vorlesung prüfen.",
            ],
            aufgaben: ["PÜ 2.4.5f", "2.4.1e-f"],
        },

        QUANTILE: {
            id: "QUANTILE",
            type: "solution",
            title: "Quantile",
            points: ["Q₁=x_0.25, Q₃=x_0.75; IQR=Q₃−Q₁; p-Quantilabstand=x_{1−p}−x_p."],
            aufgaben: ["2.4.1c-d"],
        },

        VERSCHIEBUNG_KENNZAHLEN: {
            id: "VERSCHIEBUNG_KENNZAHLEN",
            type: "solution",
            title: "Verschiebung",
            points: ["x̄+c und x̃+c verschieben sich; Varianz/SD/Spannweite unverändert."],
            aufgaben: ["PÜ 2.4.5g-i"],
        },

        ROBUSTHEIT: {
            id: "ROBUSTHEIT",
            type: "solution",
            title: "Robustheit",
            points: [
                "Median ändert sich kaum bei wenigen extrem veränderten Werten; Mittel stark.",
            ],
            aufgaben: ["HA 2.4.1g"],
        },

        STREUMASS_BEWEISEN: {
            id: "STREUMASS_BEWEISEN",
            type: "solution",
            title: "Streumaß beweisen",
            points: [
                "s≥0; translationsinvariant s(x+c)=s(x); homogen s(ax)=|a|s(x); s=0 genau bei konstanten Daten.",
            ],
            aufgaben: ["HA 2.4.2"],
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
                 {label: "Varianzschätzer p̂(1−p̂)", childId: "VARIANZSCHÄTZER"}, TODO Anders einbringen
                 */
            ],
        },

        ERWARTUNGSTREUE: {
            id: "ERWARTUNGSTREUE",
            type: "solution",
            title: "Erwartungstreue",
            points: [
                "t erwartungstreu ⇔ E_θ[t(X)]=θ für alle θ; Bias=E_θ[t]−θ.",
                "E(X̄)=E(X₁)=µ ⇒ erwartungstreu.",
            ],
            aufgaben: ["PÜ 2.4.4a", "2.4.3d"],
        },

        RISIKO_MSE: {
            id: "RISIKO_MSE",
            type: "solution",
            title: "Risiko / MSE",
            points: ["R(θ,t)=E[(t−θ)²]=Var_θ(t)+Bias(t)².", "X̄: R=Var(X₁)/n→0."],
            aufgaben: ["PÜ 2.4.4b/c"],
        },

        SCHÄTZER_VERGLEICHEN: {
            id: "SCHÄTZER_VERGLEICHEN",
            type: "solution",
            title: "Schätzer vergleichen",
            points: [
                "t₁ mindestens so gut wie t₂ ⇔ R(θ,t₁)≤R(θ,t₂) für alle θ.",
                "Erst Bias, dann R=Var+Bias²; erwartungstreu ≠ risikominimal.",
            ],
            aufgaben: ["2.4.3e"],
        },

        VARIANZSCHÄTZER: {
            id: "VARIANZSCHÄTZER",
            type: "solution",
            title: "Varianzschätzer",
            points: [
                "p̂=1/nΣx_i: E[t]=(1−1/n)θ(1−θ) ⇒ nicht erwartungstreu, aber asymptotisch.",
            ],
            aufgaben: ["2.5.1"],
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
                "Ĵ=[p̂−z_{1−α/2}√(p̂(1−p̂)/n), p̂+z_{1−α/2}√(p̂(1−p̂)/n)]; z_0.975≈1,96.",
                "Niveau 1−α bestimmt z_{1−α/2}=Φ^−1(1−α/2).",
            ],
            aufgaben: ["PÜ 2.5.4", "2.5.2c"],
        },

        EXAKTES_KI: {
            id: "EXAKTES_KI",
            type: "solution",
            title: "Exaktes KI",
            points: ["Ohne Approximation (Computer)."],
            aufgaben: ["2.5.2a"],
        },

        STUDENT_T_KI: {
            id: "STUDENT_T_KI",
            type: "solution",
            title: "Student-t",
            points: ["t_{n−1}-Quantil statt z."],
            aufgaben: ["2.5.2b"],
        },

        KI_THEORIE: {
            id: "KI_THEORIE",
            type: "solution",
            title: "KI-Theorie",
            points: [
                "Überdeckung P_p(p∈J_n)≥1−α; p ist fest, Intervall zufällig.",
                "Niveau verdoppeln verdoppelt nicht die Länge. Schnitt zweier (1−α/2)-KI ist ein (1−α)-KI.",
            ],
            aufgaben: ["PÜ 2.5.5", "2.5.3"],
        },

        HYPOTHESENTEST: {
            id: "HYPOTHESENTEST",
            type: "question",
            crumb: "Hypothesentest",
            question: "Hypothesentest",
            options: [
                {
                    label: "Anteil/Wahrscheinlichkeit p, eine Stichprobe", childId: "ANTEILSTEST",
                    list: [
                        "Anteil/Häufigkeit in Vergleich zu früherem Wert: letzte Wahl, etc.",
                        "Anteil/Häufigkeit in Bezug auf Behauptung: Mindestens 90%, etc."
                    ]
                },
                {
                    label: "Normalverteilt, Varianz bekannt", childId: "GAUSS_TEST",
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
                    ]
                },
                {
                    label: "Zwei getrennte Stichproben, Anteile vergleichen",
                    childId: "ZWEI_STICHPROBEN_ANTEILSTEST",
                    list: [
                        "Anteil/Häufigkeit",
                        "im Hörsaal … vs. im Internet …"
                    ]
                },
                {
                    label: "Unsicher, ob ein- oder zweiseitig", childId: "TESTRICHTUNG_BESTIMMEN",
                    list: [
                        "Entscheidungshilfe"
                    ]
                },
                {
                    label: "Entscheidung über Verwerfung", childId: "TESTENTSCHEIDUNG_FEHLER",
                    list: [
                        "Entscheidungshilfe"
                    ]
                },
            ],
        },

        ANTEILSTEST: {
            id: "ANTEILSTEST",
            type: "solution",
            title: "Anteilstest",
            points: [
                "Z=(p̂−p₀)/√(p₀(1−p₀)/n)≈N(0,1). Beispiel H₀:p=p₀ gegen H₁:p<p₀: verwerfe bei Z<−z_{1−α}.",
            ],
            references: ["K-4"],
            aufgaben: ["PÜ 2.6.4"],
        },

        GAUSS_TEST: {
            id: "GAUSS_TEST",
            type: "solution",
            title: "Gauß-Test",
            points: ["Z=(X̄−µ₀)/(σ/√n)≈N(0,1). Varianz bekannt."],
            aufgaben: ["2.6.1"],
            // TODO ist das echt alles Gauss?
        },

        T_TEST: {
            id: "T_TEST",
            type: "solution",
            title: "t-Test",
            points: ["T=(X̄−µ₀)/(S/√n)~t_{n−1}, S²=1/(n−1)Σ(X_i−X̄)²."],
            references: ["Theorie 2.6"],
            aufgaben: ["HA 2.5.2b"],
        },

        GEPAARTER_T_TEST: {
            id: "GEPAARTER_T_TEST",
            type: "solution",
            title: "Gepaarter t-Test",
            points: [
                "D_i=X_i−Y_i; Ein-Stichproben-Test auf H₀:µ_D=0.",
                "Gepaarte Daten nicht als zwei unabhängige Stichproben behandeln.",
            ],
            aufgaben: ["2.6.3"],
        },

        // Kommt in Klausur glaube ich nicht dran
        ZWEI_STICHPROBEN_ANTEILSTEST: {
            id: "ZWEI_STICHPROBEN_ANTEILSTEST",
            type: "solution",
            title: "Zwei-Stichproben-Anteilstest",
            points: [
                "gepoolt p̂=(X₁+X₂)/(n₁+n₂); Z=(p̂₁−p̂₂)/√(p̂(1−p̂)(1/n₁+1/n₂))≈N(0,1).",
            ],
            aufgaben: ["2.6.2"],
        },

        TESTRICHTUNG_BESTIMMEN: {
            id: "TESTRICHTUNG_BESTIMMEN",
            type: "solution",
            title: "Richtung bestimmen",
            points: [
                "„gesunken / niedriger / stärker / häufiger / mindestens / höchstens“ ⇒ einseitig.",
                "„beträgt / verändert / gleich“ ⇒ zweiseitig.",
                "Verwerfungsbereich an der Alternative ausrichten.",
            ],
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
                "Var(X) ≤ E(X²) ⇒ WAHR (Var=E(X²)−E(X)² ≤ E(X²)).",
                "Var(2X+Y−1)=4Var(X)+Var(Y) bei Unabh. ⇒ die Formel „2Var(X)+Var(Y)−1“ ist FALSCH (a wird quadriert, Konstante fällt weg).",
                "Geometrisch(½): P(X≤3|X>2)=½ ⇒ WAHR (Gedächtnislosigkeit; {X≤3}∩{X>2}={X=3}, ½).",
                "E(X)=0 ⇒ P(X>0)=P(X<0) ⇒ FALSCH (Gegenbeispiel: X=−1 mit 2/3, X=+2 mit 1/3).",
            ],
            references: ["K-5"],
            warning: "Nicht auswendig lernen, sondern die 1-Zeilen-Begründung mitdenken — in der Klausur variieren die Zahlen.",
        },
    },
}