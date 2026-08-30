
export interface Eintrag {
    angebot: Angebot;
    kurs: Kurs;
    slot: Slot;
    beginn: number;
    ende: number;
}

export interface Platziert extends Eintrag {
    spur: number;
    spuren: number;
    /** Kuerzel der weiteren Module, unter denen derselbe Kurs eingehaengt ist. */
    weitereModule: string[];
}


export const WOCHENTAG_KURZ = ['', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] as const;

export type Schwere = 'hart' | 'teilweise' | 'unsicher';

export interface Slot {
    wochentag: number | null;
    beginnMin: number | null;
    endeMin: number | null;
    von: string | null;
    bis: string | null;
    datum: string | null;
    rhythmusText: string | null;
    rhythmus: string;
    raum: string | null;
}

export interface Kurs {
    id: number;
    name: string;
    art: string | null;
    belegnummer: string | null;
    dozenten: string[];
    slots: Slot[];
    detailUrl: string;
    ohneZeiten: boolean;
    ausgefallen?: boolean;
    /** Veranstaltung findet auf Englisch statt. */
    englisch?: boolean;
}


export interface Angebot {
    schluessel: string;
    modellId: number;
    modellName: string;
    art: string | null;
    modulId: number;
    modulKuerzel: string;
    modulName: string;
    pflicht: boolean;
    fachsemester: number[];
    /**
     * Gesetzt, wenn eine Modellveranstaltung in Vorlesungs- und Übungsteil
     * zerfällt. Dann ist `schluessel` nicht mehr `mv{modellId}`, sondern trägt
     * ein Suffix – der Abgleich mit der Quelle läuft deshalb über `modellId`.
     */
    teilgruppe?: 'fest' | 'wahlbar' | 'sonstige' | null;
    optionen: Kurs[];
}


export interface Kohorte {
    id: string;
    bezeichnung: string;
    ebene2: number;
    /** Alle weiteren Fächer der Kombination; zwei bei zwei kleinen Nebenfächern. */
    partner?: Array<{ ebene1: number | null; ebene2: number; bezeichnung: string }>;
    partnerE2: number | null;
    partnerBezeichnung: string | null;
    variante: string;
    fachtyp: string;
    fsbName: string;
    fach: string;
    abschluss: string;
    aktuell: boolean;
    fachsemester: number[];
    angebote: Angebot[];
    /** Wahlpflichtanforderungen – nicht Teil der Kollisionsprüfung. */
    wahlpflichtAngebote?: Angebot[];
    notiz: string | null;
}


export interface SlotKollision {
    wochentag: number;
    beginnMin: number;
    endeMin: number;
    minuten: number;
    sicher: boolean;
    einmalig?: boolean;
    grund: string;
    aSlot?: Slot;
    bSlot?: Slot;
}

export interface Paarstatus {
    aKursId: number;
    bKursId: number;
    aKursType?: string | null;
    bKursType?: string | null;
    status: 'frei' | 'unsicher' | 'belegt';
    kollisionen: SlotKollision[];
}



export interface Konflikt {
    id: string;
    kohorteId: string;
    aSchluessel: string;
    bSchluessel: string;
    schwere: Schwere;
    betrifftQuelle: boolean;
    freieKombinationen: number;
    gesamteKombinationen: number;
    paare: Paarstatus[];
    zusammenfassung: string;
}

export interface Sprachhinweis {
    modulId: number;
    modulKuerzel: string;
    modulName: string;
    kohorteId: string;
    kohorteBezeichnung: string;
    abschluss: string;
    pflicht: boolean;
    veranstaltungen: number;
}

export interface UebersprungeneVariante {
    ebene2: number;
    ebene1: number | null;
    bezeichnung: string;
    grund: string;
}


export interface Analyse {
    erzeugtAm: string;
    semester: number;
    semesterName: string;
    quelle: {
        modus?: 'veranstaltung' | 'modul' | 'studiengang';
        veranstaltungId: number | null;
        veranstaltungName: string | null;
        modulIds: number[];
        modellIds: number[];
        ebene1?: number | null;
        studiengangName?: string | null;
        fachsemester?: number[];
    };
    optionen: {
        pufferMin: number;
        nurPflicht: boolean;
        tolerierteFachsemester: string;
        kombinationen: boolean;
    };
    kohorten: Kohorte[];
    konflikte: Konflikt[];
    sprachhinweise?: Sprachhinweis[];
    uebersprungeneVarianten?: UebersprungeneVariante[];
    warnungen: string[];
    statistik: {
        kohorten: number;
        aktiveKohorten: number;
        veranstaltungen: number;
        ohneZeiten: number;
        ausgefallen?: number;
        harteKonflikte: number;
        teilweiseKonflikte: number;
        unsichereKonflikte: number;
    };
}
