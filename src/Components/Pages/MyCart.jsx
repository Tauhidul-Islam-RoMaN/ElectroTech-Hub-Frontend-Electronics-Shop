import { useLoaderData } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import MyCartGrid from "./MyCartGrid";
import { useEffect, useState } from "react";

const MyCart = () => {

    const loadedData = useLoaderData()
    const { user } = useAuth()
    console.log(loadedData);
    console.log(user.email);
    const [userCarts, setUserCarts] =useState([])
    useEffect(()=> {
        const cart = loadedData.filter(item => item.email == user.email)
        setUserCarts(cart)

    },[loadedData, user.email])

    return (
        <div>
            <MyCartGrid key={userCarts} userCarts={userCarts}></MyCartGrid>
        </div>
    );
};

export default MyCart;