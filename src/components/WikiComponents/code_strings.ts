
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