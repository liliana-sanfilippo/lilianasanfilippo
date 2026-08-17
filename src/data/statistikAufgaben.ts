import {StatistikAufgabe} from "../types/statistik_types";


export const statistikAufgaben: Record<string, StatistikAufgabe> = {
    // ─────────────────────────── Block 1.1 (Laplace / Abzählen) ───────────────────────────
    "1.1.1a-b": {
        nummer: "1.1.1a-b",
        text: "Wir würfeln zweimal mit einem fairen Würfel. Geben Sie einen geeigneten Ereignisraum  für dieses Zufallsexperiment an, der es erlaubt,\n" +
            "die folgenden Fragen zu beantworten. Geben Sie eine für dieses Zufallsexperiment geeignete" +
            " Wahrscheinlichkeitsfunktion μ an. " +
            "Begründen Sie Ihre Wahl.",
        title: "Zweimal Würfeln (fairer Würfel): geeigneten Laplace-Raum Ω und Wahrscheinlichkeitsfunktion µ angeben.",
    },
    "1.1.1c": {
        nummer: "1.1.1c",
        text: "",
        title: "Ereignisse als Teilmengen von Ω definieren (z.B. „mindestens ein Würfel zeigt eine gerade Zahl“).",
    },
    "1.1.1c-d": {
        nummer: "1.1.1c-d",
        text: "",
        title: "Wahrscheinlichkeiten der Ereignisse; „mindestens ein gerade“ bequem über das Gegenereignis.",
    },
    "1.1.2a": {
        nummer: "1.1.2a",
        text: "",
        title: "Bibliothek mit 1000 nummerierten Büchern: Laplace-Raum angeben.",
    },
    "1.1.2b-c": {
        nummer: "1.1.2b-c",
        text: "",
        title: "Wahrscheinlichkeiten einzelner Ereignisse durch direktes Abzählen (#A/#Ω).",
    },
    "1.1.3a-b": {
        nummer: "1.1.3a-b",
        text: "",
        title: "Glücksrad dreimal drehen (vier gleich große Felder): Laplace-Produktraum Ω = {1..4}³.",
    },
    "1.1.3c": {
        nummer: "1.1.3c",
        text: "",
        title: "Ereignisse zum dreifachen Glücksrad als Teilmengen definieren.",
    },
    "1.1.3c-d": {
        nummer: "1.1.3c-d",
        text: "",
        title: "Wahrscheinlichkeiten (z.B. strikt wachsende Ergebnisfolge) durch Abzählen.",
    },
    "1.1.4": {
        nummer: "1.1.4",
        text: "",
        title: "Präsenz: Laplace-/Abzähl-Aufgabe.",
        warnung: "Präsenzaufgabe (Z=4), keine Hausaufgabe — Inhalt ggf. mit dem Blatt abgleichen.",
    },
    "1.1.5b": {
        nummer: "1.1.5b",
        text: "",
        title: "„mindestens einmal“-Ereignis über das Gegenereignis: 1 − P(keinmal).",
    },

    // ─────────────────────────── Block 1.2 ───────────────────────────
    "1.2.2a": {
        nummer: "1.2.2a",
        text: "",
        title: "Konstante c so bestimmen, dass f eine Dichte ist (∫ c·g = 1), danach f ≥ 0 prüfen.",
    },
    "1.2.3a": {
        nummer: "1.2.3a",
        text: "",
        title: "Nummerierte Kugeln: Laplace-Raum angeben.",
    },
    "1.2.3b": {
        nummer: "1.2.3b",
        text: "",
        title: "Teilbarkeits-Ereignisse als Teilmengen definieren und ihre Wahrscheinlichkeiten (Abzählen).",
    },
    "1.2.3c": {
        nummer: "1.2.3c",
        text: "",
        title: "P(A∪B∪C) für Teilbarkeits-Ereignisse via Ein-/Ausschluss; Schnitt = Teilbarkeit durch kgV.",
    },

    // ─────────────────────────── Block 1.3 (ZV, Verteilung, VF) ───────────────────────────
    "1.3.1": {
        nummer: "1.3.1",
        text: "",
        title: "Glücksrad mit ungleich großen Feldern (Feld „1“ doppelt so groß): kein Laplace-Raum, Gewichte ∝ Feldgröße.",
    },
    "1.3.1a": {
        nummer: "1.3.1a",
        text: "",
        title: "ZV X definieren und Wahrscheinlichkeitsfunktion µ_X bestimmen (µ_X(1)=2/5, sonst 1/5); ggf. VF.",
    },
    "1.3.1b": {
        nummer: "1.3.1b",
        text: "",
        title: "Fortsetzung 1.3.1: Normierung/Dichte bzw. VF skizzieren.",
    },
    "1.3.1a-b": {
        nummer: "1.3.1a-b",
        text: "",
        title: "Verteilung und Verteilungsfunktion von X zum Glücksrad (Graph lesen/skizzieren).",
    },
    "1.3.2a": {
        nummer: "1.3.2a",
        text: "",
        title: "Gegebener VF-Graph analysieren: klassifizieren, µ_X bzw. f_X ablesen, Wahrscheinlichkeiten.",
        warnung: "Zuordnung a↔b (diskret/stetig) prüfen: welcher der beiden Graphen hat Sprünge?",
    },
    "1.3.2b": {
        nummer: "1.3.2b",
        text: "",
        title: "Gegebener VF-Graph analysieren: klassifizieren, µ_X bzw. f_X ablesen, Wahrscheinlichkeiten.",
        warnung: "Zuordnung a↔b (diskret/stetig) prüfen: welcher der beiden Graphen hat Sprünge?",
    },
    "1.3.2a-b": {
        nummer: "1.3.2a-b",
        text: "",
        title: "Beide VF-Graphen von 1.3.2 analysieren (diskreter vs. stetiger Anteil).",
    },
    "1.3.3a": {
        nummer: "1.3.3a",
        text: "",
        title: "Zwei-ZV-Aufgabe: Laplace-Raum/Modell angeben.",
    },
    "1.3.3b-c": {
        nummer: "1.3.3b-c",
        text: "",
        title: "Zufallsvariablen X, Y als Abbildungen ω↦X(ω) definieren.",
    },
    "1.3.3d": {
        nummer: "1.3.3d",
        text: "",
        title: "Verteilung (Wahrscheinlichkeitsfunktion µ_X) einer der ZV bestimmen.",
    },
    "1.3.3e": {
        nummer: "1.3.3e",
        text: "",
        title: "Verteilungsfunktion aus den Wahrscheinlichkeiten aufsummieren (Treppe).",
    },
    "1.3.3f-g": {
        nummer: "1.3.3f-g",
        text: "",
        title: "Gemeinsame Verteilung zweier ZV als Matrix P(X=x, Y=y).",
    },

    // ─────────────────────────── Block 1.4 (Unabhängigkeit, gemeinsame Dichte) ───────────────────────────
    "1.4.1": {
        nummer: "1.4.1",
        text: "",
        title: "Ereignisse A, B, C, D auf gemeinsame Unabhängigkeit prüfen (Produktregel für jede Teilmenge).",
    },
    "1.4.1b": {
        nummer: "1.4.1b",
        text: "",
        title: "Teilaufgabe mit P(B)∈{0,1}: triviales Ereignis ist von jedem A unabhängig.",
    },
    "1.4.2a": {
        nummer: "1.4.2a",
        text: "",
        title: "Gemeinsame Dichte: Konstante c bestimmen (∬ f = 1).",
    },
    "1.4.2c": {
        nummer: "1.4.2c",
        text: "",
        title: "Randdichten f_X, f_Y aus der gemeinsamen Dichte (jeweils die andere Variable herausintegrieren).",
    },
    "1.4.2d": {
        nummer: "1.4.2d",
        text: "",
        title: "Verteilungsfunktion aus der Randdichte berechnen.",
    },
    "1.4.2e": {
        nummer: "1.4.2e",
        text: "",
        title: "Unabhängigkeit über die gemeinsame Dichte prüfen (Faktorisierung + Rechteck-Träger).",
    },
    "1.4.3a": {
        nummer: "1.4.3a",
        text: "",
        title: "René, Multiple-Choice: Bernoulli-Modell (jede Frage unabhängig richtig mit p).",
    },
    "1.4.3b-d": {
        nummer: "1.4.3b-d",
        text: "",
        title: "P(besteht)=P(S≥2K), P(Note≤2,3)=P(S≥3K) mit S~Bin(4K, 0,6); für konkrete K auswerten.",
    },
    "1.4.4": {
        nummer: "1.4.4",
        text: "",
        title: "Würfel 20×: Ereignisse A–D definieren, Wahrscheinlichkeiten berechnen und Unabhängigkeit prüfen.",
    },
    "1.4.4b": {
        nummer: "1.4.4b",
        text: "",
        title: "Ereignisse B/D („größte Zahl > 4“ bzw. „< 5“): über Gegenereignis bzw. „alle ≤ k“.",
    },
    "1.4.5": {
        nummer: "1.4.5",
        text: "",
        title: "Gemeinsame (Gleich-)Verteilung auf einer Fläche: Unabhängigkeit über den Träger prüfen.",
    },

    // ─────────────────────────── Block 1.5 (gemeinsame Dichte, Wartezeiten) ───────────────────────────
    "1.5.1a": {
        nummer: "1.5.1a",
        text: "",
        title: "Gemeinsame Dichte: Normierungskonstante c.",
    },
    "1.5.1b": {
        nummer: "1.5.1b",
        text: "",
        title: "Randdichten aus der gemeinsamen Dichte.",
    },
    "1.5.1c": {
        nummer: "1.5.1c",
        text: "",
        title: "Verteilungsfunktion aus der Randdichte.",
    },
    "1.5.1d": {
        nummer: "1.5.1d",
        text: "",
        title: "Unabhängigkeit über die gemeinsame Dichte prüfen.",
    },
    "1.5.1e": {
        nummer: "1.5.1e",
        text: "",
        title: "Wahrscheinlichkeit (z.B. P(X>Y)) als Doppelintegral über {Bedingung} ∩ Träger.",
    },
    "1.5.2": {
        nummer: "1.5.2",
        text: "",
        title: "Exponentialverteilte Wartezeiten (Jean): Verteilung erkennen und rechnen.",
    },
    "1.5.2a": {
        nummer: "1.5.2a",
        text: "",
        title: "P(X>10) für X~Exp(1/5): direkt e^(−10/5) = e^(−2).",
    },
    "1.5.2b-c": {
        nummer: "1.5.2b-c",
        text: "",
        title: "Summe zweier unabhängiger Exp(λ): P(X+Y≤20) via Faltung / Erlang-Dichte.",
    },
    "1.5.3a": {
        nummer: "1.5.3a",
        text: "",
        title: "VF von max/min unabhängiger ZV beweisen: P(max≤x)=∏F_i, P(min≤x)=1−∏(1−F_i).",
    },
    "1.5.3b": {
        nummer: "1.5.3b",
        text: "",
        title: "System-ZV X aus T1..T4 zusammensetzen: X = max{min(T1,T2), min(T3,T4)} (Reihe⇒min, Parallel⇒max).",
    },
    "1.5.3c": {
        nummer: "1.5.3c",
        text: "",
        title: "Zeigen: min{T1,T2} und min{T3,T4} sind unabhängig (disjunkte Variablengruppen).",
    },
    "1.5.4a": {
        nummer: "1.5.4a",
        text: "",
        title: "Gemeinsame Dichte: Konstante c.",
    },
    "1.5.4d": {
        nummer: "1.5.4d",
        text: "",
        title: "Unabhängigkeit über die gemeinsame Dichte prüfen.",
    },
    "1.5.5": {
        nummer: "1.5.5",
        text: "",
        title: "Funktionen unabhängiger ZV bleiben unabhängig (disjunkte Gruppen).",
    },

    // ─────────────────────────── Block 1.6 (bedingte W., Bayes) ───────────────────────────
    "1.6.1a": {
        nummer: "1.6.1a",
        text: "",
        title: "Zweistufiges Experiment (Münze wählen, dann werfen): zusammengesetzten Ereignisraum angeben.",
    },
    "1.6.1b": {
        nummer: "1.6.1b",
        text: "",
        title: "Ereignisse / Zufallsvariablen zum zweistufigen Experiment definieren.",
    },
    "1.6.1c": {
        nummer: "1.6.1c",
        text: "",
        title: "P(A) über die totale Wahrscheinlichkeit: Σ P(A|B_i)·P(B_i).",
    },
    "1.6.1d": {
        nummer: "1.6.1d",
        text: "",
        title: "Rückwärts-Frage über Bayes: P(B_k|A).",
    },
    "1.6.2": {
        nummer: "1.6.2",
        text: "",
        title: "Gedächtnislosigkeit der Exp-Verteilung: P(X>t+s | X>s) = P(X>t) zeigen.",
    },
    "1.6.4b": {
        nummer: "1.6.4b",
        text: "",
        title: "Ereignisse im zweistufigen Modell als Teilmengen definieren.",
    },

    // ─────────────────────────── Block 2.1 (E/Var, Fixpunkte) ───────────────────────────
    "2.1.1a": {
        nummer: "2.1.1a",
        text: "",
        title: "Leineweber-Spiel (zwei Würfel): Laplace-Raum angeben.",
    },
    "2.1.1b": {
        nummer: "2.1.1b",
        text: "",
        title: "M = max, N = min bzw. Zähl-/Indikatorvariablen definieren.",
    },
    "2.1.1c": {
        nummer: "2.1.1c",
        text: "",
        title: "Gewinn G = (M − N) − Einsatz aus M und N zusammensetzen.",
    },
    "2.1.1d-e": {
        nummer: "2.1.1d-e",
        text: "",
        title: "E(M), E(N) bzw. E(G) diskret berechnen; „fair?“ ⇔ E(G)=0. Hier E(M−N)=35/18, E(G)=−1/18 ⇒ nicht fair.",
    },
    "2.1.2a": {
        nummer: "2.1.2a",
        text: "",
        title: "Gemeinsame Dichte: Konstante c (∬ f = 1).",
    },
    "2.1.2b": {
        nummer: "2.1.2b",
        text: "",
        title: "Erwartungswert/Varianz stetig (∫ x f dx); Existenz begründen.",
    },
    "2.1.2c": {
        nummer: "2.1.2c",
        text: "",
        title: "Erwartungswert einer Summe/Linearkombination (Linearität, ohne Unabhängigkeit).",
    },
    "2.1.3": {
        nummer: "2.1.3",
        text: "",
        title: "Geschenke-Permutation (Fixpunkte). (b) P(mind. ein eigenes)=1−Σ(−1)^k/k!; (c) → 1−e^(−1)≈0,632.",
    },
    "2.1.3a": {
        nummer: "2.1.3a",
        text: "",
        title: "Laplace-Raum der Permutationen angeben.",
    },
    "2.1.3d-e": {
        nummer: "2.1.3d-e",
        text: "",
        title: "Indikatoren X_i (i-te Freundin bekommt ihr Geschenk) und Summe S_N = Σ X_i definieren.",
    },
    "2.1.4": {
        nummer: "2.1.4",
        text: "",
        title: "Diskrete ZV, E/Var; zulässige Parameter p bestimmen (alle P ≥ 0 und Σ = 1 ⇒ p ∈ [0,1]).",
    },
    "2.1.4d": {
        nummer: "2.1.4d",
        text: "",
        title: "Lineare Transformation Y = aX + b: E(aX+b) = aE(X)+b, Var(aX+b) = a²Var(X).",
    },
    "2.1.5": {
        nummer: "2.1.5",
        text: "",
        title: "Diskrete ZV, E/Var (mehrere Teilaufgaben).",
    },
    "2.1.5c": {
        nummer: "2.1.5c",
        text: "",
        title: "Existenz von E/Var begründen (endlicher Bildbereich ⇒ existiert immer).",
    },
    "2.1.5f": {
        nummer: "2.1.5f",
        text: "",
        title: "Erwartungswert einer Summe (Linearität).",
    },
    "2.1.6": {
        nummer: "2.1.6",
        text: "",
        title: "Stetige ZV: E/Var über Integrale.",
    },
    "2.1.6a": {
        nummer: "2.1.6a",
        text: "",
        title: "Existenz von E/Var (beschränkter Träger ⇒ existiert).",
    },
    "2.1.6b": {
        nummer: "2.1.6b",
        text: "",
        title: "Lineare Transformation der stetigen ZV: E und Var.",
    },

    // ─────────────────────────── Block 2.2 (Tschebyscheff, Approximationen) ───────────────────────────
    "2.2.1c": {
        nummer: "2.2.1c",
        text: "",
        title: "Untere/obere Schranke via Tschebyscheff-Ungleichung.",
    },
    "2.2.1d": {
        nummer: "2.2.1d",
        text: "",
        title: "Stichprobenumfang n aus der Tschebyscheff-Ungleichung bestimmen (nach n auflösen).",
    },
    "2.2.2b": {
        nummer: "2.2.2b",
        text: "",
        title: "Schranke via Tschebyscheff.",
    },
    "2.2.2c": {
        nummer: "2.2.2c",
        text: "",
        title: "n bestimmen (Tschebyscheff).",
    },
    "2.2.3a": {
        nummer: "2.2.3a",
        text: "",
        title: "Modell angeben (Bernoulli-/Zählmodell).",
        warnung: "Steht aktuell sowohl unter LAPLACE als auch unter BERNOULLI_MODELL — nur eine Zuordnung ist richtig; prüfen, ob p = ½.",
    },
    "2.2.3b": {
        nummer: "2.2.3b",
        text: "",
        title: "Zählvariable S definieren bzw. Verteilung erkennen (Binomial).",
    },
    "2.2.3c": {
        nummer: "2.2.3c",
        text: "",
        title: "E und Var der Binomialgröße (np bzw. np(1−p)).",
    },
    "2.2.3d-e": {
        nummer: "2.2.3d-e",
        text: "",
        title: "Normal-Approximation (de Moivre-Laplace) mit Stetigkeitskorrektur.",
    },
    "2.2.4": {
        nummer: "2.2.4",
        text: "",
        title: "Überbuchung: größtes n mit P(Überbuchung) ≤ 5 % via Normal-Approximation (abrunden).",
    },
    "2.2.5": {
        nummer: "2.2.5",
        text: "",
        title: "Schranke via Tschebyscheff.",
    },
    "2.2.6": {
        nummer: "2.2.6",
        text: "",
        title: "Tschebyscheff, u.a. die Vielfaches-Form P(X ≥ k·E(X)).",
    },
    "2.2.6d": {
        nummer: "2.2.6d",
        text: "",
        title: "Verteilung erkennen (z.B. geometrisch).",
    },

    // ─────────────────────────── Block 2.3 (Poisson/Normal, unendlicher Raum) ───────────────────────────
    "2.3.1a": {
        nummer: "2.3.1a",
        text: "",
        title: "Bernoulli-Modell für ein seltenes Ereignis angeben.",
    },
    "2.3.1b": {
        nummer: "2.3.1b",
        text: "",
        title: "P(mind. ein …) via Poisson- bzw. Normal-Approximation.",
    },
    "2.3.2c-d": {
        nummer: "2.3.2c-d",
        text: "",
        title: "µ bei Normalverteilung über ein Quantil bestimmen: P(Z ≥ µ − x) = Φ(x/σ), nach µ auflösen.",
    },
    "2.3.3a": {
        nummer: "2.3.3a",
        text: "",
        title: "Abzählbar unendlicher Raum („wiederhole bis zum ersten Erfolg“): Ω = ℕ, Σ p_k = 1.",
    },
    "2.3.3b-c": {
        nummer: "2.3.3b-c",
        text: "",
        title: "Geometrische ZV definieren; Grenzwert / Zentraler Grenzwertsatz.",
        warnung: "Geometrisch: „Nummer des Wurfs“ ⇒ Start bei 1 (E = 1/p). Konvention beachten.",
    },
    "2.3.3c": {
        nummer: "2.3.3c",
        text: "",
        title: "Summe/Mittel standardisieren und über Φ approximieren (Zentraler Grenzwertsatz).",
    },
    "2.3.4": {
        nummer: "2.3.4",
        text: "",
        title: "Poisson-Approximation Bin(n,p) ≈ Poi(np).",
    },
    "2.3.5": {
        nummer: "2.3.5",
        text: "",
        title: "Poisson-Approximation.",
    },
    "2.3.6": {
        nummer: "2.3.6",
        text: "",
        title: "Normal-Approximation / kontinuierlicher Raum.",
    },
    "2.3.6b": {
        nummer: "2.3.6b",
        text: "",
        title: "Erwartete Anzahl via Indikator-Zerlegung: E(S) = Σ P(X_i = 1).",
    },

    // ─────────────────────────── Block 2.4 (Deskriptiv, Schätzer) ───────────────────────────
    "2.4.1b": {
        nummer: "2.4.1b",
        text: "",
        title: "Lagemaße: arithmetisches Mittel, Median, Modalwert der Stichprobe.",
    },
    "2.4.1c-d": {
        nummer: "2.4.1c-d",
        text: "",
        title: "Quantile/Quartile (unteres Quartil, 90 %-Quantil).",
    },
    "2.4.1e-f": {
        nummer: "2.4.1e-f",
        text: "",
        title: "Streumaße: mittlere absolute Abweichung, Varianz und Standardabweichung.",
    },
    "2.4.1g": {
        nummer: "2.4.1g",
        text: "",
        title: "Robustheit des Medians gegenüber wenigen extrem veränderten Werten.",
    },
    "2.4.2": {
        nummer: "2.4.2",
        text: "",
        title: "Zeigen, dass eine Größe ein Streumaß ist (≥ 0, translationsinvariant, homogen, = 0 nur bei konstanten Daten).",
    },
    "2.4.3a": {
        nummer: "2.4.3a",
        text: "",
        title: "Statistisches Modell angeben: Stichprobenraum X, Parameterraum Θ, Verteilungsannahme (P_θ).",
    },
    "2.4.3d": {
        nummer: "2.4.3d",
        text: "",
        title: "Erwartungstreue prüfen / Bias bestimmen.",
    },
    "2.4.3e": {
        nummer: "2.4.3e",
        text: "",
        title: "Zwei Schätzer über das Risiko vergleichen: t₁ mind. so gut wie t₂ ⇔ R(θ,t₁) ≤ R(θ,t₂) für alle θ.",
    },
    "2.4.4a": {
        nummer: "2.4.4a",
        text: "",
        title: "Erwartungstreue eines Schätzers zeigen (E_θ[t] = θ).",
    },
    "2.4.4b/c": {
        nummer: "2.4.4b/c",
        text: "",
        title: "Risiko/MSE = Var + Bias²; Verhalten für n → ∞.",
    },
    "2.4.5a-c": {
        nummer: "2.4.5a-c",
        text: "",
        title: "Lagemaße einer Stichprobe.",
    },
    "2.4.5f": {
        nummer: "2.4.5f",
        text: "",
        title: "Streumaße einer Stichprobe.",
    },
    "2.4.5g-i": {
        nummer: "2.4.5g-i",
        text: "",
        title: "Alle Werte um c verschoben: Lagemaße +c, Streumaße unverändert.",
    },

    // ─────────────────────────── Block 2.5 (KI) ───────────────────────────
    "2.5.1": {
        nummer: "2.5.1",
        text: "",
        title: "Varianzschätzer p̂(1−p̂): E[t] = (1−1/n)θ(1−θ) ⇒ nicht erwartungstreu, aber asymptotisch.",
    },
    "2.5.2a": {
        nummer: "2.5.2a",
        text: "",
        title: "Konfidenzintervall exakt (ohne Approximation).",
    },
    "2.5.2b": {
        nummer: "2.5.2b",
        text: "",
        title: "Konfidenzintervall über Student-t-Approximation (t_{n−1}-Quantil statt z).",
        warnung: "Wird auch von T_TEST referenziert — dort ggf. falsch zugeordnet (2.5.2b ist ein t-KI, kein t-Test). Prüfen.",
    },
    "2.5.2c": {
        nummer: "2.5.2c",
        text: "",
        title: "Konfidenzintervall über Normal-/Wald-Approximation (z-Quantil).",
    },
    "2.5.3": {
        nummer: "2.5.3",
        text: "",
        title: "KI-Theorie: Überdeckung, Schnitt zweier KI, Länge.",
    },
    "2.5.4": {
        nummer: "2.5.4",
        text: "",
        title: "Wald-Konfidenzintervall für einen Anteil.",
    },
    "2.5.5": {
        nummer: "2.5.5",
        text: "",
        title: "KI-Theorie (Überdeckung, Niveau, Länge).",
    },

    // ─────────────────────────── Block 2.6 (Tests) ───────────────────────────
    "2.6.1": {
        nummer: "2.6.1",
        text: "",
        title: "Gauß-Test (normalverteilt, Varianz bekannt): Z = (X̄ − µ₀)/(σ/√n).",
    },
    "2.6.2": {
        nummer: "2.6.2",
        text: "",
        title: "Zwei-Stichproben-Anteilstest (gepoolter Schätzer p̂).",
    },
    "2.6.3": {
        nummer: "2.6.3",
        text: "",
        title: "Gepaarter t-Test: D_i = X_i − Y_i, Ein-Stichproben-Test auf H₀: µ_D = 0.",
        warnung: "Gepaarte Daten NICHT als zwei unabhängige Stichproben behandeln.",
    },
    "2.6.4": {
        nummer: "2.6.4",
        text: "",
        title: "Anteilstest (einseitig): Z = (p̂ − p₀)/√(p₀(1−p₀)/n).",
    },

    // ─────────────────────────── Klausur 1 (Besprechung) ───────────────────────────
    "K-1a": {
        nummer: "Klausur 1a",
        text: "",
        title: "Wahrscheinlichkeitsraum: zwei unabhängige Bernoulli(p), Münze mit allgemeinem p.",
        warnung: "Kein Laplace: {0,1}² ist nur für p = ½ gleichverteilt.",
    },
    "K-1b": {
        nummer: "Klausur 1b",
        text: "",
        title: "X = max, Y = min der beiden Würfe als Abbildungen definieren.",
    },
    "K-1c": {
        nummer: "Klausur 1c",
        text: "",
        title: "Gemeinsame Verteilung von X, Y; z.B. P(X=1, Y=0) = 2p(1−p).",
    },
    "K-1e": {
        nummer: "Klausur 1e",
        text: "",
        title: "Verteilungsfunktion von X aus den Wahrscheinlichkeiten P(X=x) aufsummieren.",
    },
    "K-1f": {
        nummer: "Klausur 1f",
        text: "",
        title: "Verteilungsfunktion für p = 2/3 skizzieren.",
    },
    "K-1g": {
        nummer: "Klausur 1g",
        text: "",
        title: "E(X), Var(X) für p = 2/3; Existenz begründen (endlicher Bildbereich).",
    },
    "K-2c": {
        nummer: "Klausur 2c",
        text: "",
        title: "VF der Gleichverteilung auf [−1, 2] skizzieren.",
    },
    "K-2e": {
        nummer: "Klausur 2e",
        text: "",
        title: "E(X) der Gleichverteilung: (a+b)/2 = 1/2.",
    },
    "K-3a": {
        nummer: "Klausur 3a",
        text: "",
        title: "625 Drehungen, Gewinn mit p = 1/5: Bernoulli-Modell.",
        warnung: "Kein Laplace: {0,1}^625 ist für p = 1/5 nicht gleichverteilt.",
    },
    "K-3b": {
        nummer: "Klausur 3b",
        text: "",
        title: "Anzahl Gewinne S als Zählvariable definieren.",
    },
    "K-3c": {
        nummer: "Klausur 3c",
        text: "",
        title: "Verteilung von S erkennen: S ~ Bin(625, 1/5), E = 125, Var = 100.",
    },
    "K-3e": {
        nummer: "Klausur 3e",
        text: "",
        title: "P(S > 140) via Normal-Approximation ≈ 1 − Φ(1,55) ≈ 0,061.",
        warnung: "„> 140“ = „≥ 141“ ⇒ Schnittgrenze 140,5 (nicht 139,5).",
    },
};
