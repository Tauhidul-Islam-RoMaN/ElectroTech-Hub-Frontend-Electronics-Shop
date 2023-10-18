import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyCart from "../Pages/MyCart";
import PrivateRoute from "./PrivateRoute";
import Sony from "../Pages/Brand/Sony";
import Samsung from "../Pages/Brand/Samsung";
import Apple from "../Pages/Brand/Apple";
import Google from "../Pages/Brand/Google";
import Canon from "../Pages/Brand/Canon";
import Nikon from "../Pages/Brand/Nikon";
import BrandFiltering from "../Pages/Brand/BrandFiltering";
const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/products',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/brand',
                element:<BrandFiltering></BrandFiltering>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sony',
                element: <Sony></Sony>
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>
            },
            // {
            //     path: '/products/:name',
            //     element: <Apple></Apple>,
            //     loader: ({ params }) => {
            //         console.log(params);
            //         return fetch(`http://localhost:5000/products/${params.name}`)
            //     }
            // },
   
            {
                path:'/apple',
                element:<Apple></Apple>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/products/:name',
                element: <Google></Google>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:3500/products/${params.name}`)
                }

            },
            {
                path: '/canon',
                element: <Canon></Canon>
            },
            {
                path: '/nikon',
                element: <Nikon></Nikon>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
        ]
    }
])


export default myCreatedRoute;