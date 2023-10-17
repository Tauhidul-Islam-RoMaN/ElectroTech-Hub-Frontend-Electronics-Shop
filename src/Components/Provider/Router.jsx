import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
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
                path:'/',
                element:<Home></Home>
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