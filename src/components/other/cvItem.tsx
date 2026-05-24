import {Accordion, AccordionItem, Row} from "react-bootstrap";
import {iconMap} from "../media/Icons";

export interface CVItemProps {
    date: string,
    stelle: string,
    desc?: string,
    inst: string,
    eventkey: string,
    body: React.ReactNode,
    skills: string[],
    id?: string
}

export function CVItem({props}: { props: CVItemProps }) {
    const classname = "filterable all show " + props.skills.join(' ');
    return (
        <AccordionItem eventKey={props.eventkey} className={classname}>
            <Accordion.Header className={"cv-acc"}>
              <div className={"cv-it-wrapper"} >
                  <span className="cv-it cv-year">{props.date}</span>
                  <span className="cv-it cv-stelle">{props.stelle}</span>
                  <span className="cv-it cv-desc">{props.desc}</span>
                  <span className="cv-it cv-inst">{props.inst}</span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
                {props.body}
                <Row>
                    {props.skills.map(skill => (
                        iconMap[skill]
                    ))}
                </Row>
            </Accordion.Body>
        </AccordionItem>
    )
}


