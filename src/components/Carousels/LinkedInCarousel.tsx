import Carousel from "react-bootstrap/Carousel";
import {InstagramEmbed} from "react-social-media-embed";

export function LinkedInCarousel({urls}: { urls: string[] }) {
    return (<Carousel data-bs-theme="dark">
        {urls.map((url, i) => (<Carousel.Item key={i}>
            <div className="row align-items-center">
                <iframe
                    className="col sm-post-carousel-item m-auto"
                    src={url}
                    height="600"
                    width="50%"
                    title={`Embedded post ${i}`}
                />
            </div>
        </Carousel.Item>))}
    </Carousel>)
}


export function InstagramCarousel({urls}: { urls: string[] }) {
    return (<Carousel data-bs-theme="dark">
        {urls.map((url, i) => (<Carousel.Item key={i}>
            <div className="row align-items-center">
                <InstagramEmbed height="670"
                                style={{height: "670px"}}
                                className="col sm-post-carousel-item m-auto"
                                width="50%" url={url}/>
            </div>
        </Carousel.Item>))}
    </Carousel>)
}
