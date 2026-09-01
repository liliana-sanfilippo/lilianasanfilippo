import React from "react";
import {ProjektKarte} from "../../components/cards/Projekt-Karte";
import {H1, H2} from "../../components/other/H2";

export function TemplateWikiDocu() {

    return (
        <div>
            <H1>Component and type documentation</H1>
            <H2>Scientific</H2>
            <div className={"karten"} >
                <ProjektKarte
                    url={`${process.env.REACT_APP_IGEM_TEMPLATE_WIKI_PATH}/part-table`}
                    title={"Part Table"}
                    marken={[]}
                    zustand={""}
                    text={"Component and corresponding type"}
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