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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/google',
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/canon',
                element: <Canon></Canon>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/nikon',
                element: <Nikon></Nikon>,
                loader: () => fetch('http://localhost:5000/products')
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