import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import MobileBrand from "../pages/MobileBrand";
import AllProdack from "../pages/AllProdack";
import BuyNowProducts from "../pages/BuyNowProducts";
import PriveatRout from "./AuthProvider/PriveatRout";
import Dashboard from "../pages/Dashboard/Dashboard";
import UsersData from "../pages/Dashboard/UsersData";
import AllProducts from "../pages/Dashboard/AllProducts";
import AdminBuyNow from "../pages/Dashboard/AdminBuyNow";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/mobileBrand/:brandName',
                element: <PriveatRout><MobileBrand/></PriveatRout>,
                loader: ({params})=>fetch(`https://internship-task-devtown.vercel.app/brand/mobile/${params.brandName}`)
            },
            {
                path: '/allProducts',
                element: <PriveatRout><AllProdack/></PriveatRout>
            },
            {
                path: '/buynow',
                element: <PriveatRout><BuyNowProducts/></PriveatRout>
            },
            {
                path: '/singup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: '/dashboard/users',
                element: <UsersData/>
            },
            {
                path: '/dashboard/products',
                element: <AllProducts/>
            },
            {
                path: '/dashboard/buynow',
                element: <AdminBuyNow/>
            },
        ]
    }
])