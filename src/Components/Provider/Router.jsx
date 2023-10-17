import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Home></Home>
            },
        ]
    }
])
    

export default myCreatedRoute;