import React from "react";
import TagCarousel from "../components/Carousels/TagCarousel";

export function StudentCounselling() {


    return (
        <div>
            <p>
                <b>What is student counselling?</b> Student counselling (also called peer-counselling) involves students
                advising other students, rather than
                professors or external staff.
            </p>
            <h2>News</h2>
            <TagCarousel tag={"student-counselling"}/>

        </div>
    )
}