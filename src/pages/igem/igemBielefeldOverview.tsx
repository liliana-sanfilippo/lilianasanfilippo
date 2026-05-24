import React from "react";
import {Link} from "react-router-dom";
import {Line} from "react-chartjs-2";
import {Section} from "@liliana-sanfilippo/react-wiki-components";
import TabbedBox, {TabData} from "../../components/boxes/TabbedBox";
import {StackedBarChart, UniversalChart} from "../../components/other/UniversalChart";
import {prize_labels, prizes} from "../../data/igem/prize-statistic";
import {noteslinks} from "../../data/igem/notelinks";
import {LinkTable} from "../../components/other/LinkTable";


const labels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2023", "2024", "2025"];

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Team statistics',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    }
};

const data = {
    labels,
    datasets: [
        {
            label: 'Roster',
            data: [14, 18, 19, 15, 15, 15, 16, 19, 17, 15, 19, 17, 15, 20, 20],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y'
        },
        {
            label: 'Team Members',
            data: [11, 11, 15, 10, 10, 10, 11, 14, 9, 9, 14, 14, 10, 13, 11],
            /*borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)','*/
            borderColor: 'rgb(255, 9, 132)',
            backgroundColor: 'rgba(255, 9, 132, 0.5)',
            yAxisID: 'y'
        },
        {
            label: 'Prizes and Honors',
            data: [1, 2, 3, 5, 1, 10, 2, 7, 1, 4, 1, 4, 1, 4, 1],
            borderColor: 'rgb(90, 2, 235)',
            backgroundColor: 'rgba(90, 2, 235, 0.5)',
            yAxisID: 'y'
        },
        {
            label: 'Prizes per team member',
            data: [0.09, 0.18, 0.2, 0.5, 0.1, 1, 0.18, 0.5, 0.11, 0.44, 0.07, 0.29, 0.1, 0.3, 0.09],
            borderColor: 'rgb(90, 92, 235)',
            backgroundColor: 'rgba(90, 92, 235, 0.5)',
            yAxisID: 'y1'
        }
    ],
};

export function IgemBielefeldOverview() {


    return (
        <>
            <div className={"row my-5"}>
                <Section title={"Projects"}>
                    <p>Browse summaries of former projects I participated in <Link
                        to={process.env.REACT_APP_IGEM_BIELEFELD_PROJECTS_PATH!}>here</Link>. </p>
                </Section>
                <Section title={"For advisors"}>
                    <p> <Link
                        to={process.env.REACT_APP_IGEM_BIELEFELD_FOR_ADVISORS_PATH!}>here</Link></p>

                </Section>
                <Section title={"Notes and manuals"}>
                    <p>Browse my checklists and notes for starting new teams and passing over advisor duties.</p>
                    <LinkTable data={noteslinks}/>
                </Section>
                <Section title={"Bielefeld Stats"}>
                    <TabbedBox tabs={projectTabs} defaultActiveKey="design"/>
                </Section>
            </div>
        </>
    )
}

const projectTabs: TabData[] = [{
    eventKey: "design", title: "Team", content: (<>
        <Line key={"context-line"} options={options} data={data}/>
    </>)
}, {
    eventKey: "build", title: "Prizes", content: (<>
        <StackedBarChart title={"Prizes over the years"} labels={prize_labels} stackedData={prizes} id={"bfchjeb"}
        />
    </>)
}, {
    eventKey: "test", title: "Participation", content: (<>
        <UniversalChart
            id="pie-website-experience"
            type="pie"
            title="Villages"
            labels={[
                "Environment",
                "(Food &) Energy",
                "Manufacturing",
                "Foundational Advance",
                "Diagnostics",
                "Oncology",
                "Therapeutics",
                "New Application"
            ]}
            data={[
                3,
                3,
                1,
                3,
                1,
                1,
                2,
                1
            ]}
        />
    </>)
},/* {
    eventKey: "learn", title: "Results", content: (<></>)
}, {
    eventKey: "secret", title: "Parts", content: (<></>)
}*/
]
