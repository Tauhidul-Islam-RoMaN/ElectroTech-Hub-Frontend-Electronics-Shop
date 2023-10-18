// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Apple from "./Apple";
import Google from "./Google";
// import AppleCard from "./AppleCard";
// import Apple from "./Apple";

// const BrandFiltering = () => {
//     const loadedData = useLoaderData()
//     console.log(loadedData);
//     return (
//         <div>
//             {
//                 // loadedData.map(products => <Apple key={products._id} products={products}></Apple>)
//                 loadedData.filter(products => products.name==="Apple" )
//             }
//         </div>
//     );
// };
const BrandFiltering = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);

    const appleProducts = loadedData.filter(obj => obj.brand === "Apple")
    console.log(appleProducts);
    const googleProducts = loadedData.filter(obj => obj.brand === "Google")
    console.log(googleProducts);

    return (
        <div>
            {
                <Apple key={appleProducts.name} appleProducts={appleProducts} ></Apple>
            }
            {
                <Google key={googleProducts.name} appleProducts={googleProducts} ></Google>
            }
        </div>
    );
};
// const BrandFiltering = () => {
//     const loadedData = useLoaderData()
//     console.log(loadedData);

//     const [apples, setApples] = useState()

//     useEffect(()=> {
//         const appleBrand = loadedData.filter(appleProduct => appleProduct.brand ==="Apple" )
//         setApples(appleBrand)
//     },[loadedData])


//     return (
//         <div>
//             {
//                 <AppleCard key={apples.name} apples={apples} ></AppleCard>

//             }
//         </div>
//     );
// };

export default BrandFiltering;