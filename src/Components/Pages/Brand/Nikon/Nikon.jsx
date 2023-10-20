import { useLoaderData } from "react-router-dom";
import NikonGrid from "./NikonGrid";

const Nikon = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const nikonProducts = loadedData.filter(obj => obj.brand === "Nikon")
    console.log(nikonProducts);

    return (
        <div className="mx5">
           {
            nikonProducts.length ?  
            
                <NikonGrid key={nikonProducts.name} nikonProducts={nikonProducts} ></NikonGrid>
             : 
             <div className="my-20">
                <h2 className="text-4xl font-bold text-center text-accent">Oops!!!! <br /> No Product Available</h2>
             </div>
            
           }
        </div>
    );
};

export default Nikon;