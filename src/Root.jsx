import { Outlet } from "react-router-dom";
import Navber from "./Share/Navber";
import Footer from "./Share/Footer";

const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;