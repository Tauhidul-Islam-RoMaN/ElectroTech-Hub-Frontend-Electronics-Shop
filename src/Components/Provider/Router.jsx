import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Sony from "../Pages/Brand/Sony/Sony";
import Samsung from "../Pages/Brand/Samsung/Samsung";
import Apple from "../Pages/Brand/Apple/Apple";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Google from "../Pages/Brand/Google/Google";
import Canon from "../Pages/Brand/Canon/Canon";
import Nikon from "../Pages/Brand/Nikon/Nikon";
import Register from "../Pages/Register";
import SingleAppleGrid from "../Pages/Brand/Apple/SingleAppleGrid";
import SingleGoogleGrid from "../Pages/Brand/Google/SingleGoogleGrid";
import SingleCanonGrid from "../Pages/Brand/Canon/SingleCanonGrid";
import SingleNikonGrid from "../Pages/Brand/Nikon/SingleNikonGrid";
import SingleSamsungGrid from "../Pages/Brand/Samsung/SingleSamsungGrid";
import SingleSonyGrid from "../Pages/Brand/Sony/SingleSonyGrid";
import UpdateProduct from "../Pages/UpdateProduct";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands'),
            },
            {
                path: '/products',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/apple/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/apple/:id",
                element: <SingleAppleGrid></SingleAppleGrid>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/google',
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/google/:id",
                element: <SingleGoogleGrid></SingleGoogleGrid>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/google/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/canon',
                element: <Canon></Canon>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/canon/:id",
                element: <SingleCanonGrid></SingleCanonGrid>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/canon/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/nikon',
                element: <Nikon></Nikon>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/nikon/:id",
                element: <SingleNikonGrid></SingleNikonGrid>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/nikon/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/samsung/:id",
                element: <SingleSamsungGrid></SingleSamsungGrid>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/samsung/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/sony/:id",
                element: <SingleSonyGrid></SingleSonyGrid>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
            },
            {
                path: '/sony/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`http://localhost:5000/products/${params.id}`);
                },
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