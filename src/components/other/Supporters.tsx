import React from "react";

export function Supporters({supporters}: { supporters: string[] }) {
    return (<div
            className={"mx-auto supporter max-md:max-w-md max-w-6xl flex flex-wrap gap-8 md:gap-x-16 justify-center" + " items-center"}>
            {supporters.map((supporter, i) => (
                <img src={supporter} className={"!max-w-1/5 select-none h-16.5 object-contain m-4"}/>))}
        </div>)
}