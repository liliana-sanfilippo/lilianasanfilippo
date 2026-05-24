import React, {ReactNode} from "react";
import IGEMTimeline from "../../components/other/IGEMTimeline";
import { igemtimeline } from "../../data/igem/igemtimeline";

function Section(props: { title: string, children: ReactNode }) {
    return null;
}

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
