import {Muitimelinetype} from "../../types/muitimelinetype";

export const igemtimeline: Muitimelinetype[] = [
    {
        itemTitle: "Recruitment",
        timelineOppositeContent: "Nov - Dec prev. year",
        dotColor: "primary"
    },
    {
        itemTitle: "(Interviews)"
    },
    {
        itemTitle: "Preparations",
        timelineOppositeContent: "January",
        itemText: <> Before the first meeting, ideally:
            <ul>
                <li><input type="checkbox" disabled/> set up a form where everyone can enter their contact info
                </li>
                <li><input type="checkbox" disabled/> move the old emails to the archive</li>
                <li><input type="checkbox" disabled/> already have a list of points of contact for the team for things such as ordering</li>
            </ul></>,
        dotColor: "primary"
    },
    {
        itemTitle: "First meeting",
        itemText: <>
            <ul>
                <li><input type="checkbox" disabled/> give the task to prepare a slide about themselves for the second meeting (at home) </li>
                <li><input type="checkbox" disabled/>  choose a communication medium (group chat - WhatsApp, Matrix, etc.)
                </li>
                <li><input type="checkbox" disabled/> choose preliminary meeting dates</li>
            </ul>
            <i>The iGEM introduction</i> <br/>
            Create realistic expectations regarding workload, credits and required amount of work.
            <ul>
                <li><input type="checkbox" disabled/> Give the iGEM introductory presentation</li>
                <li><input type="checkbox" disabled/> If there is time: speak with the team members about their
                    expectations and what commitment they plan to make to the project
                </li>
            </ul>
        </>,
        dotColor: "secondary"

    },
    {
        itemTitle: "Getting everyone access and started",
        dotColor: "primary",
        itemText: <>
            Everyone should have or request:
            <ul>
                <li><input type="checkbox"/> a CeBiTec account</li>
                <li><input type="checkbox" disabled/> a Sciebo account</li>
                <li><input type="checkbox" disabled/> access to a personal or university computer/laptop
                </li>
                <li><input type="checkbox" disabled/> Schließberechtigung</li>
            </ul></>
    },
    {
        itemTitle: "Next meeting(s)",
        itemText: <>
            <ul>
                <li><input type="checkbox" disabled/> everyone signs the Vertragserklärung</li>
                <li><input type="checkbox" disabled/> add everyone to the Sciebo team for file access</li>
                <li><input type="checkbox" disabled/> evaluate the skillsets everyone brings (lab, wiki, etc.)</li>
            </ul>
        </>,
        dotColor: "secondary"
    },
    {
        itemTitle: "Brainstorming Phase",
        itemText: <> The team figures out their interests, possible connections at the university and does literature research.
            <ul>
                <li><input type="checkbox" disabled/> make sure everyone saves their sources somewhere </li>
                <li><input type="checkbox" disabled/> have the team do short pitches </li>
            </ul>
            If the literature research has progressed sufficiently:
            <ul>
                <li><input type="checkbox" disabled/> request access to the team email for everyone</li>
                <li><input type="checkbox" disabled/> get everyone access to the shared Zotero</li>
                <li><input type="checkbox" disabled/> and make sure everyone knows how to use Zotero</li>
                <li><input type="checkbox" disabled/> make sure everyone knows how to use Sciebo</li>

            </ul>
        </>,
        timelineOppositeContent: "Jan - March",
        dotColor: "secondary"
    },
    {
        itemTitle: "Team Building Trip",
        itemText: <>
            If the team finances allow, have the team select a city and organize a trip for team building and brainstorming purposes. Otherwise, a staycation.
        <ul>
            <li><input type="checkbox" disabled/> plan team building</li>
            <li><input type="checkbox" disabled/> do a PowerPoint workshop</li>
        </ul>
        </>
    },
    {
        itemTitle: "Choose topic"
    },
    {
        itemTitle: "Sponsoring preparations",
        dotColor: "primary",
        itemText: <>
        Immediately after a topic is chosen, start the sponsoring.
            <ul>
                <li><input type="checkbox" disabled/> make sure that everyone knows how to use the team email</li>
                <li><input type="checkbox" disabled/> give the team documents from last years sponsoring </li>
            </ul>
        </>
    },
    {
        itemTitle: "Project preparation",
        itemText: <>
            Give the team everything necessary to start on HP, design and prepare lab activities.
            <ul>
                <li><input type="checkbox" disabled/> get the permission slips for the multimedia lab</li>
                <li><input type="checkbox" disabled/> HP and ethics workshop</li>
                <li><input type="checkbox" disabled/> make sure that everyone knows how to use Thinlinc and the CeBiTec VPN</li>
                <li><input type="checkbox" disabled/> make sure that everyone has the links for the CeBiTec intranet, mail and
                    Thinlinc
                </li>
            </ul>
            And have/train at least one person that
            <ul>
                <li><input type="checkbox" disabled/> is familiar with the ordering system (three offer rule etc.)
                </li>
                <li><input type="checkbox" disabled/> knows how to fill out travel permission and reimbursement
                    forms
                </li>
            </ul>
        </>,
        dotColor: "primary",
        timelineOppositeContent: "March"
    },
    {
        itemTitle: "Team decisions"
    },
]