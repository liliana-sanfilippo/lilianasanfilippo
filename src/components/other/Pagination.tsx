import React from 'react'

import {Link} from 'react-router-dom'

interface PaginationProps {
    blogRoot: string
    pageCount: number
    pageNumber: number
}

function Pagination({blogRoot, pageCount, pageNumber}: PaginationProps) {

    const joinUrl = (...parts: (string | number)[]) => {
        return parts
            .map(part => String(part).replace(/^\/|\/$/g, '')) // führende/abschließende / entfernen
            .filter(Boolean)
            .join('/')
            .replace(/\/\/+/g, '/') // doppelte / vermeiden
            .replace(/^$/, '/');
    }
    return (<small className={"Pagination"}>
        {pageNumber !== 1 && (<Link
            className={"previous"}
            to={`/${joinUrl(blogRoot, 'page', pageNumber - 1)}`}>
            ← Previous
        </Link>)}
        <span>
        {' '}
            Page <span>{pageNumber}</span>/
        <span>{pageCount}</span>{' '}
      </span>
        {pageNumber < pageCount && (<Link
            className={"next"}
            to={`/${joinUrl(blogRoot, 'page', pageNumber + 1)}`}>
            Next →
        </Link>)}
    </small>)
}

export default Pagination
