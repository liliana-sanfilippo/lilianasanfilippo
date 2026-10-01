import React from "react";
import {ProjektKarte} from "../../components/cards/Projekt-Karte";
import {H1, H2, H3} from "../../components/other/H2";
import {
    Engineering_Cycle_Carousel_Style, figure_automatic,
    HP_Timeline_Overview_with_Interviews_below, Instagram_Post,
    part_table_examples,
    protocol_pdfs_1
} from "../../data/component_examples"
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
                    component_examples={part_table_examples}
                    zustand={"available"}
                    text={"A simple and not really configurable part table."}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/protocols-sorted`}
                    title={"Categorically sorted Protocol collection"}
                    marken={[]}
                    component_examples={protocol_pdfs_1}
                    zustand={"available"}
                    text={<>
                        Automatically sorts and displays protocol collection. Shows number of protocols in each category.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/figure-automatic`}
                    title={"Figure (compatible with automatic figure numberer)"}
                    marken={[]}
                    component_examples={figure_automatic}
                    zustand={"available"}
                    text={<>
                        <p>Figure that can be used in the PageEnvironment that allows for automatic numbering of figures. <b>Must be used in PageEnvironment!</b></p>
                    </>}
                />
                <ProjektKarte
                    url={"https://github.com/liliana-sanfilippo/react-bibtex-reference-manager/wiki/Manual-for-iGEM-Wikis"}
                    title={"Citation Manager"}
                    marken={[]}
                    zustand={"available"}
                    text={<>
                        A Citation Manager similar to LateX where the Numbers, Links and Citations are automatically generated. Citation numbers are automatically links to
                        the respective citation.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/engineering-cycle-1`}
                    title={"Engineering Cycle Carousel Style"}
                    marken={[]}
                    disabled
                    component_examples={Engineering_Cycle_Carousel_Style}
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/plasmid-viewer`}
                    title={"Plasmid Viewer"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        <p> Docu in progress.</p>
                        <p> Converter for Benchling csv to gene format <a href={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/benchling-plasmid-viewer-converter`}>here</a> </p>
                    </>}
                />
            </div>
            <H2>Other</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/instagram-post`}
                    title={"Instagram Post"}
                    marken={[]}
                    component_examples={Instagram_Post}
                    zustand={"available"}
                    text={<>
                    Since iGEM rules do not allow for iframes, here is a instagram like component to display your social media posts. Through clicking on the post, the user is forwarded to the respective instagram post.
                        </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/hp-overview-with-timeline`}
                    title={"HP Timeline Overview with Interviews below"}
                    marken={[]}
                    disabled
                    component_examples={HP_Timeline_Overview_with_Interviews_below}
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/blackboard-flyer`}
                    title={"Community Blackboard Flyer"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                        Docu in progress, types and code can be found at the Bielefeld-CeBiTec 2026 GitLab.
                    </>}
                />
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/automatic-sidebar`}
                    title={"Sidebar (automatic)"}
                    marken={[]}
                    disabled
                    zustand={"docu in process"}
                    text={<>
                    Docu in progress, types and code can be found <a href={"https://github.com/liliana-sanfilippo/react-wiki-components/tree/main/src/Sidebar"}>here</a>.
                    </>}
                />

            </div>


        </div>
    )
}
// TODO page environment
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