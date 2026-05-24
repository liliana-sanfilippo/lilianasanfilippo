export function H2({children, id}: { children: React.ReactNode, id?: string }) {
    return (<div className={"fake-h2 flex w-full items-center my-5"}>
            <div className="grow border-b-2 border-black opacity-50"></div>
            <div id={id} className="md:text-3xl text-2xl w-fit px-4">{children}</div>
            <div className="grow border-b-2 border-black opacity-50"></div>
        </div>)
}

export function H3({children, id}: { children: React.ReactNode, id?: string}) {
    return (<div className={"fake-h3 flex w-full items-center my-3"}>
            <div className="grow border-b-2 border-black opacity-7"></div>
            <div id={id} className="md:text-2xl text-1xl w-fit px-4">{children}</div>
            <div className="grow border-b-2 border-black opacity-7"></div>
        </div>)
}

