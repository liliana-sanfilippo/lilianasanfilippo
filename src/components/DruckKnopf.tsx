import { createRoot } from 'react-dom/client';
import {Analyse} from "../types/additional_unibi_types";
import {DruckansichtKollisionsbericht} from "./DruckansichtKollisionsbericht";
import {Button} from "react-bootstrap";


/**
 * Druckt eine einzelne Analyse.
 *
 * Gedruckt wird in einem eigenen Fenster, nicht in der Seite selbst. Das hat
 * zwei Gruende: Der Ausdruck enthaelt dann genau eine Analyse, unabhaengig
 * davon, welche Akkordeon-Abschnitte gerade offen sind, und die Druckregeln
 * muessen nicht gegen das Layout der uebrigen Website ankaempfen.
 *
 * Die Stylesheets der Hauptseite werden mituebernommen, damit der Ausdruck
 * genauso aussieht wie der Bildschirm. Bei `<link>`-Stylesheets wird auf das
 * Laden gewartet – sonst druckt der Browser die Seite ohne Gestaltung.
 */
export async function druckeAnalyse(analyse: Analyse, titel?: string, alles?: boolean): Promise<void> {
    const fenster = window.open('', '_blank', 'width=1100,height=900');
    if (!fenster) {
        throw new Error(
            'Das Druckfenster wurde blockiert. Bitte Pop-ups für diese Seite erlauben.',
        );
    }

    const name = titel ?? analyse.quelle.veranstaltungName ?? 'Kollisionsprüfung';
    fenster.document.open();
    fenster.document.write(
        '<!doctype html><html lang="de"><head><meta charset="utf-8"><title></title></head>' +
        '<body><div id="druck"></div></body></html>',
    );
    fenster.document.close();
    // Der Titel landet im Dateinamen, wenn als PDF gespeichert wird.
    fenster.document.title = `${name} – ${analyse.semesterName}`;

    const wartet: Array<Promise<void>> = [];
    // @ts-ignore
    for (const knoten of document.querySelectorAll<HTMLElement>(
        'link[rel="stylesheet"], style',
    )) {
        const kopie = fenster.document.importNode(knoten, true);
        fenster.document.head.appendChild(kopie);
        if (kopie instanceof HTMLLinkElement) {
            wartet.push(
                new Promise<void>((fertig) => {
                    kopie.addEventListener('load', () => fertig(), { once: true });
                    kopie.addEventListener('error', () => fertig(), { once: true });
                }),
            );
        }
    }

    const ziel = fenster.document.getElementById('druck')!;
    createRoot(ziel).render(<DruckansichtKollisionsbericht analyse={analyse} titel={titel} alles={alles} />);

    // Auf Stylesheets warten, aber nicht ewig.
    await Promise.race([
        Promise.all(wartet),
        new Promise((fertig) => fenster.setTimeout(fertig, 3000)),
    ]);
    // React braucht noch einen Durchlauf, bis das Raster steht.
    await new Promise((fertig) => fenster.setTimeout(fertig, 250));

    fenster.focus();
    fenster.print();
    // Manche Browser drucken asynchron; das Fenster bleibt offen, damit der
    // Dialog nicht abgebrochen wird. Schliessen uebernimmt der Nutzer.
}

/**
 * Schaltflaeche fuer den Akkordeon-Kopf.
 *
 * `stopPropagation` ist noetig, weil ein Klick sonst den Abschnitt auf- oder
 * zuklappt, statt zu drucken.
 */
export function DruckKnopf({
                               analyse,
                               titel,
                               beschriftung = 'Als PDF drucken',
    alles
                           }: {
    analyse: Analyse;
    titel?: string;
    beschriftung?: string;
    alles?: boolean
}) {
    return (
        <Button
            type="button"
            variant={"primary"}
            onClick={(ereignis) => {
                ereignis.stopPropagation();
                ereignis.preventDefault();
                void druckeAnalyse(analyse, titel, alles).catch((fehler: unknown) => {
                    window.alert(fehler instanceof Error ? fehler.message : String(fehler));
                });
            }}
        >
            {beschriftung}
        </Button>
    );
}