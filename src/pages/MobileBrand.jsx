import { useLoaderData } from "react-router-dom";
import MobilesCrad from "../companent/MobilesCrad";
import mobilebanner from '../assets/images/mobile-banner.png'
import ShareTitle from "../Share/ShareTitle";
const MobileBrand = () => {
    const loaderMobile = useLoaderData()
    return (
        <>
        <img src={mobilebanner} alt="" className="w-full"/>
        <ShareTitle heading="Mobile" title="Handling Mobile Homes"/>
        <div className="w-11/12 mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                loaderMobile?.map(mobile => <MobilesCrad key={mobile._id} mobile={mobile}/>)
            }
        </div>
        </>
    );
};

export default MobileBrand;