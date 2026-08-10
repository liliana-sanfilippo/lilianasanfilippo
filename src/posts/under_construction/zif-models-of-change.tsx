import React from 'react'
import {FurtherLinks} from "../../components/other/FurtherLinks";

export const metazifModelsOfChange = {
    title: "Conference: Building Models of Change", //: Bridging Sciences and Humanities
    tags: ["conference", "zif"],
    spoiler: "The conference aimed to bridge the gap between various disciplines, to explore the diverse world of modelling in distinct fields, and to transfer these insights to interdisciplinary research by extracting similarities and differences in how models are used across disciplines.",
    slug: "models-of-change",
    date: new Date("2025-05-16"),
    image: "https://www.uni-bielefeld.de/_internal/cimg!0/r0xeuo4daqn587ucx72v6up4wqs2yi5.jpeg",
    cc: "Universität Bielefeld"
}


const flinks = [{
    text: "University page of the conference", url: "https://www.uni-bielefeld.de/themen/conference-march-2025/"
}, {
    text: "Recap", url: "https://www.uni-bielefeld.de/themen/conference-march-2025/recap/"
}]

export function zifModelsOfChange() {

    return (<div>

        <div className="row align-items-center">
            <iframe
                className="col-6 m-auto"
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7308846426644463616"
                height="670"
                width="50%"
                frameBorder="0"
            />
        </div>

        <FurtherLinks flinks={flinks}/>
    </div>)
}