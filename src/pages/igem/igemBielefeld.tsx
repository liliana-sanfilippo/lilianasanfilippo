import {Precyse} from "./precyse";
import React from "react";
import TagCarousel from "../../components/Carousels/TagCarousel";
import TabbedBox, {TabData} from "../../components/boxes/TabbedBox";

export function IgemBielefeld() {


    return (<div>
        <div className={"row my-5"}>
            <img alt={"iGEM Bielefeld Logo"} className="mx-auto mt-5 img-25"
                 src="https://static.igem.wiki/teams/5247/logos-team/igem-bielefeld-logo-our-colours.png"/>
        </div>
        <section>
            <TagCarousel tag={"igem-bielefeld"}/>
        </section>
        <section className={"flex flex-col gap-8 lg:gap-16"}>
            <TabbedBox tabs={igembielefeldTabs} defaultActiveKey={"first"}/>
        </section>
    </div>)
}


const igembielefeldTabs: TabData[] = [{
    eventKey: "first", title: "2024", content: (<Precyse/>)
}]

