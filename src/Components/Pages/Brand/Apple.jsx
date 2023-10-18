import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";

const Apple = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    
    return (
        <div className="grid grid-col-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
                // loadedData.map( product => <AppleCard key={product._id} product={product}></AppleCard> )
            }
        </div>
    );
};

export default Apple;