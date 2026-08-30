import { useMemo } from 'react';
import {Eintrag, Kohorte, Konflikt, Platziert, Schwere, WOCHENTAG_KURZ} from "../types/additional_unibi_types";
import {zeit} from "../utils/ekvv_utils";



interface Props {
    kohorte: Kohorte | undefined;
    konflikte: Konflikt[];
    quelleModelle: Set<number>;
}

/**
 * Verteilt die Termine eines Wochentags auf Spuren, damit sich ueberschneidende
 * Bloecke nebeneinander stehen statt uebereinander.
 *
 * Vorher werden Mehrfachnennungen zusammengefasst: Dieselbe reale Veranstaltung
 * haengt oft in mehreren Modulen derselben Variante (etwa 24-M-INF1 und
 * 24-M-NAT1). Im Raster ist das ein einziger Termin und soll auch nur einmal
 * erscheinen. Angezeigt wird das Modul mit dem hoechsten Vorrang, die uebrigen
 * Kuerzel wandern in "weitereModule" und damit in den Tooltip.
 *
 * Danach werden zusammenhaengende Gruppen gebildet: Solange ein Termin vor dem
 * spaetesten bisherigen Ende beginnt, gehoert er zur selben Gruppe. Innerhalb
 * einer Gruppe bekommt jeder Termin die erste Spur, die zu seiner Startzeit
 * frei ist. Alle Termine einer Gruppe teilen sich die Breite gleichmaessig,
 * damit die Bloecke buendig aneinander liegen.
 *
 * "vorrang" entscheidet, welches Modul stellvertretend gezeigt wird — hoeher
 * gewinnt. Der geprueft Kurs und harte Befunde sollen sichtbar bleiben.
 */
function spurenVerteilen(
    eintraege: Eintrag[],
    vorrang: (eintrag: Eintrag) => number,
): Platziert[] {
    const zusammengefasst = mehrfachnennungenFalten(eintraege, vorrang);
    const sortiert = zusammengefasst.sort((a, b) => a.beginn - b.beginn || b.ende - a.ende);

    const ergebnis: Platziert[] = [];
    let gruppe: Array<Eintrag & { spur: number; weitereModule: string[] }> = [];
    let gruppenEnde = -Infinity;
    let spurEnden: number[] = [];

    const gruppeAbschliessen = () => {
        const spuren = Math.max(1, spurEnden.length);
        for (const eintrag of gruppe) ergebnis.push({ ...eintrag, spuren });
        gruppe = [];
        spurEnden = [];
        gruppenEnde = -Infinity;
    };

    for (const eintrag of sortiert) {
        if (eintrag.beginn >= gruppenEnde) gruppeAbschliessen();

        let spur = spurEnden.findIndex((ende) => ende <= eintrag.beginn);
        if (spur === -1) {
            spur = spurEnden.length;
            spurEnden.push(eintrag.ende);
        } else {
            spurEnden[spur] = eintrag.ende;
        }

        gruppe.push({ ...eintrag, spur });
        gruppenEnde = Math.max(gruppenEnde, eintrag.ende);
    }
    gruppeAbschliessen();

    return ergebnis;
}

/**
 * Fasst Eintraege zusammen, die dieselbe Veranstaltung zur selben Zeit meinen.
 * Schluessel ist die Veranstaltungs-ID samt Zeitfenster — nicht das Angebot,
 * denn genau ueber verschiedene Angebote kommen die Doppelungen herein.
 */
function mehrfachnennungenFalten(
    eintraege: Eintrag[],
    vorrang: (eintrag: Eintrag) => number,
): Array<Eintrag & { weitereModule: string[] }> {
    const nachKurs = new Map<string, Eintrag[]>();
    for (const eintrag of eintraege) {
        const schluessel = `${eintrag.kurs.id}|${eintrag.beginn}|${eintrag.ende}`;
        const liste = nachKurs.get(schluessel);
        if (liste) liste.push(eintrag);
        else nachKurs.set(schluessel, [eintrag]);
    }

    // @ts-ignore
    return [...nachKurs.values()].map((gruppe) => {
        const gewaehlt = gruppe.reduce((beste:any, kandidat:any) =>
            vorrang(kandidat) > vorrang(beste) ? kandidat : beste,
        );
        const weitereModule = [
            // @ts-ignore
            ...new Set(
                gruppe
                    .filter((e:any) => e.angebot.modulKuerzel !== gewaehlt.angebot.modulKuerzel)
                    .map((e:any) => e.angebot.modulKuerzel),
            ),
        ];
        return { ...gewaehlt, weitereModule };
    });
}

/** Ein Konfliktfenster, das eine bestimmte Veranstaltung betrifft. */
interface Befund {
    wochentag: number;
    von: number;
    bis: number;
    schwere: Schwere;
}

const RANG: Record<Schwere, number> = { hart: 3, teilweise: 2, unsicher: 1 };

/**
 * Schwerster Befund, der genau diesen Zeitblock dieser Veranstaltung trifft.
 * Ein Block gilt als beteiligt, wenn er am selben Wochentag liegt und sich mit
 * dem Überschneidungsfenster deckt – das Fenster ist die Schnittmenge beider
 * Termine und liegt damit immer innerhalb beider.
 */
function schwereFuerSlot(
    befundeJeKurs: Map<number, Befund[]>,
    eintrag: Eintrag,
): Schwere | undefined {
    const befunde = befundeJeKurs.get(eintrag.kurs.id);
    if (!befunde) return undefined;

    let schwerste: Schwere | undefined;
    for (const befund of befunde) {
        if (befund.wochentag !== eintrag.slot.wochentag) continue;
        if (befund.bis <= eintrag.beginn || befund.von >= eintrag.ende) continue;
        if (!schwerste || RANG[befund.schwere] > RANG[schwerste]) schwerste = befund.schwere;
    }
    return schwerste;
}

export function Wochenraster({ kohorte, konflikte, quelleModelle }: Props) {
    const daten = useMemo(() => {
        if (!kohorte) return null;

        const eintraege: Eintrag[] = [];
        let min = 8 * 60;
        let max = 18 * 60;
        let maxTag = 5;

        for (const angebot of kohorte.angebote) {
            for (const kurs of angebot.optionen) {
                for (const slot of kurs.slots) {
                    if (slot.wochentag == null || slot.beginnMin == null || slot.endeMin == null) continue;
                    min = Math.min(min, slot.beginnMin);
                    max = Math.max(max, slot.endeMin);
                    maxTag = Math.max(maxTag, slot.wochentag);
                    eintraege.push({ angebot, kurs, slot, beginn: slot.beginnMin, ende: slot.endeMin });
                }
            }
        }
        if (eintraege.length === 0) return null;

        /*
         * Befunde je Veranstaltung sammeln, nicht je Anforderung. Eine Anforderung
         * hat meist mehrere Parallelgruppen, von denen nur eine kollidiert – wer
         * nach `schluessel` einfärbt, markiert auch die freien Gruppen mit.
         *
         * `konflikt.paare` nennt die beteiligten Veranstaltungen, und jede Kollision
         * darin trägt das überschneidende Zeitfenster. Damit lässt sich der Befund
         * bis auf den einzelnen Zeitblock herunterbrechen. Berücksichtigt werden
         * alle Konflikte dieser Variante, nicht nur die mit dem geprüften Kurs.
         */
        const befundeJeKurs = new Map<number, Befund[]>();
        const merken = (kursId: number, befund: Befund) => {
            const liste = befundeJeKurs.get(kursId);
            if (liste) liste.push(befund);
            else befundeJeKurs.set(kursId, [befund]);
        };

        for (const konflikt of konflikte) {
            if (konflikt.kohorteId !== kohorte.id) continue;
            for (const paar of konflikt.paare) {
                if (paar.status === 'frei') continue; // diese Gruppenwahl ist konfliktfrei
                for (const kollision of paar.kollisionen) {
                    const befund: Befund = {
                        wochentag: kollision.wochentag,
                        von: kollision.beginnMin,
                        bis: kollision.endeMin,
                        schwere: konflikt.schwere,
                    };
                    merken(paar.aKursId, befund);
                    merken(paar.bKursId, befund);
                }
            }
        }

        const vorrang = (eintrag: Eintrag): number => {
            if (quelleModelle.has(eintrag.angebot.modellId)) return 3;
            const schwere = schwereFuerSlot(befundeJeKurs, eintrag);
            if (schwere === 'hart') return 2;
            if (schwere === 'teilweise') return 1;
            if (schwere === 'unsicher') return 0.5;
            return 0;
        };

        const jeTag = new Map<number, Platziert[]>();
        for (let t = 1; t <= maxTag; t++) {
            jeTag.set(t, spurenVerteilen(eintraege.filter((e) => e.slot.wochentag === t), vorrang));
        }

        return {
            jeTag,
            min: Math.floor(min / 60) * 60,
            max: Math.ceil(max / 60) * 60,
            maxTag,
            befundeJeKurs,
        };
    }, [kohorte, konflikte, quelleModelle]);

    if (!kohorte || kohorte.angebote.length === 0) {
        return (
            <p className="hinweis">
                Für diese Variante liegen keine Veranstaltungen im Semester vor.
            </p>
        );
    }
    if (!daten) {
        return <p className="hinweis">Keine auswertbaren Zeiten in dieser Variante.</p>;
    }

    const { jeTag, min, max, maxTag, befundeJeKurs } = daten;
    const spanne = max - min;

    const stunden: number[] = [];
    for (let m = min; m < max; m += 60) stunden.push(m);
    const tage: number[] = [];
    for (let t = 1; t <= maxTag; t++) tage.push(t);

    return (
        <>
            <p className="hinweis">
                {kohorte.bezeichnung} · Fachsemester {kohorte.fachsemester.join(', ') || '?'} ·
                {' '}gefüllte Fläche = geprüfter Kurs, rot schraffiert = harte,
                ockerfarben = teilweise, grau gepunktet = unsichere Überschneidung.
                Gleichzeitige Termine stehen nebeneinander.
            </p>

            <div className="raster" style={{ ['--spalten' as string]: String(maxTag) }}>
                <div className="kopf" />
                {tage.map((t) => (
                    <div className="kopf" key={`kopf-${t}`}>
                        {WOCHENTAG_KURZ[t]}
                    </div>
                ))}

                <div className="stundenspalte">
                    {stunden.map((m) => (
                        <div className="stunde" key={m}>
                            {zeit(m)}
                        </div>
                    ))}
                </div>

                {tage.map((t) => (
                    <div className="spalte" key={`spalte-${t}`}>
                        {stunden.map((m) => (
                            <div className="zeile" key={m} />
                        ))}

                        {(jeTag.get(t) ?? []).map((e, index) => {
                            const istQuelle = quelleModelle.has(e.angebot.modellId);
                            const schwere = schwereFuerSlot(befundeJeKurs, e);
                            const breite = Number((100 / e.spuren).toFixed(4));
                            const versatz = Number((e.spur * breite).toFixed(4));

                            const klassen = ['block'];
                            if (istQuelle) klassen.push('blockQuelle');
                            else if (schwere === 'hart') klassen.push('blockHart');
                            else if (schwere === 'teilweise') klassen.push('blockTeilweise');
                            else if (schwere === 'unsicher') klassen.push('blockUnsicher');
                            if (e.spuren >= 3) klassen.push('blockSchmal');

                            return (
                                <div
                                    key={`${e.angebot.schluessel}-${e.kurs.id}-${index}`}
                                    className={klassen.join(' ')}
                                    style={{
                                        top: `${((e.beginn - min) / spanne) * 100}%`,
                                        height: `${((e.ende - e.beginn) / spanne) * 100}%`,
                                        left: `calc(${versatz}% + 2px)`,
                                        width: `calc(${breite}% - 3px)`,
                                    }}
                                    title={
                                        `${e.angebot.modulKuerzel} · ${e.kurs.name}` +
                                        ` · ${zeit(e.beginn)}–${zeit(e.ende)}` +
                                        (e.slot.raum ? ` · ${e.slot.raum}` : '') +
                                        (e.angebot.optionen.length > 1
                                            ? ` · eine von ${e.angebot.optionen.length} Gruppen`
                                            : '') +
                                        (e.weitereModule.length > 0
                                            ? ` · zählt auch für ${e.weitereModule.join(', ')}`
                                            : '')
                                    }
                                >
                  <span className="blockTitel">
                    {e.angebot.modulKuerzel}
                      {e.weitereModule.length > 0 && (
                          <span className="blockMehr"> +{e.weitereModule.length}</span>
                      )}
                  </span>
                                    <span className={"blockTyp"}>
                    {e.kurs.art}
                                    </span>
                                    <span className="blockZeit">
                    {zeit(e.beginn)}–{zeit(e.ende)}
                  </span>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}