import React from "react";

export function ImageWrapper({src, cc, desc, link, classes}: {
    src: string, cc?: string, desc?: string | React.ReactNode, link?: string, classes?: string
}) {

    return (<figure className={"mx-auto w-fit max-h-[50vh] "}>
        <img className={`!max-w-[50rem] min-w-[30em] max-h-[45vh] object-cover ${classes}`} src={src}/>
        <figcaption className={"my-3"}>
            {desc && <>: {desc} <br/></>}{cc &&
            <small className={"font-thin !text-xs"}>Image: {link ? <a href={link}>{cc}</a> : cc}</small>}
        </figcaption>
    </figure>)
}