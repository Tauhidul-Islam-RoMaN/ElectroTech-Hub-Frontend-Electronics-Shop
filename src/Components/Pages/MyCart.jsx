import { useLoaderData } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import MyCartGrid from "./MyCartGrid";

const MyCart = () => {

    const loadedData = useLoaderData()
    const { user } = useAuth()
    console.log(loadedData);

    const userCarts = loadedData.filter(item => item.email === user.email)
    console.log(loadedData, userCarts);
    return (
        <div>
            <MyCartGrid key={userCarts} userCarts={userCarts}></MyCartGrid>
        </div>
    );
};

export default MyCart;