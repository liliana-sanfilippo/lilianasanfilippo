import {Citations} from "@liliana-sanfilippo/react-bibtex-reference-generator";


export function PublicationInfo({bibtex, abstract, link}: { bibtex: string, abstract: string, link?: string }) {
    return (<>
        <p>{abstract}</p>
        <p><b>Citation:</b></p>
        <Citations bibtexSources={[bibtex]} style={"acs"}/>
        {link && <>
            <p><b>Link:</b></p>
            <ul>
                <li><a href={link}>{link}</a></li>
            </ul>
        </>

        }
    </>)
}

