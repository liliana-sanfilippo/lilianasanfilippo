import {Accordion} from "react-bootstrap";
import { H2 } from "../components/other/H2";
import {CVItem} from "../components/other/cvItem";
import {awards, edu, software, workEx} from "../data/cvData";
export function Cv() {
    return (<section>
        <Accordion>
            <H2>Work Experience</H2>
            {workEx.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Academic Education</H2>
            {edu.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Awards</H2>
            {awards.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Software</H2>
            {software.map(item => (
                <CVItem props={item}/>
            ))}
        </Accordion>
    </section>)
}