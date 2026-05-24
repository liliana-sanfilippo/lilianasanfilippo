import React from 'react'
import UniBlog from "../../components/getExternal/getUniBlog";

export const metauniBlogCellective1 = {
    title: "External Blog: Students develop therapeutic approach to breast cancer",
    tags: ["igem", "cellective", "external", "igem-bielefeld"],
    spoiler: "An interdisciplinary team of students from Bielefeld University is working on a novel approach to treating breast cancer. With their research, the eleven students are participating in the iGEM competition, the world's largest competition for synthetic biology.",
    slug: "uni-blog-cellective-1",
    date: new Date("2025-10-20"),
    cc: "Kristian Müller",
    objectPosition: "top",
    image: "https://aktuell.uni-bielefeld.de/wp-content/uploads/2025/10/iGEM-Bielefeld_2025-1024x887.jpg"
}

export default function uniBlogCellective1() {


    return (<div>
        <UniBlog
            url="https://aktuell.uni-bielefeld.de/2025/10/20/studierende-entwickeln-therapieansatz-gegen-brustkrebs/"></UniBlog>

    </div>)
}
