import { useLoaderData } from "react-router-dom";
import SonyProductDetails from "./SonyProductDetails";

const SingleSonyGrid = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);


    return (
        <div className="mx-10">
            {
                <SonyProductDetails key={loadedData._id} sonyProducts={loadedData} ></SonyProductDetails>
            }
        </div>
    );
};

export default SingleSonyGrid;