import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import MobileBrand from "../pages/MobileBrand";

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
                element: <MobileBrand/>,
                loader: ({params})=>fetch(`http://localhost:5000/brand/mobile/${params.brandName}`)
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
    }
])