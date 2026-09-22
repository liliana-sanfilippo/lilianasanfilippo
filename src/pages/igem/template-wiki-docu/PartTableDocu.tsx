import React from "react";
import {H1, H2, H3} from "../../../components/other/H2";
import {TypeScriptCode} from "../../../components/TypeScriptCode";
import {PartTable} from "../../../components/WikiComponents/PartTable";
import {SimplePart} from "../../../components/WikiComponents/simplePart";
import {part_table_string} from "../../../components/WikiComponents/code_strings";


export function PartTableDocu() {



    return (
        <div>
            <H1>Simple Part Table</H1>
            A simple and not really configurable part table.
            <H2>Example</H2>
            <PartTable part_data={parts}/>
            <H2>Usage</H2>
            <TypeScriptCode>
                {`<PartTable part_data={parts}/>`}
            </TypeScriptCode>
            <TypeScriptCode>
                {`
const parts: SimplePart[] = [
    {
        part_name: "name",
        registry_code: "code",
        description: "text",
        length: 000,
        type: "name",
        registry_url: "url",
        category: "name",
        source_name: "name",
        source_url: "url"
    }
]`}
            </TypeScriptCode>
            <H2>Relevant types</H2>
            <TypeScriptCode>
                {`
export interface SimplePart {
    part_name: string,
    registry_code: string,
    registry_url: string
    description: string,
    length: number,
    // decides category / symbol
    type: string,
    category: string,
    image?: string,
    image_alt?: string,
    source_name: string,
    source_url: string
}
            `}
            </TypeScriptCode>
            <H2>Options</H2>
            <H3>Display an image</H3>
            <PartTable part_data={parts} displayimage/>
            <h4>Same outcome, two possibilities:</h4>
            <TypeScriptCode>
                {`<PartTable part_data={parts} displayimage/>`}
            </TypeScriptCode>
            <TypeScriptCode>
                {`<PartTable part_data={parts} displayimage={true}/>`}
            </TypeScriptCode>
            <H3>Manual changes</H3>
            <p>Possible through the options chosen for <code>TableChart</code>, the change of header names or order and alike.</p>
            <H2>Source Code</H2>
            <TypeScriptCode>
                {part_table_string}
            </TypeScriptCode>
        </div>
    )
}


const parts: SimplePart[] = [
    {
        part_name: "pSwitch_RFP_nIRES_GFP",
        registry_code: "BBa_25NR1K82",
        description: "This plasmid is based on the pcDNA_3.1_EYFP H148Q/I152L plasmid and includes a chloramphenicol resistance, the fluorescence markers RFP and GFP, as well as the HCV IRES.",
        length: 7039,
        type: "Plasmid",
        registry_url: "https://registry.igem.org/parts/bba-25nr1k82",
        category: "Basic",
        image: "https://static.igem.wiki/teams/5775/images/partcollection/cd3-core.svg",
        source_name: "Example Source",
        source_url: ""
    },
    {
        part_name: "pSwitch_GFP_GSDMD-LE",
        registry_code: "BBa_25YZDEWW",
        description: "pcDNA3.1 derived plasmid backbone containing a chloramphenicol resistance marker, and the human Gasdermin D.",
        length: 7690,
        type: "Plasmid",
        registry_url: "https://registry.igem.org/parts/bba-25yzdeww",
        category: "Basic",
        image: "https://static.igem.wiki/teams/5775/images/partcollection/cd3-core.svg",
        source_name: "Example Source",
        source_url: ""
    }
    ]

