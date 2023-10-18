import { useLoaderData } from "react-router-dom";
import GoogleGrid from "./GoogleGrid";

const Google = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const googleProducts = loadedData.filter(obj => obj.brand === "Google")
    console.log(googleProducts);

    return (
        <div>
            {
                <GoogleGrid key={googleProducts.name} googleProducts={googleProducts} ></GoogleGrid>
            }
        </div>
    );
};

export default Google;