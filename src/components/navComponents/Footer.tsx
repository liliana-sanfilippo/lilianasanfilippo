import React from "react";
import Container from "react-bootstrap/Container";
import TagIndexPageWrapper from "../pageRelated/TagIndexWrapper";

export function Footer() {


    return (<footer className="px-3 mt-5 print:hidden">
        <Container className="">
            <div className="row align-items-center" style={{}}>
                <div className="col grid">
          <span className="text-start no-pad no-marg">

          </span>
                </div>
                <div className="col ">

                </div>

            </div>
            <hr/>


            <br/>
            <div className="d-flex align-items-baseline">

                <div className="col-sm-6">
                    <h1>Contact</h1>
                    <p> liliana.sanfilippo[at]bfh-euromeet.de</p>
                    <br/>

                </div>

                <div className="col-sm-6" style={{paddingLeft: "20px"}}>
                    <h1 className="sticky-top">Blog Tags</h1>
                    <TagIndexPageWrapper></TagIndexPageWrapper>
                </div>

            </div>
        </Container>
    </footer>);
}
