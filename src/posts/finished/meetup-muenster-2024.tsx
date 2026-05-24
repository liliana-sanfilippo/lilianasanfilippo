import React from 'react'

export const metamuensterMeetup2024 = {
    title: "MeetUp: Münster 2024",
    tags: ["igem", "meetup"],
    spoiler: "Team Münster invited to an exciting weekend full of scientific lectures on synthetic biology and" + " entrepreneurship, project presentations, and plenty of networking opportunities.",
    slug: "muenster-2024",
    date: new Date("2024-09"),
    cc: "Sinan Zimmermann   ",
    image: "https://github.com/user-attachments/assets/58e9676d-9000-4174-b14d-b356618d2bf9"
    // image: "https://www.uni-muenster.de/imperia/md/images/biologie_immb_igem/iGEM24/meet-up_announcement_hochkant.png"
}

export default function meetupMuenster2024() {
    return (<div>
        <p>We were able to present our project PreCyse at the Münster JuniorJam and met a lot of people from BFH
            again!</p>
        <h5>Friday: Arrival and First Impressions </h5>
        <p>We travelled together by train and headed straight to the castle, where the event was taking place, and were
            warmly welcomed. The event kicked off in a grand halland after a quick
            snack with coffee, the scientific talks began. </p>
        <p> My favourite talk was
            the ony by David Baker, he presented about his research in the field of protein structure prediction and
            de novo protein design in RoseTTAFold All-Atom. Additionally to his expertise, he thoroughly impressed all
            attendees with his UV blue light glasses.</p>
        <p>Later in the day, the teams were introduced through creative team videos. Our own video (of course created by
            our team member Michael) was a hit and drew many compliments.
        </p>
        <div className={"row align-items-center mb-3"}>
            <div className={"md:col-6 m-auto w-full"}>
                <iframe className={"w-full"} title="Bielefeld-CeBiTec: Sitcom Team Presentation (2024) [English]"  height="315"
                        src="https://video.igem.org/videos/embed/uakpHGXyCvvQFKhGKbKVjY" allow="fullscreen"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </div>
        </div>
        <p>To finish the day off, we were treated to dinner served from a small food truck and played games to get to
            know the other teams.</p>
        <h5>Saturday: Presentations and Discussions</h5>
        <p>The second day started with breakfast and a welcome speech followed by Nemanjas presentation including an
            outlook for the upcoming Grand Jamboree in October. The day continued with team presentations. It was a deep
            dive into various projects, many of which had also been touched on during the BFH European Meet-Up. A panel
            discussion with Nico Krink added some variety to the program, offering valuable insights into innovation and
            iGEM's
            influence on academia and industry. </p>
        <p>
            <div className="row align-items-center">
                <div className="md:col-5 mx-auto mb-3">
                    <img
                        src="https://github.com/user-attachments/assets/a6d201bf-d6e4-4437-a960-89793959e0d9"/>
                </div>
                <div className="md:col-5 mx-auto">
                    <img
                        src="https://github.com/user-attachments/assets/5cc2cf1f-f0b3-4557-8395-3a7d2585dd78"/>
                </div>
            </div>
        </p>
        <p>After lunch, the poster sessions started. The session provided an opportunity for us to interact,
            exchange ideas, and explore the unique approaches each team had taken. It was great to see so many
            passionate people sharing their research and ideas in such an engaging way. </p>
        <h5>Sunday: Final Talks and the Award Ceremony </h5>
        <p>Sunday was the last day of the Meetup, but it was packed with more fascinating discussions. Another panel
            session kicked things off, followed by a standout talk from Insempra on natural products and innovative
            fragrances.</p>
        <p>As the event came to an end, the best presentations received recognition during the award ceremony and every
            team received we received valuable feedback to implement before the Grand Jamboree.</p>
    </div>)
}
