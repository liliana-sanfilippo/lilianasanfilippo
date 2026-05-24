import {Bar, Pie} from "react-chartjs-2";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale, LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import {ChartProps, StackedBarChartProps} from "../../types/ChartProps";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const bordercolorscale  = [
    'rgba(50, 187, 141, 0.2)',   // --greenTwo (#32BB8D)
    'rgba(124, 210, 178, 0.2)',  // --greenThree (#7cd2b2)
    'rgba(179, 228, 205, 0.2)',  // --greenFour (#B3E4CD)
    'rgba(211, 237, 221, 0.2)',  // --greenFive (#D3EDDD)
    'rgba(167, 98, 125, 0.2)',   // --redTwo (#a7627d)
    'rgba(198, 154, 168, 0.2)',  // --redThree (#C69AA8)
    'rgba(222, 202, 204, 0.2)',  // --redFour (#DECACC)
    'rgba(235, 225, 222, 0.2)'   // --redFive (#ebe1de)
];
const backgroundColorScale = [
    'rgba(50, 187, 141, 1)',   // --greenTwo (#32BB8D)
    'rgba(124, 210, 178, 1)',  // --greenThree (#7cd2b2)
    'rgba(179, 228, 205, 1)',  // --greenFour (#B3E4CD)
    'rgba(211, 237, 221, 1)',  // --greenFive (#D3EDDD)
    'rgba(167, 98, 125, 1)',   // --redTwo (#a7627d)
    'rgba(198, 154, 168, 1)',  // --redThree (#C69AA8)
    'rgba(222, 202, 204, 1)',  // --redFour (#DECACC)
    'rgba(235, 225, 222, 1)'   // --redFive (#ebe1de)
];

ChartJS.register(
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,    // x-Achse
    LinearScale       // y-Achse
);


export const UniversalChart: React.FC<ChartProps> = ({id, type, title, labels, data}) => {
    const dataset = {
        labels,
        datasets: [
            {
                label: title,
                data,
                backgroundColor: backgroundColorScale,
                borderColor: bordercolorscale,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        ...(type === "pie" && {
            plugins: {
                legend: {
                    display: true, // possible to blend out legend
                    position: 'bottom' as const, // Puts labels below the chart
                    labels: {
                        boxWidth: 20, // Controls the size of the color box next to the labels
                        padding: 15,   // Adds some padding between labels and the chart
                        usePointStyle: true,
                    },
                },
                title: {display: true, text: title},
            },
        }),
        ...(type === "bar" && {
            plugins: {
                legend: {display: false},
                title: {display: true, text: title},
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '%',
                    },
                },
            },
        }),
    };


    return (
        <div style={{margin: "1rem"}}>
            {type === "pie" ? <Pie key={id} data={dataset} options={options} redraw/> :
                <Bar key={id} data={dataset} options={options} redraw/>}
        </div>
    );
};


export const StackedBarChart: React.FC<StackedBarChartProps> = ({title, labels, stackedData}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {display: false},
            title: {display: true, text: title},
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'number of prizes',
                },
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    }
    return <Bar options={options} data={{labels: labels, datasets: stackedData}}/>
}