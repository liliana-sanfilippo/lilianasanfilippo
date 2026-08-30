import "../../componentStyling/Karten.css"

export function ProjektKarte({url, title, zustand, marken, text, zielgruppen}: { url: string, title: string, zustand: string, text: string, marken: string[], zielgruppen?: string[] }) {
    return (
        <a className="karte" data-zustand={zustand} href={url}>
            <p className="karte-zustand">{zustand}</p>
            <h3 className="karte-titel">{title}</h3>
            <p className="karte-text">
                {text}
            </p>
            <div className="karte-meta">
                {zielgruppen &&
                    zielgruppen.map(gruppe =>(
                        <span className="marke marke--zielgruppe">{gruppe}</span>
                    ))

                }
                {marken.map(marke => (
                    <span className={`marke ${marke}marke`}>{marke}</span>
                ))}
            </div>
        </a>
    )
}