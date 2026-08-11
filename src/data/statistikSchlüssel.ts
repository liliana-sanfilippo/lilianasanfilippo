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
                    label:
                        "Wahrscheinlichkeit P(…) eines konkreten Ereignisses bzw. einer Zuvallsvariable",
                    list: [
                        "Berechnen Sie mit Hilfe der Wahrscheinlichkeitsfunktion µ die Wahrscheinlichkeiten von A, B und C."
                    ],
                    childId: "W1",
                },
            ],
        },

        W1: {
            id: "W1",
            type: "question",
            question: "Wahrscheinlichkeit eines Ereignisses bzw. einer Zufallsvariable berechnen",
            options: [
                {
                    label: "Laplace / abzählbar (zählen)",
                    childId: "WLP1",
                    list: [
                        "Wir würfeln zweimal mit einem fairen Würfel...",
                        "Wir drehen ein Glücksrad dreimal hintereinander .. Das Glücksrad ist in vier gleichgroße Viertel unterteilt"
                    ]
                },
                {
                    label: "P(... ≤ x) oder P(... ≤ x)",
                    childId: "WGRKL",
                    list: [
                        "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht."
                    ]
                },
                {
                    label: "Kontinuierliche Dichte einer einzelnen ZV",
                    childId: "KONTINUIERLICHE_DICHTE"
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
            ],
        },

        W_ERG: {

        },

        FALTUNG_SUMME_UNABHÄNGIGER_ZV: {
            type: "solution",
            title: "Faltung / Summe unabhängiger ZV",
            id: "FALTUNG_SUMME_UNABHÄNGIGER_ZV",
            points: [
                "f_{X+Y}(z)=∫f_X(x)f_Y(z−x)dx.",
                "Summe von n unabh. Exp(λ)=Erlang: f_{S_n}(z)=λ^n z^{n−1}/(n−1)!·e^(−λz).",
                "Alternativ Doppelintegral über {x+y≤c}∩Träger.",
                "Setzt Unabhängigkeit voraus.",
                "Ref: HA 1.5.2."
            ]
        },

        VERTEILUNGSFUNKTION_MAX_MIN: {
            type: "solution",
            title: "Verteilungsfunktion von max / min",
            id: "VERTEILUNGSFUNKTION_MAX_MIN",
            points: [
                "P(max≤x)=∏F_i(x).",
                "P(min≤x)=1−∏(1−F_i(x)).",
                "Minimum von n unabh. Exp(λ) ist Exp(nλ).",
                "Reihe⇒min, Parallel⇒max.",
                "Ref: HA 1.5.3."
            ]
        },

        GEMEINSAME_DICHTE: {
            type: "solution",
            title: "Doppelintegral aus gemeinsamer Dichte",
            id: "GEMEINSAME_DICHTE",
            points: [
                "Integrationsbereich {Bedingung} ∩ Träger skizzieren, dann integrieren.",
                "z.B. P(X>Y)=∬_{x>y}f(x,y)dxdy.",
                "Ref: PÜ 1.5.4e; HA 1.4.2b, 1.5.1e."
            ]
        },

        KONTINUIERLICHE_DICHTE: {
            type: "solution",
            title: "Wahrscheinlichkeit über eine Dichte",
            id: "KONTINUIERLICHE_DICHTE",
            points: [
                "P((a,b]) = ∫_a^b f. Grenzen auf den Träger {f>0} einschränken.",
                "P(Punkt)=0 (stetig) → offen/geschlossen egal: außer bei einem Sprung.",
                "Ref: K-2d; HA 1.2.4."
            ]
        },

        WGRKL: {
            id: "WGRKL",
            type: "question",
            question: "",
            options: [
                {
                    label: "P(max ≤ x) oder P(min ≤ x) unabhängiger ZV",
                    childId: "VERTEILUNGSFUNKTION_MAX_MIN"
                },
                {
                    label: "P(X ≤ x) bzw. P(X ≤ x)/ dass eine unabhängige Zufallsvariable mindestens oder maximal" +
                        " einen bestimmten Wert hat",
                    childId: "UNABHÄNGIG_GEQ_LEQ",
                    list: [
                        "Bestimmen Sie die Wahrscheinlichkeit, daß René die Klausur besteht",
                        "die Wahrscheinlichkeit, daß René mindestens die Note 2,3 erreicht"
                    ]
                }
            ],
        },

        UNABHÄNGIG_GEQ_LEQ: {
            type: "solution",
            title: "Wahrscheinlichkeit, dass eine ZV",
            id: "UNABHÄNGIG_GEQ_LEQ",
            aufgaben: [
                "1.4.3b-d"
            ]
        },

        WLP1: {
            id: "WLP1",
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
            title: "Fixpunkte einer Permutation (genau k / mindestens k)",
            id: "FIXPUNKTE_PERMUTATIONEN",
            points: [
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
            title: "Ein-/Ausschlussprinzip",
            id: "EIN_AUSSCHLUSS",
            points: [
                "P(A∪B∪C) = ΣP − ΣP(Zweier-Schnitt) + P(Dreier-Schnitt) (Vorzeichen alternieren).",
                "Teilbarkeit in {1,…,n}: #{k:d|k}=⌊n/d⌋; „durch d₁ und d₂“ = Teilbarkeit durch kgV(d₁,d₂).",
                "Nicht P(durch 2)·P(durch 3), sondern ⌊n/6⌋/n für den Schnitt."
            ],
            aufgaben: ["1.2.3c"]
        },

        GEGENEREIGNIS: {
            type: "solution",
            title: "Gegenereignis",
            id: "GEGENEREIGNIS",
            points: [
                "„mindestens einmal“ ist mühsam direkt: nimm das Komplement.",
                "P(mind. einmal) = 1 − P(keinmal)."
            ],
            aufgaben: [
                "1.1.1c-d", "1.1.5b."
            ]
        },

        DIREKTES_ABZÄHLEN: {
            type: "solution",
            title: "Direktes Abzählen",
            id: "DIREKTES_ABZÄHLEN",
            "aufgaben": [
                "1.1.1c-d", "1.1.2c-d", "1.1.3c-d", "1.4.4", "1.2.3b(-c)",
                "Erstklausur 1c"
            ],
            points: [
                "P(A) = #A/#Ω. Kombinatorik-Tabelle nutzen (siehe Anhang K)."
            ]
        },

        M1: {
            id: "M1",
            type: "question",
            question: "Modellieren",
            options: [
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
            title: "Statistisches Modell",
            type: "solution",
            points: [
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
            points: [
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
            aufgaben: [
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