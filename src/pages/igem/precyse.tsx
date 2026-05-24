import React from "react";
import {Col, Row} from "react-bootstrap";
import {VideoBox} from "../../components/boxes/G_Box";
import {Video} from "../../components/media/Video";
import {H2} from "../../components/other/H2";
import {precysePresse} from "../../data/igem/precysePresse";
import {LinkLine} from "../../components/other/LinkLine";
import {InstagramCarousel, LinkedInCarousel} from "../../components/Carousels/LinkedInCarousel";
import TagCarousel from "../../components/Carousels/TagCarousel";
import {instaurls, linkedinposts} from "../../data/igem/precyseSocials";
import {TabData} from "../../components/boxes/TabbedBox";

export function Precyse() {


    return (<div className={"flex flex-col gap-8 lg:gap-16"}>
        <h1>
            PreCyse
        </h1>
        <VideoBox>
            <Col>
                <p> We are proud to present PreCyse, a next-generation Prime Editing technology, as innovative gene
                    therapy approach for Cystic Fibrosis (CF) specifically targeting the most common mutation F508del of
                    the CFTR gene.</p>
                <p><a
                    href="https://2024.igem.wiki/bielefeld-cebitec/description?scrollTo=Abstract">https://2024.igem.wiki/bielefeld-cebitec/</a>
                </p>
            </Col>
            <Video url={"https://video.igem.org/videos/embed/9QWExnNCFSWJWbsRTFEZDd"}/>
        </VideoBox>
        {/**
        <H2>
            Project
        </H2>
        <TabbedBox tabs={projectTabs} defaultActiveKey="design"/>

        <H2>
            People
        </H2>
        <TabbedBox tabs={peopletabs} defaultActiveKey="design"/>



         <iframe width="560" height="315" src="https://www.youtube.com/embed/pJrpLIjvDV0?si=kFp18yHKlnBxKtZR"
         title="YouTube video player" frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen></iframe>

         **/}


        {/** <iframe src="https://static.igem.wiki/teams/5247/pdfs/wiki-broschure-v1-2.pdf" width="100%"
         title="title" className="two-pdf-line small-i"></iframe> **/}

        {/**<p><img src="https://static.igem.wiki/teams/5247/photos/meetup/posters-and-stuff/bfh-poster-bielefeld-1.png"/></p>**/}
        {/**<H2>
            Wiki
        </H2>
        <H2>
            Paper
        </H2>
         **/}
        <H2>
            Press
        </H2>
        <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
            {precysePresse.map(link => (
                <LinkLine url={link.img ?? ""} text={link.linktitle ?? ""} href={link.url}/>))}
        </div>
        {/**
        <H2> Files </H2>
        <PosterCarousel posters={igemfiles24}/>
         **/}
        <span className={"print:hidden"}>
            <H2> Social Media </H2>
        <LinkedInCarousel urls={linkedinposts}/>
        <InstagramCarousel urls={instaurls}/>
        </span>
        <H2>Posts</H2>
        <TagCarousel tag={"precyse"}/>
    </div>)
}

// https://video.igem.org/w/9QWExnNCFSWJWbsRTFEZDd
// https://video.igem.org/w/sNAhZQeeZPNz6fCvnMPqmV
// https://video.igem.org/w/uakpHGXyCvvQFKhGKbKVjY
// https://video.igem.org/w/vd1xPmnGdoz7LiNo43iKBP
// https://video.igem.org/w/2G8U94Ubp6bCK5abA8Gu89


const projectTabs: TabData[] = [{
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
        <Row>
            <Col>
                <iframe title="Bielefeld-CeBiTec: Hamburg Teambuilding (2024)" width="500" height="315"
                        src="https://video.igem.org/videos/embed/vd1xPmnGdoz7LiNo43iKBP" allow="fullscreen"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </Col>
            <Col>
                <iframe title="Bielefeld-CeBiTec: Sitcom Team Presentation (2024) [English]" width="500" height="315"
                        src="https://video.igem.org/videos/embed/uakpHGXyCvvQFKhGKbKVjY" allow="fullscreen"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </Col>
        </Row>
    </>)
}, {
    eventKey: "build", title: "Supporters", content: (<></>)
}]