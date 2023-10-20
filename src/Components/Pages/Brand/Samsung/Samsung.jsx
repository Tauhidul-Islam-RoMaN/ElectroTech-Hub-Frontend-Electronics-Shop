import { useLoaderData } from "react-router-dom";
import SamsungGrid from "./SamsungGrid";

const Samsung = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const samsungProducts = loadedData.filter(obj => obj.brand === "Samsung")
    console.log(samsungProducts);

    return (
        <div className="mx-5">
            {
                <SamsungGrid key={samsungProducts.name} samsungProducts={samsungProducts} ></SamsungGrid>
            }
        </div>
    );
};

export default Samsung;