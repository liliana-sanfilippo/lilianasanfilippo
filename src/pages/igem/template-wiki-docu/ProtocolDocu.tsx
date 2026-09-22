import React from "react";
import {H1, H2, H3} from "../../../components/other/H2";
import {TypeScriptCode} from "../../../components/TypeScriptCode";
import ProtocolList from "../../../components/WikiComponents/Protocol";
import {Protocol} from "../../../components/WikiComponents/protocol";
import {protocol_string} from "../../../components/WikiComponents/code_strings";


export function ProtocolDocu() {
    return (
        <div>
            <H1>Protocols sorted by categories</H1>
            <p>Automatically sorts and displays protocol collection. Shows number of protocols in each category.</p>
            <p>Examples highlighted, they usually take the background color of the page.</p>
            <H2>Example</H2>
            <div className={"bg-gray-100 px-2"}>
                <ProtocolList show={"thumbnail"} protocols={protocol_list}/>
            </div>

            <H2>Usage</H2>
            <TypeScriptCode>
                {`<ProtocolList show={"thumbnail"} protocols={protocol_list}/>`}
            </TypeScriptCode>
            <TypeScriptCode>
                {`
const protocol_list: Protocol[] = [
    {
        title: "title",
        description: "description",
        category: "category",
        pdfUrl: "url",
        thumbnail_url: "url"
    }
]
`}
            </TypeScriptCode>
            <H2>Relevant types</H2>
            <TypeScriptCode>
                {`
export interface Protocol {
  id?: string;
  title: string;
  description: string;
  category: string;
  pdfUrl: string;
  thumbnail_url?: string
}
            `}
            </TypeScriptCode>
            <H2>Options</H2>

            <H3>No thumbnail</H3>
            <div className={"bg-gray-100 px-2"}>
            <ProtocolList protocols={protocol_list.slice(0,3)}/>
            </div>
            <TypeScriptCode>
                {` <ProtocolList protocols={protocol_list}/>`}
            </TypeScriptCode>
            <H3>Different max width</H3>
            <div className={"bg-gray-100 px-2"}>
            <ProtocolList protocols={protocol_list.slice(0,3)} max_width={"200px"}/>
            </div>
            <TypeScriptCode>
                {`<ProtocolList protocols={protocol_list} max_width={"200px"}/>`}
            </TypeScriptCode>

            <H3>No hover effect</H3>
            <div className={"bg-gray-100 px-2"}>
            <ProtocolList protocols={protocol_list.slice(0,3)} do_not_move/>
            </div>
            <TypeScriptCode>
                {`<ProtocolList protocols={protocol_list} do_not_move/>`}
            </TypeScriptCode>

            <H3>Show PDF instead of thumbnail (iframe whacky)</H3>
            <div className={"bg-gray-100 px-2"}>
            <ProtocolList  show={"pdf"} protocols={protocol_list.slice(0,3)}/>
            </div>
            <TypeScriptCode>
                {`<ProtocolList  show={"pdf"} protocols={protocol_list)}/>`}
            </TypeScriptCode>

            <H3>Configure box shadow</H3>
            <div className={"bg-gray-100 px-2"}>
                <ProtocolList box_shadow={"0 12px 24px rgba(6, 255, 255)"} protocols={protocol_list.slice(0,3)}/>
            </div>
            <TypeScriptCode>
                {` <ProtocolList protocols={protocol_list}/>`}
            </TypeScriptCode>

            <H3>Manual changes</H3>
            <p>Through styling, less or more fields, tags...</p>


            <H2>Source Code</H2>
            <TypeScriptCode>
                {protocol_string}
            </TypeScriptCode>
        </div>
    )
}


const protocol_list: Protocol[] = [
    {
        title: "Title of protocol 1",
        description: "A comprehensive description",
        category: "Category 1",
        pdfUrl: "https://static.igem.wiki/teams/6221/wiki/community-board/lund-new.pdf",
        thumbnail_url: "https://static.igem.wiki/teams/6221/wiki/community-board/lund-new.avif"
    },
    {
        title: "Title of protocol 2",
        description: "A comprehensive description",
        category: "Category 1",
        pdfUrl: "https://static.igem.wiki/teams/6221/wiki/community-board/bfh-frankfurt.pdf",
        thumbnail_url: "https://static.igem.wiki/teams/6221/wiki/community-board/bfh-frankfurt.avif",

    },
    {
        title: "Title of protocol 4",
        description: "A comprehensive description",
        category: "Category 1",
        pdfUrl: "https://static.igem.wiki/teams/6221/wiki/community-board/bfh-patras.pdf",
        thumbnail_url: "https://static.igem.wiki/teams/6221/wiki/community-board/bfh-patras.avif",

    },
    {
        title: "Title of protocol 3",
        description: "A comprehensive description",
        category: "Category 2",
        pdfUrl: "https://static.igem.wiki/teams/6221/wiki/community-board/bfh-malaga.pdf",
        thumbnail_url: "https://static.igem.wiki/teams/6221/wiki/community-board/bfh-malaga.avif",

    },

]



