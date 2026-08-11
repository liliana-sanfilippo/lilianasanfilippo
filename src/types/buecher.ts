export interface GeneralFragezeichenBuch {
    lili_id?: string,
    titel: string,
    autor: FragezeichenAutor | FragezeichenAutor[] | string,
    buch_jahr: number | string
}

export interface AmiFragezeichenBuch extends GeneralFragezeichenBuch {
    buch_nummer_kosmos: number | string,
    audio_nummer: number | "-" | string,
    buch_nummer_random_house?: number | "-" | string,
    ami_titel: string,
    buch_jahr_random_house: number | string,
    audio_jahr: number | string | "-",
    type: "original_reihe"
}


export interface DtFragezeichenBuch extends GeneralFragezeichenBuch {
    buch_nummer_kosmos: number | string,
    audio_nummer: number | "-" | string,
    audio_jahr: number | string | "-",
    type: "deutsche_reihe",
    artikel_nummer_kosmos?: number,
    erscheinungstag?: string
}

export interface SonderFragezeichenBuch extends GeneralFragezeichenBuch {
    audio_jahr?: number | string | "-",
    audio_autor?: string,
    type: "kurzgeschichte" | "mitratefall" | "adventskalender" | "midi_band" | "special" | "rewe"
}


export interface SpezialFragezeichenBuch {
    lili_id?: string,
    titel: string,
    autor: AndererAutor | AndererAutor[],
    jahr: number | string,
    verlag?: FragezeichenVerlag,
    type: "sachliterartur" | "detektivhandbuch"
}

export interface FragezeichenAusgabe {
    isbn: string | number,
    jahr: number,
    einband_typ: EinbandTyp,
    hoehe_mm?: number,
    breite_mm?: number,
    dicke_mm?:number,
    seiten: number,
    kapitel_anzahl?: number,
    buch_typ: BuchTyp,
    von_buch: string | number,
    original_preis: number
    links?: FragezeichenLinks,
    illustration: FragezeichenIllustator,
    beschreibung?: string,
    vorsatz?: FragezeichenVorsatz,
    umschlaggestaltung?: string,
    chlorfrei_gebleicht?: boolean,
    redaktion: FragezeichenRedaktion,
    lektorat: FragezeichenLektor,
    produktion_satz: FragezeichenProduktion,
    druck_bindung: FragezeichenDruck,
    copyright: FragezeichenCopyright | FragezeichenCopyright[],
    werbung_hinten: WerbungHinten | WerbungHinten[],
    auflage?: string,

}

export interface FragezeichenLinks {
    kosmos: string
}

// alle_rechte: Alle Rechte vorbehalten
// ver_datamining: "Wir behalten uns auch die Nutzung von uns veröffentlichter Werke für
// Text uns Data Mining im Sinne von § 44b UrhG ausdrücklich vor"

export type FragezeichenCopyright = "ver_datamining" | "alle_rechte"

export type WerbungHinten = "keine" | "andere bände" | "rocky beach crimes"

export type FragezeichenProduktion =  "DOPPELPUNKT"

export type FragezeichenRedaktion = "Anna Pagel"

export type FragezeichenLektor = "" | "Nina Schiefelbein"

export type FragezeichenDruck = "Finidr s.r.o."

export  type FragezeichenVorsatz = "schwarz, DIESES BUCH GEHÖRT"

export type FragezeichenIllustator = "Silvia Christoph"

export type EinbandTyp = "laminierter Pappband"

export type BuchTyp = "softcover" | "hardcover" | "heft";

// spezial_buch

export type FragezeichenBuch =
    AmiFragezeichenBuch
    | SpezialFragezeichenBuch
    | DtFragezeichenBuch
    | SonderFragezeichenBuch;

export type FragezeichenVerlag = "Reclam"
    | "Langen Müller"
    | "Kosmos"
    | "riva Verlag"
    | "Olms Verlag"
    | "humboldt"
    | "falkemedia"
    | "Kosmos\n Random House"

export type FragezeichenAutor =
    "André Marx"
    | "André Minninger"
    | "Andreas Ruch"
    | "Astrid Vollenbruch"
    | "Ben Nevis"
    | "Bert Brac"
    | "Betty George"
    | "Brigitte Johanna Henkel-Waidhofer"
    | "Christoph Dittert"
    | "Evelyn Boyd"
    | "Fritz Schaefer"
    | "G. H. Stone"
    | "H. William Stine"
    | "Hendrik Buchna"
    | "Kari Erlhoff"
    | "Katharina Fischer"
    | "Marc Brandel"
    | "Marco Sonnleitner"
    | "Megan Stine"
    | "Michael Kühlen"
    | "M. V. Carey"
    | "Nick West"
    | "Robert Arthur"
    | "Rose Estes"
    | "William Arden"
    | "William McCay"
    | "Peter Lerangis"

export type AndererAutor = string
    | "Barbara MacCall"
    | "Bernd Flessner"
    | "Björn Akstinat"
    | "Nina Schiefelbein"
    | "Paul Rey"
    | "William Vivian Butler"