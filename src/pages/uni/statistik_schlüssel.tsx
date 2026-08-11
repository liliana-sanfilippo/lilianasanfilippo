import DecisionTree from "../../components/DecisionKey/DecisionTree";
import {statistik_schlüssel_json} from "../../data/statistikSchlüssel";

export function StatistikSchlüssel() {
    return (<section>
    <DecisionTree graph={statistik_schlüssel_json}></DecisionTree>

    </section>)
}