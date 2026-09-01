export type Veranstaltungstyp =
  | "AG"
  | "AngSelb"
  | "BI-Pjs"
  | "BI-Projekt"
  | "BPr"
  | "BPr/S"
  | "BPS"
  | "BS"
  | "CR"
  | "E-Kurs"
  | "EPr"
  | "ES"
  | "EV"
  | "Ex"
  | "FD"
  | "FDA"
  | "FDB"
  | "FdK"
  | "FdÜ"
  | "FK"
  | "FS"
  | "GK"
  | "GK I"
  | "GK II"
  | "GK(G)"
  | "Gr"
  | "GradS"
  | "GrS"
  | "GS 1"
  | "GS 2"
  | "GSG"
  | "GSH"
  | "GST"
  | "GV"
  | "HA"
  | "HoS"
  | "HS"
  | "HSem"
  | "IS"
  | "K"
  | "Kl"
  | "Ko"
  | "KommS"
  | "KPr"
  | "L"
  | "LEH"
  | "LPÜ"
  | "MDP"
  | "ME"
  | "MK"
  | "MP"
  | "OP"
  | "PFD"
  | "Pj"
  | "PjS"
  | "Pkbs"
  | "Pks"
  | "POL"
  | "PP"
  | "Pr"
  | "Präpkurs"
  | "PrktSem"
  | "Prüfung"
  | "PS"
  | "Pstu"
  | "PS2"
  | "R"
  | "S"
  | "Sitz"
  | "SkillsLab"
  | "SpA"
  | "SPF"
  | "SpK"
  | "SPS"
  | "SPS(BP)"
  | "SPS(PP)"
  | "SPS(TP)"
  | "StGr"
  | "StPj"
  | "Stud.AG"
  | "SU"
  | "TFD"
  | "TP"
  | "TP/S"
  | "Tut"
  | "Ü"
  | "UaK"
  | "UaKD"
  | "ÜG"
  | "UmP"
  | "ÜPrkt"
  | "V"
  | "VK"
  | "VK(G)"
  | "Vtr"
  | "VÜA"
  | "WkS"
  | "WS";

export interface VeranstaltungstypInfo {
  kuerzel: Veranstaltungstyp;
  name: string;
  name_en?: string;
}

export const veranstaltungstypen: readonly VeranstaltungstypInfo[] = [
  { kuerzel: "AG", name: "Arbeitsgruppe", name_en: "working group" },
  { kuerzel: "AngSelb", name: "Angeleitetes Selbststudium", name_en: "guided self-study" },
  { kuerzel: "BI-Pjs", name: "BI-Projektseminar", name_en: "Business Informatics (BI)-project seminar" },
  { kuerzel: "BI-Projekt", name: "BI-Projekt", name_en: "Business Informatics (BI)-project" },
  { kuerzel: "BPr", name: "Blockpraktikum", name_en: "block work placement" },
  { kuerzel: "BPr/S", name: "Blockpraktikum und Seminar", name_en: "block work placement and seminar" },
  { kuerzel: "BPS", name: "Berufsfeldbezogene Praxisstudie", name_en: "occupational practice studies" },
  { kuerzel: "BS", name: "Blockseminar", name_en: "block seminar" },
  { kuerzel: "CR", name: "Corona-Registrierung" },
  { kuerzel: "E-Kurs", name: "Einführungskurs", name_en: "introductory course" },
  { kuerzel: "EPr", name: "Experimentalpraktikum", name_en: "practical training in empirical research" },
  { kuerzel: "ES", name: "Experimentalseminar", name_en: "seminar in empirical research" },
  { kuerzel: "EV", name: "Ergaenzungsveranstaltung", name_en: "complementary session" },
  { kuerzel: "Ex", name: "Exkursion", name_en: "excursion" },
  { kuerzel: "FD", name: "Fachdidaktisches Seminar", name_en: "seminar in teaching methodology" },
  { kuerzel: "FDA", name: "Fachdidaktisches Seminar A", name_en: "didactic seminar A" },
  { kuerzel: "FDB", name: "Fachdidaktisches Seminar B", name_en: "didactic seminar B" },
  { kuerzel: "FdK", name: "Fachdidaktischer Kurs", name_en: "course in teaching methodology" },
  { kuerzel: "FdÜ", name: "Fachdidaktische Übung", name_en: "practice in teaching methodology" },
  { kuerzel: "FK", name: "Fachkurs", name_en: "subject-specific course" },
  { kuerzel: "FS", name: "Fallseminar", name_en: "case-study seminar" },
  { kuerzel: "GK", name: "Grundkurs", name_en: "basic course" },
  { kuerzel: "GK I", name: "Grundkurs I", name_en: "basic course (I)" },
  { kuerzel: "GK II", name: "Grundkurs II", name_en: "basic course (II)" },
  { kuerzel: "GK(G)", name: "Grundkurs (G)", name_en: "basic course (G)" },
  { kuerzel: "Gr", name: "Gruppe", name_en: "group" },
  { kuerzel: "GradS", name: "Graduiertenseminar", name_en: "graduate seminar" },
  { kuerzel: "GrS", name: "Gruppenseminar", name_en: "group seminar" },
  { kuerzel: "GS 1", name: "Grundseminar 1", name_en: "basic seminar 1" },
  { kuerzel: "GS 2", name: "Grundseminar 2", name_en: "basic seminar 2" },
  { kuerzel: "GSG", name: "Grundseminar Geschichtsvermittlung", name_en: "basic seminar in mediating history" },
  { kuerzel: "GSH", name: "Grundseminar Historiographie", name_en: "basic seminar in historiography" },
  { kuerzel: "GST", name: "Grundseminar Theorien in der Geschichtswis.", name_en: "basic seminar in theories in historiography" },
  { kuerzel: "GV", name: "Gutachtenveranstaltung", name_en: "seminar on patient assessment" },
  { kuerzel: "HA", name: "Hausarbeit" },
  { kuerzel: "HoS", name: "Hands-On-Seminar" },
  { kuerzel: "HS", name: "Hauptkurs", name_en: "advanced course" },
  { kuerzel: "HSem", name: "Hauptseminar", name_en: "advanced seminar" },
  { kuerzel: "IS", name: "Interdisziplinäres Seminar", name_en: "interdisciplinary seminar" },
  { kuerzel: "K", name: "Kurs", name_en: "course" },
  { kuerzel: "Kl", name: "Klausur", name_en: "written examination" },
  { kuerzel: "Ko", name: "Kolloquium", name_en: "colloquium" },
  { kuerzel: "KommS", name: "Kommikationsseminar" },
  { kuerzel: "KPr", name: "Kurspraktikum", name_en: "placement course" },
  { kuerzel: "L", name: "Labor", name_en: "laboratory" },
  { kuerzel: "LEH", name: "Lehrforschung", name_en: "research training" },
  { kuerzel: "LPÜ", name: "Lehrpraktische Übung", name_en: "exercise in research training" },
  { kuerzel: "MDP", name: "Modulprüfung", name_en: "module examination" },
  { kuerzel: "ME", name: "Mündliche Ergänzungsprüfung", name_en: "oral supplementary exam" },
  { kuerzel: "MK", name: "Methodikkurs", name_en: "methodology course" },
  { kuerzel: "MP", name: "Mündliche Prüfung", name_en: "oral examination" },
  { kuerzel: "OP", name: "Orientierende Praxisstudien", name_en: "practical studies for professional orientation" },
  { kuerzel: "PFD", name: "Praxisseminar Fachdidaktik", name_en: "practical seminar in teaching methodology didactics" },
  { kuerzel: "Pj", name: "Projekt", name_en: "project" },
  { kuerzel: "PjS", name: "Projektseminar", name_en: "project seminar" },
  { kuerzel: "Pkbs", name: "Praktikumsbegleitseminar", name_en: "seminar complementing work placement" },
  { kuerzel: "Pks", name: "Praktikumsseminar", name_en: "work placement seminar" },
  { kuerzel: "POL", name: "POL" },
  { kuerzel: "PP", name: "Projektpraktikum", name_en: "project placement" },
  { kuerzel: "Pr", name: "Praktikum", name_en: "internship / laboratory internship" },
  { kuerzel: "Präpkurs", name: "Präparierkurs" },
  { kuerzel: "PrktSem", name: "Praktikum mit Seminaranteil", name_en: "internship with seminar component / laboratory internship with seminar component" },
  { kuerzel: "Prüfung", name: "Prüfung" },
  { kuerzel: "PS", name: "Proseminar", name_en: "proseminar" },
  { kuerzel: "Pstu", name: "Praxisstudie", name_en: "theory-in-practice course" },
  { kuerzel: "PS2", name: "Proseminar für Fortgeschrittene", name_en: "advanced proseminar" },
  { kuerzel: "R", name: "Repetitorium", name_en: "examination review course" },
  { kuerzel: "S", name: "Seminar", name_en: "seminar" },
  { kuerzel: "Sitz", name: "Sitzung", name_en: "meeting" },
  { kuerzel: "SkillsLab", name: "SkillsLab" },
  { kuerzel: "SpA", name: "Sportangebot", name_en: "sports course" },
  { kuerzel: "SPF", name: "Schwerpunktfach", name_en: "Major Subject" },
  { kuerzel: "SpK", name: "Sprachkurs", name_en: "language course" },
  { kuerzel: "SPS", name: "Schulpraktische Studien", name_en: "work placement for teacher training" },
  { kuerzel: "SPS(BP)", name: "Schulpraktische Studien (Blockpraktikum)", name_en: "block work placement for teacher training" },
  { kuerzel: "SPS(PP)", name: "Schulpraktische Studien (Projektpraktikum)", name_en: "work placement for teacher training (project-based)" },
  { kuerzel: "SPS(TP)", name: "Schulpraktische Studien (Tagespraktikum)", name_en: "work placement for teacher training (day placement)" },
  { kuerzel: "StGr", name: "Studiengruppe", name_en: "study group" },
  { kuerzel: "StPj", name: "Studienprojekt", name_en: "study project" },
  { kuerzel: "Stud.AG", name: "Studentische Arbeitsgemeinschaft", name_en: "student working group" },
  { kuerzel: "SU", name: "Seminaristischer Unterricht", name_en: "seminar-type learning" },
  { kuerzel: "TFD", name: "Theorieseminar Fachdidaktik", name_en: "theory seminar in didactics" },
  { kuerzel: "TP", name: "Tagespraktikum", name_en: "one-day work placement" },
  { kuerzel: "TP/S", name: "Tagespraktikum und Seminar", name_en: "one-day work placement and seminar" },
  { kuerzel: "Tut", name: "Tutorium", name_en: "tutorial" },
  { kuerzel: "Ü", name: "Übung", name_en: "exercise" },
  { kuerzel: "UaK", name: "Unterricht am Krankenbett - Untersuchung" },
  { kuerzel: "UaKD", name: "Unterricht am Krankenbett - Demonstration" },
  { kuerzel: "ÜG", name: "Übung Geschichtsvermittlung", name_en: "course on mediating history" },
  { kuerzel: "UmP", name: "Unterricht mit Patient*innen" },
  { kuerzel: "ÜPrkt", name: "Übung mit Praktikum", name_en: "course in connection with internship/laboratory internship" },
  { kuerzel: "V", name: "Vorlesung", name_en: "lecture" },
  { kuerzel: "VK", name: "Vertiefungskurs", name_en: "specialisation course" },
  { kuerzel: "VK(G)", name: "Vertiefungskurs (G)", name_en: "specialisation course (G)" },
  { kuerzel: "Vtr", name: "Vortrag", name_en: "presentation" },
  { kuerzel: "VÜA", name: "Vorlesung mit Übungsanteil", name_en: "lecture with exercises" },
  { kuerzel: "WkS", name: "Werkstattseminar", name_en: "workshop seminar" },
  { kuerzel: "WS", name: "Workshop", name_en: "workshop" },
] as const;

