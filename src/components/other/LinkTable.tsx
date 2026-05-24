import TableChart from "./TableChart";
import {Link} from "react-router-dom";
import React from "react";
import "../../componentStyling/LinkTable.css"
import { Linktype } from "../../types/linktype";

export function LinkTable({data}: {data: Array<Linktype>}){
    var author = false;
    const rows = data.map(point => {
        var link;
        if (point.link.includes("https")) {
            link =  point.link
        } else {
            link =  `${process.env.REACT_APP_IGEM_BIELEFELD_PATH}/${point.link}`
        }
        if (point.author != null) {
            author = true
        }
        return ([
            point.title,
            <Link to={link}>Click here</Link>,
            <span className={`${point.tag}-tag tag`}>{point.tag}</span>,
            (point.author && point.author)
        ])
    })
    var headers;

    if (author) {
        headers = [{header: "Title", }, {header: "Link"}, {header: "Category"}, {header: "Author"}]
    } else {
        headers =  [{header: "Title", }, {header: "Link"}, {header: "Category"}]
    }
    return(
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

    )
}
