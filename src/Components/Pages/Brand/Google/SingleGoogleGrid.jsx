import { useLoaderData } from "react-router-dom";
import GoogleProductDetails from "./GoogleProductDetails";

const SingleGoogleGrid = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);


    return (
        <div className="mx-10">
            {
                <GoogleProductDetails key={loadedData._id} googleProducts={loadedData} ></GoogleProductDetails>
            }
        </div>
    );
};

export default SingleGoogleGrid;