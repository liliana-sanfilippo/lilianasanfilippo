import {Button, Card} from "react-bootstrap";
import TagCarousel from "../../components/Carousels/TagCarousel";
import {IssuesList} from "../../components/github/IssuesList";
import {TabData} from "../../components/boxes/TabbedBox";
import {WikiPage} from "../../components/wiki/WikiPage";

export function BibtexParser() {

    return (<div className={"flex flex-col gap-8 lg:gap-16"}>
        <h1>The Typescript BibteX Parser</h1>
        <div className={"row gap-8 lg:gap-16 m-auto"}>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Documentation</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Manuals, feature lists and troubleshooting help
                    </Card.Text>
                    <Button href={`${process.env.REACT_APP_REACT_BIBTEX_PARSER_PATH}/Home`}
                            variant="outline-primary">Bibtex
                        parser wiki</Button>
                </Card.Body>
                <Card.Footer className="text-muted">automatically updates weekly</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Collaborate!</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Browse or create issues and request features
                    </Card.Text>
                    <Button href="#issues"
                            variant="outline-primary">Issues</Button>
                </Card.Body>
                <Card.Footer className="text-muted">live</Card.Footer>
            </Card>
            <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>Browse features</Card.Header>
                <Card.Body>
                    <Card.Text>
                        See what bibtex types are supported and more
                    </Card.Text>
                    <Button href={`${process.env.REACT_APP_REACT_BIBTEX_PARSER_PATH}/Features`}
                            variant="outline-primary">Feature Docu</Button>
                </Card.Body>
                <Card.Footer className="text-muted">automatically updates weekly</Card.Footer>
            </Card>
        </div>
        <h2>News</h2>
        <TagCarousel tag={"citation-manager"}/>
        <IssuesList repo={"bibtex-ts-parser"}/>
        {/*
         <Card className="text-center linkcard" style={{width: '20rem'}}>
                <Card.Header>README</Card.Header>
                <Card.Body>
                    <Card.Text>
                        See above for the repository README
                    </Card.Text>
                    <Button href="/bibtex-ts-parser/#readme" variant="outline-primary">GitHub
                        README</Button>
                </Card.Body>
                <Card.Footer className="text-muted">automatically updates weekly</Card.Footer>
            </Card>
         <TabbedBox
            className={"!max-h-[80vh] overflow-y-auto overflow-x-hidden"}
            tabs={tabs2}
            defaultActiveKey={"design"}
        />
        <TabbedBox
            className={"!max-h-[80vh] overflow-y-auto overflow-x-hidden"}
            tabs={boxName}
            defaultActiveKey={"design"}
        />
        */}
    </div>)
}


const boxName: TabData[] = [
    {
        eventKey: "design",
        title: "README",
        content: <WikiPage page={"README"}/>,
    },
    {
        eventKey: "test",
        title: "Collaborate!",
        content: <>
            <p>Feel free to browse the issues and open new ones or request features.</p>
            <IssuesList repo={"bibtex-ts-parser"}/>
        </>,
    }
]

const tabs2: TabData[] = [
    {
        eventKey: "design",
        title: "Manual for iGEM wikis",
        content: <WikiPage page={"Manual-for-iGEM-Wikis"}/>,
    },
    {
        eventKey: "build",
        title: "Build",
        content: <p>Content for pH Sensor - Build</p>,
    },
    {
        eventKey: "test",
        title: "Test",
        content: <p>Content for pH Sensor - Test</p>,
    },
    {
        eventKey: "learn",
        title: "Learn",
        content: <p>Content for pH Sensor - Learn</p>,
    },
];


