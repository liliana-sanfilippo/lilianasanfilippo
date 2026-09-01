import { useMemo, useState } from 'react';
import {Analyse, Kohorte, Konflikt, Schwere, WOCHENTAG_KURZ} from "../types/additional_unibi_types";
import {angebotName, angebotTyp, zeit} from "../utils/ekvv_utils";
import { Wochenraster } from './Wochenraster';
import {DruckKnopf} from "./DruckKnopf";
import {Col, Row} from "react-bootstrap";

const RANG: Record<Schwere, number> = { hart: 3, teilweise: 2, unsicher: 1 };
const SORTIERUNG: Record<Schwere, number> = { hart: 0, teilweise: 1, unsicher: 2 };

interface Props {
    analyse: Analyse;
}

export function KollisionsBericht({ analyse }: Props) {
    const [suche, setSuche] = useState('');
    const [schwere, setSchwere] = useState<'' | Schwere>('');
    const [kohorteId, setKohorteId] = useState('');
    const [tag, setTag] = useState('');
    const [nurQuelle, setNurQuelle] = useState(false);
    const [ohneModulintern, setOhneModulintern] = useState(false);

    const kohortenNachId = useMemo(
        () => new Map(analyse.kohorten.map((k) => [k.id, k])),
        [analyse.kohorten],
    );

    /*
     * Nur Varianten mit gültiger Prüfungsordnung und tatsächlichem Lehrangebot
     * im Zielsemester. Ausgelaufene Fassungen stehen weiterhin in der Tabelle
     * unter "Datenlage" – dort sollen sie sichtbar bleiben, damit nachvollziehbar
     * ist, was übersprungen wurde.
     */
    const sichtbareKohorten = useMemo(
        () => analyse.kohorten.filter((k) => k.aktuell && k.angebote.length > 0),
        [analyse.kohorten],
    );
    const sichtbareIds = useMemo(
        () => new Set(sichtbareKohorten.map((k) => k.id)),
        [sichtbareKohorten],
    );
    /*
     * Abgleich über modellId statt über schluessel: Zerfällt eine
     * Modellveranstaltung in Vorlesungs- und Übungsteil, trägt der Schlüssel ein
     * Suffix ("mv1001#v"), die modellId bleibt gleich.
     */
    const quelleModelle = useMemo(
        () => new Set(analyse.quelle.modellIds),
        [analyse.quelle.modellIds],
    );

    const angebotVon = (kohorte: Kohorte | undefined, schluessel: string) =>
        kohorte?.angebote.find((a) => a.schluessel === schluessel);

    /** Schwerster Befund je Variante – färbt die Felder der Leiste. */
    const schwersteJeKohorte = useMemo(() => {
        const karte = new Map<string, Schwere>();
        for (const konflikt of analyse.konflikte) {
            const vorher = karte.get(konflikt.kohorteId);
            if (!vorher || RANG[konflikt.schwere] > RANG[vorher]) {
                karte.set(konflikt.kohorteId, konflikt.schwere);
            }
        }
        return karte;
    }, [analyse.konflikte]);

    /**
     * Varianten nach Basis-Studiengang buendeln. Eine Kombination traegt dieselbe
     * "ebene2" wie das Kernfach oder Profil, unterscheidet sich aber im
     * Nebenfach – so entsteht je Studiengang eine Gruppe, in der die Nebenfaecher
     * nebeneinander stehen. Einzelfaecher bilden eine Gruppe mit einem Feld und
     * werden genauso beschriftet.
     */
    const kohortenGruppen = useMemo(() => {
        const gruppen = new Map<number, { ebene2: number; titel: string; mitglieder: Kohorte[] }>();

        for (const kohorte of sichtbareKohorten) {
            const vorhanden = gruppen.get(kohorte.ebene2);
            if (vorhanden) vorhanden.mitglieder.push(kohorte);
            else gruppen.set(kohorte.ebene2, { ebene2: kohorte.ebene2, titel: '', mitglieder: [kohorte] });
        }

        // @ts-ignore
        for (const gruppe of gruppen.values()) {
            const basis = gruppe.mitglieder.find((m:any) => m.partnerE2 == null);
            // Bei Kombinationen lautet die Bezeichnung "Basis + Partner"; ohne eigene
            // Basiskohorte bleibt der Teil vor dem Pluszeichen.
            gruppe.titel =
                basis?.bezeichnung ?? gruppe.mitglieder[0]!.bezeichnung.split(' + ')[0]!;
            gruppe.mitglieder.sort(
                (a:any, b:any) =>
                    Number(a.partnerE2 != null) - Number(b.partnerE2 != null) ||
                    (a.partnerBezeichnung ?? '').localeCompare(b.partnerBezeichnung ?? '', 'de'),
            );
        }

        // @ts-ignore
        return [...gruppen.values()];
    }, [sichtbareKohorten]);

    const gewaehlteKohorte = kohorteId
        ? kohortenNachId.get(kohorteId)
        : sichtbareKohorten[0];

    const sichtbareKonflikte = useMemo(() => {
        const begriff = suche.trim().toLowerCase();

        return analyse.konflikte
            .filter((konflikt) => {
                const kohorte = kohortenNachId.get(konflikt.kohorteId);
                if (!kohorte || !sichtbareIds.has(kohorte.id)) return false;
                if (nurQuelle && !konflikt.betrifftQuelle) return false;
                if (schwere && konflikt.schwere !== schwere) return false;
                if (kohorteId && konflikt.kohorteId !== kohorteId) return false;

                const a = angebotVon(kohorte, konflikt.aSchluessel);
                const b = angebotVon(kohorte, konflikt.bSchluessel);

                // Vorlesung und Übung desselben Moduls kollidieren im Plan selten wirklich –
                // sie werden von der Fakultät gemeinsam gelegt.
                if (ohneModulintern && a && b && a.modulId === b.modulId) return false;

                if (tag) {
                    const trifft = konflikt.paare.some((paar) =>
                        paar.kollisionen.some((k) => String(k.wochentag) === tag),
                    );
                    if (!trifft) return false;
                }

                if (begriff) {
                    const heuhaufen = [
                        kohorte.bezeichnung,
                        angebotName(a),
                        angebotName(b),
                        [...(a?.optionen ?? []), ...(b?.optionen ?? [])]
                            .map((o) => `${o.name} ${o.dozenten.join(' ')}`)
                            .join(' '),
                    ]
                        .join(' ')
                        .toLowerCase();
                    if (!heuhaufen.includes(begriff)) return false;
                }
                return true;
            })
            .sort(
                (x, y) =>
                    SORTIERUNG[x.schwere] - SORTIERUNG[y.schwere] ||
                    x.kohorteId.localeCompare(y.kohorteId),
            );
    }, [
        analyse.konflikte, kohortenNachId, sichtbareIds, nurQuelle, schwere,
        kohorteId, ohneModulintern, tag, suche,
    ]);

    const termine = useMemo(() => {
        if (!gewaehlteKohorte) return [];
        const zeilen = gewaehlteKohorte.angebote.flatMap((angebot) =>
            angebot.optionen.flatMap((kurs) =>
                (kurs.slots.length > 0
                        ? kurs.slots
                        : [{ wochentag: null, beginnMin: null, endeMin: null, raum: null, rhythmusText: null, rhythmus: '' }]
                ).map((slot) => ({ angebot, kurs, slot })),
            ),
        );
        return zeilen.sort(
            (x, y) =>
                (x.slot.wochentag ?? 9) - (y.slot.wochentag ?? 9) ||
                (x.slot.beginnMin ?? 0) - (y.slot.beginnMin ?? 0),
        );
    }, [gewaehlteKohorte]);

    const sichtbareTermine = useMemo(() => {
        const begriff = suche.trim().toLowerCase();
        return termine.filter((r) => {
            if (tag && String(r.slot.wochentag) !== tag) return false;
            if (!begriff) return true;
            const heuhaufen =
                `${r.angebot.modulKuerzel} ${r.angebot.modellName} ${r.kurs.name} ${r.kurs.dozenten.join(' ')}`.toLowerCase();
            return heuhaufen.includes(begriff);
        });
    }, [termine, tag, suche]);

    /*
     * Gezaehlt wird ueber die sichtbaren Varianten, sonst widerspricht das Urteil
     * der Leiste darunter ("2 von 9 Varianten", aber nur 5 Felder zu sehen).
     */
    const gezaehlteKonflikte = useMemo(
        () => analyse.konflikte.filter((k) => sichtbareIds.has(k.kohorteId)),
        [analyse.konflikte, sichtbareIds],
    );
    const hart = gezaehlteKonflikte.filter((k) => k.schwere === 'hart').length;
    const teil = gezaehlteKonflikte.filter((k) => k.schwere === 'teilweise').length;
    const vage = gezaehlteKonflikte.filter((k) => k.schwere === 'unsicher').length;
    const betroffene = new Set(
        gezaehlteKonflikte.filter((k) => k.schwere === 'hart').map((k) => k.kohorteId),
    ).size;

    let urteilKlasse = 'urteil';
    let urteilSatz: string;
    if (hart > 0) {
        urteilKlasse = "urteil urteilHart";
        urteilSatz =
            `Der Termin ist nicht für alle belegbar: ${hart} harte Überschneidung` +
            `${hart === 1 ? '' : 'en'} in ${betroffene} von ${sichtbareKohorten.length} Varianten.`;
    } else if (teil > 0) {
        urteilKlasse = "urteil urteilTeilweise";
        urteilSatz =
            `Belegbar, aber die Gruppenwahl wird eingeschränkt: ${teil} teilweise ` +
            `Überschneidung${teil === 1 ? '' : 'en'}.`;
    } else {
        urteilSatz = 'Keine Überschneidung mit den geprüften Pflichtveranstaltungen gefunden.';
    }

    const titel =
        analyse.quelle.veranstaltungName ?? `Module ${analyse.quelle.modulIds.join(', ')}`;

    return (
        <div className="huelle">
            <Row>
                <Col md={9}>
                    <h3>{titel}</h3>
                    <p className="unterzeile">
                        {analyse.quelle.veranstaltungId
                            ? `Veranstaltung ${analyse.quelle.veranstaltungId}`
                            : 'Modulbasierte Prüfung'}
                        {' · '}{sichtbareKohorten.length} aktive Varianten
                        {' · '}{analyse.statistik.veranstaltungen} Veranstaltungen im Vergleich
                        {' · '}Stand {new Date(analyse.erzeugtAm).toLocaleString('de-DE')}
                    </p>
                </Col>
                <Col>
                    <DruckKnopf analyse={analyse} beschriftung={"Vollständigen Bericht drucken"} alles/>

                    <DruckKnopf analyse={analyse} beschriftung={"Übersicht drucken"}/>
                </Col>
            </Row>

            <div className={urteilKlasse}>
                <p>{urteilSatz}</p>
                <div className="detail">
                    hart {hart} · teilweise {teil} · unsicher {vage}
                    {analyse.statistik.ohneZeiten > 0 && ` · ohne Zeitangabe ${analyse.statistik.ohneZeiten}`}
                    {!!analyse.statistik.ausgefallen && ` · ausgefallen ${analyse.statistik.ausgefallen}`}
                </div>
            </div>

            {/* Varianten ---------------------------------------------------- */}
            <br/>
            <h2>Studiengangsvarianten</h2>
            <p className="hinweis">
                Ein Feld je Variante, eingefärbt nach dem schwersten Befund, gebündelt
                nach Studiengang. Auswählen, um Tabelle und Wochenraster zu filtern.
            </p>
            <div className="leiste">
                {kohortenGruppen.map((gruppe) => (
                    <section className="gruppe mb-0" key={gruppe.ebene2}>
                        <p className="gruppeTitel">{gruppe.titel}</p>
                        <div className="felder">
                            {gruppe.mitglieder.map((k:any) => {
                                const titel =
                                    `${k.bezeichnung} — Fachsemester ${k.fachsemester.join(', ') || '?'}` +
                                    (k.notiz ? ` — ${k.notiz}` : '');

                                return (
                                    <button
                                        type="button"
                                        className="feld"
                                        data-schwere={
                                            k.angebote.length === 0
                                                ? 'inaktiv'
                                                : (schwersteJeKohorte.get(k.id) ?? 'frei')
                                        }
                                        aria-pressed={kohorteId === k.id}
                                        aria-label={titel}
                                        title={titel}
                                        onClick={() => setKohorteId((vorher) => (vorher === k.id ? '' : k.id))}
                                    />
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>


            {(analyse.sprachhinweise?.length ?? 0) > 0 && (
                <><br/>
                    <h2>Nur englischsprachige Module</h2>
                    <ul>
                        {analyse.sprachhinweise!.map((h) => (
                            <li key={`${h.kohorteId}-${h.modulId}`}>
                                <strong>{h.modulKuerzel}</strong> [{h.pflicht ? 'Pflicht' : 'Wahlpflicht'}]{' '}
                                {h.modulName} — {h.kohorteBezeichnung}
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {/* Konflikte ---------------------------------------------------- */}
            <br/>
            <h2>Überschneidungen</h2>
            <div className="filter">
                <label>
                    Suche
                    <input
                        type="text"
                        value={suche}
                        placeholder="Modul, Titel, Dozent"
                        onChange={(e) => setSuche(e.target.value)}
                    />
                </label>
                <label>
                    Schwere
                    <select value={schwere} onChange={(e) => setSchwere(e.target.value as '' | Schwere)}>
                        <option value="">alle</option>
                        <option value="hart">hart</option>
                        <option value="teilweise">teilweise</option>
                        <option value="unsicher">unsicher</option>
                    </select>
                </label>
                <label style={{maxWidth: "100%"}}>
                    Variante
                    <select value={kohorteId} onChange={(e) => setKohorteId(e.target.value)}>
                        <option value="">alle</option>
                        {sichtbareKohorten.map((k) => (
                            <option value={k.id} key={k.id}>
                                {k.bezeichnung}
                                {k.partnerE2 ? ' [Kombination]' : ''}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Wochentag
                    <select value={tag} onChange={(e) => setTag(e.target.value)}>
                        <option value="">alle</option>
                        {[1, 2, 3, 4, 5, 6, 7].map((t) => (
                            <option value={String(t)} key={t}>
                                {WOCHENTAG_KURZ[t]}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="schalter">
                    <input
                        type="checkbox"
                        checked={nurQuelle}
                        onChange={(e) => setNurQuelle(e.target.checked)}
                    />
                    nur mit geprüftem Kurs
                </label>
                <label className="schalter">
                    <input
                        type="checkbox"
                        checked={ohneModulintern}
                        onChange={(e) => setOhneModulintern(e.target.checked)}
                    />
                    ohne Konflikte im selben Modul
                </label>
            </div>

            {sichtbareKonflikte.length === 0 ? (
                <div className="leer">Keine Überschneidung, die zu den Filtern passt.</div>
            ) : (
                <div className="rahmen">
                    <table>
                        <thead>
                        <tr>
                            <th>Schwere</th>
                            <th>Variante</th>
                            <th>Anforderung A</th>
                            <th>Anforderung B</th>
                            <th>Überschneidung</th>
                            <th>Freie Gruppenpaare</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sichtbareKonflikte.map((konflikt) => (
                            <KonfliktZeile
                                key={konflikt.id}
                                konflikt={konflikt}
                                kohorte={kohortenNachId.get(konflikt.kohorteId)}
                                quelleModelle={quelleModelle}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Wochenraster ------------------------------------------------- */}
            <br/>
            <h2>Wochenraster</h2>
            <Wochenraster
                kohorte={gewaehlteKohorte}
                konflikte={analyse.konflikte}
                quelleModelle={quelleModelle}
            />

            {/* Datenlage ---------------------------------------------------- */}
            <br/>
            <h2>Datenlage</h2>

            <details>
                <summary>Alle Veranstaltungen der gewählten Variante</summary>
                <div className="rahmen">
                    <table>
                        <thead>
                        <tr>
                            <th>Tag</th><th>Zeit</th><th>Modul</th><th>Veranstaltung</th>
                            <th>Art</th><th>Gruppe</th><th>Raum</th><th>Rhythmus</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sichtbareTermine.map((r, index) => (
                            <tr key={`${r.kurs.id}-${index}`}>
                                <td className="zeit">
                                    {r.slot.wochentag ? WOCHENTAG_KURZ[r.slot.wochentag] : '–'}
                                </td>
                                <td className="zeit">
                                    {r.slot.beginnMin != null
                                        ? `${zeit(r.slot.beginnMin)}–${zeit(r.slot.endeMin)}`
                                        : 'keine Zeit'}
                                </td>
                                <td className="kennung">{r.angebot.modulKuerzel}</td>
                                <td>
                                    <a href={r.kurs.detailUrl} target="_blank" rel="noreferrer">
                                        {r.kurs.name}
                                    </a>
                                    {quelleModelle.has(r.angebot.modellId) && (
                                        <span className="marke markeGeprueft">geprüft</span>
                                    )}
                                </td>
                                <td>{r.kurs.art ?? r.angebot.art ?? '–'}</td>
                                <td>
                                    {r.angebot.optionen.length > 1
                                        ? (r.kurs.belegnummer ?? String(r.kurs.id))
                                        : 'einzig'}
                                </td>
                                <td>{r.slot.raum ?? '–'}</td>
                                <td>{r.slot.rhythmusText ?? r.slot.rhythmus ?? '–'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </details>

            <details>
                <summary>Varianten und Prüfungsordnungen</summary>
                <div className="rahmen">
                    <table>
                        <thead>
                        <tr>
                            <th>Variante (E1)</th><th>Fachsemester</th><th>FsB</th>
                            <th>Gültig</th><th>Typ</th><th>Anforderungen</th><th>Hinweis</th>
                        </tr>
                        </thead>
                        <tbody>
                        {analyse.kohorten.map((k) => (
                            <tr key={k.id}>
                                <td>{k.bezeichnung}</td>
                                <td className="zeit">{k.fachsemester.join(', ') || '–'}</td>
                                <td>{k.fsbName || '–'}</td>
                                <td>{k.aktuell ? 'aktuell' : 'nicht aktuell'}</td>
                                <td>{k.partnerE2 != null ? 'Hauptfach + Nebenfach' : 'Einzelfach'}</td>
                                <td className="zeit">{k.angebote.length}</td>
                                <td>{k.notiz ?? ''}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </details>

            {analyse.warnungen.length > 0 && (
                <details>
                    <summary>Warnungen</summary>
                    <ul className="warnungen">
                        {analyse.warnungen.map((w) => (
                            <li key={w}>{w}</li>
                        ))}
                    </ul>
                </details>
            )}

            <footer className="fuss">
                Daten aus der BIS-API der Universität Bielefeld, Semester {analyse.semesterName}.
                Verglichen werden Anforderungen (Modellveranstaltungen) derselben Kohorte;
                Parallelgruppen gelten als frei wählbar, daher ist ein Konflikt nur dann hart,
                wenn keine Gruppenkombination kollisionsfrei bleibt. Puffer:{' '}
                {analyse.optionen.pufferMin} Minuten. Fachsemester-Abgleich:{' '}
                {analyse.optionen.tolerierteFachsemester}.
            </footer>
        </div>
    );
}

/** Erster Teil einer Bezeichnung – meist der Fachname ohne Abschluss und FsB. */
function kurzname(bezeichnung: string | null): string {
    if (!bezeichnung) return 'Kombination';
    return bezeichnung.split(' · ')[0]!.trim() || bezeichnung;
}

function KonfliktZeile({
                           konflikt,
                           kohorte,
                           quelleModelle,
                       }: {
    konflikt: Konflikt;
    kohorte: Kohorte | undefined;
    quelleModelle: Set<number>;
}) {
    const a = kohorte?.angebote.find((x) => x.schluessel === konflikt.aSchluessel);
    const b = kohorte?.angebote.find((x) => x.schluessel === konflikt.bSchluessel);
    const markeKlasse =
        konflikt.schwere === 'hart'
            ? 'markeHart'
            : konflikt.schwere === 'teilweise'
                ? 'markeTeilweise'
                : 'markeUnsicher';

    return (
        <tr>
            <td>
                <span className={`marke ${markeKlasse}`}>{konflikt.schwere}</span>
            </td>
            <td>
                {kohorte?.bezeichnung ?? konflikt.kohorteId}
                {kohorte?.partnerE2 ? ' + Kombination' : ''}
            </td>
            <td>
                <Anforderung
                    text={angebotTyp(a) +angebotName(a)}
                    betont={a != null && quelleModelle.has(a.modellId)}
                />
            </td>
            <td>
                <Anforderung
                    text={angebotTyp(b) + angebotName(b)}
                    betont={b != null && quelleModelle.has(b.modellId)}
                />
            </td>
            <td className="zeit ueberschneidung">{konflikt.zusammenfassung}</td>
            <td className="zeit">
                {konflikt.schwere === 'hart'
                    ? 'nicht zutreffend'
                    : `${konflikt.freieKombinationen} von ${konflikt.gesamteKombinationen}`}
            </td>
        </tr>
    );
}

function Anforderung({ text, betont }: { text: string; betont: boolean }) {
    return betont ? <strong>{text}</strong> : <>{text}</>;
}