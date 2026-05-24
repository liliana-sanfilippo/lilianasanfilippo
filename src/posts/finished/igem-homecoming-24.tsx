import React from 'react'
import {SourceBox} from "../../components/boxes/SourceBox";

export const metaIgemHomecoming24 = {
    title: "Homecoming 2024",
    tags: ["igem", "precyse", "igem-bielefeld"],
    spoiler: "We brought together the people who made our iGEM journey possible for an evening of presentations, celebrations, and reflections of our achievements. Thank you to our many heping hands at the university, our steering committee members and curious students.",
    slug: "igem-homecoming-2024",
    date: new Date("2024-11"),
    image: "https://live.staticflickr.com/65535/54974743785_3b283bfdd6_c.jpg",
    cc: "Liliana Sanfilippo"
}
// https://static.igem.wiki/teams/5247/photos/hp/homecoming.webp

export default function IgemHomecoming24() {
    return (
        <div>
            <SourceBox url={"https://2024.igem.wiki/bielefeld-cebitec/human-practices?tab=homecoming&scrollTo=homecoming-heading"} author={"iGEM Bielefeld"}/>
            <p>The Homecoming Event at Bielefeld University, hosted by CeBiTec and the iGEM Team Bielefeld-CeBiTec 2024,
                was a remarkable evening filled with celebration, reflection, and a shared vision for the future of
                biotechnology. Guests arrived and were warmly welcomed in the event hall, setting a lively and collegial
                tone for the evening. The official program began with a heartfelt welcome by Prof. Dr. Dario Anselmetti,
                Vice-Rector for Studies and Teaching, and Prof. Dr. Andrea Bräutigam, deputy Scientific Director of
                CeBiTec, who highlighted the importance of the iGEM initiative for fostering innovation and
                collaboration in biotechnology. A retrospective on Bielefeld’s iGEM history, presented by Dr. Svenja
                Vinke and Prof. Dr. Jörn Kalinowski, evoked nostalgia and pride as they shared milestones from the
                team’s journey since 2010. The spirit of collaboration was further emphasized with a presentation by the
                BFH European Meet-Up Committee, which showcased the network's international connections and its role in
                advancing iGEM projects.
            </p>
            <p>
                The spotlight then turned to the 2024 iGEM Team and their project "PreCyse." Sinan Zimmermann, an iGEM
                alumnus and instructor, introduced the project, followed by the team’s detailed overview of its
                progress, challenges, and future potential. Their presentation was met with enthusiasm and appreciation,
                as it demonstrated both scientific rigor and creative problem-solving. The formal program concluded with
                a closing speech by Prof. Dr. Jörn Kalinowski, who commended the team for their outstanding work and
                expressed gratitude to all who have supported iGEM at Bielefeld over the years.
                For invited guests, the evening continued with the exclusive CeBiTec VIP Reception at the "Nordlicht"
                restaurant. Here, attendees enjoyed a sophisticated atmosphere, engaging discussions, and delicious
                cuisine. The reception provided a perfect opportunity for networking and celebrating the achievements of
                the iGEM team and the broader CeBiTec community. The event was a true testament to the collaborative
                spirit and scientific excellence that define iGEM and Bielefeld University, leaving everyone inspired
                and motivated for the journey ahead.
            </p>
        </div>
    )
}
