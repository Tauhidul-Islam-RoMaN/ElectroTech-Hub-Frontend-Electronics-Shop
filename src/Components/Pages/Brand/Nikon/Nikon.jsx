import { useLoaderData } from "react-router-dom";
import NikonGrid from "./NikonGrid";

const Nikon = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const NikonProducts = loadedData.filter(obj => obj.brand === "Nikon")
    console.log(NikonProducts);

    return (
        <div>
            {
                <NikonGrid key={NikonProducts.name} nikonProducts={NikonProducts} ></NikonGrid>
            }
        </div>
    );
};

export default Nikon;