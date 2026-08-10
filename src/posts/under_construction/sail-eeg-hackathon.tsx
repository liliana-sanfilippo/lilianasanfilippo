import React from 'react'
import {ImageWrapper} from "../../components/media/ImageWrapper";

export const metaEegHackathon = {
    title: "Hackathon “AI in Health Sciences”",
    tags: ["hackathon", "ai", "sail"],
    spoiler: "Code, connect, and crack the brainwave code",
    slug: "eeg-hackathon",
    date: new Date("2025-11-11"),
    image: "https://www.krankenhaus-it.de/uploads/images/img692588c03c04f.jpg",
    cc: "© T. Doerk / HSBI"
}

export default function SailEegHackathon() {
    return (<div>

        <p>
            <div className="row align-items-center">
                <div className="md:col-6 mx-auto">
                    <p>
                        From November 7th to November 9th, the SAIL network hosted the Hackathon “AI in Health Sciences”
                        at the Bielefeld University of Applied
                        Sciences (HSBI). Over three days, students from HSBI, Bielefeld University, and beyond worked on
                        developing AI models that detect movements and movement intentions from EEG brain signals recorded on site.
                    </p>
                    <ImageWrapper
                        src={"https://live.staticflickr.com/65535/54974685624_f476e023e8_c.jpg"}
                    />
                    <p>
                        As an introduction, we received a keynote talk on current BCI research form Andrea Finke (Bielefeld University).
                    </p>
                </div>
                <div className="md:col-6 mx-auto">
                    <ImageWrapper
                        src={"https://live.staticflickr.com/65535/54974685714_3298c044b2_c.jpg"}
                    />

                    <ImageWrapper
                        src={"https://live.staticflickr.com/65535/55279049308_4d671fdf0f_b.jpg"}
                    />
                </div>
            </div>
        </p>

        <ImageWrapper
            src={"https://live.staticflickr.com/65535/55279137509_0478b99c1e_b.jpg"}
        />


    </div>)
}
// https://www.linkedin.com/posts/cluster-medizin-nrw_bielefeld-hackathon-ai-in-health-sciences-activity-7399103461671460864-1sT9
// https://www.sail.nrw/2025/11/sail-hackathon-ai-in-health-sciences/
// https://www.hsbi.de/presse/pressemitteilungen/hackathon-ai-in-health-sciences-kann-ein-ki-algorithmus-bewegungen-auf-basis-von-gehirnstroemen-erkennen
// https://www.hsbi.de/media/hochschulverwaltung/hsk/bilder-berichterstattung/fachbereiche/fb-3/forschung/2025-11-09-sail-hackathon/20251109_hackathon-sail_doerk_slider-pano.jpg?height=278&width=840
// https://www.krankenhaus-it.de/item.4686/hackathon-an-der-hsbi-ki-modelle-erkennen-bewegungen-aus-eeg-daten.html
// https://nachrichten.idw-online.de/2025/11/24/hackathon-kann-ein-ki-algorithmus-bewegungen-auf-basis-von-gehirnstroemen-erkennen