export function LinkLine({url, text, href}: { url: string, text: string, href: string }) {
    return (<a href={href} className={"my-2"}>
            <div
                className={"linkding flex gap-4 h-full w-full items-center justify-start text-white" + " rounded-full p-3" + " transition-grow cursor-pointer"}>
                <div className="flex items-center w-fit gap-2">
                    <img className={"linkimg"} src={url} style={{objectFit: "contain"}}/>
                </div>
                <div className="font-bold">{text}</div>
            </div>
        </a>)
}