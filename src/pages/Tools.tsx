import React from "react";
import {ProjektKarte} from "../components/cards/Projekt-Karte";
import {H1, H2} from "../components/other/H2";

export function Tools() {


    return (
        <div>
            <H1>Tools in der Studienberatung</H1>
            <H2>Verfügbar</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={"https://studienberatung-chatbot.techfak.de/"}
                    title={"Intelligentes Glossar"}
                    zielgruppen={["Studierende", "Studieninteressierte"]}
                    marken={[]}
                    zustand={"2.0"}
                    text={""}
                />
            </div>
            <H2>Prototypen</H2>
                <div className={"karten"} >
                    <ProjektKarte
                        url={`${process.env.REACT_APP_COUNSELLING_SYSTEM}/tools/ekvv-collision-check`}
                        title={"Kollisions-Check für Kurse in mehreren Studiengängen"}
                        zielgruppen={["Verwaltung", "Studierende"]}
                        marken={["Berichte", "Überschneidungen"]}
                        zustand={"Erste Version"}
                        text={""}
                    />
                    <ProjektKarte
                        url={`${process.env.REACT_APP_COUNSELLING_SYSTEM}/tools/ekvv-studierbarkeit`}
                        title={"Überprüfung der Studierbarkeit (Pflichtmodule)"}
                        zielgruppen={["Verwaltung", "Studieninteressierte"]}
                        marken={["Berichte", "Studierbarkeit"]}
                        zustand={"Erste Version"}
                        text={""}
                    />
                </div>
        </div>
    )
}