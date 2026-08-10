import React from 'react'
import {Row, Col} from 'react-bootstrap'

export const metaAidareWebsiteLaunch = {
    title: "AIDARE website goes live",
    tags: ["aidare", "ai"],
    spoiler: "The first part of the proceedings from the workshop 'Rearticulating Autonomy in Higher Education' is" +
        " now published on the AIDARE website.",
    slug: "aidare-website-launch",
    date: new Date("2025-09-22"),
    image: "https://live.staticflickr.com/65535/54974360240_1d7ec6057b_c.jpg",
    cc: "AIDARE"
}

export default function AidareWebsiteLaunch() {
    return (<div>
        <Row>
            <Col>

            </Col>
            <Col>

            </Col>
        </Row>
    <Row>
        <Col>
        The results are also presented in an article on the Blog of Jan-Martin Wiarda for which Benjamin Paaßen gave an interview.
        </Col>
        <Col>
            <div className="row align-items-center">
                <iframe className="m-auto"
                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7376158271956750336" height="1253"
                        width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>

            </div>
        </Col>
    </Row>

    </div>)
}

// https://www.linkedin.com/feed/update/urn:li:activity:7376290242271797248