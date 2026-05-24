import React from "react";
import {LinkTable} from "../../components/other/LinkTable";
import {igemguides} from "../../data/igem/igemguidelinks";
import {igemreportstudylink} from "../../data/igem/igemreportstudylink";
import {aiinigem} from "../../data/igem/aiinigem";
import {igemgames} from "../../data/igem/igemgames";

export function IGEMData() {


    return (
        <div>
            <div className={"row my-5"}>
                <section>
                    <h2>iGEM Guides</h2>
                    <LinkTable data={igemguides}/>
                </section>
                <section>
                    <h2>iGEM Reports and Studies</h2>
                    <LinkTable data={igemreportstudylink}/>
                </section>
                <section>
                    <h2>AI in iGEM</h2>
                    <LinkTable data={aiinigem}/>
                </section>
                <section>
                    <h2>Fun in iGEM</h2>
                    <LinkTable data={igemgames}/>
                </section>

            </div>
        </div>
    )
}

// TODO https://static.igem.wiki/teams/4212/wiki/igemnotebook.pdf beispiel team notebooks?