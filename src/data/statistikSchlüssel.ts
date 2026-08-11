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
 {
                    label: "ZV erst als Abbildung definieren",
                    list: [],
                    childId: "ZV_DEF",
                },
 */

// TODO Wfl bestimmen wie bei 1.3.1...

export const statistik_schlüssel_json: DecisionGraph = {
    rootId: "START",
    nodes: {
        START: {
            id: "START",
            type: "question",
            question: "Aufgabentyp",
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
                        "Wahrscheinlichkeit P(…) eines konkreten Ereignisses bzw. einer Zuvallsvariable",
                    list: [
                        "Berechnen Sie mit Hilfe der Wahrscheinlichkeitsfunktion µ die Wahrscheinlichkeiten von A, B" +
                        " und C.",
                        "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                        "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht"
                    ],
                    childId: "W1",
                },
                {
                    label: "Zufallsvariablen, Verteilungen und Dichten",
                    list: [
                        "Berechnen Sie die Verteilung von X, indem Sie die zugehörige Wahrscheinlichkeitsfunktion μX bestimmen.",
                        "estimmen Sie jeweils die Verteilung der Zufallsvariablen",

                    ],
                    childId: "ZVG",
                },
                {
                    label: "Unabhängigkeit bestimmen",
                    list: [],
                    childId: "UNABHÄNGIGKEIT",
                },
                {
                    label: "Erwartungswert und Varianz",
                    list: [],
                    childId: "",
                },
                {
                    label: "näherungsweise/approximativ, Schranke, Grenzwert, „wie groß muss n sein“",
                    list: [],
                    childId: "",
                },
                {
                    label: "Konkreter Datensatz gegeben, Kennzahlen berechnen",
                    list: [],
                    childId: "",
                },
                {
                    label: "Aussage über einen Schätzer",
                    list: [],
                    childId: "",
                },
                {
                    label: "Konfidenzintervalle",
                    list: [],
                    childId: "",
                },
                {
                    label: "Hypothese testen",
                    list: [],
                    childId: "",
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
                    {label: "ZV über gemeinsame Dichte", childId: "UNABHÄNGIGKEIT_DICHTE"},
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
                ["1.4.2e", "PÜ 1.4.5", "PÜ 1.5.4d", "HA 1.5.1d"],
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
                ["PÜ 1.5.5", "HA 1.5.3c"],
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
                    "Ref: K-2a; PÜ 1.5.4a; HA 1.2.4a, 1.5.1a, 2.1.2a."
                ],
            aufgaben:
                [
                    "1.2.2a", "1.3.1b", "1.4.2a (gemeinsam)"
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

        F_X_DISKRET: {
            type: "solution",
            title:
                "Diskrete Verteilungsfunktion bestimmen",
            id:
                "F_X_DISKRET",
            points:
                [
                    "Rechtsstetige Treppenfunktion, Sprunghöhe an x=P(X=x). Stückweise angeben.",
                    "Summieren",
                    "Ref: K-1e/f."
                ],
            aufgaben:
                [
                    "1.3.1a", "1.3.2b", "1.3.3e"
                ]
        },

        F_X_STETIG: {
            type: "solution",
            title:
                "Stetige Verteilungsfunktion bestimmen",
            id:
                "F_X_STETIG",
            points:
                [
                    "Integrieren: F(x)=∫_{−∞}^x f. Stückweise über Trägerintervalle; f=F'.",
                    "Ref: K-2b/c"
                ],
            aufgaben:
                [
                    "1.3.1b", "1.3.2a", "1.4.2d"
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
                    "1.4.2c"
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
                "Wahrscheinlichkeit eines Ereignisses bzw. einer Zufallsvariable berechnen",
            options:
                [
                    {
                        label: "Eines Ereignisses",
                        childId: "W_EIN_ERG",
                        list: [
                            "Berechnen Sie mit Hilfe der Wahrscheinlichkeitsfunktion µ die Wahrscheinlichkeiten von A, B und C."
                        ],
                    },
                    {
                        label: "Mehrerer Ereignisse",
                        childId: "W_MEHR_ERG",
                        // TODO - hier eventuell EIN_AUSSCHLUSS?
                    },
                    {
                        label: "Einer Zufallsvariablen",
                        childId: "W_EIN_ZV",
                        list: [
                            "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                            "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht"
                        ]
                    },
                    {
                        label: "Mehrerer Zufallsvariablen",
                        childId: "W_MEHR_ZV"
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
                    },
                ]
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
                        childId: "BEDINGTE_WS"
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
                        label: "Zweistufig: erst Urne/Münze wählen, dann ziehen, P(A) gesucht",
                        list: [],
                        childId: "TOTALE_WS",
                    },
                    {
                        label: "Vorwärts gegeben, rückwärts gesucht",
                        list: [],
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
                    "Ref: PÜ 1.6.4d, 1.6.6d; HA 1.6.1c."
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
                    "Ref: PÜ 1.6.4e, 1.6.6e; HA 1.6.1d."
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
                        label: "P(X ≤ x) bzw. P(X ≤ x) /dass eine Zufallsvariable mindestens oder maximal" +
                            " einen bestimmten Wert hat",
                        childId: "UNABHÄNGIG_GEQ_LEQ",
                        list: [
                            "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                            "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht"
                        ]
                    },
                    {
                        label: "Kontinuierliche Dichte einer einzelnen ZV",
                        childId: "KONTINUIERLICHE_DICHTE"
                    },
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
                            "Bereich wie {2X>Y}, {X>Y}"
                        ]
                    },
                    {
                        label: "P(X+Y ≤ c) oder Dichte der Summe",
                        childId: "FALTUNG_SUMME_UNABHÄNGIGER_ZV",
                    },
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
                    "Setzt Unabhängigkeit voraus.",
                    "Ref: HA 1.5.2."
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
                    "Reihe⇒min, Parallel⇒max.",
                    "Ref: HA 1.5.3."
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
                    "Ref: PÜ 1.5.4e; HA 1.4.2b, 1.5.1e."
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
                        childId: "",
                        label: "Eine Stichprobe soll ausgewertet werden (Statistik-Aufgabe)"
                    }

                ],
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
    },
}