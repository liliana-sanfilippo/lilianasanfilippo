import React from "react";
import {ProjektKarte} from "../../components/cards/Projekt-Karte";
import {H1, H2, H3} from "../../components/other/H2";

export function TemplateWikiDocu() {

    return (
        <div>
            <H1>Component and type documentation</H1>
            <p>
                Please be aware these component use bootstrap and some use tailwind. You should add your own styling.
            </p>
            <p>
                Most of these components are fairly simple. the point is they use JSON-like input, eliminating the need to code.
            </p>
            <H2>Scientific</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/part-table`}
                    title={"Part Table"}
                    marken={[]}
                    zustand={"available"}
                    text={"A simple and not really configurable part table."}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/protocols-sorted`}
                    title={"Categorically sorted Protocol collection"}
                    marken={[]}

                    zustand={"available"}
                    text={<>
                        Automatically sorts and displays protocol collection. Shows number of protocols in each category.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/part-table`}
                    title={"Figure (compatible with automatic figure numberer)"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
            </div>
            <H2>Other</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/insta-post`}
                    title={"Instagram Post"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/part-table`}
                    title={"Community Blackboard Flyer"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/hp-interaction-list`}
                    title={"HP Component"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/education-events`}
                    title={"Education Component"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/travel-list`}
                    title={"Event/Travel Component"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
            </div>


        </div>
    )
}

/**
 * Für später Part:
 *
 * export interface FullPart extends SimplePart{
 *     uudi: string | null
 *     internal_id: string | null
 *     status: "draft" | "screening" | "published" | "rejected"
 *     standard: "rfc10" | "rfc12" | "rfc21" | "rfc23" | "rfc25" | "rfc1000"
 *     reference_uuid: string
 *     compatible?: Compatibility[]
 *
 * }
 *
 *
 * export type Compatibility = {
 *     compatible: boolean;
 *     motif: string | null;
 *     position: number | null;
 * };
 */