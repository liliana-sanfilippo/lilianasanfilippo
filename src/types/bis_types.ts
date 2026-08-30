
export interface ModulDetail {
    modul: SMModulOhneKontextPojoBeanFacade;
    kontexte: SMModulPojoBeanSimpleFacade[];
}


export interface VeranstaltungFachInfo {
    id: number;
    vst_id: number;
    geloescht: boolean;
    art_id: number;
    art_name: string;
    art_name_kurz: string;
    kommentar: string;
    fach_name: string;
    abschluss_name_kurz: string;
    f_a_id: number;
    fuer_kern_hauptfach: boolean;
    fuer_nebenfach: boolean;
    studienabschnitt_lang: string;
    sem_1: boolean;
    sem_2: boolean;
    sem_3: boolean;
    sem_4: boolean;
    sem_5: boolean;
    sem_6: boolean;
    sem_7: boolean;
    sem_8: boolean;
    fa_url: string;
    fa_semester_von: number;
    fa_semester_bis: number;
    gueltigkeitsbereichAusfuehrlich: string;
    gueltigkeitsbereichAusfuehrlich_en: string;
    scheinfaehig: boolean;
    ugruppе1: string;
    ugruppе1Platzhalter: string;
    ugruppе2: string;
    ugruppе2Platzhalter: string;
    ugruppе3: string;
    ugruppе3Platzhalter: string;
    ugruppе4: string;
    ugruppе4Platzhalter: string;
    ugruppе5: string;
    ugruppе5Platzhalter: string;
    ohneUntergruppen: boolean;
    fachsemester: number;
    abschluss_name: string;
    studiengang_name: string;
    fach_abschluss_name: string;
    studiengang_name_kurz: string;
    fach_name_kurz: string;
    studienabschnitt: string;
    teilgebiete: string[];
    status: string;
}

export interface ModulDetail {
  modul: SMModulOhneKontextPojoBeanFacade;
  kontexte: SMModulPojoBeanSimpleFacade[];
}

export interface SMModulOhneKontextPojoBeanFacade {
  details: unknown[];
  name: string;
  id: number;
  einrichtung: Einrichtung;
  leistungen: unknown[];
  inhalte: string;
  name_en: string;
  detailUrl: string;
  kuerzel: string;
  leistungspunkte: number;
  berechenbar: boolean;
  modulstrukturangabe: unknown;
  veranstaltungen: SMVeranstaltungPojoBeanSimpleFacade[];
  turnus: string;
  kompetenzen: string;
  vorkenntnisse: string;
  vorbedingungen: string;
  erlaeuterungen: string;
  hinweise: string;
  hinweise_en: string;
  erlaeuterungen_en: string;
  vorbedingungen_en: string;
  vorkenntnisse_en: string;
  inhalte_en: string;
  kompetenzen_en: string;
  modulverantwortliche: unknown[];
}


export interface Einrichtung {
  id: number;
  name: string;
  name_en: string;
}


/**
 * Oberste Ebene der Studienstruktur. (Ebene 1)
 *
 * Repräsentiert z. B. einen Studiengang bzw. ein Studienprofil.
 */
export interface SMEbene1Pojo {
  /** Bezeichnung */
  name: string;

  /** ID der Ebene 1 */
  id: number;

  /** Englische Bezeichnung */
  name_en: string;

  /** URL zu den Detailinformationen */
  detailUrl: string;

  /** Gibt an, ob es sich um einen Platzhalter handelt */
  platzhalter: boolean;

  /** Punkte */
  punkte: number;

  /** Dauer */
  dauer: number;

  /** Fachname der Variante */
  varianten_fachname: string;

  /** Englischer Fachname der Variante */
  varianten_fachname_en: string;

  /** Gibt an, ob eine Lehramtsoption vorhanden ist */
  mitlehramtsoption: boolean;

  /** Gibt an, ob ein NC vorhanden ist */
  mitNc: boolean;

  /** Gibt an, ob es sich um einen International Track handelt */
  intTrack: boolean;

  /** Aufnahmezeitpunkt */
  aufnahmeZeitpunkt: string;

  /** ID der zugehörigen FSB */
  fsbId: number;

  /** Gibt an, ob ein individueller Ergänzungsbereich vorhanden ist */
  indiergBereichVorhanden: boolean;

  /** Informationstext */
  info_text: string;

  /** Englischer Informationstext */
  info_text_en: string;

  /** Zusatz zur Bezeichnung */
  bezeichnungszusatz: string;

  /** Kürzel */
  kuerzel: string;

  /** Englisches Kürzel */
  kuerzel_en: string;
}


/**
 * Zweite Ebene der Studienstruktur.
 *
 * Ist einer Ebene1 zugeordnet.
 */
export interface SMEbene2Pojo {
  /** Bezeichnung */
  name: string;

  /** ID der Ebene 2 */
  id: number;

  /** ID der übergeordneten Ebene1 */
  ebene1: number;

  /** Englische Bezeichnung */
  name_en: string;

  /** Gibt an, ob es sich um einen Platzhalter handelt */
  platzhalter: boolean;

  /** Gibt an, ob es sich um ein Pseudoprofil handelt */
  pseudoprofil: boolean;

  /** Kürzel */
  kuerzel: string;
}


/**
 * Fächerspezifische Bestimmungen (FsB).
 *
 * Beschreibt die für ein Fach bzw. einen Studiengang
 * geltenden fachspezifischen Bestimmungen.
 */
export interface SMFSBPojo {
  /** ID der FSB */
  id: number;

  /** URL zu den Detailinformationen */
  detailUrl: string;

  /** Fachname */
  fach_name: string;

  /** Englischer Fachname */
  fach_name_en: string;

  /** Bezeichnung des Semesters, ab dem die FSB gilt */
  semester_von_name: string;

  /** Semester-ID/-Nummer, ab dem die FSB gilt */
  semester_von: number;

  /** Bezeichnung des Semesters, bis zu dem die FSB gilt */
  semester_bis_name: string;

  /** Semester-ID/-Nummer, bis zu dem die FSB gilt */
  semester_bis: number;

  /** Namen der Abschlüsse */
  abschluss_namen: string;

  /** Langnamen der Abschlüsse */
  abschluss_namen_lang: string;

  /** Name der FSB */
  fsbname: string;

  /** Englischer Name der FSB */
  fsbname_en: string;

  /** Zusatz zur Bezeichnung */
  bezeichnungszusatz: string;

  /** Gibt an, ob ein Modulhinweis angezeigt werden soll */
  modulhinweis_zeigen: boolean;

  /** Gibt an, ob die FSB aktuell ist */
  aktuell: boolean;

  /** Gibt an, ob die FSB modelliert ist */
  modelliert: boolean;
}




export interface SMModulPojoBeanSimpleFacade {
    /**
     * ID des zugehörigen Ebene2-Objekts.
     */
    ebene2: number;

    /**
     * Dauer des Moduls.
     */
    dauer: number;

    /**
     * Gibt an, ob das Modul verpflichtend ist.
     */
    pflichtmodul: boolean;

    /**
     * Fachsemester, ab dem das Modul beginnt.
     */
    beginnfachsemester: number;

    /**
     * Modultyp für Master of Education / Abschluss.
     */
    modultypMasterEdAbschluss: unknown;
}


/**
 * Eine Leistung, die einer Modell-Veranstaltung zugeordnet ist.
 */
export interface ModellVeranstaltungsLeistung {
  /** ID der Leistung */
  id: number;

  /** Name der Leistung */
  name: string;

  /** Englischer Name der Leistung */
  name_en: string;

  /** ID der zugehörigen Veranstaltung */
  veranstaltung: number;

  /** Arten der Leistung als formatierter Text */
  artenAsText: string;

  /** Erläuterungen zur Leistung */
  erlaeuterungen: string;

  /** Englische Erläuterungen zur Leistung */
  erlaeuterungen_en: string;

  /** Gibt an, ob es sich um eine Studienleistung handelt */
  studienleistung: boolean;
}


/**
 * Modellierte Veranstaltung innerhalb eines Moduls.
 */
export interface SMVeranstaltungPojoBeanSimpleFacade {
  /** Leistungen, die mit der Veranstaltung verbunden sind */
  leistungen: ModellVeranstaltungsLeistung[];

  /** Name der Veranstaltung */
  name: string;

  /** ID der Veranstaltung */
  id: number;

  /** Turnus als Freitext auf Englisch */
  turnus_freitext_en: string;

  /** Gesamtzahl der Leistungspunkte */
  leistungspunkte_gesamt: number;

  /** Maximale bzw. vorgesehene Gruppengröße */
  gruppengroesse: number;

  /** Workload für Präsenzzeit */
  workload_praesenz: number;

  /** Workload für Selbststudium */
  workload_selbst: number;

  /** Gesamtworkload */
  workload_gesamt: number;

  /** Veranstaltungs-/Leistungsarten als formatierter Text */
  artenAsText: string;

  /** Anwesenheit als Studienleistung */
  studienleistungAnwesenheit: number;

  /** Turnus als Freitext */
  turnus_freitext: string;

  /** Erläuterungen als HTML */
  erlaeuterungenAsHtml: string;

  /** Turnus */
  turnus: string;

  /** Erläuterungen */
  erlaeuterungen: string;

  /** Englische Erläuterungen */
  erlaeuterungen_en: string;
}
