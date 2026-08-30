import React from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-bootstrap";
import {H1, H2} from "../components/other/H2";
import {KollisionsBericht} from "../components/KollisionsBericht";
import {sem_data_20262_mfn1} from "../data/sem_data_20262_mfn1";
import {Analyse} from "../types/additional_unibi_types";
import {sem_data_20262_mfn3} from "../data/sem_data_20262_mfn3";
import {sem_data_20262_ml} from "../data/sem_data_20262_ml";
import {sem_data_20262_pdc} from "../data/sem_data_20262_pdc";
import {sem_data_20252_mfn1} from "../data/sem_data_20252_mfn1";

const analyse_sem_data_20252_mfn1 = sem_data_20252_mfn1 as unknown as Analyse;
const analyse_sem_data_20262_mfn1 = sem_data_20262_mfn1 as unknown as Analyse;
const analyse_sem_data_20262_mfn3 = sem_data_20262_mfn3 as unknown as Analyse;
const analyse_sem_data_20262_ml = sem_data_20262_ml as unknown as Analyse;
const analyse_sem_data_20262_pdc = sem_data_20262_pdc as unknown as Analyse;

export function EkvvCollision() {
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
                <AccordionItem eventKey={"1"}>
                    <AccordionHeader><span>
                        240100 Mathematik für Informatik und Naturwissenschaften I (V) (WiSe 2026/2027)
                        (beinhaltet Prüfung <b>1 Semester Informatik</b>)
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analyse_sem_data_20262_mfn1}/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey={"2"}>
                    <AccordionHeader>
                        <span>240107 Ausgewählte Kapitel der Analysis (V) (WiSe 2026/2027) (beinhaltet
                        Prüfung <b>3 Semester Informatik</b>)</span>
                    </AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analyse_sem_data_20262_mfn3}/>
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
                        <KollisionsBericht analyse={analyse_sem_data_20262_ml}/>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey={"4"}>
                    <AccordionHeader>
                        <span>
                            392103 Parallel and Distributed Computing (V) (WiSe 2026/2027) (beinhaltet
                        Prüfung <b>5 Semester Technische Informatik</b>)
                        </span>
                    </AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analyse_sem_data_20262_pdc}/>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem className={"acc-archiv"} eventKey={"5"}>
                    <AccordionHeader><span>
                        240100 Mathematik für Informatik und Naturwissenschaften I (V) (WiSe 2025/2026)
                        (beinhaltet Prüfung <b>1 Semester Informatik</b>)
                    </span></AccordionHeader>
                    <AccordionBody>
                        <KollisionsBericht analyse={analyse_sem_data_20252_mfn1}/>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>


        </div>
    )
}