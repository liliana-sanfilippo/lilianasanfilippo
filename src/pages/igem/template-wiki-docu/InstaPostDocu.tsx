import React from "react";
import {H1, H2, H3} from "../../../components/other/H2";
import {TypeScriptCode} from "../../../components/TypeScriptCode";


export function InstaPostDocu() {
    return (
        <div>
            <H1>Instagram Post</H1>
            <p>description</p>
            <H2>Example</H2>

            <H2>Usage</H2>
            <TypeScriptCode>
                {`component`}
            </TypeScriptCode>
            <TypeScriptCode>
                {`
data
`}
            </TypeScriptCode>
            <H2>Relevant types</H2>
            <TypeScriptCode>
                {`

            `}
            </TypeScriptCode>
            <H2>Options</H2>

            <H3>Manual changes</H3>
            <p>Possible through the options chosen for <code>TableChart</code>, the change of header names or order and
                alike.</p>
            <H2>Source Code</H2>
            <TypeScriptCode>
                {``}
            </TypeScriptCode>
        </div>
    )
}



