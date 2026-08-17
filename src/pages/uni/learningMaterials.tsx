import {Button} from "react-bootstrap";

export function LearningMaterials() {
    return (<section>

        <Button href={`${process.env.REACT_APP_UNI_PATH}/learning-materials/wts/schlüssel`}
                variant="outline-primary">
            Statistik Schlüssel
        </Button>
    </section>)
}