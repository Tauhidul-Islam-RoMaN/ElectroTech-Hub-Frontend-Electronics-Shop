import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Brand from "./Brand";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';
import { GrTechnology } from 'react-icons/gr';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiDiscount1 } from 'react-icons/ci';



const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <>
            <Banner></Banner>
            <div>
                <h2 className="text-center text-accent text-2xl md:text-4xl lg:text-6xl my-20">Choose Your Favorite Brand</h2>
                <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        brands.map(brand => <Brand key={brand.name} brand={brand}></Brand>)
                    }
                </div>
            </div>
            <div className="mt-20 mx-5 ">
                <h2 className="text-2xl md:text-5xl font-bold text-center text-accent"> Why Us?</h2>
                <div className="flex flex-col md:flex-col items-center gap-5 justify-around my-10 font-bold">
                    <div className="gap-4  flex items-center ">
                        <TbTruckDelivery className="text-5xl"></TbTruckDelivery>
                        <p>Free Delivery</p>
                    </div>
                    <div className="gap-4 flex items-center ">
                        <GrTechnology className="text-5xl"></GrTechnology>
                        <p>Latest technology</p>
                    </div>
                    <div className="gap-4 flex items-center ">
                        <CiDiscount1 className="text-5xl"></CiDiscount1>
                        <p>Exclusive Discount</p>
                    </div>
                    <div className="gap-4 flex items-center ">
                        <FcSalesPerformance className="text-5xl"></FcSalesPerformance>
                        <p>Premium After Sale service</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 mx-5">
                <h2 className="text-2xl md:text-5xl font-bold text-center text-accent"> Connect With Us</h2>
                <div className="flex flex-col md:flex-col items-center gap-5 justify-around my-10 font-bold">
                    <div className="gap-4 flex items-center ">
                        <FaFacebook className="text-5xl"></FaFacebook>
                        <p className="hover:underline hover:text-blue-600">FaceBook</p>
                    </div>
                    <div className="gap-4 flex items-center ">
                        <FaInstagram className="text-5xl"></FaInstagram>
                        <p className="hover:underline hover:text-blue-600">Instagram</p>
                    </div>
                    <div className="gap-4 flex items-center ">
                        <FaTwitter className="text-5xl"></FaTwitter>
                        <p className="hover:underline hover:text-blue-600">Twitter</p>
                    </div>
                    <div className="gap-4 flex items-center ">
                        <FaYoutube className="text-5xl"></FaYoutube>
                        <p className="hover:underline hover:text-blue-600">Youtube</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;