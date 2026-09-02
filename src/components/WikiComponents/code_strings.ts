export const protocol_string: string = `
export default function ProtocolList(
    {
        protocols,
        show,
        do_not_move,
        max_width,
        box_shadow
    }: {
        protocols: Protocol[],
        show?: "pdf" | "thumbnail",
        do_not_move?: boolean,
        max_width?: string,
        box_shadow?: string
    }) {

    const groupedProtocols = protocols.reduce((acc, protocol) => {
        if (!acc[protocol.category]) {
            acc[protocol.category] = [];
        }
        acc[protocol.category].push(protocol);
        return acc;
    }, {} as Record<string, Protocol[]>);

    const handleProtocolClick = (pdfUrl: string) => {
        window.open(pdfUrl, '_blank');
    };

    const {hash} = useLocation();
    useEffect(() => {
        if (hash) {
            const id = decodeURIComponent(hash.replace('#', ''));
            const el = document.getElementById(id);
            if (el) {
                // small timeout to ensure layout is ready
                setTimeout(() => el.scrollIntoView({behavior: 'smooth', block: 'start'}), 50);
            }
        }
    }, [hash]);

    return (
        <div className="proof-container">
            {Object.entries(groupedProtocols).map(([category, categoryProtocols]) => {
                const slug = category
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');

                return (
                    <section key={category} id={slug} className={"mb-3"}>
                        <div
                            className={"d-flex align-items-center pb-1 mt-5"}
                        >
                            <h4 className={"me-3"}>{category}</h4>
                            <div
                                className={"my-1 p-2 text-primary tag"}>{categoryProtocols.length} protocol{categoryProtocols.length > 1 ? 's' : ''}</div>
                        </div>
                        <hr/>
                        <div className={"gap-2 d-grid mt-5"} style={{
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
                        }}>
                            {categoryProtocols.map((protocol) => (
                                <article
                                    key={protocol.id}
                                    style={{maxWidth: max_width ?? "25vw", boxShadow: box_shadow ?? "0 2px 8px" +
                                                " rgba(217, 9, 9, 0.08)"}}
                                    className={"card p-4 gap-3"}
                                    onMouseEnter={!do_not_move ? ((e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                        (e.currentTarget as HTMLElement).style.boxShadow =  '0 12px 24px rgba(255, 255, 255, 0.12)';
                                    }) : (() => null)}
                                    onMouseLeave={!do_not_move ? ((e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                        (e.currentTarget as HTMLElement).style.boxShadow = box_shadow ?? '0 2px 8px' +
                                        ' rgba(217, 9, 9, 0.08)';
                                    }) : (() => null)}
                                >

                                    <div style={{paddingRight: '2rem'}}>
                                        <h5>{protocol.title}</h5>
                                        <p>{protocol.description}</p>
                                    </div>

                                    {
                                        show == "thumbnail" &&
                                        <div>
                                            <img
                                                src={protocol.thumbnail_url}
                                                alt={protocol.title}
                                                loading="lazy"
                                            />
                                        </div>
                                    }

                                    {
                                        show == "pdf" &&
                                        <div style={{width: "100%", display: "flex", justifyContent: "center", overflow: "hidden"}}>
                                            <iframe
                                                src={protocol.pdfUrl}
                                                title="PDF"
                                                style={{maxWidth: "fit-content", height: "auto", aspectRatio: "210 / 297", display: "block", border: "none", overflow: "hidden"}}
                                            />
                                        </div>
                                    }

                                    <div>
                                        <button
                                            className={"btn btn-primary"}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProtocolClick(protocol.pdfUrl);
                                            }}
                                            aria-label={"View protocol PDF"}

                                        >
                                            <span>View PDF</span>

                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                );
            })}

            <p style={{fontSize: '0.9rem', color: '#86868b', margin: 0}}>
                Click the "View PDF" button on each card to open the detailed PDF documentation.
            </p>
        </div>
    );
}`


export const part_table_string: string = `
export function PartTable({part_data, displayimage}: { part_data: SimplePart[], displayimage?: boolean }) {
    const rows = part_data.map((point: SimplePart) => {

        let columns = [
            <b>{point.part_name}</b>,
            <a href={point.registry_url}>{point.registry_code}</a>,
            <span className={\`\${stringToSlug(point.category)}-tag tag\`}>{point.category}</span>,
            point.description,
            point.length,
            point.type,
            <a href={point.source_url}>{point.source_name}</a>
        ];

        if (displayimage) {
            columns.push(
                <img alt={point.image_alt ?? ""} src={point.image}/>
            );
        }

        return columns;
    });

    let headers = [
        {header: "Part Name"},
        {header: "Registry Code"},
        {header: "Category"},
        {header: "Part Description"},
        {header: "length [bp]"},
        {header: "type"},
        {header: "Source"}
    ];

    if (displayimage) {
        headers.push({header: "Image"});
    }

    return (
        <TableChart
            headers={headers}
            rows={rows}
            headerPosition={"top"}
            bordered={true}
            striped={false}
            hover={true}
            sortable={true}
            responsive={true}
        />
    );
}
`;