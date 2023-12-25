import Banner from "../companent/Banner";
import BrandsAll from "../companent/Brand/BrandsAll";
import AllUserHome from "./Dashboard/AllUserHome";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Testimonial/>
            <BrandsAll/>
            <AllUserHome/>
        </div>
    );
};

export default Home;