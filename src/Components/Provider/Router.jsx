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
// import CanonProductDetails from "../Pages/Brand/Canon/CanonProductDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/brands'),
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
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products')
            },
            {
                path: "/apple/:id",
                element: <PrivateRoute><SingleAppleGrid></SingleAppleGrid></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/google',
                element: <Google></Google>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products')
            },
            {
                path: "/google/:id",
                element: <PrivateRoute><SingleGoogleGrid></SingleGoogleGrid></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/google/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/canon',
                element: <Canon></Canon>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products')
            },
            {
                path: "/canon/:id",
                element: <PrivateRoute><SingleCanonGrid></SingleCanonGrid></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/canon/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/nikon',
                element: <Nikon></Nikon>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products')
            },
            {
                path: "/nikon/:id",
                element: <PrivateRoute><SingleNikonGrid></SingleNikonGrid></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/nikon/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products')
            },
            {
                path: "/samsung/:id",
                element: <PrivateRoute><SingleSamsungGrid></SingleSamsungGrid></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/samsung/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products')
            },
            {
                path: "/sony/:id",
                element: <PrivateRoute><SingleSonyGrid></SingleSonyGrid></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/sony/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params);
                    return fetch(`https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/products/${params.id}`);
                },
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://assignment-10-server-40rtxf79s-romans-projects-caf8547b.vercel.app/cart')
            },
        ]
    }
])


export default myCreatedRoute;