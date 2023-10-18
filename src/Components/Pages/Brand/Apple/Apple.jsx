import { useLoaderData } from "react-router-dom";
import AppleGrid from "./AppleGrid";

const Apple = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);

    const appleProducts = loadedData.filter(obj => obj.brand === "Apple")
    console.log(appleProducts);

    return (
        <div>
            {
                <AppleGrid key={appleProducts.name} appleProducts={appleProducts} ></AppleGrid>
            }
        </div>
    );
};

export default Apple;