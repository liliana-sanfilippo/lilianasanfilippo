import React from "react";
import {Col} from "react-bootstrap";
import {VideoBox} from "../../components/boxes/G_Box";
import {Video} from "../../components/media/Video";
import {H2} from "../../components/other/H2";
import TabbedBox, {TabData} from "../../components/boxes/TabbedBox";
import {cellectivepresse} from "../../data/igem/cellectivepresse";
import {LinkLine} from "../../components/other/LinkLine";
import {igemfiles25} from "../../data/igem/igemfiles25";
import PosterCarousel from "../../components/Carousels/PosterCarousel";
import {InstagramCarousel, LinkedInCarousel} from "../../components/Carousels/LinkedInCarousel";
import TagCarousel from "../../components/Carousels/TagCarousel";

export function Cellective() {
    return (<div className={"flex flex-col gap-8 lg:gap-16"}>
        <h1>
            Cellective
        </h1>
        <VideoBox>
            <Col>
                <p>
                    We present Cellective: a riboswitch-based therapeutic platform that selectively targets cancer cells
                    by detecting specific microRNAs and mRNAs, subsequently translating a cellular kill system.
                </p>
                <p><a href="https://2025.igem.wiki/bielefeld-cebitec/">https://2025.igem.wiki/bielefeld-cebitec/</a></p>
            </Col>
            <Video url={"https://video.igem.org/videos/embed/jqk8dmnmEmHsHrbErzhycd"}/>
        </VideoBox>
        <H2>
            Project
        </H2>
        <TabbedBox tabs={cellectiveProjectTabs} defaultActiveKey="design"/>

        <H2>
            People
        </H2>
        <TabbedBox tabs={peopletabs} defaultActiveKey="design"/>
        <H2>
            Wiki
        </H2>
        <H2>
            Press
        </H2>
        <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
            {cellectivepresse.map(link => (
                <LinkLine url={link.img ?? ""} text={link.linktitle ?? ""} href={link.url}/>))}
        </div>
        <H2> Files </H2>
        <PosterCarousel posters={igemfiles25}/>
        <H2> Social Media </H2>
        <LinkedInCarousel urls={linkedinposts}/>
        <InstagramCarousel urls={instaurls}/>
        <H2>Posts</H2>
        <TagCarousel tag={"cellective"}/>
    </div>)
}

const linkedinposts: string[] = []
const instaurls: string[] = ["https://www.instagram.com/systems.biology.master/p/DRPKt9tDWwK/", "https://www.instagram.com/p/DQd9SDPiryR/", "https://www.instagram.com/bielefelduniversity/reel/DQL4FA0k-wa/"]

const cellectiveProjectTabs: TabData[] = [{
    eventKey: "design", title: "Background", content: (<></>)
}, {
    eventKey: "build", title: "Engineering", content: (<></>)
}, {
    eventKey: "test", title: "Human Practices", content: (<></>)
}, {
    eventKey: "learn", title: "Results", content: (<></>)
}, {
    eventKey: "secret", title: "Parts", content: (<></>)
}]

const peopletabs: TabData[] = [{
    eventKey: "design", title: "Team", content: (<>
    </>)
}, {
    eventKey: "build", title: "Supporters", content: (<></>)
}]