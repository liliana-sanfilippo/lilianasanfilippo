import Carousel from "react-bootstrap/Carousel";
import {part_table_examples} from "../../data/component_examples";
import React from "react";
import {component_example} from "../cards/Projekt-Karte";

export function ImageExampleCarousel({examples, minHeight}: { examples: component_example[], minHeight?: string }) {
    return (<Carousel data-bs-theme="dark" className={"mb-0"}>
        {examples.map((exa, i) => (
            <Carousel.Item style={{minHeight: minHeight ?? "20px"}} key={i}>
                        <div>
            <img className={"mt-1 mb-3 border-black border-1"} src={exa.image}/>
            <small> Example by <a href={exa.example_link}> {exa.example_text} </a> </small>
        </div>
        </Carousel.Item>
        ))}
    </Carousel>)
}