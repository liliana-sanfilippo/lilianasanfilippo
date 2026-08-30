import React, {useEffect, useState} from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem, Button} from "react-bootstrap";
import "../componentStyling/Kollisionsbericht.css"
import {H1, H2} from "../components/other/H2";
import {KollisionsBericht} from "../components/KollisionsBericht";
import {Analyse} from "../types/additional_unibi_types";
import {AnalyseFile, analyseFiles} from "../data/analyse_files";

type AnalyseFiles = Record<AnalyseFile, Analyse>;

export function EkvvCollision() {
    const [analysen, setAnalysen] = useState<AnalyseFiles | null>(null);

    useEffect(() => {
        async function load() {
            const results = await Promise.all(
                analyseFiles.map(async (file) => {
                    const response = await fetch(`/ekvv/${file}.json`);

                    if (!response.ok) {
                        throw new Error(`Fehler beim Laden von ${file}.json`);
                    }

                    const analyse = (await response.json()) as Analyse;

                    return [file, analyse] as const;
                }),
            );

            const result = Object.fromEntries(results) as AnalyseFiles;

            setAnalysen(result);
        }

        load().catch(console.error);
    }, []);

    if (!analysen) {
        return <div>Lade Analysen...</div>;
    }

    return (
        <div className="huelle">
            <H1>Kollisionsprüfung</H1>

            <Accordion>
                <AccordionItem eventKey={"0"}>
                    <AccordionHeader>Hinweise</AccordionHeader>
                    <AccordionBody>
                        Auswertung von Daten aus dem eKVV der Universität Bielefeld. Daten können veraltet sein, bitte auf Datum schauen.
                    </AccordionBody>
                </AccordionItem>
                <br/>
                <Button variant={"primary"}  href={"https://github.com/liliana-sanfilippo/lilianasanfilippo/issues/2"}>Nicht vorhandenen Bericht oder Update anfragen</Button>

                <H2>Kursbezogene Kompabilitätsprüfung</H2>

                <AccordionItem eventKey={"1"}>
                    <AccordionHeader><span>
                        240100 Mathematik für Informatik und Naturwissenschaften I (V) (WiSe 2026/2027)
                        (beinhaltet Prüfung <b>1 Semester Informatik</b>)
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.sem_data_20262_mfn1}/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey={"2"}>
                    <AccordionHeader>
                        <span>240107 Ausgewählte Kapitel der Analysis (V) (WiSe 2026/2027) (beinhaltet
                        Prüfung <b>3 Semester Informatik</b>)</span>
                    </AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.sem_data_20262_mfn3}/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey={"3"}>
                    <AccordionHeader>
                    <span>
                         392139 Introduction to Machine Learning (int. Track) (V) (WiSe 2026/2027) (beinhaltet
                        Prüfung <b>5 Semester Modellbildung (Informatik)</b>)
                    </span>
                    </AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.sem_data_20262_ml}/>
                    </AccordionBody>
                </AccordionItem>

                <details>
                    <summary>Archiv WiSe 2025/26</summary>
                    <AccordionItem className={"acc-archiv"} eventKey={"5"}>
                        <AccordionHeader><span>
                        240100 Mathematik für Informatik und Naturwissenschaften I (V) (WiSe 2025/2026)
                        (beinhaltet Prüfung <b>1 Semester Informatik</b>)
                    </span></AccordionHeader>
                        <AccordionBody>
                            <KollisionsBericht analyse={analysen.sem_data_20252_mfn1}/>
                        </AccordionBody>
                    </AccordionItem>
                </details>

                <H2>Prüfung von der Studierbarkeit pro Semester</H2>
                <AccordionItem eventKey={"6"}>
                    <AccordionHeader><span>
                        <b>1 Fachsemester </b> Naturwissenschaftliche Informatik B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.nwi_20262_fs1}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"7"}>
                    <AccordionHeader><span>
                        <b>3 Fachsemester </b> Naturwissenschaftliche Informatik B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.nwi_20262_fs3}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"8"}>
                    <AccordionHeader><span>
                        <b>1 Fachsemester </b> Informatik B.Sc. Kernfach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.inf_20262_fs1}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"9"}>
                    <AccordionHeader><span>
                        <b>3 Fachsemester </b> Informatik B.Sc. Kernfach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.inf_20262_fs3}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"11"}>
                    <AccordionHeader><span>
                        <b>1 Fachsemester </b> Künstliche Intelligenz und Kognitive Informatik B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.kikoi_20262_fs1}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"10"}>
                    <AccordionHeader><span>
                        <b>3 Fachsemester </b> Künstliche Intelligenz und Kognitive Informatik B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.kikoi_20262_fs3}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"12"}>
                    <AccordionHeader><span>
                        <b>1 Fachsemester </b> Molekulare Biotechnologie B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.mbt_20262_fs1}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"13"}>
                    <AccordionHeader><span>
                        <b>3 Fachsemester </b> Molekulare Biotechnologie B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.mbt_20262_fs3}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"15"}>
                    <AccordionHeader><span>
                        <b>1 Fachsemester </b> Bioinformatische Genomforschung B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.biobig_20262_fs1}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem eventKey={"14"}>
                    <AccordionHeader><span>
                        <b>3 Fachsemester </b> Bioinformatische Genomforschung B.Sc. 1-Fach (fw) FsB WiSe 2025/26
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analysen.biobig_20262_fs3}/>
                    </AccordionBody>
                </AccordionItem>

            </Accordion>


        </div>
    )
}