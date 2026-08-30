import React from 'react'
import {Col, Row} from "react-bootstrap";

export const metabfh2026 = {
    title: "BFH European MeetUp 2026",
    tags: ["bfh", "igem", "meetup"],
    spoiler: "The iGEM team Hamburg hosted the third BFH European Meet-Up. Over the course of three full days, iGEM" +
        " teams from across Europe presented their projects, participated in workshops and discussions and were able to get their first external feedback.",
    slug: "bfh-2026",
    date: new Date("2026-05-29"),
    cc: "Malcolm Rose",
    image: "https://www.cssb-hamburg.de/sites/sites_custom/site_cssb/content/e85919/e85920/e306810/e316553/content316562/e316563/1.iGEM2026_eng.jpg"
}
// https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-bfh.avif


// const furtherlinks: FLink[] = []

const pics: string[] = [
    "https://www.cssb-hamburg.de/sites/sites_custom/site_cssb/content/e85919/e85920/e306810/e316553/content316562/e316563/1.iGEM2026_eng.jpg",
    "https://www.cssb-hamburg.de/sites/sites_custom/site_cssb/content/e85919/e85920/e306810/e316553/content316570/e316571/4.iGEM2026_eng.png",
    "https://www.cssb-hamburg.de/sites/sites_custom/site_cssb/content/e85919/e85920/e306810/e316553/content316572/e316573/2.iGEM2026_eng.png",
    "https://static.igem.wiki/teams/6221/wiki/community-board/meetup-pictures/cb-bfh-people.avif",
    "https://www.cssb-hamburg.de/sites/sites_custom/site_cssb/content/e85919/e85920/e306810/e316553/content316567/e316569/3.iGEM2026_eng.png"
]


// Todo zweiter Absatz überprüfen
// Todo hinzufügen wie das organisiert wurde
// Todo Gruppenfoto & Foto wie ich fotografiere
export default function bfh2026() {
    return (<div>

            <section>
                <p>This year's BFH European Meet-Up held at the Centre for Structural Systems Biology CSSB on the DESY
                    campus is concluded!
                </p>
                <p>
                    Many people put a lot of effort into the event, especially Sinan Zimmermann, Lennert Weber, Katja
                    Neuwirth, Lucas Koch and Lucy Joy Jansen. Thank you!

                </p>
                <p> I want to also thank (hold on, this will be long) Olivia Mozolewska for the moderation, Malcolm S.
                    Rose for the photography and the team iGEM Hamburg for their effort and handling everything so well.
                    On short notice at that.
                    We still have to list them on our website, therefore I would like to mention them here. You did
                    great, Sylvia Halbach, Nikita Bokhanov, Cara Frister, Gaurali Mehta, Natalie Rübecamp, Laura
                    Fischer, Dennis Savran, Astrid Büßer, Leonhard L., Lilly Tewes, Ulla Sophia Stehle, Ananyaa Rajesh,
                    Yaren Karabacak, Firat Üstüner, Kunal Chavan, Michael Kolbe and Julius Leonel Himstedt.
                </p>

                <p> I think this is the first year that we had volunteers from other iGEM teams from the last years!
                    Thank you to Julius Hennemann from iGEM Münster and Kady Hoogenboom from iGEM TU Eindhoven for
                    traveling to us and helping us out.

                    Especially to Kady who, together with Michelle Than and Rémi Peuscet, planned the heist game with
                    me.
                </p>
                <p>
                    Unfortunately not every interested team was able to attend. During the planning I was in contact
                    with multiple teams, inside and outside of Europe, that shared struggles and uncertainties about
                    their participation in iGEM. Mostly due to the rising iGEM fees and general financial struggles.
                    From which we as BFH were also not exempt.
                    Many iGEM teams, many scientists, many people in general currently face a lot of uncertainty.
                    Which makes me even more glad we were able to get so many teams together and from what I observed I
                    am positive you connected really well and I hope this event created a lasting sense of community.
                    Since the feeling of community is what helps most in times of uncertainty.
                </p>
                <p> Fittingly, we had more members of the iGEM Community there than ever. One person could not make it,
                    but I am proud that we had ambassadors from still three regions there who gave us a peek into how
                    events are done in other regions and were in busy exchange with the teams: Thank you so much for
                    attending, Florian Hänsel, Amelia Wei, Wenyu Liao, Xavier Alexandro Rios Salinas and Radu Ticiu!
                </p>
            </section>

            <section>
                <h2>Program</h2>
                <p>As always, we had a pull program:
                    Kai Jensen, vice dean of the MIN faculty in Hamburg, gave us a great and well researched welcome
                    speech.

                    Jens Boch held a presentation about mirror life and took part in a panel about ethics with Mirko
                    Himmel, Fernando M. Delgado-Chaves, PhD and Ioana Slabu, kindly moderated by Florian Hänsel.

                    Lasse Middendorf held a presentation about protein design in the era of generative AI.
                </p>
                <p>
                    To give teams insight into how judges evaluate projects, we held a judging panel with Anne
                    Smedegaard Frederiksen, Nicole Gensch and Leon-Samuel Icking.
                </p>
                <p>
                    Overall, we had 12 people acting as volunteer judges to provide feedback to the teams:
                    Anne, Nicole, Leon, Evangelos Marlon Masis, Dascha Michelle Khalfine, Chloe Ng-Brossard, Johanna
                    Gerstenecker, Alexander Kuhne, Paul Schütz, Valentin Runge, Anna Eisenmenger and Fanny Ott.

                </p>
                <p>
                    The workshops were held by Trent Huon (The Business of Science), Michelle Mercy Hacker (Team
                    Dynamics), Martha Carolina Elizondo Cantú (From iGEM Project to Startup: The Art of Compelling
                    Storytelling) and Nicole Moshny (Entrepreneurship, Fundraising, How to Ausgründen) form HTGF |
                    High-Tech Gründerfonds.

                </p>
                <span> Last but not least, we had PeP talks from multiple winners from last year:</span>
                <ul>
                    <li>
                        Grand prize winner David Kopecky from iGEM Brno
                    </li>
                    <li>Best Integrated Human Practices & Best Entrecpreneurship winners Rick Markus, Iris Gormezano
                        Kasuto, Thapasvi Anirudhan Puvvada and Niels van de Sande from iGEM Wageningen
                    </li>
                    <li>
                        Best Software Tool & Best Wiki winners Aeneas Tews and Friedrich Irmer from iGEM Munich
                    </li>
                    <li>Safety and Security winners Katja Neuwirth and Valentin Runge from iGEM GU Frankfurt</li>
                </ul>
            </section>
            <section>
                <h2>Gallery</h2>
                <p>Pictures by Malcolm Rose</p>
                <div className="row">
                    {pics.map(value => (<div className="md:col-3">
                        <img className="gallery-img" src={value}/>
                    </div>))}

                </div>
            </section>
            <section>
                <h2>Prizes</h2>
                <Row>
                    <Col>
                        <h3>Best Overall Project</h3>
                        <ul>
                            <li>🥇iGEM Team Ruhr Universität Bochum</li>
                            <li>🥈iGEM GU Frankfurt</li>
                        </ul>

                        <h3>Best Project Presentation</h3>
                        <ul>
                            <li>🥇iGEM Münster</li>
                            <li>🥈iGEM Lyon Biothetis</li>
                        </ul>

                        <h3>Best Poster</h3>
                        <ul>
                            <li>🥇iGEM KU Leuven</li>
                            <li>🥈iGEM Bielefeld-CeBiTec</li>
                        </ul>

                        <h3>The Heist</h3>
                        <ul>
                            <li>🏆iGEM Utrecht</li>
                        </ul>
                        <span>
                    Though, of course, the real prize in that game was the friendship between them,
                   MUTANS UniPD TeamandiGEM GU Frankfurt.
                </span>

                    </Col>

                    <Col>
                        <h3>Best Team Booth</h3>
                        <ul>
                            <li>🥇iGEM Team Marburg</li>
                            <li>🥈iGEM TU Dresden</li>
                        </ul>

                        <h3>Perfect Pitch</h3>
                        <span>
                    Through the workshop <em>From iGEM Project to Startup</em> by Martha Carolina Elizondo Cantú:
                </span>
                        <ul>
                            <li>🥇iGEM Aachen</li>
                            <li>🥈iGEM TU Eindhoven</li>
                        </ul>

                        <h3>Community Prize</h3>
                        <ul>
                            <li>🏆ETH Zürich iGEM</li>
                        </ul>
                        <h3>Judging Prize</h3>
                        <ul>
                            <li>🏆Anne Smedegaard Frederiksen</li>
                        </ul>

                    </Col>
                </Row>


            </section>
            <p>
                A big thank you to PiNa-Tec Katja Werner,
                MACHEREY-NAGEL,
                German Association for Synthetic Biology - GASB e.V.,
                Carl Roth GmbH + Co. KG
                and Miro
                for sponsoring the prizes!
            </p>

            {/*
            <section>
                <h2>Aftermovie</h2>
                <div className="row align-items-center">
                    <div className="md:col-8 mx-auto">
                        <iframe title="Bielefeld-CeBiTec: BFH European Meet-up (2024) [English]" width="100%"
                                height="500vh" src="https://video.igem.org/videos/embed/2G8U94Ubp6bCK5abA8Gu89"
                                allow="fullscreen"
                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                        <small>Video, voiceover and post production by our head of Creativity: <a
                            href="https://www.instagram.com/michagree/">Michael Gröning</a>.</small>
                    </div>

                </div>
            </section>
              <section>
                <h2>See also:</h2>
                <LinkedInCarousel urls={linkedinposts24}/>
            <FurtherLinks flinks={furtherlinks}/>
        </section>
            */}
        </div>


    )
}

// TODO https://www.cssb-hamburg.de/news_amp_events/news/2026/networking_project_presentations_and_a_heist/index_eng.html
