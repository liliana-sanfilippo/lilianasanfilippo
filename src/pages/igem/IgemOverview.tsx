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
                    text={"Initiative launched to connect iGEM teams globally for collaborations and partnerships and to foster a feeling of community"}
                />
                <ProjektKarte
                    url={"https://www.instagram.com/igem.heist/"}
                    title={"The Heist"}
                    marken={[]}
                    zustand={""}
                    text={"The iGEM heist game 2026"}
                />
            </div>
            <H2>Datasets</H2>
            <p>Contributions welcome.</p>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#ai`}
                    title={"AI in iGEM"}
                    marken={[]}
                    zustand={"In Development - available"}
                    text={"Collections of content, guidelines and projects related to AI in iGEM."}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#guides`}
                    title={"Guides"}
                    marken={[]}
                    zustand={"In Development - available"}
                    text={"Collection of guidelines by iGEM teams."}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#games`}
                    title={"Games"}
                    marken={[]}
                    zustand={"In Development - available"}
                    text={"Collection of games related to iGEM. Such as team bonding games, educational games."}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_PATH}/data#studies`}
                    title={"Reports and studies"}
                    marken={[]}
                    zustand={"In Development - available"}
                    text={"Collection of reports and studies done by iGEM teams."}
                />
                <ProjektKarte
                    disabled
                    url={""}
                    title={"Team contact directory"}
                    marken={[]}
                    zustand={"Not publicly available"}
                    text={"Please get into contact, if you are looking for specific team email addresses or other" +
                        " contact info of former or current teams. To avoid spam, the email contact info is not" +
                        " shown here, even though it is publicly available on their wikis." +
                        " Currently contains 300+ email addresses, 300+ Instagram accounts and further information" +
                        " such as Facebook, Twitter or LinkedIn profiles available."}
                />
                <ProjektKarte
                    url={``}
                    disabled
                    title={"SVG collection"}
                    marken={[]}
                    zustand={"In Development - unavailable"}
                    text={"Collection of SVGs created by teams as an alternative to using Biorender and to encourage" +
                        " creating individual illustrations. Please get in contact for access or collaboration" +
                        " during the development and collection stage."}
                />
            </div>
            <br/>
           <p> Planned: Podcasts, Protocols, SVGs; filtering for the tables.</p>
            <H2>Wiki Resources</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`https://liliana-sanfilippo.github.io/igem-wiki-guide/wiki-guide.pdf`}
                    title={"Project documentation and wiki guide"}
                    marken={[]}
                    zustand={"2.0"}
                    text={"Guide and considerations for teams regarding the way the project documentation is" +
                        " maintained ad transformed into the wiki as well as general wiki guidance. Open for" +
                        " collaboration."}
                />
                <ProjektKarte
                    url={`https://github.com/liliana-sanfilippo/template-wiki`}
                    title={"Template React Wiki"}
                    marken={[]}
                    zustand={"Not publicly available"}
                    disabled
                    text={<>
                        Please get in contact, if you wish to use the template wiki. Documentation can be found <a href={process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}>here</a>.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_REACT_REFERENCE_MANAGER_PATH}`}
                    title={"Reference Manager for your React Wiki"}
                    marken={[]}
                    zustand={"2.0"}
                    text={"Automatic display, linking, generation and numbering of citations on a page. Different" +
                        " citation styles available."}
                />
                <ProjektKarte
                    url={`https://github.com/liliana-sanfilippo/react-wiki-components`}
                    title={"React Wiki Components"}
                    marken={[]}
                    zustand={"In Development - available"}
                    text={"Including for example an automatically generating sidebar. I wish to expand this in the" +
                        " future with components adapted from teams as many teams design great ways to display data."}
                />
                <ProjektKarte
                    disabled
                    url={``}
                    title={"React Wiki Page Environment"}
                    marken={[]}
                    zustand={"In Development - unavailable"}
                    text={"Page environment aiming to generate selected things automatically such as a sidebar, the" +
                        " figure numbering and display, linking, generation and numbering of citations. Please get in contact for access or collaboration" +
                        " during the development and collection stage."}
                />
            </div>

        </div>
    )
}