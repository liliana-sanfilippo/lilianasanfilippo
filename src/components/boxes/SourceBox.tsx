import {Card} from "react-bootstrap";

export interface SourceProps {
    title?: string,
    url: string,
    author: string
}

export function SourceBox({author, url, title}: SourceProps) {
    return (<Card className="mb-4" style={{width: '100%', backgroundColor: "var(--lightblue-drei)"}}>
            <Card.Body>
                <Card.Title>{title ? title : "Source"}</Card.Title>
                <Card.Text>
                    <p>By: <b>{author}</b> at <a href={url}> {url}</a></p>
                </Card.Text>
            </Card.Body>
        </Card>);
}
