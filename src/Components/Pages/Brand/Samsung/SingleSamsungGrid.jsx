import { useLoaderData } from "react-router-dom";
import SamsungProductDetails from "./SamsungProductDetails";

const SingleSamsungGrid = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);


    return (
        <div className="mx-2">
            {
                <SamsungProductDetails key={loadedData._id} samsungProducts={loadedData} ></SamsungProductDetails>
            }
        </div>
    );
};

export default SingleSamsungGrid;