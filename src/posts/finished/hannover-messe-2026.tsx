import React from 'react'

export const metaHannoverMesse2026 = {
    title: "FEMWORX and Hannovermesse 2026",
    tags: ["trade-fair"],
    spoiler: " Last week I was at the Hannovermesse and Femworx career fair - both were very interesting!",
    slug: "hannover-messe-2026",
    date: new Date("2026-04-30"),
    image: "https://github.com/user-attachments/assets/0f3614d5-d15f-4b17-ab43-6ade4d9b4678"
}
export default function HannoverMesse2026() {
    return (<div>
        <p>
            Last week I was at the Hannovermesse and Femworx career fair - both were very interesting!
        </p>
        <p>
            <div className="row align-items-center">
                <div className="md:col-6 mx-auto">
                    As a bioinformatics student, I don’t often get the chance to gain an insight into the industry. So
                    it was
                    all the more wonderful to see how friendly and approachable everyone there was. They gave
                    demonstrations,
                    explained their projects and concepts, and gave me a real sense of what their work involves. I found
                    the
                    masterclass by Markus Gelfgren (Merantix Momentum) on insights and best practices from over 120 AI
                    projects
                    particularly interesting.
                </div>
                <div className="md:col-6 mx-auto">
                    <img
                        src="https://live.staticflickr.com/65535/55279042509_f4e9d8b566_b.jpg"/>
                </div>
            </div>
        </p>
        <p>
            <div className="row align-items-center">
                <div className="md:col-6 mx-auto">
                    <img
                        src="https://live.staticflickr.com/65535/55278860506_814a1d5918_b.jpg"/>
                </div>
                <div className="md:col-6 mx-auto">
                    <p>
                        At Femworx, I was able to exchange ideas with other women and learn about the current status of
                        companies in
                        the region.
                    </p>
                    <p>
                        The talk “Soft is not the opposite of strong” by Shena Britzen and Janina Lemme made a
                        particular
                        impression. They illustrated very clearly how promoting soft skills and soft strategies not only
                        benefits
                        companies but can also help shape social processes for the better.
                    </p>
                </div>
            </div>
        </p>

        <p>
            <div className="row align-items-center">
                <div className="md:col-6 mx-auto">

                    It was also great to see that the Niedersachsen-Technikum was represented at Femworx. It’s an
                    important
                    programme that allows school leavers to learn about STEM careers and degree courses.
                </div>
                <div className="md:col-6 mx-auto">
                    <img
                        src="https://live.staticflickr.com/65535/55277941262_41c5e0e343_b.jpg"/>
                </div>
            </div>
        </p>

    </div>)
}

