import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Brand from "./Brand";

const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <>
            <Banner></Banner>
            <div>
                <h2 className="text-center text-accent text-2xl md:text-4xl lg:text-6xl my-20">Choose Your Favorite Brand</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        brands.map(brand => <Brand key={brand.name} brand={brand}></Brand>)
                    }
                </div>
            </div>
        </>

    );
};

export default Home;