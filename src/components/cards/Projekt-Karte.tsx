import "../../componentStyling/Karten.css"
import React, {ReactNode} from "react";
import {ImageExampleCarousel} from "../Carousels/ImageExampleCarousel";
import {part_table_examples} from "../../data/component_examples";

export interface component_example {
    image: string,
    example_text: string,
    example_link: string
}

export function ProjektKarte({url, title, zustand, marken, text, zielgruppen, disabled, component_examples}: {
    url: string,
    title: string,
    zustand: string,
    text: string | ReactNode,
    marken: string[],
    zielgruppen?: string[],
    disabled?: boolean,
    component_examples?: component_example[]
}) {
    let titl = <a data-zustand={zustand} href={url}>
        {title}
    </a>

    if (disabled) {
        titl = <span>{title}</span>
    }

    const innerei = <>
        <p className="karte-zustand">{zustand}</p>
        <h3 className="karte-titel">
            {titl}
        </h3>
        {component_examples &&
            <ImageExampleCarousel
                minHeight={"250px"}
                examples={component_examples}
            />
        }
        <p className="karte-text">
            {text}
        </p>
        <div className="karte-meta">
            {zielgruppen &&
                zielgruppen.map(gruppe => (
                    <span className="marke marke--zielgruppe">{gruppe}</span>
                ))

            }
            {marken.map(marke => (
                <span className={`marke ${marke}marke`}>{marke}</span>
            ))}
        </div>
    </>


    return <span className="karte" data-zustand={zustand}>
            {innerei}
        </span>

}