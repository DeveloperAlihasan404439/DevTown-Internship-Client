import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../Share/Hooks/useAxios";

const MobilesCrad = ({ mobile }) => {
  const navigate = useNavigate()
  const axiosSecure = useAxios()
  const hendelShopClick = ()=>{
    const buynowInfo = {
        brand_name: brand_name,
        name: name,
        price: price,
        user_name: user?.displayName,
        user_email: user?.email,
        user_photo: user?.photoURL,
        state: 'Processin'
    }
    axiosSecure.post('/buynow', buynowInfo)
    .then(res => {
        if(res.data.insertedId){
        navigate("/buynow");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfull Buy Now Product Added",
                showConfirmButton: false,
                background: "#07163d",
                color: "white",
                timer: 2000,
              });
        }
    })
}
  const { brand_image, brand_name, memory, type, processor, price, os, name } =
    mobile;
  return (
    <div>
      <div className="card card-compact bg-gradient-to-r from-[#07163d] to-[#3D8AD0] shadow-xl h-full relative">
        <img
          src={brand_image}
          alt="Shoes"
          className="w-full h-[400px] rounded-t-[1rem]"
        />
        <div className="card-body text-white">
          <h2 className="text-center text-2xl font-medium">
            {name}
          </h2>
          <div className="flex justify-between items-center w-full">
            <p className="text-lg">Brnad : {brand_name}</p>
            <p className="text-lg">Type : {type}</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-lg">Processor : {processor}</p>
            <p className="text-lg">Os : {os}</p>
          </div>
          <div className="flex justify-between items-center w-full mb-14">
            <p className="text-lg">Memory : {memory}</p>
            <p className="text-lg">Price : {price}</p>
          </div>
          <div onClick={hendelShopClick} className="card-actions absolute left-0 bottom-0 w-full">
            <button className="btn border-none text-lg text-white bg-gradient-to-t from-[#07163d] to-[#3D8AD0] w-full hover:bg-gradient-to-l hover:from-[#00091f] hover:to-[#1388f5]">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilesCrad;
