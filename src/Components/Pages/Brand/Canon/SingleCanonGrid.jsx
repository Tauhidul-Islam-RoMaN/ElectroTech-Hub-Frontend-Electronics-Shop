import { useLoaderData } from "react-router-dom";
import CanonProductDetails from "./CanonProductDetails";

const SingleCanonGrid = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);


    return (
        <div className="mx-10">
            {
                <CanonProductDetails key={loadedData._id} canonProducts={loadedData} ></CanonProductDetails>
            }
        </div>
    );
};

export default SingleCanonGrid;
