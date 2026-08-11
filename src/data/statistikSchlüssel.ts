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
 */

// VF GRaph zeichnen:  "1.3.1b"
// TODO Wfl bestimmen wie bei 1.3.1...

// STAND: 143


export const statistik_schlüssel_json: DecisionGraph = {
    rootId: "START",
    nodes: {
        START: {
            id: "START",
            type: "question",
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
                    ],
                    childId: "M1",
                },
                {
                    label: "Definieren von Ereignissen, Zufallsvariablen etc.",
                    list: [
                        //  "Definieren Sie eine Zufallsvariable X, die..."
                    ], // TODO
                    childId: "",
                },
                {
                    label:
                        "Wahrscheinlichkeit P(…) eines konkreten Ereignisses bzw. einer Zuvallsvariable berechnen",
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
                    ],
                    childId: "ZVG",
                },
                {
                    label: "Unabhängigkeit prüfen oder bestimmen",
                    list: [],
                    childId: "UNABHÄNGIGKEIT",
                },
                {
                    label: "Erwartungswert oder Varianz berechnen",
                    list: [],
                    childId: "ERWARTUNGSWERT_VARIANZ",
                },
                {
                    label: "Etwas näherungsweise/approximativ oder eine Schranke oder einen Grenzwert berechnen",
                    list: [],
                    childId: "APPROXIMATIONEN_GRENZWERTE_SCHRANKEN",
                },
                {
                    label: "Kennzahlen berechnen, für die ein konkreter Datensatz gegeben ist",
                    list: [],
                    childId: "DESKRIPTIVE_STATISTIK",
                },
                {
                    label: "Aussage über einen Schätzer treffen",
                    list: [],
                    childId: "SCHÄTZER",
                },
                {
                    label: "Etwas mit Konfidenzintervallen",
                    list: [],
                    childId: "KONFIDENZINTERVALL",
                },
                {
                    label: "Hypothese testen",
                    list: [],
                    childId: "HYPOTHESENTEST",
                },
            ],
        },

        UNABHÄNGIGKEIT: {
            id: "UNABHÄNGIGKEIT",
            type:
                "question",
            question:
                "Unabhängigkeit prüfen, welcher Fall liegt vor?",
            options:
                [
                    {label: "Zwei Ereignisse", childId: "ZWEI_EREIGNISSE_UNABHÄNGIGKEIT"},
                    {label: "Mehrere Ereignisse „gemeinsam unabhängig?“", childId: "MEHRERE_EREIGNISSE_UNABHÄNGIGKEIT"},
                    {label: "P(B)∈{0,1}", childId: "TRIVIALES_EREIGNIS"},
                    {
                        label: "ZV über gemeinsame Dichte",
                        childId: "UNABHÄNGIGKEIT_DICHTE"
                    },
                    {label: "Funktionen unabhängiger ZV", childId: "FUNKTIONEN_UNABHÄNGIGER_ZV"},
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

        ZV_DEF: {
            type: "solution",
            title:
                "Zufallsvariable definieren",
            id:
                "ZV_DEF",
            points:
                [
                    "Definitionsbereich Ω, Wertebereich/Bildbereich X(Ω), Vorschrift ω↦X(ω).",
                    "Wertebereich (Argumente) ≠ Bildbereich (angenommene Werte).",
                    "Ref: K-1b."
                ],
            aufgaben:
                [
                    "1.3.1a", "1.3.3b-c"
                ]
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
                    "Ref: K-2a; PÜ 1.5.4a; 2.1.2a."
                ],
            aufgaben:
                [
                    "1.2.2a", "1.3.1b", "1.4.2a (gemeinsam)", "1.5.1a"
                ]
        },

        VERTEILUNG: {
            type: "question",
            question:
                "Verteilungen",
            id:
                "VERTEILUNG",
            options:
                [
                    {
                        label: "Diskrete Verteilung µ_X(x)=P(X=x) als Tabelle",
                        list: [
                            "Berechnen Sie die Verteilung von X, indem Sie die zugehörige Wahrscheinlichkeitsfunktion μX bestimmen.",
                            "Bestimmen Sie jeweils die Verteilung der Zufallsvariablen"
                        ],
                        childId: "DISKRETE_VERTEILUNG",
                    },
                    {
                        childId: "GEMEINSAME_VERTEILUNG",
                        list: [],
                        label: "Gemeinsame Verteilung zweier ZV"
                    },
                    {
                        childId: "RANDVERTEILUNG",
                        label: "Randverteilung aus gemeinsamer Verteilung bestimmen"
                    }
                ]
        },

        F_X: {
            type: "question",
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
            title: "Stetige Verteilungsfunktion aus Graph ablesen",
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
            question:
                "Stetige Verteilungsfunktion bestimmen aus...",
            id:
                "F_X_STETIG",
            options: [
                {
                    label: "Randdichte fX(x)",
                    childId: "F_X_AUS_RANDDICHTE"
                },
                {
                    label: "Verteilungsfunktion F(x) ohne Sprünge",
                    childId: "F_X_AUS_GRAPH",
                },
                {
                    label: " Dichte f(x)",
                    childId: "F_X_AUS_DICHTE"
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
            title: "Verteilungsfunktion aus Wahrscheinlichkeiten P(X=x) berechnen"
        },
        F_X_AUS_VF: {
            type: "solution",
            id: "F_X_AUS_VF",
            title: "Diskrete Verteilungsfunktion aus Graph ablesen",
            aufgaben: [
                "1.3.2b"
            ]
        },

        //  "1.3.3e", "K-1e/f"
        F_X_DISKRET: {
            type: "question",
            question:
                "Diskrete Verteilungsfunktion bestimmen aus...",
            id:
                "F_X_DISKRET",
            options: [
                {
                    label: "Aus Verteilungsfunktion F(x) mit Sprüngen",
                    childId: "F_X_AUS_VF"
                },
                {
                    label: "Aus Wahrscheinlichkeiten P(X=x)",
                    childId: "F_X_AUS_WS"
                },
                {
                    label: "Aus Wahrscheinlichkeitsfunktion μX",
                    childId: "F_X_AUS_WFK"
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
                    "1.3.3f-g"
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

        VERTEILUNG_ERKENNEN: {
            type: "solution", // TODO das muss noch ausgefüllt werden
            title:
                "Welche Verteilung folgt aus...",
            id:
                "VERTEILUNG_ERKENNEN"
        },

        VF_GRAPH: {
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
            type:
                "question",
            id:
                "",
            options:
                [
                    {
                        label: "Verteilungen bestimmen",
                        list: [],
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
                        list: [],
                        childId: "F_X",
                    },
                    {
                        label: "Verteilungsfunktionen aus Graph", //  diskret / stetig / gemischt
                        list: [
                            "Skizzieren Sie den Graphen der Verteilungsfunktion.",
                            "Die Funktion F sei durch den folgenden Graphen gegeben"
                        ],
                        childId: "VF_GRAPH",
                    },
                    {
                        label: "Randdichte bestimmen",
                        list: [],
                        childId: "RANDDICHTE",
                    },
                    {
                        label: "",
                        list: [],
                        childId: "",
                    },
                    {
                        label: "",
                        list: [],
                        childId: "",
                    },
                ]
        },

        W1: {
            id: "W1",
            type:
                "question",
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
                        // TODO - hier eventuell EIN_AUSSCHLUSS?
                        list: [
                            "Bestimmen Sie deren Wahrscheinlichkeiten bzw. bedingte" +
                            " Wahrscheinlichkeiten.",
                            "Wahrscheinlichkeit, daß die gewählte Münze fair ist, gegeben, sie zeigt Kopf"
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
                        childId: "" // TODO
                    },
                ],
        },

        W_EIN_ERG: {
            type: "question",
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
                            "Wir drehen ein Glücksrad dreimal hintereinander .. Das Glücksrad ist in vier gleichgroße Viertel unterteilt"
                        ]
                    }
                ]
        },


        GR_KL_EXP: {
            type: "solution",
            id: "GR_KL_EXP",
            title: "X < / > x berechnen",
            aufgaben: [
                "1.5.2a"
            ], // TODO
        },

        W_MEHR_ERG: {
            type: "question",
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
                    // TODO hier ein Ausschluss??
                ]
        },

        BEDINGTE_WS: {
            question: "Bedingte Wahrscheinlichkeit & Bayes",
            id:
                "BEDINGTE_WS",
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
                    "P(X>t+s|X>s)=P(X>t)=e^(−λt).",
                    "Ref: HA 1.6.2."
                ]
        },

        W_EIN_ZV: {
            type: "question",
            question:
                "Fall: Wahrscheinlichkeit einer Zufallsvariablen",
            id:
                "W_EIN_ZV",
            options:
                [
                    {
                        label: "P(X ≤ x) bzw. P(X ≤ x) / dass eine Zufallsvariable mindestens oder maximal" +
                            " einen bestimmten Wert hat",
                        childId: "GR_KL_EINE_ZV",
                        list: [
                            "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                            "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht",
                            "Wahrscheinlichkeit, daß Jean länger als 10 Minuten warten muss"
                        ]
                    },
                    {
                        label: "Kontinuierliche Dichte einer einzelnen ZV",
                        childId: "KONTINUIERLICHE_DICHTE"
                    }
                ]
        },


        GR_KL_EINE_ZV: {
            question: "Unter welchen Bedingungen?",
            type: "question",
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
                    label: "Zufallsvariablen sind nicht unabhängig? Oder Exponentialverteilt?",
                    childId: "GR_KL_EXP",
                    list: [
                        "Wartezeit"
                    ]
                }
            ]

        },

        W_MEHR_ZV: {
            type: "question",
            question:
                "Fall: Wahrscheinlichkeit mehrerer Zufallsvariablen",
            id:
                "W_MEHR_ZV",
            options:
                [
                    {
                        label: "P(max ≤ x) oder P(min ≤ x) unabhängiger ZV",
                        childId: "VERTEILUNGSFUNKTION_MAX_MIN"
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

        UNABHÄNGIG_GEQ_LEQ: { // TODO
            type: "solution",
            title:
                "Wahrscheinlichkeit, dass eine ZV",
            id:
                "UNABHÄNGIG_GEQ_LEQ",
            aufgaben:
                [
                    "1.4.3b-d"
                ]
        },

        WLP1: {
            id: "WLP1",
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
                        childId: ""
                    },
                    {
                        label: "„mindestens eine von mehreren Eigenschaften“, Teilbarkeit, Vereinigung",
                        childId: "EIN_AUSSCHLUSS",
                    },
                    {
                        label: "Fixpunkte einer Permutation (genau k / mindestens k)",
                        childId: "FIXPUNKTE_PERMUTATIONEN",
                    },
                ]
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
                    "Ref: PÜ 1.0.3; HA 2.1.3."
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
                    "1.1.1c-d", "1.1.2c-d", "1.1.3c-d", "1.4.4", "1.2.3b(-c)",
                    "Erstklausur 1c"
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
            question:
                "Modellieren",
            options:
                [
                    {
                        label: "Endlich viele, gleichwahrscheinliche Ausgänge?",
                        list: [
                            "Wir würfeln zweimal mit einem fairen Würfel...",
                            "...die von 1 bis 1000 nummeriert sind...",
                            "Wir drehen ein Glücksrad dreimal hintereinander ... Das Glücksrad ist in vier gleichgroße Viertel unterteil",
                            "3 Kugeln, die in jeder Hinsicht identisch sind abgesehen von ihrer Nummer..."
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
                        childId: "ABZÄHLBAR_UNENDLICHER_RAUM"
                    },
                    {
                        childId: "ÜBERABZÄHLBARER_RAUM",
                        label: "Rein zufällig aus einem Intervall / einer Fläche, kontinuierlich?",
                    },
                    {
                        childId: "MEHRERE_FAKTOREN",
                        label: "Ereignisraum aus mehreren Faktoren",
                        list: [
                            "Eine faire oder unfaire Münze zufällig wählen und werfen"
                        ]
                    },
                    {
                        childId: "",
                        label: "Eine Stichprobe soll ausgewertet werden (Statistik-Aufgabe)"
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
                    "Ref: K-4a; HA 2.4.3, 2.5.1."
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
                    "1.4.3a"
                ]
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
                    "1.1.1a-b", "1.1.2a", "1.1.3a-b", "1.1.4??", "1.2.3a", "1.3.3a", "1.4.4??",
                    "Erstklausur 1a???",
                    "Erstklausur 3a??"
                ],
            warning:
                "Die Augensumme mehrerer Würfel ist nicht Laplace-verteilt – auf dem Grundraum zählen!",
        },

        ERWARTUNGSWERT_VARIANZ: {
            id: "ERWARTUNGSWERT_VARIANZ",
            type: "question",
            question: "Erwartungswert & Varianz",
            description:
                "Existenz zuerst begründen: Endlicher Bildbereich ⇒ E und Var existieren stets; sonst Reihe/Integral auf Konvergenz prüfen.",
            options: [
                {label: "Diskret, Verteilungstabelle da", childId: "ERWARTUNGSWERT_DISKRET"},
                {label: "Stetig, Dichte da", childId: "ERWARTUNGSWERT_STETIG"},
                {label: "Lineare Transformation Y=aX+b", childId: "LINEARE_TRANSFORMATION"},
                {label: "Summe Z=X+Y, nur E?", childId: "ERWARTUNGSWERT_SUMME"},
                {label: "Varianz einer Summe", childId: "VARIANZ_SUMME"},
                {label: "„erwartete Anzahl von …“", childId: "INDIKATOR_ZERLEGUNG"},
                {label: "E von max/min oder Gewinn", childId: "ERWARTUNGSWERT_MAX_MIN_GEWINN"},
            ],
        },

        ERWARTUNGSWERT_DISKRET: {
            id: "ERWARTUNGSWERT_DISKRET",
            type: "solution",
            title: "Diskret",
            points: [
                "E(X)=Σx·P(X=x), Var(X)=E(X²)−E(X)².",
                "Standardverteilungen über Anhang V erkennen.",
            ],
            references: ["K-1g"],
            aufgaben: ["PÜ 2.1.4", "PÜ 2.1.5"],
        },

        ERWARTUNGSWERT_STETIG: {
            id: "ERWARTUNGSWERT_STETIG",
            type: "solution",
            title: "Stetig",
            points: ["E(X)=∫xf dx, Var(X)=∫x²f dx−E(X)²."],
            references: ["K-2e"],
            aufgaben: ["PÜ 2.1.6", "HA 2.1.2"],
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
            aufgaben: ["PÜ 2.1.5f", "HA 2.1.2c"],
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
            aufgaben: ["HA 2.1.3", "PÜ 2.3.6b"],
        },

        ERWARTUNGSWERT_MAX_MIN_GEWINN: {
            id: "ERWARTUNGSWERT_MAX_MIN_GEWINN",
            type: "solution",
            title: "E von max/min-Gewinn",
            points: [
                "Verteilung von M=max,N=min bestimmen, dann E.",
                "„Ist das Spiel fair?“ ⇔ E(Gewinn)=0.",
            ],
            aufgaben: ["HA 2.1.1"],
        },

        APPROXIMATIONEN_GRENZWERTE_SCHRANKEN: {
            id: "APPROXIMATIONEN_GRENZWERTE_SCHRANKEN",
            type: "question",
            question: "Approximationen, Grenzwerte, Schranken",
            options: [
                {label: "Nur Schranke / zeige b_n→0", childId: "TSCHEBYSCHEFF"},
                {label: "n groß, p klein, np=λ moderat", childId: "POISSON_APPROXIMATION"},
                {label: "n groß, np(1−p) groß", childId: "NORMAL_DE_MOIVRE_LAPLACE"},
                {label: "Summe/Mittel vieler iid, standardisieren", childId: "ZENTRALER_GRENZWERTSATZ"},
                {
                    label: "„wie viele Runden/Stichproben n für W. ≥ …“",
                    childId: "STICHPROBENUMFANG_BESTIMMEN",
                },
                {label: "µ gesucht bei Normalverteilung", childId: "NORMAL_MU_QUANTIL"},
            ],
        },

        TSCHEBYSCHEFF: {
            id: "TSCHEBYSCHEFF",
            type: "solution",
            title: "Tschebyscheff",
            points: ["P(|X−E(X)|≥ε)≤Var(X)/ε².", "Nur obere Schranke, oft grob."],
            aufgaben: ["PÜ 2.2.5", "PÜ 2.2.6", "HA 2.2.1", "HA 2.2.2b"],
        },

        POISSON_APPROXIMATION: {
            id: "POISSON_APPROXIMATION",
            type: "solution",
            title: "Poisson-Approximation",
            points: ["Bin(n,p)≈Poi(λ), λ=np; P(X=k)≈e^−λ λ^k/k!."],
            aufgaben: ["PÜ 2.3.4", "PÜ 2.3.5", "HA 2.3.1"],
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
            references: ["K-3e"],
            aufgaben: ["PÜ 2.2.4", "PÜ 2.3.6", "HA 2.2.3"],
        },

        ZENTRALER_GRENZWERTSATZ: {
            id: "ZENTRALER_GRENZWERTSATZ",
            type: "solution",
            title: "Zentraler Grenzwertsatz",
            points: ["(S_n−nµ)/(σ√n) bzw. (X̄−µ)/(σ/√n)≈N(0,1), dann Φ."],
            aufgaben: ["HA 2.3.3"],
        },

        STICHPROBENUMFANG_BESTIMMEN: {
            id: "STICHPROBENUMFANG_BESTIMMEN",
            type: "solution",
            title: "n bestimmen",
            points: [
                "Ungleichung mit [Tschebyscheff] oder [Normal-Approximation] aufstellen und nach n auflösen.",
            ],
            aufgaben: ["HA 2.2.1d", "HA 2.2.2"],
        },

        NORMAL_MU_QUANTIL: {
            id: "NORMAL_MU_QUANTIL",
            type: "solution",
            title: "µ über Quantil bestimmen",
            points: ["P(Z≥µ−x)=Φ(x/σ), nach µ mit Quantil auflösen."],
            aufgaben: ["HA 2.3.2"],
        },

        DESKRIPTIVE_STATISTIK: {
            id: "DESKRIPTIVE_STATISTIK",
            type: "question",
            question: "Deskriptive Statistik",
            options: [
                {label: "Lagemaße", childId: "LAGEMASSE"},
                {label: "Streumaße", childId: "STREUMASSE"},
                {label: "Quantile / Quartile", childId: "QUANTILE"},
                {label: "Alle Werte um c verschoben", childId: "VERSCHIEBUNG_KENNZAHLEN"},
                {label: "Robustheit", childId: "ROBUSTHEIT"},
                {label: "„Ist … ein Streumaß?“", childId: "STREUMASS_BEWEISEN"},
            ],
        },

        LAGEMASSE: {
            id: "LAGEMASSE",
            type: "solution",
            title: "Lagemaße",
            points: [
                "Mittel x̄=1/n Σx_i; Median: sortieren, bei geradem n Mittel der beiden mittleren; Modus: häufigster Wert.",
            ],
            aufgaben: ["PÜ 2.4.5a-c"],
        },

        STREUMASSE: {
            id: "STREUMASSE",
            type: "solution",
            title: "Streumaße",
            points: [
                "Spannweite=max−min; Varianz s²=1/nΣ(x_i−x̄)²; SD=√s²; mittlere abs. Abw. vom Median=1/nΣ|x_i−x̃|.",
                "1/n vs. 1/(n−1) nach Vorlesung prüfen.",
            ],
            aufgaben: ["PÜ 2.4.5f", "HA 2.4.1f"],
        },

        QUANTILE: {
            id: "QUANTILE",
            type: "solution",
            title: "Quantile",
            points: ["Q₁=x_0.25, Q₃=x_0.75; IQR=Q₃−Q₁; p-Quantilabstand=x_{1−p}−x_p."],
            aufgaben: ["HA 2.4.1c/d"],
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
            type: "question",
            question: "Schätzer",
            options: [
                {label: "Erwartungstreu?", childId: "ERWARTUNGSTREUE"},
                {label: "Risiko / MSE", childId: "RISIKO_MSE"},
                {label: "Zwei Schätzer vergleichen", childId: "SCHÄTZER_VERGLEICHEN"},
                {label: "Varianzschätzer p̂(1−p̂)", childId: "VARIANZSCHÄTZER"},
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
            aufgaben: ["PÜ 2.4.4a", "HA 2.4.3d"],
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
            aufgaben: ["HA 2.4.3e"],
        },

        VARIANZSCHÄTZER: {
            id: "VARIANZSCHÄTZER",
            type: "solution",
            title: "Varianzschätzer",
            points: [
                "p̂=1/nΣx_i: E[t]=(1−1/n)θ(1−θ) ⇒ nicht erwartungstreu, aber asymptotisch.",
            ],
            aufgaben: ["HA 2.5.1"],
        },

        KONFIDENZINTERVALL: {
            id: "KONFIDENZINTERVALL",
            type: "question",
            question: "Konfidenzintervall",
            options: [
                {label: "Anteil, Normal/Wald", childId: "WALD_KI"},
                {label: "Exakt, ohne Approximation", childId: "EXAKTES_KI"},
                {label: "t-Approximation", childId: "STUDENT_T_KI"},
                {label: "Theorie: Überdeckung, Schnitt, Länge", childId: "KI_THEORIE"},
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
            aufgaben: ["PÜ 2.5.4", "HA 2.5.2c"],
        },

        EXAKTES_KI: {
            id: "EXAKTES_KI",
            type: "solution",
            title: "Exaktes KI",
            points: ["Ohne Approximation (Computer)."],
            aufgaben: ["HA 2.5.2a"],
        },

        STUDENT_T_KI: {
            id: "STUDENT_T_KI",
            type: "solution",
            title: "Student-t",
            points: ["t_{n−1}-Quantil statt z."],
            aufgaben: ["HA 2.5.2b"],
        },

        KI_THEORIE: {
            id: "KI_THEORIE",
            type: "solution",
            title: "KI-Theorie",
            points: [
                "Überdeckung P_p(p∈J_n)≥1−α; p ist fest, Intervall zufällig.",
                "Niveau verdoppeln verdoppelt nicht die Länge. Schnitt zweier (1−α/2)-KI ist ein (1−α)-KI.",
            ],
            aufgaben: ["PÜ 2.5.5", "HA 2.5.3"],
        },

        HYPOTHESENTEST: {
            id: "HYPOTHESENTEST",
            type: "question",
            question: "Hypothesentest",
            options: [
                {label: "Anteil/Wahrscheinlichkeit p, eine Stichprobe", childId: "ANTEILSTEST"},
                {label: "Normalverteilt, Varianz bekannt", childId: "GAUSS_TEST"},
                {label: "Normalverteilt, Varianz unbekannt", childId: "T_TEST"},
                {label: "Verbundene Messpaare", childId: "GEPAARTER_T_TEST"},
                {
                    label: "Zwei getrennte Stichproben, Anteile vergleichen",
                    childId: "ZWEI_STICHPROBEN_ANTEILSTEST",
                },
                {label: "Ein- vs. zweiseitig", childId: "TESTRICHTUNG_BESTIMMEN"},
                {label: "Entscheidung", childId: "TESTENTSCHEIDUNG_FEHLER"},
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
            aufgaben: ["HA 2.6.1"],
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
            aufgaben: ["HA 2.6.3"],
        },

        ZWEI_STICHPROBEN_ANTEILSTEST: {
            id: "ZWEI_STICHPROBEN_ANTEILSTEST",
            type: "solution",
            title: "Zwei-Stichproben-Anteilstest",
            points: [
                "gepoolt p̂=(X₁+X₂)/(n₁+n₂); Z=(p̂₁−p̂₂)/√(p̂(1−p̂)(1/n₁+1/n₂))≈N(0,1).",
            ],
            aufgaben: ["HA 2.6.2"],
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
    },
}