import React from "react";

export function GBox({background, children}: { background: string, children: React.ReactNode }) {

    return (<div
            className="active:outline-solid relative overflow-clip p-6 lg:py-8 w-full transition-grow">
            <div className="*:z-20 flex flex-col gap-4 lg:gap-8 items-start text-text-primary">
                <div className="flex flex-col gap-0.5 ">
                    {children}
                </div>
            </div>
            <div
                className="z-10 absolute inset-0 w-full h-full bg-gradient-to-r from-gray-50 via-25% via-gray-50"></div>
            <div className="z-5 absolute right-0 top-0 bottom-0 h-full w-3/4 opacity-45"><img
                className="absolute h-full w-full object-cover select-none"
                draggable="false"
                src={background}/></div>
        </div>)
}

export function LargeGBox({background, children}: { background: string, children: React.ReactNode }) {

    return (<div
            className="h-100 relative overflow-clip p-6 lg:py-8 w-full transition-grow">
            <div className="*:z-20 flex flex-col gap-4 lg:gap-8 items-start text-text-primary">
                <div className="flex flex-col gap-0.5">
                    {children}
                </div>
            </div>
            <div
                className="z-10 absolute inset-0 w-full h-full bg-gradient-to-r from-gray-50 via-25% via-gray-50"></div>
            <div className="z-5 absolute right-0 top-0 bottom-0 h-full w-3/4 opacity-45"><img
                className="absolute h-full w-full object-cover select-none"
                draggable="false"
                src={background}/></div>
        </div>)
}

export function VideoBox({children}: { children: React.ReactNode }) {
    return (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col gap-8 xl:gap-12 md:auto-rows-fr">
            {children}
        </div>)
}