
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
    optionen: Kurs[];
}

export interface Kohorte {
    id: string;
    bezeichnung: string;
    ebene2: number;
    partnerE2: number | null;
    partnerBezeichnung: string | null;
    variante: string;
    fachtyp: string;
    fsbName: string;
    pflichtFuerQuelle: boolean;
    fach: string;
    abschluss: string;
    aktuell: boolean;
    fachsemester: number[];
    angebote: Angebot[];
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

export interface Analyse {
    erzeugtAm: string;
    semester: number;
    semesterName: string;
    quelle: {
        veranstaltungId: number | null;
        veranstaltungName: string | null;
        modulIds: number[];
        modellIds: number[];
    };
    optionen: {
        pufferMin: number;
        nurPflicht: boolean;
        tolerierteFachsemester: string;
        kombinationen: boolean;
    };
    kohorten: Kohorte[];
    konflikte: Konflikt[];
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