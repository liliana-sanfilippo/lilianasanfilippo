import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {Image, Modal} from "react-bootstrap";
import {Poster} from "../../components/Carousels/PosterCarousel";

export const metaBiteach2024 = {
    title: "The counselling chatbot presented at BI.teach",
    tags: ["counselling-bot", "ai"],
    spoiler: "Our faculty-specific  counselling chatbot project was presented at the BI.teach days under the title 'AI – Risky development or new opportunities for teaching, learning, and examining? Generative AI and the teaching and learning culture at Bielefeld University'.",
    slug: "biteach-2024",
    date: new Date("2024-11-20"),
    image: "https://www.uni-bielefeld.de/_internal/cimg!0/fp6dwzg3oq8x5jgf4tg45hhmwpzc6q1.jpeg",
    cc: "Liliana Sanfilippo"
}

const poster = {
    id: 1,
    title: "BI.teach poster",
    thumbnail: "https://www.uni-bielefeld.de/_internal/cimg!0/fp6dwzg3oq8x5jgf4tg45hhmwpzc6q1.jpeg",
    pdf: "https://www.uni-bielefeld.de/lehre/biteach/bi.teach-2024/postergalerie/Poster-BI.Teach_Paassen_Sanfilippo.pdf"
}
export default function Biteach2024() {
    const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
    const handlePosterClick = (poster: Poster) => setSelectedPoster(poster);

    const handleClose = () => setSelectedPoster(null);

    return (<div>
        <p>We had the opportunity to present the current status of our <Link
            to={"/current-projects/intelligent-counselling-system"}>Student Counselling ChatBot project</Link> under the
            topic "AI –
            Risky development or new opportunities for teaching, learning and testing? Generative AI and the teaching
            and learning culture at Bielefeld University" at this year's <a
                href={"https://www.uni-bielefeld.de/lehre/biteach/"}>BI.teach day</a>.</p>
        <section className={"flex flex-col gap-8 lg:gap-16"}>
            <div
                className={`center mx-auto`}
                style={{
                    zIndex: 5, flexDirection: "column", alignItems: "center",
                }}
            >
                <Image
                    src={poster.thumbnail}
                    alt={poster.title}
                    fluid
                    onClick={() => handlePosterClick(poster)}
                    style={{cursor: "pointer"}}
                />
            </div>
            <Modal show={!!selectedPoster} onHide={handleClose} centered size="xl">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body style={{padding: 0}}>
                    {selectedPoster && (<iframe
                        src={selectedPoster.pdf}
                        title={selectedPoster.title}
                        style={{width: "100%", height: "80vh", border: "none"}}
                    />)}
                </Modal.Body>
            </Modal>
        </section>
        <p>
            We use a classification model trained with data we have collected and curated ourselves to provide students
            with a service that is as low-threshold as possible, yet still reliable. The chatbot can be accessed via a
            web-based contact form, which also allows questions to be sent directly to us. One of our goals is to
            further lower the inhibition to ask for help.
        </p>
    </div>);
}
