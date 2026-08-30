import {Analyse, Angebot} from "../types/additional_unibi_types";

/** Minuten seit Mitternacht als hh:mm. */
export function zeit(minuten: number | null | undefined): string {
    if (minuten == null) return '–';
    const h = String(Math.floor(minuten / 60)).padStart(2, '0');
    const m = String(minuten % 60).padStart(2, '0');
    return `${h}:${m}`;
}

export function angebotName(angebot: Angebot | undefined): string {
    if (!angebot) return 'unbekannt';
    return `${angebot.modulKuerzel} · ${angebot.modellName}`;
}

export function angebotTyp(angebot: Angebot | undefined): string {
    if (!angebot) return 'unbekannt';
    return `${angebot.art} `;
}

export function gruppenZusatz(angebot: Angebot | undefined): string {
    if (!angebot || angebot.optionen.length <= 1) return '';
    return `  (${angebot.optionen.length} Gruppen)`;
}

/**
 * Gehört die Anforderung zur geprüften Veranstaltung? Verglichen wird über
 * `modellId`, nicht über `schluessel`: Geteilte Anforderungen (Vorlesungs- und
 * Übungsteil einer Modellveranstaltung) tragen ein Suffix im Schlüssel.
 */
export function istQuellAngebot(analyse: Analyse, angebot: Angebot): boolean {
    return analyse.quelle.modellIds.includes(angebot.modellId);
}

