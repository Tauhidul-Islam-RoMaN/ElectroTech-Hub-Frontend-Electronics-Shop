import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


const MainLayout = () => {

    useEffect(()=> {
        AOS.init()
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;