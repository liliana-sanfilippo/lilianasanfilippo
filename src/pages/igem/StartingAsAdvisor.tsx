import React from "react";
import IGEMTimeline from "../../components/other/IGEMTimeline";
import { igemtimeline } from "../../data/igem/igemtimeline";
import {Section} from "@liliana-sanfilippo/react-wiki-components";

export function StartingAsAdvisor() {

    return (
        <div>
            <Section title={"Timeline"}>
                (Not final)
                <IGEMTimeline items={igemtimeline}/>
            </Section>
        </div>
    )
}
