import React from 'react'
import {LinkLine} from "../../components/other/LinkLine";
import {lexartesPresse} from "../../data/lexartesPresse";

export const metaLexartes = {
    title: "LexArtes",
    tags: ["software", "award"],
    spoiler: "Computer science meets law: Second place in competition to develop a learning app for law students. ",
    slug: "lexartes",
    date: new Date("2025-10-06"),
    image: "https://live.staticflickr.com/65535/54974644173_06faed0b99_c.jpg",
    cc: "Liliana Sanfilippo"
}

export default function Lexartes() {
    return (<div>
       <p>
           As part of the software group project at Bielefeld University, we had the opportunity to work on a project under real-world conditions and measure ourselves against other teams and won second place!

           We conceived, designed and developed a web app to help law students prepare for exams, and presented it to clients.
       </p>
       <p>
           Thank you to LexMea for the exciting project, the support and the constructive feedback!

           I am delighted that Bielefeld University offers us such practical learning opportunities.
       </p>
        <h2>See also</h2>
        <div className={"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2"}>
            {lexartesPresse.map(link => (
                <LinkLine url={link.img ?? ""} text={link.linktitle ?? ""} href={link.url}/>))}
        </div>
    </div>)
}

