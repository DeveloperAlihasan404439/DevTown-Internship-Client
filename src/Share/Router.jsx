import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";

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