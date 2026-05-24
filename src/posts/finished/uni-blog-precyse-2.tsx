import React from 'react'
import UniBlog from "../../components/getExternal/getUniBlog";

export const metauniBlogPrecyse2 = {
    title: "External Blog: Four gold medals for Bielefeld iGEM team",
    tags: ["igem", "precyse", "external", "igem-bielefeld"],
    spoiler: "An interdisciplinary team of students from Bielefeld University won four prizes at the" + " 2024 International Genetically Engineered Machine (iGEM) competition in Paris with their own project for treating the hereditary disease cystic fibrosis.",
    slug: "uni-blog-precyse-preise",
    date: new Date("2024-11-04"),
    image: "https://aktuell.uni-bielefeld.de/wp-content/uploads/2024/11/2024-11-05-iGEM_Team_mit_Preisen-1024x683.jpg",
    cc: "iGEM Foundation"
}

export default function uniBlogPrecyse2() {

    return (<div>
        <UniBlog
            url="https://aktuell.uni-bielefeld.de/2024/11/05/vierfach-gold-fuer-bielefelder-igem-team/"></UniBlog>
    </div>)
}
