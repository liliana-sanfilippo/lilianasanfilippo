import {Analyse, Kohorte, Konflikt, Schwere, WOCHENTAG_KURZ} from "../types/additional_unibi_types";
import {Wochenraster} from './Wochenraster';
import {angebotName, gruppenZusatz, zeit} from "../utils/ekvv_utils";

/**
 * Druckfassung einer Analyse: oben eine Zusammenfassung, danach jede Variante
 * einzeln mit Wochenraster und Befundtabelle.
 *
 * Bewusst ohne Zustand und ohne Filter – gedruckt wird alles, was da ist.
 * Die Bildschirmfassung zeigt immer nur die gewaehlte Variante; auf Papier
 * waere das die falsche Entscheidung, weil man nicht nachklicken kann.
 */

const RANG: Record<Schwere, number> = {hart: 3, teilweise: 2, unsicher: 1};

interface Props {
    analyse: Analyse;
    /** Ueberschrift, etwa "1. Fachsemester Bioinformatische Genomforschung". */
    titel?: string;
    alles?: boolean
}

export function DruckansichtKollisionsbericht({analyse, titel, alles}: Props) {
    const quelleModelle = new Set(analyse.quelle.modellIds);

    // Ausgelaufene Ordnungen und Varianten ohne Lehrangebot gehoeren nicht aufs Papier.
    const kohorten = analyse.kohorten.filter((k: any) => k.aktuell && k.angebote.length > 0);

    const schwersteJeKohorte = new Map<string, Schwere>();
    for (const konflikt of analyse.konflikte) {
        const vorher = schwersteJeKohorte.get(konflikt.kohorteId);
        if (!vorher || RANG[konflikt.schwere] > RANG[vorher]) {
            schwersteJeKohorte.set(konflikt.kohorteId, konflikt.schwere);
        }
    }

    const sichtbar = new Set(kohorten.map((k) => k.id));
    const konflikte = analyse.konflikte.filter((k) => sichtbar.has(k.kohorteId));
    const hart = konflikte.filter((k) => k.schwere === 'hart').length;
    const teil = konflikte.filter((k) => k.schwere === 'teilweise').length;
    const vage = konflikte.filter((k) => k.schwere === 'unsicher').length;
    const betroffene = new Set(
        konflikte.filter((k) => k.schwere === 'hart').map((k) => k.kohorteId),
    ).size;

    const urteil =
        hart > 0
            ? `Nicht für alle belegbar: ${hart} harte Überschneidung${hart === 1 ? '' : 'en'} ` +
            `in ${betroffene} von ${kohorten.length} Varianten.`
            : teil > 0
                ? `Belegbar, aber die Gruppenwahl wird eingeschränkt: ${teil} teilweise ` +
                `Überschneidung${teil === 1 ? '' : 'en'}.`
                : 'Keine Überschneidung mit den geprüften Pflichtveranstaltungen.';

    const kopf =
        titel ??
        analyse.quelle.veranstaltungName ??
        analyse.quelle.studiengangName ??
        `Module ${analyse.quelle.modulIds.join(', ')}`;

    return (
        <div className="huelle druck">
            <header className="druckKopf">
                <h1>{kopf}</h1>
                <p className="unterzeile">
                    {kohorten.length} Varianten · {analyse.statistik.veranstaltungen} Veranstaltungen
                    {' · '}Stand {new Date(analyse.erzeugtAm).toLocaleString('de-DE')}
                </p>
                <div className={`urteil ${hart > 0 ? 'urteilHart' : teil > 0 ? 'urteilTeilweise' : ''}`}>
                    <p>{urteil}</p>
                    <div className="detail">
                        hart {hart} · teilweise {teil} · unsicher {vage}
                    </div>
                </div>
            </header>

            {/* Zusammenfassung: ein Feld je Variante, wie am Bildschirm */}
            <section className="druckAbschnitt">
                <h2>Überblick</h2>
                <div className="leiste row">
                    <div className={"col-5"}>
                        {kohorten.slice(0, Math.ceil(kohorten.length / 2)).map((k) => (
                            <div className="chip" key={k.id}>
                                <span
                                    className="feld"
                                    data-schwere={schwersteJeKohorte.get(k.id) ?? 'frei'}
                                    aria-hidden="true"
                                />
                                <small className="chipText">{k.bezeichnung}</small>
                            </div>
                        ))}
                    </div>

                    <div className={"col-5"}>
                        {kohorten.slice(Math.ceil(kohorten.length / 2), kohorten.length).map((k) => (
                            <div className="chip" key={k.id}>
                            <span
                                className="feld"
                                data-schwere={schwersteJeKohorte.get(k.id) ?? 'frei'}
                                aria-hidden="true"
                            />
                                    <small className="chipText">{k.bezeichnung}</small>
                                </div>
                            ))}
                    </div>



                </div>

                {/*
                   <div className="rahmen druckTabelle">
                    <table>
                        <thead>
                        <tr>
                            <th>Variante</th>
                            <th>Fachsemester</th>
                            <th>Anforderungen</th>
                            <th>Befund</th>
                        </tr>
                        </thead>
                        <tbody>
                        {kohorten.map((k) => (
                            <tr key={k.id}>
                                <td>{k.bezeichnung}</td>
                                <td className="zeit">{k.fachsemester.join(', ') || '–'}</td>
                                <td className="zeit">{k.angebote.length}</td>
                                <td>{schwersteJeKohorte.get(k.id) ?? 'keine Überschneidung'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                */}

                {(analyse.sprachhinweise?.length ?? 0) > 0 && (
                    <>
                        <br/>
                        <h2>Nur englischsprachige Module</h2>
                        <ul className="druckListe">
                            {analyse.sprachhinweise!.map((h) => (
                                <li key={`${h.kohorteId}-${h.modulId}`}>
                                    <strong>{h.modulKuerzel}</strong> [{h.pflicht ? 'Pflicht' : 'Wahlpflicht'}]{' '}
                                    {h.modulName} — {h.kohorteBezeichnung}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </section>

            {/* Je Variante eine eigene Seite */}
            {alles && kohorten.map((kohorte) => (
                <section className="druckKohorte" key={kohorte.id}>
                    <h2>{kohorte.bezeichnung}</h2>
                    <p className="hinweis">
                        Fachsemester {kohorte.fachsemester.join(', ') || '?'} · {kohorte.angebote.length}{' '}
                        Pflichtanforderungen
                        {/*
                         {kohorte.notiz ? ` · ${kohorte.notiz}` : ''}
                        */}
                    </p>

                    <Wochenraster
                        kohorte={kohorte}
                        konflikte={analyse.konflikte}
                        quelleModelle={quelleModelle}
                    />

                    <KonflikteDerKohorte kohorte={kohorte} konflikte={konflikte}/>
                    <TermineDerKohorte kohorte={kohorte} quelleModelle={quelleModelle}/>
                </section>
            ))}

            <footer className="fuss">
                Daten aus der BIS-API der Universität Bielefeld. Parallelgruppen gelten als frei
                wählbar; ein Konflikt ist nur dann hart, wenn keine Gruppenkombination
                kollisionsfrei bleibt. Puffer: {analyse.optionen.pufferMin} Minuten.
            </footer>
        </div>
    );
}

function KonflikteDerKohorte({
                                 kohorte,
                                 konflikte,
                             }: {
    kohorte: Kohorte;
    konflikte: Konflikt[];
}) {
    const eigene = konflikte
        .filter((k) => k.kohorteId === kohorte.id)
        .sort((a, b) => RANG[b.schwere] - RANG[a.schwere]);

    if (eigene.length === 0) {
        return <p className="hinweis">Keine Überschneidung in dieser Variante.</p>;
    }

    return (
        <div className="rahmen druckTabelle">
            <table>
                <thead>
                <tr>
                    <th>Schwere</th>
                    <th>Anforderung A</th>
                    <th>Anforderung B</th>
                    <th>Überschneidung</th>
                    <th>Freie Paare</th>
                </tr>
                </thead>
                <tbody>
                {eigene.map((konflikt) => {
                    const a = kohorte.angebote.find((x) => x.schluessel === konflikt.aSchluessel);
                    const b = kohorte.angebote.find((x) => x.schluessel === konflikt.bSchluessel);
                    return (
                        <tr key={konflikt.id}>
                            <td>
                    <span
                        className={`marke marke${konflikt.schwere.charAt(0).toUpperCase()}${konflikt.schwere.slice(1)}`}
                    >
            {konflikt.schwere}
            </span>
                            </td>
                            <td>{angebotName(a) + gruppenZusatz(a)}</td>
                            <td>{angebotName(b) + gruppenZusatz(b)}</td>
                            <td className="zeit ueberschneidung">{konflikt.zusammenfassung}</td>
                            <td className="zeit">
                                {konflikt.schwere === 'hart'
                                    ? '–'
                                    : `${konflikt.freieKombinationen} von ${konflikt.gesamteKombinationen}`}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

function TermineDerKohorte({
                               kohorte,
                               quelleModelle,
                           }: {
    kohorte: Kohorte;
    quelleModelle: Set<number>;
}) {
    const zeilen = kohorte.angebote
        .flatMap((angebot) =>
            angebot.optionen.flatMap((kurs) =>
                kurs.slots.map((slot) => ({angebot, kurs, slot})),
            ),
        )
        .sort(
            (x, y) =>
                (x.slot.wochentag ?? 9) - (y.slot.wochentag ?? 9) ||
                (x.slot.beginnMin ?? 0) - (y.slot.beginnMin ?? 0),
        );

    if (zeilen.length === 0) return null;

    return (
        <div className="rahmen druckTabelle">
            <table>
                <thead>
                <tr>
                    <th>Tag</th>
                    <th>Zeit</th>
                    <th>Modul</th>
                    <th>Veranstaltung</th>
                    <th>Art</th>
                    <th>Raum</th>
                </tr>
                </thead>
                <tbody>
                {zeilen.map((r, index) => (
                    <tr key={`${r.kurs.id}-${index}`}>
                        <td className="zeit">
                            {r.slot.wochentag ? WOCHENTAG_KURZ[r.slot.wochentag] : '–'}
                        </td>
                        <td className="zeit">
                            {r.slot.beginnMin != null
                                ? `${zeit(r.slot.beginnMin)}–${zeit(r.slot.endeMin)}`
                                : '–'}
                        </td>
                        <td className="kennung">{r.angebot.modulKuerzel}</td>
                        <td>
                            {r.kurs.name}
                            {quelleModelle.has(r.angebot.modellId) && ' (geprüft)'}
                        </td>
                        <td>{r.kurs.art ?? r.angebot.art ?? '–'}</td>
                        <td>{r.slot.raum ?? '–'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}