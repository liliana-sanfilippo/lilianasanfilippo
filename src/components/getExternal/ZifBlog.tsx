import {useState} from "react";

export default function ZifBlog() {
    const [mainContent, setMainContent] = useState<string>("");

// Todo was los mit main content?

    return (<div className="zif-embed">
        <div dangerouslySetInnerHTML={{__html: mainContent}}/>
    </div>);
}
