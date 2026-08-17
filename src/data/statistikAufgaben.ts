
import {StatistikAufgabe} from "../types/statistik_types";


export const statistikAufgaben: Record<string, StatistikAufgabe> = {
    // ─────────────────────────── Block 1.1 (Laplace / Abzählen) ───────────────────────────
    "1.1.1a-b": {
        nummer: "1.1.1a-b",
        title: "Zweimal Würfeln (fairer Würfel)",
        text: "Wir würfeln zweimal mit einem fairen Würfel. Geben Sie einen geeigneten Ereignisraum Ω an, der es erlaubt, die folgenden Fragen zu beantworten, sowie eine geeignete Wahrscheinlichkeitsfunktion µ, und begründen Sie Ihre Wahl.",
    },
    "1.1.1c": {
        nummer: "1.1.1c",
        title: "Ereignisse definieren (zwei Würfel)",
        text: "Definieren Sie Ereignisse (z.B. „mindestens ein Würfel zeigt eine gerade Zahl“) als Teilmengen des Ereignisraums Ω.",
    },
    "1.1.1c-d": {
        nummer: "1.1.1c-d",
        title: "Wahrscheinlichkeiten (zwei Würfel)",
        text: "Berechnen Sie die Wahrscheinlichkeiten der definierten Ereignisse. „Mindestens ein Würfel gerade“ lässt sich bequem über das Gegenereignis behandeln.",
        loesung: "P(mind. ein gerade) = 1 − P(beide ungerade) = 1 − (3/6)² = 1 − 1/4 = 3/4.",
    },
    "1.1.2a": {
        nummer: "1.1.2a",
        title: "1000 nummerierte Bücher",
        text: "Eine Bibliothek enthält 1000 von 1 bis 1000 nummerierte Bücher. Geben Sie einen geeigneten Laplace-Raum an.",
    },
    "1.1.2b-c": {
        nummer: "1.1.2b-c",
        title: "Bücher-Suche (Abzählen)",
        text: "Berechnen Sie die Wahrscheinlichkeiten einzelner Ereignisse durch direktes Abzählen (#A/#Ω).",
    },
    "1.1.3a-b": {
        nummer: "1.1.3a-b",
        title: "Glücksrad dreimal (gleich große Felder)",
        text: "Wir drehen ein in vier gleich große Viertel unterteiltes Glücksrad dreimal hintereinander. Geben Sie einen geeigneten Laplace-Produktraum Ω = {1..4}³ an.",
    },
    "1.1.3c": {
        nummer: "1.1.3c",
        title: "Ereignisse definieren (Glücksrad ×3)",
        text: "Definieren Sie die betrachteten Ereignisse als Teilmengen von Ω.",
    },
    "1.1.3c-d": {
        nummer: "1.1.3c-d",
        title: "Wahrscheinlichkeiten (Glücksrad ×3)",
        text: "Berechnen Sie die Wahrscheinlichkeiten (z.B. „die drei Ergebnisse sind strikt wachsend“) durch Abzählen.",
    },
    "1.1.4": {
        nummer: "1.1.4",
        title: "Präsenz: Laplace / Abzählen",
        text: "Präsenzaufgabe zum Laplace-Modell bzw. direkten Abzählen.",
        warnung: "Präsenzaufgabe (Z=4), keine Hausaufgabe – Inhalt ggf. mit dem Blatt abgleichen.",
    },
    "1.1.5b": {
        nummer: "1.1.5b",
        title: "„mindestens einmal“ (Gegenereignis)",
        text: "Berechnen Sie die Wahrscheinlichkeit eines „mindestens einmal“-Ereignisses über das Gegenereignis.",
        loesung: "P(mind. einmal) = 1 − P(keinmal).",
    },

    // ─────────────────────────── Block 1.2 ───────────────────────────
    "1.2.1": {
        nummer: "1.2.1",
        title: "Schranken für Wahrscheinlichkeiten",
        text: "Untersuchen Sie mit den Rechenregeln, welche Mengen die Wahrscheinlichkeit 0 haben können bzw. bestimmen Sie eine Schranke c mit P(A\\B) ≤ c – ohne konkreten Wahrscheinlichkeitsraum.",
    },
    "1.2.2a": {
        nummer: "1.2.2a",
        title: "Normkonstante einer Dichte",
        text: "Bestimmen Sie die Konstante c so, dass f eine Dichte ist (∫ c·g = 1); bestätigen Sie anschließend f ≥ 0.",
    },
    "1.2.2b-d": {
        nummer: "1.2.2b-d",
        title: "Stetigkeit des Maßes (lim P(A_n))",
        text: "Bestimmen Sie den Grenzwert lim_n P(A_n) für eine auf- bzw. absteigende Mengenfolge – einmal explizit über die Dichte, einmal allgemein über die Rechenregeln.",
    },
    "1.2.3a": {
        nummer: "1.2.3a",
        title: "Nummerierte Kugeln (Laplace)",
        text: "Geben Sie für das Ziehen aus nummerierten Kugeln einen geeigneten Laplace-Raum an.",
    },
    "1.2.3b": {
        nummer: "1.2.3b",
        title: "Teilbarkeits-Ereignisse",
        text: "Definieren Sie die Teilbarkeits-Ereignisse als Teilmengen und berechnen Sie ihre Wahrscheinlichkeiten (Abzählen).",
    },
    "1.2.3c": {
        nummer: "1.2.3c",
        title: "P(A∪B∪C) über Ein-/Ausschluss",
        text: "Berechnen Sie P(A∪B∪C) für die Teilbarkeits-Ereignisse via Ein-/Ausschluss; der Schnitt entspricht der Teilbarkeit durch das kgV.",
    },

    // ─────────────────────────── Block 1.3 (ZV, Verteilung, VF) ───────────────────────────
    "1.3.1": {
        nummer: "1.3.1",
        title: "Glücksrad mit ungleichen Feldern",
        text: "Ein Glücksrad hat vier Felder, das mit 1 beschriftete ist doppelt so groß wie die anderen. Geben Sie einen geeigneten (allgemeinen endlichen, nicht-Laplace) Wahrscheinlichkeitsraum an.",
        warnung: "Kein Laplace-Raum – Gewichte proportional zur Feldgröße.",
    },
    "1.3.1a": {
        nummer: "1.3.1a",
        title: "ZV & Wahrscheinlichkeitsfunktion (Glücksrad)",
        text: "Definieren Sie eine Zufallsvariable X und bestimmen Sie ihre Wahrscheinlichkeitsfunktion µ_X.",
        loesung: "µ_X(1)=2/5, µ_X(2)=µ_X(3)=µ_X(4)=1/5.",
    },
    "1.3.1b": {
        nummer: "1.3.1b",
        title: "Fortsetzung 1.3.1",
        text: "Zweiter Teil zu 1.3.1: Normierung/Kennzahl bzw. Verteilungsfunktion skizzieren.",
    },
    "1.3.1a-b": {
        nummer: "1.3.1a-b",
        title: "Verteilung & VF (Glücksrad)",
        text: "Bestimmen Sie Verteilung und Verteilungsfunktion von X (Graph lesen bzw. skizzieren).",
    },
    "1.3.2a": {
        nummer: "1.3.2a",
        title: "VF-Graph analysieren",
        text: "Die Funktion F sei durch einen Graphen gegeben. Klassifizieren Sie die Verteilung, lesen Sie µ_X bzw. f_X ab und berechnen Sie Wahrscheinlichkeiten.",
        warnung: "Zuordnung a↔b (diskret/stetig) prüfen: welcher Graph hat Sprünge?",
    },
    "1.3.2b": {
        nummer: "1.3.2b",
        title: "VF-Graph analysieren",
        text: "Die Funktion F sei durch einen Graphen gegeben. Klassifizieren Sie die Verteilung, lesen Sie µ_X bzw. f_X ab und berechnen Sie Wahrscheinlichkeiten.",
        warnung: "Zuordnung a↔b (diskret/stetig) prüfen: welcher Graph hat Sprünge?",
    },
    "1.3.2a-b": {
        nummer: "1.3.2a-b",
        title: "Beide VF-Graphen (1.3.2)",
        text: "Analysieren Sie beide gegebenen VF-Graphen (diskreter vs. stetiger Anteil).",
    },
    "1.3.3a": {
        nummer: "1.3.3a",
        title: "Zwei-ZV-Aufgabe (Modell)",
        text: "Geben Sie den geeigneten Laplace-Raum bzw. das Modell für die Aufgabe mit zwei Zufallsvariablen an.",
    },
    "1.3.3b-c": {
        nummer: "1.3.3b-c",
        title: "Zufallsvariablen definieren",
        text: "Definieren Sie die Zufallsvariablen X und Y als Abbildungen ω↦X(ω).",
    },
    "1.3.3d": {
        nummer: "1.3.3d",
        title: "Verteilung einer ZV",
        text: "Bestimmen Sie die Verteilung (Wahrscheinlichkeitsfunktion µ_X) einer der Zufallsvariablen.",
    },
    "1.3.3e": {
        nummer: "1.3.3e",
        title: "Verteilungsfunktion aufsummieren",
        text: "Bestimmen Sie die Verteilungsfunktion, indem Sie die Wahrscheinlichkeiten P(X=x) von links aufsummieren (Treppe).",
    },
    "1.3.3f-g": {
        nummer: "1.3.3f-g",
        title: "Gemeinsame Verteilung zweier ZV",
        text: "Bestimmen Sie die gemeinsame Verteilung als Matrix P(X=x, Y=y).",
    },

    // ─────────────────────────── Block 1.4 (Unabhängigkeit, gemeinsame Dichte) ───────────────────────────
    "1.4.1": {
        nummer: "1.4.1",
        title: "Gemeinsame Unabhängigkeit A,B,C,D",
        text: "Prüfen Sie die Ereignisse A, B, C, D auf gemeinsame Unabhängigkeit (Produktregel für jede Teilmenge der Indizes).",
    },
    "1.4.1b": {
        nummer: "1.4.1b",
        title: "Triviales Ereignis (P(B)∈{0,1})",
        text: "Zeigen Sie: Ein Ereignis mit P(B)∈{0,1} ist von jedem A unabhängig.",
    },
    "1.4.2a": {
        nummer: "1.4.2a",
        title: "Normkonstante (gemeinsame Dichte)",
        text: "Bestimmen Sie die Konstante c der gemeinsamen Dichte (∬ f = 1).",
    },
    "1.4.2c": {
        nummer: "1.4.2c",
        title: "Randdichten",
        text: "Bestimmen Sie die Randdichten f_X, f_Y, indem Sie jeweils die andere Variable herausintegrieren.",
    },
    "1.4.2d": {
        nummer: "1.4.2d",
        title: "VF aus Randdichte",
        text: "Berechnen Sie die Verteilungsfunktion aus der Randdichte.",
    },
    "1.4.2e": {
        nummer: "1.4.2e",
        title: "Unabhängigkeit über Dichte",
        text: "Prüfen Sie die Unabhängigkeit über die gemeinsame Dichte (Faktorisierung UND Rechteck-Träger).",
    },
    "1.4.3a": {
        nummer: "1.4.3a",
        title: "René Multiple-Choice (Bernoulli)",
        text: "René beantwortet jede Frage unabhängig mit Wahrscheinlichkeit p richtig. Geben Sie das Bernoulli-Modell an.",
    },
    "1.4.3b-d": {
        nummer: "1.4.3b-d",
        title: "P(besteht) / P(Note ≤ 2,3)",
        text: "Bestimmen Sie P(besteht)=P(S≥2K) und P(Note≤2,3)=P(S≥3K) mit S~Bin(4K, 0,6); werten Sie für konkrete K aus.",
    },
    "1.4.4": {
        nummer: "1.4.4",
        title: "Würfel 20× (Ereignisse & Unabhängigkeit)",
        text: "Ein Würfel wird 20-mal geworfen. Definieren Sie Ereignisse A–D, berechnen Sie ihre Wahrscheinlichkeiten und prüfen Sie die Unabhängigkeit.",
    },
    "1.4.4b": {
        nummer: "1.4.4b",
        title: "„größte Zahl > 4“ / „< 5“",
        text: "Berechnen Sie die Wahrscheinlichkeit der Ereignisse B/D („größte Zahl > 4“ bzw. „< 5“) über das Gegenereignis bzw. „alle ≤ k“.",
    },
    "1.4.5": {
        nummer: "1.4.5",
        title: "Gleichverteilung auf einer Fläche",
        text: "Für eine gemeinsame (Gleich-)Verteilung auf einer Fläche: Unabhängigkeit über den Träger prüfen.",
    },

    // ─────────────────────────── Block 1.5 (gemeinsame Dichte, Wartezeiten) ───────────────────────────
    "1.5.1a": {
        nummer: "1.5.1a",
        title: "Normkonstante (gemeinsame Dichte)",
        text: "Bestimmen Sie die Normierungskonstante c der gemeinsamen Dichte.",
    },
    "1.5.1b": {
        nummer: "1.5.1b",
        title: "Randdichten",
        text: "Bestimmen Sie die Randdichten aus der gemeinsamen Dichte.",
    },
    "1.5.1c": {
        nummer: "1.5.1c",
        title: "VF aus Randdichte",
        text: "Berechnen Sie die Verteilungsfunktion aus der Randdichte.",
    },
    "1.5.1d": {
        nummer: "1.5.1d",
        title: "Unabhängigkeit über Dichte",
        text: "Prüfen Sie die Unabhängigkeit über die gemeinsame Dichte.",
    },
    "1.5.1e": {
        nummer: "1.5.1e",
        title: "P(X>Y) als Doppelintegral",
        text: "Berechnen Sie eine Wahrscheinlichkeit (z.B. P(X>Y)) als Doppelintegral über {Bedingung} ∩ Träger.",
    },
    "1.5.2": {
        nummer: "1.5.2",
        title: "Jean: exponentielle Wartezeiten",
        text: "Wartezeiten sind exponentialverteilt. Erkennen Sie die Verteilung und rechnen Sie damit.",
    },
    "1.5.2a": {
        nummer: "1.5.2a",
        title: "P(Wartezeit > 10)",
        text: "Wie groß ist die Wahrscheinlichkeit, dass Jean länger als 10 Minuten warten muss? (X ~ Exp(1/5))",
        loesung: "P(X>10) = e^(−λ·10) = e^(−(1/5)·10) = e^(−2) ≈ 0,135.",
    },
    "1.5.2b-c": {
        nummer: "1.5.2b-c",
        title: "Summe unabhängiger Exp",
        text: "Berechnen Sie P(X+Y ≤ 20) für unabhängige Exp(λ) über die Faltung / Erlang-Dichte.",
    },
    "1.5.3a": {
        nummer: "1.5.3a",
        title: "VF von max/min beweisen",
        text: "Beweisen Sie die Verteilungsfunktionen von max/min unabhängiger ZV: P(max≤x)=∏F_i, P(min≤x)=1−∏(1−F_i).",
    },
    "1.5.3b": {
        nummer: "1.5.3b",
        title: "System-ZV aus T1..T4",
        text: "Stellen Sie die Zufallsvariable X mit Hilfe von T1, T2, T3, T4 dar.",
        loesung: "X = max{ min(T1,T2), min(T3,T4) }  (Reihe ⇒ min, Parallel ⇒ max).",
    },
    "1.5.3c": {
        nummer: "1.5.3c",
        title: "Unabhängigkeit min{T1,T2} ⊥ min{T3,T4}",
        text: "Zeigen Sie, dass min{T1,T2} und min{T3,T4} unabhängig sind (disjunkte Variablengruppen).",
    },
    "1.5.4a": {
        nummer: "1.5.4a",
        title: "Normkonstante (gemeinsame Dichte)",
        text: "Bestimmen Sie die Konstante c der gemeinsamen Dichte.",
    },
    "1.5.4d": {
        nummer: "1.5.4d",
        title: "Unabhängigkeit über Dichte",
        text: "Prüfen Sie die Unabhängigkeit über die gemeinsame Dichte.",
    },
    "1.5.5": {
        nummer: "1.5.5",
        title: "Funktionen unabhängiger ZV",
        text: "Zeigen Sie, dass Funktionen unabhängiger ZV mit disjunkten Variablengruppen wieder unabhängig sind.",
    },

    // ─────────────────────────── Block 1.6 (bedingte W., Bayes) ───────────────────────────
    "1.6.1a": {
        nummer: "1.6.1a",
        title: "Zweistufiges Experiment (Modell)",
        text: "Münze wählen, dann werfen: Geben Sie den zusammengesetzten Ereignisraum an.",
    },
    "1.6.1b": {
        nummer: "1.6.1b",
        title: "Ereignisse/ZV definieren",
        text: "Definieren Sie die Ereignisse bzw. Zufallsvariablen zum zweistufigen Experiment.",
    },
    "1.6.1c": {
        nummer: "1.6.1c",
        title: "Totale Wahrscheinlichkeit",
        text: "Berechnen Sie P(A) über die totale Wahrscheinlichkeit: Σ P(A|B_i)·P(B_i).",
    },
    "1.6.1d": {
        nummer: "1.6.1d",
        title: "Bayes (Rückwärts-Frage)",
        text: "Berechnen Sie eine Rückwärts-Wahrscheinlichkeit P(B_k|A) über die Bayes-Formel.",
    },
    "1.6.2": {
        nummer: "1.6.2",
        title: "Gedächtnislosigkeit Exp",
        text: "Zeigen Sie die Gedächtnislosigkeit der Exponentialverteilung: P(X>t+s | X>s) = P(X>t).",
    },
    "1.6.4b": {
        nummer: "1.6.4b",
        title: "Ereignisse im zweistufigen Modell",
        text: "Definieren Sie die Ereignisse im zweistufigen Modell als Teilmengen.",
    },

    // ─────────────────────────── Block 2.1 (E/Var, Fixpunkte) ───────────────────────────
    "2.1.1a": {
        nummer: "2.1.1a",
        title: "Leineweber-Spiel (Laplace)",
        text: "Zwei Würfel werden geworfen. Geben Sie einen geeigneten Laplace-Raum an.",
    },
    "2.1.1b": {
        nummer: "2.1.1b",
        title: "M = max, N = min definieren",
        text: "Definieren Sie die Zufallsvariablen M = max und N = min der beiden Würfe (bzw. die Zähl-/Indikatorvariablen).",
    },
    "2.1.1c": {
        nummer: "2.1.1c",
        title: "Gewinn G aus M, N",
        text: "Definieren Sie den Gewinn G mit Hilfe von M und N.",
        loesung: "G = (M − N) − Einsatz  (hier Einsatz = 2 €).",
    },
    "2.1.1d-e": {
        nummer: "2.1.1d-e",
        title: "E(Gewinn) / fair?",
        text: "Berechnen Sie den erwarteten Gewinn und entscheiden Sie, ob das Spiel fair ist.",
        loesung: "E(M)=161/36, E(N)=91/36 ⇒ E(M−N)=70/36=35/18. E(G)=35/18 − 2 = −1/18 ≈ −0,056 € ⇒ nicht fair.",
    },
    "2.1.2a": {
        nummer: "2.1.2a",
        title: "Normkonstante (gemeinsame Dichte)",
        text: "Bestimmen Sie die Konstante c der gemeinsamen Dichte (∬ f = 1).",
    },
    "2.1.2b": {
        nummer: "2.1.2b",
        title: "E/Var stetig (+ Existenz)",
        text: "Berechnen Sie Erwartungswert/Varianz über Integrale und begründen Sie deren Existenz.",
    },
    "2.1.2c": {
        nummer: "2.1.2c",
        title: "E einer Summe/Linearkombination",
        text: "Berechnen Sie den Erwartungswert einer Summe/Linearkombination (Linearität, ohne Unabhängigkeit).",
    },
    "2.1.3": {
        nummer: "2.1.3",
        title: "Geschenke-Permutation (Fixpunkte)",
        text: "Geschenke werden zufällig verteilt (jede Freundin genau eines). Wie groß ist die Wahrscheinlichkeit, dass mindestens eine ihr eigenes Geschenk zurückerhält? Grenzwert für N→∞.",
        loesung: "A_i = „Freundin i bekommt ihr Geschenk“. P(⋂ über k feste Indizes)=(N−k)!/N!, davon C(N,k) Stück ⇒ Term k = 1/k!. (b) P(⋃A_i)=1−Σ_{k=0}^N (−1)^k/k!. (c) → 1 − e^(−1) ≈ 0,632.",
    },
    "2.1.3a": {
        nummer: "2.1.3a",
        title: "Permutations-Laplace-Raum",
        text: "Geben Sie den Laplace-Raum der Permutationen an.",
    },
    "2.1.3d-e": {
        nummer: "2.1.3d-e",
        title: "Indikatoren & Summe S_N",
        text: "Definieren Sie die Indikatoren X_i (Freundin i bekommt ihr Geschenk) und die Summe S_N = Σ X_i.",
    },
    "2.1.4": {
        nummer: "2.1.4",
        title: "Diskrete ZV: E/Var, zulässige p",
        text: "Diskrete ZV: E/Var berechnen und die zulässigen Parameter p bestimmen (alle P ≥ 0 und Σ = 1).",
        loesung: "Bedingungen alle P(X=x) ≥ 0 und Σ = 1 ⇒ hier p ∈ [0,1].",
    },
    "2.1.4d": {
        nummer: "2.1.4d",
        title: "Lineare Transformation",
        text: "Bestimmen Sie E(aX+b) und Var(aX+b) für eine lineare Transformation.",
    },
    "2.1.5": {
        nummer: "2.1.5",
        title: "Diskrete ZV: E/Var",
        text: "Diskrete ZV mit mehreren Teilaufgaben zu Erwartungswert und Varianz.",
    },
    "2.1.5c": {
        nummer: "2.1.5c",
        title: "Existenz von E/Var",
        text: "Begründen Sie die Existenz von E/Var (endlicher Bildbereich ⇒ existiert immer).",
    },
    "2.1.5f": {
        nummer: "2.1.5f",
        title: "E einer Summe",
        text: "Berechnen Sie den Erwartungswert einer Summe (Linearität).",
    },
    "2.1.6": {
        nummer: "2.1.6",
        title: "Stetige ZV: E/Var",
        text: "Berechnen Sie E/Var einer stetigen ZV über Integrale.",
    },
    "2.1.6a": {
        nummer: "2.1.6a",
        title: "Existenz von E/Var (stetig)",
        text: "Begründen Sie die Existenz von E/Var (beschränkter Träger).",
    },
    "2.1.6b": {
        nummer: "2.1.6b",
        title: "Lineare Transformation (stetig)",
        text: "Bestimmen Sie E und Var der linear transformierten stetigen ZV.",
    },

    // ─────────────────────────── Block 2.2 (Tschebyscheff, Approximationen) ───────────────────────────
    "2.2.1c": {
        nummer: "2.2.1c",
        title: "Schranke via Tschebyscheff",
        text: "Bestimmen Sie eine untere/obere Schranke mit Hilfe der Tschebyscheff-Ungleichung.",
    },
    "2.2.1d": {
        nummer: "2.2.1d",
        title: "n bestimmen (Tschebyscheff)",
        text: "Bestimmen Sie den nötigen Stichprobenumfang n aus der Tschebyscheff-Ungleichung (nach n auflösen).",
    },
    "2.2.2b": {
        nummer: "2.2.2b",
        title: "Schranke via Tschebyscheff",
        text: "Bestimmen Sie eine Schranke mit Hilfe der Tschebyscheff-Ungleichung.",
    },
    "2.2.2c": {
        nummer: "2.2.2c",
        title: "n bestimmen (Tschebyscheff)",
        text: "Bestimmen Sie n aus der Tschebyscheff-Ungleichung.",
    },
    "2.2.3a": {
        nummer: "2.2.3a",
        title: "Modell angeben",
        text: "Geben Sie das geeignete Modell (Bernoulli-/Zählmodell) an.",
        warnung: "Steht aktuell unter LAPLACE UND unter BERNOULLI_MODELL – nur eine Zuordnung ist richtig (hängt an p=½).",
    },
    "2.2.3b": {
        nummer: "2.2.3b",
        title: "Zählvariable / Verteilung erkennen",
        text: "Definieren Sie die Zählvariable S bzw. erkennen Sie ihre Verteilung (Binomial).",
    },
    "2.2.3c": {
        nummer: "2.2.3c",
        title: "E/Var (Binomial)",
        text: "Berechnen Sie E und Var der Binomialgröße (np bzw. np(1−p)).",
    },
    "2.2.3d-e": {
        nummer: "2.2.3d-e",
        title: "Normal-Approximation",
        text: "Approximieren Sie mit dem Satz von de Moivre-Laplace (mit Stetigkeitskorrektur).",
    },
    "2.2.4": {
        nummer: "2.2.4",
        title: "Überbuchung (Normal-Approx.)",
        text: "Bestimmen Sie die größte Ticketzahl n, für die die Wahrscheinlichkeit einer Überbuchung höchstens 5 % beträgt (Normal-Approximation, abrunden).",
    },
    "2.2.5": {
        nummer: "2.2.5",
        title: "Schranke via Tschebyscheff",
        text: "Bestimmen Sie eine Schranke mit Hilfe der Tschebyscheff-Ungleichung.",
    },
    "2.2.6": {
        nummer: "2.2.6",
        title: "Tschebyscheff (auch Vielfaches-Form)",
        text: "Tschebyscheff-Ungleichung, u.a. die Vielfaches-Form P(X ≥ k·E(X)).",
    },
    "2.2.6d": {
        nummer: "2.2.6d",
        title: "Verteilung erkennen",
        text: "Erkennen Sie die Verteilung (z.B. geometrisch).",
    },

    // ─────────────────────────── Block 2.3 (Poisson/Normal, unendlicher Raum) ───────────────────────────
    "2.3.1a": {
        nummer: "2.3.1a",
        title: "Bernoulli-Modell (seltenes Ereignis)",
        text: "Geben Sie ein Bernoulli-Modell für ein seltenes Ereignis an.",
    },
    "2.3.1b": {
        nummer: "2.3.1b",
        title: "P(mind. ein …) approximieren",
        text: "Berechnen Sie P(mindestens ein …) via Poisson- bzw. Normal-Approximation.",
    },
    "2.3.2c-d": {
        nummer: "2.3.2c-d",
        title: "µ über Quantil bestimmen",
        text: "Bestimmen Sie µ bei Normalverteilung über ein Quantil: P(Z ≥ µ − x) = Φ(x/σ), nach µ auflösen.",
    },
    "2.3.3a": {
        nummer: "2.3.3a",
        title: "Abzählbar unendlicher Raum",
        text: "„Wiederhole bis zum ersten Erfolg“: Geben Sie einen abzählbar unendlichen Raum an (Ω = ℕ, Σ p_k = 1).",
    },
    "2.3.3b-c": {
        nummer: "2.3.3b-c",
        title: "Geometrische ZV / Grenzwert",
        text: "Definieren Sie die geometrische ZV; bestimmen Sie den Grenzwert bzw. wenden Sie den Zentralen Grenzwertsatz an.",
        warnung: "Geometrisch: „Nummer des Wurfs“ ⇒ Start bei 1 (E = 1/p).",
    },
    "2.3.3c": {
        nummer: "2.3.3c",
        title: "Zentraler Grenzwertsatz",
        text: "Standardisieren Sie Summe/Mittel und approximieren Sie über Φ (Zentraler Grenzwertsatz).",
    },
    "2.3.4": {
        nummer: "2.3.4",
        title: "Poisson-Approximation",
        text: "Approximieren Sie Bin(n,p) ≈ Poi(np).",
    },
    "2.3.5": {
        nummer: "2.3.5",
        title: "Poisson-Approximation",
        text: "Poisson-Approximation eines seltenen Ereignisses.",
    },
    "2.3.6": {
        nummer: "2.3.6",
        title: "Normal-Approximation / kont. Raum",
        text: "Normal-Approximation bzw. kontinuierlicher Raum.",
    },
    "2.3.6b": {
        nummer: "2.3.6b",
        title: "Erwartete Anzahl (Indikatoren)",
        text: "Berechnen Sie die erwartete Anzahl via Indikator-Zerlegung: E(S) = Σ P(X_i = 1).",
    },

    // ─────────────────────────── Block 2.4 (Deskriptiv, Schätzer) ───────────────────────────
    "2.4.1b": {
        nummer: "2.4.1b",
        title: "Lagemaße",
        text: "Bestimmen Sie arithmetisches Mittel, Median und Modalwert der Stichprobe.",
    },
    "2.4.1c-d": {
        nummer: "2.4.1c-d",
        title: "Quantile / Quartile",
        text: "Bestimmen Sie das untere Quartil und das 90 %-Quantil der Stichprobe.",
    },
    "2.4.1e-f": {
        nummer: "2.4.1e-f",
        title: "Streumaße",
        text: "Bestimmen Sie die mittlere absolute Abweichung, die Varianz und die Standardabweichung.",
    },
    "2.4.1g": {
        nummer: "2.4.1g",
        title: "Robustheit des Medians",
        text: "Wie groß kann der Median höchstens werden, wenn wenige Werte extrem verändert werden? (Robustheit)",
    },
    "2.4.2": {
        nummer: "2.4.2",
        title: "Streumaß beweisen",
        text: "Zeigen Sie, dass die betrachtete Größe ein Streumaß ist (≥ 0, translationsinvariant, homogen, = 0 nur bei konstanten Daten).",
    },
    "2.4.3a": {
        nummer: "2.4.3a",
        title: "Statistisches Modell angeben",
        text: "Geben Sie das statistische Modell vollständig an: Stichprobenraum X, Parameterraum Θ, Verteilungsannahme (P_θ).",
    },
    "2.4.3d": {
        nummer: "2.4.3d",
        title: "Erwartungstreue / Bias",
        text: "Prüfen Sie die Erwartungstreue bzw. bestimmen Sie den Bias.",
    },
    "2.4.3e": {
        nummer: "2.4.3e",
        title: "Schätzer vergleichen (Risiko)",
        text: "Vergleichen Sie zwei Schätzer über das Risiko: t₁ mind. so gut wie t₂ ⇔ R(θ,t₁) ≤ R(θ,t₂) für alle θ.",
    },
    "2.4.4a": {
        nummer: "2.4.4a",
        title: "Erwartungstreue zeigen",
        text: "Zeigen Sie die Erwartungstreue eines Schätzers (E_θ[t] = θ).",
    },
    "2.4.4b/c": {
        nummer: "2.4.4b/c",
        title: "Risiko / MSE",
        text: "Bestimmen Sie das Risiko/MSE = Var + Bias² und das Verhalten für n → ∞.",
    },
    "2.4.5a-c": {
        nummer: "2.4.5a-c",
        title: "Lagemaße",
        text: "Bestimmen Sie die Lagemaße einer Stichprobe.",
    },
    "2.4.5f": {
        nummer: "2.4.5f",
        title: "Streumaße",
        text: "Bestimmen Sie die Streumaße einer Stichprobe.",
    },
    "2.4.5g-i": {
        nummer: "2.4.5g-i",
        title: "Verschiebung um c",
        text: "Alle Werte werden um c verschoben: Lagemaße +c, Streumaße unverändert.",
    },

    // ─────────────────────────── Block 2.5 (KI) ───────────────────────────
    "2.5.1": {
        nummer: "2.5.1",
        title: "Varianzschätzer p̂(1−p̂)",
        text: "Ist der Schätzer p̂(1−p̂) erwartungstreu für die Varianz p(1−p)?",
        loesung: "E[t] = (1 − 1/n)·θ(1−θ) ⇒ nicht erwartungstreu, aber asymptotisch erwartungstreu.",
    },
    "2.5.2a": {
        nummer: "2.5.2a",
        title: "KI exakt",
        text: "Bestimmen Sie das Konfidenzintervall exakt (ohne Approximation).",
    },
    "2.5.2b": {
        nummer: "2.5.2b",
        title: "KI mit Student-t",
        text: "Bestimmen Sie das Konfidenzintervall approximativ mit der Studentschen t-Verteilung (t_{n−1}-Quantil).",
        warnung: "Wird auch von T_TEST referenziert – dort vermutlich falsch (2.5.2b ist ein t-KI, kein t-Test). Prüfen.",
    },
    "2.5.2c": {
        nummer: "2.5.2c",
        title: "KI mit Normal/Wald",
        text: "Bestimmen Sie das Konfidenzintervall approximativ mit der Normalverteilung (z-Quantil).",
    },
    "2.5.3": {
        nummer: "2.5.3",
        title: "KI-Theorie",
        text: "Aussagen über Überdeckung, Schnitt zweier KI und Länge beurteilen.",
    },
    "2.5.4": {
        nummer: "2.5.4",
        title: "Wald-KI (Anteil)",
        text: "Bestimmen Sie das Wald-Konfidenzintervall für einen Anteil.",
    },
    "2.5.5": {
        nummer: "2.5.5",
        title: "KI-Theorie",
        text: "Aussagen zu Überdeckung, Niveau und Länge beurteilen.",
    },

    // ─────────────────────────── Block 2.6 (Tests) ───────────────────────────
    "2.6.1": {
        nummer: "2.6.1",
        title: "Gauß-Test (σ bekannt)",
        text: "Führen Sie einen Gauß-Test durch (normalverteilt, Varianz bekannt): Z = (X̄ − µ₀)/(σ/√n).",
    },
    "2.6.2": {
        nummer: "2.6.2",
        title: "Zwei-Stichproben-Anteilstest",
        text: "Vergleichen Sie zwei Anteile mit dem gepoolten Zwei-Stichproben-Anteilstest.",
    },
    "2.6.3": {
        nummer: "2.6.3",
        title: "Gepaarter t-Test",
        text: "Gepaarte Messungen: Ein-Stichproben-t-Test auf H₀: µ_D = 0 mit D_i = X_i − Y_i.",
        warnung: "Gepaarte Daten NICHT als zwei unabhängige Stichproben behandeln.",
    },
    "2.6.4": {
        nummer: "2.6.4",
        title: "Anteilstest (einseitig)",
        text: "Führen Sie einen einseitigen Anteilstest durch: Z = (p̂ − p₀)/√(p₀(1−p₀)/n).",
    },

    // ─────────────────────────── Klausur 1 (Besprechung) ───────────────────────────
    "K-1a": {
        nummer: "K-1a",
        title: "Wahrscheinlichkeitsraum (zwei Bernoulli)",
        text: "Unfaire Münze mit allgemeinem p: Geben Sie einen geeigneten Wahrscheinlichkeitsraum für den zweifachen Wurf an.",
        loesung: "Ω = {0,1}², zwei unabhängige Bernoulli(p): P({ω}) = p^(#Einsen)·(1−p)^(#Nullen).",
        warnung: "Kein Laplace: {0,1}² ist nur für p = ½ gleichverteilt.",
    },
    "K-1b": {
        nummer: "K-1b",
        title: "X = max, Y = min definieren",
        text: "Definieren Sie die Zufallsvariablen X = max und Y = min der beiden Würfe als Abbildungen.",
        loesung: "X, Y : Ω → {0,1}, X(ω)=max(ω₁,ω₂), Y(ω)=min(ω₁,ω₂).",
    },
    "K-1c": {
        nummer: "K-1c",
        title: "Gemeinsame Verteilung von X, Y",
        text: "Bestimmen Sie die gemeinsame Verteilung von X und Y (z.B. P(X=1, Y=0)).",
        loesung: "P(X=1,Y=0) = P(genau eine 1) = 2p(1−p); P(X=0,Y=0)=(1−p)²; P(X=1,Y=1)=p²; P(X=0,Y=1)=0.",
    },
    "K-1e": {
        nummer: "K-1e",
        title: "Verteilungsfunktion von X",
        text: "Bestimmen Sie die Verteilungsfunktion von X aus den Wahrscheinlichkeiten P(X=x).",
        loesung: "P(X=0)=(1−p)², P(X=1)=1−(1−p)². F(x)=0 für x<0; (1−p)² für 0≤x<1; 1 für x≥1.",
    },
    "K-1f": {
        nummer: "K-1f",
        title: "VF skizzieren (p = 2/3)",
        text: "Skizzieren Sie die Verteilungsfunktion von X für p = 2/3.",
        loesung: "Sprung 1/9 bei 0, Sprung 8/9 bei 1 (Treppe: 0 → 1/9 → 1).",
    },
    "K-1g": {
        nummer: "K-1g",
        title: "E(X), Var(X) (p = 2/3) & Existenz",
        text: "Berechnen Sie E(X) und Var(X) für p = 2/3 und begründen Sie deren Existenz.",
        loesung: "X ~ Bernoulli(8/9): E(X)=8/9, Var(X)=8/9·1/9=8/81. Existenz: endlicher Bildbereich.",
    },
    "K-2c": {
        nummer: "K-2c",
        title: "VF skizzieren (Gleichverteilung)",
        text: "Skizzieren Sie die Verteilungsfunktion der Gleichverteilung auf [−1, 2].",
        loesung: "F(x)=0 für x<−1; (x+1)/3 für −1≤x≤2; 1 für x>2 (Gerade von 0 auf 1).",
    },
    "K-2e": {
        nummer: "K-2e",
        title: "E(X) (Gleichverteilung)",
        text: "Berechnen Sie den Erwartungswert der Gleichverteilung auf [−1, 2].",
        loesung: "E(X) = (a+b)/2 = (−1+2)/2 = 1/2.",
    },
    "K-3a": {
        nummer: "K-3a",
        title: "Wahrscheinlichkeitsraum (Bernoulli, n=625)",
        text: "625 Drehungen, Gewinn mit p = 1/5: Geben Sie einen geeigneten Wahrscheinlichkeitsraum an.",
        loesung: "Ω = {0,1}^625, unabhängige Bernoulli(1/5).",
        warnung: "Kein Laplace: {0,1}^625 ist für p = 1/5 nicht gleichverteilt.",
    },
    "K-3b": {
        nummer: "K-3b",
        title: "Anzahl Gewinne S definieren",
        text: "Definieren Sie die Zufallsvariable S = Anzahl der Gewinne.",
        loesung: "S = Σ_{i=1}^{625} ω_i.",
    },
    "K-3c": {
        nummer: "K-3c",
        title: "Verteilung von S erkennen",
        text: "Welcher Verteilung folgt S? Geben Sie E und Var an.",
        loesung: "S ~ Bin(625, 1/5); E = np = 125, Var = np(1−p) = 100 (σ = 10).",
    },
    "K-3e": {
        nummer: "K-3e",
        title: "P(S > 140) (Normal-Approx.)",
        text: "Bestimmen Sie näherungsweise P(S > 140) mit dem Satz von de Moivre-Laplace.",
        loesung: "P(S>140)=P(S≥141) ≈ 1 − Φ((140,5 − 125)/10) = 1 − Φ(1,55) ≈ 0,061.",
        warnung: "„> 140“ = „≥ 141“ ⇒ Schnittgrenze 140,5 (nicht 139,5).",
    },
};