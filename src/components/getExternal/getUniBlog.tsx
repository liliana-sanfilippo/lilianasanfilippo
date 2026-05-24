import {useEffect, useState} from "react"

export default function UniBlog({url}: { url: string }) {
    const [headerContent, setHeaderContent] = useState<string>("")
    const [entryContent, setEntryContent] = useState<string>("")

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(html, "text/html")
                const main = doc.querySelector("main")
                if (main) {
                    const header = main.querySelector("header")
                    if (header) {
                        setHeaderContent(header.innerHTML)
                    }
                    const entry = main.querySelector(".entry-content")
                    if (entry) {
                        setEntryContent(entry.innerHTML)
                    }
                }
            })
    }, [url])

    return (<div className="uni-embed">
            <div dangerouslySetInnerHTML={{__html: headerContent}}/>
            <div dangerouslySetInnerHTML={{__html: entryContent}}/>

        </div>)
}
