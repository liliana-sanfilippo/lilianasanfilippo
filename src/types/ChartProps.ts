import {ChartDataset} from "chart.js";

export type ChartProps = {
    id: string;
    type: "pie" | "bar" | "stacked";
    title: string;
    labels: string[];
    data: number[];
};

export type StackedBarChartProps = {
    id: string;
    title: string;
    labels: string[];
    stackedData: ChartDataset<'bar'>[]
}