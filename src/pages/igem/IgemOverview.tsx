import React from "react";
import {ProjektKarte} from "../../components/cards/Projekt-Karte";
import {H1, H2} from "../../components/other/H2";

export function IgemOverview() {

    return (
        <div>
            <H1>Overview</H1>
            <H2>iGEM Bielefeld</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_BIELEFELD_PROJECTS_PATH}`}
                    title={"Projects"}
                    marken={[]}
                    zustand={""}
                    text={""}
                />
            </div>
            <H2>iGEM Community</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_BFH_PATH}`}
                    title={"BFH European Meet-Up"}
                    marken={[]}
                    zustand={""}
                    text={""}
                />
                <ProjektKarte
                    url={"https://2026.igem.wiki/bielefeld-cebitec/community-blackboard"}
                    title={"iGEM Community Board"}
                    marken={[]}
                    zustand={""}
                    text={""}
                />
                <ProjektKarte
                    url={"https://www.instagram.com/igem.heist/"}
                    title={"The Heist"}
                    marken={[]}
                    zustand={""}
                    text={""}
                />
            </div>
            <H2>Datasets</H2>
            <p>Contributions welcome.</p>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#ai`}
                    title={"AI in iGEM"}
                    marken={[]}
                    zustand={"In Development"}
                    text={""}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#guides`}
                    title={"Guides"}
                    marken={[]}
                    zustand={"In Development"}
                    text={""}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#games`}
                    title={"Games"}
                    marken={[]}
                    zustand={"In Development"}
                    text={""}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#studies`}
                    title={"Reports and studies"}
                    marken={[]}
                    zustand={"In Development"}
                    text={""}
                />
            </div>
            <H2>Wiki Resources</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`https://liliana-sanfilippo.github.io/igem-wiki-guide/wiki-guide.pdf`}
                    title={"Project documentation and wiki guide"}
                    marken={[]}
                    zustand={"2.0"}
                    text={""}
                />
                <ProjektKarte
                    url={`https://github.com/liliana-sanfilippo/template-wiki`}
                    title={"Template Wiki"}
                    marken={[]}
                    zustand={"2.0"}
                    text={""}
                />
            </div>

        </div>
    )
}