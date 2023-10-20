import { useLoaderData } from "react-router-dom";
import NikonProductDetails from "./NikonProductDetails";

const SingleNikonGrid = () => {
       
    const loadedData = useLoaderData()
    console.log(loadedData);


    return (
        <div className="mx-2">
            {
                <NikonProductDetails key={loadedData._id} nikonProducts={loadedData} ></NikonProductDetails>
            }
        </div>
    );
};

export default SingleNikonGrid;