import React from 'react'
import {Link} from 'react-router-dom'
import {formatDate} from "../../utils/formats";

interface ArticleMetaProps {
    blogRoot: string
    data: any
    readingTime?: any
}

function ArticleMeta({blogRoot, data, readingTime}: ArticleMetaProps) {
    let readingTimeElement
    if (readingTime) {
        readingTimeElement = (<React.Fragment>
                {' '}
                &bull;{' '}
            </React.Fragment>)
    }

    return (<small>
            <time dateTime={data.date.toUTCString()}>{formatDate(data.date)}</time>
            {data.tags && data.tags.length && (<>
                    {' '}
                    &bull;{' '}
                    <ul className={"tags"}>
                        {data.tags.map((tag: string) => (<li key={tag}>
                                <Link to={`${blogRoot.replace(/\/$/, '')}/tags/${tag}`}>{tag}</Link>
                            </li>))}
                    </ul>
                </>)}
            {readingTimeElement || null}
        </small>)
}

export default ArticleMeta
