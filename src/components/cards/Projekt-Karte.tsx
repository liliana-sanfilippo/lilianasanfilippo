import "../../componentStyling/Karten.css"
import {ReactNode} from "react";

export function ProjektKarte({url, title, zustand, marken, text, zielgruppen, disabled}: {
    url: string,
    title: string,
    zustand: string,
    text: string | ReactNode,
    marken: string[],
    zielgruppen?: string[],
    disabled?: boolean
}) {

    const innerei = <><p className="karte-zustand">{zustand}</p>
        <h3 className="karte-titel">{title}</h3>
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


    if (disabled) {
        return <span className="karte" data-zustand={zustand}>
            {innerei}
        </span>
    } else {
        return <a className="karte" data-zustand={zustand} href={url}>
            {innerei}
        </a>
    }

}