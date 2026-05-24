import "../../componentStyling/Carousel.css";
import {useState} from "react";
import {WinnerCard} from "../cards/WinnerCard";

export interface Winner {
    id: number;
    team: string;
    thumbnail: string;
    prize: string;
    placement: string;
}

interface CarouselProps {
    winners: Winner[];
}


export default function WinnerCarousel({winners}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleSlots = [-1, 0, 1,];
    const horizontalSpacing = 350;

    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + winners.length) % winners.length);
    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % winners.length);


    return (<div className="wheel-wrapper">
        <div className="carousel-wheel">
            {visibleSlots.map((slot) => {
                const index = (currentIndex + slot + winners.length) % winners.length;
                const team = winners[index];

                const isCenter: boolean = slot === 0;
                const xOffset: number = slot * horizontalSpacing;
                const scale: 1 | 0.85 = isCenter ? 1 : 0.85;
                const opacity: 1 | 0.6 = isCenter ? 1 : 0.6;
                const yOffset: 0 | 20 = isCenter ? 0 : 20; // ⬅ slight downward offset for non-center items

                return (<div
                    key={team.id}
                    className={`wheel-item-alternative ${isCenter ? "center" : ""}`}
                    style={{
                        transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale}) translate(-50%, -50%)`,
                        opacity,
                        transition: "transform 0.5s ease, opacity 0.5s ease",
                        zIndex: isCenter ? 5 : 1,
                        display: "inline-flex",
                        alignItems: "center",
                    }}
                >
                    <WinnerCard url={team.thumbnail} prize={[team.prize, team.placement]} title={team.team}/>
                </div>);
            })}
        </div>

        <div className="wheel-buttons">
            <button onClick={handlePrev}>◀︎</button>
            <button onClick={handleNext}>▶︎</button>
        </div>


    </div>);
}
