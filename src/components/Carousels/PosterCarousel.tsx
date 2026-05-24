import "../../componentStyling/Carousel.css";
import {useState} from "react";
import {Image, Modal} from "react-bootstrap";

export interface Poster {
    id: number;
    title: string;
    thumbnail?: string;
    pdf: string;
}

interface CarouselProps {
    posters: Poster[];
}

export default function PosterCarousel({posters}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

    const visibleSlots = [-3, -2, -1, 0, 1, 2, 3];
    const horizontalSpacing = 250;

    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);
    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % posters.length);
    const handlePosterClick = (poster: Poster) => setSelectedPoster(poster);
    const handleClose = () => setSelectedPoster(null);

    return (<div className="wheel-wrapper">
        <div className="carousel-wheel">
            {visibleSlots.map((slot) => {
                const index = (currentIndex + slot + posters.length) % posters.length;
                const poster = posters[index];

                const isCenter = slot === 0;
                const xOffset = slot * horizontalSpacing;
                const scale = isCenter ? 1 : 1;
                const opacity = isCenter ? 1 : 0.5;
                const yOffset = isCenter ? 0 : 10; // ⬅ slight downward offset for non-center items

                return (<div
                    key={poster.id}
                    className={`wheel-item ${isCenter ? "center" : ""}`}
                    style={{
                        transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale}) translate(-50%, -50%)`,
                        opacity,
                        transition: "transform 0.5s ease, opacity 0.5s ease",
                        zIndex: isCenter ? 5 : 1,
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isCenter && <div className="poster-title">{poster.title}</div>}
                    <Image
                        src={poster.thumbnail || "https://via.placeholder.com/200x280.png?text=Poster"}
                        alt={poster.title}
                        fluid
                        onClick={() => isCenter && handlePosterClick(poster)}
                        style={{cursor: isCenter ? "pointer" : "default", transform: "none"}}
                    />
                </div>);
            })}
        </div>

        <div className="wheel-buttons">
            <button onClick={handlePrev}>◀︎</button>
            <button onClick={handleNext}>▶︎</button>
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
    </div>);
}
