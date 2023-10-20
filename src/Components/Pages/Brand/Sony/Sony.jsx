import { useLoaderData } from "react-router-dom";
import SonyGrid from "./SonyGrid";

const Sony = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);

    const sonyProducts = loadedData.filter(obj => obj.brand === "Sony")
    console.log(sonyProducts);

    return (
        <div className="mx-5">
            {
                <SonyGrid key={sonyProducts.name} sonyProducts={sonyProducts} ></SonyGrid>
            }
        </div>
    );
};

export default Sony;