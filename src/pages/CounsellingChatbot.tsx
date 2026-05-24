import {Row} from "react-bootstrap";
import {useState} from "react";
import {Poster} from "../components/Carousels/PosterCarousel";
import TagCarousel from "../components/Carousels/TagCarousel";
const poster = {
    id: 1,
    title: "BI.teach poster",
    thumbnail: "https://www.uni-bielefeld.de/_internal/cimg!0/fp6dwzg3oq8x5jgf4tg45hhmwpzc6q1.jpeg",
    pdf: "https://www.uni-bielefeld.de/lehre/biteach/bi.teach-2024/postergalerie/Poster-BI.Teach_Paassen_Sanfilippo.pdf"
}

export function CounsellingChatbot() {
    const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
    const handlePosterClick = (poster: Poster) => setSelectedPoster(poster);
    const handleClose = () => setSelectedPoster(null);
    return (<div className={"flex flex-col gap-8 lg:gap-16"}>
        <h1>An Intelligent Counselling System for Student Counselling</h1>
        <p>
            <b>What is student counselling?</b> Student counselling (also called peer-counselling) involves students
            advising other students, rather than
            professors or external staff.
        </p>
        {/* <div className={"row gap-8 lg:gap-16 m-auto"}>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Data collection</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Go directly to the manual for iGEM wikis
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/current-projects/intelligent-counselling-system#data" variant="outline-primary">iGEM Manual</Button>
                </Card.Body>
                <Card.Footer className="text-muted">updated infrequently</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Development</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Go directly to the manual for iGEM wikis
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/current-projects/intelligent-counselling-system#data" variant="outline-primary">iGEM Manual</Button>
                </Card.Body>
                <Card.Footer className="text-muted">static content</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Visit the web page</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Go directly to the manual for iGEM wikis
                    </Card.Text>
                    <Button href="/liliana-sanfilippo/current-projects/intelligent-counselling-system#data" variant="outline-primary">iGEM Manual</Button>
                </Card.Body>
                <Card.Footer className="text-muted">external</Card.Footer>
            </Card>
        </div>
        */}
        <h2>News</h2>
        <TagCarousel tag={"counselling-bot"}/>
        <section id={"data"}>
            <h2>Data collection</h2>
            <Row>
                <iframe title="" aria-label="Line chart" id="datawrapper-chart-w365o"
                        src="https://datawrapper.dwcdn.net/w365o/1/" scrolling="no" frameBorder="0"
                        style={{border: "none"}} width="1200" height="362" data-external="1"></iframe>
            </Row>
        </section>

        {/*
        <section className={"flex flex-col gap-8 lg:gap-16"}>
            <div
                className={`center w-min mx-auto`}
                style={{
                    zIndex: 5, flexDirection: "column", alignItems: "center",
                }}
            >
                <div className="poster-title">{poster.title}</div>
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
        */}

    </div>)
}

//
//