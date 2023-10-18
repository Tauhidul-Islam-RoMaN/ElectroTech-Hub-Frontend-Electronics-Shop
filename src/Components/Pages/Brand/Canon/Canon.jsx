import { useLoaderData } from "react-router-dom";
import CanonGrid from "./CanonGrid";

const Canon = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const canonProducts = loadedData.filter(obj => obj.brand === "Canon")
    console.log(canonProducts);

    return (
        <div>
            {
                <CanonGrid key={canonProducts.name} canonProducts={canonProducts} ></CanonGrid>
            }
        </div>
    );
};

export default Canon;