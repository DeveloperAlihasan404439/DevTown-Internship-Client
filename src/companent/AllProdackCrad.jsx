import Swal from "sweetalert2";
import Auth from "../Share/AuthProvider/Auth";
import useAxios from "../Share/Hooks/useAxios";
import { useNavigate } from "react-router-dom";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const AllProdackCrad = ({ product }) => {
  
  const navigate = useNavigate();
  const { user } = Auth();
  const axiosSecure = useAxios();

  const { brand_image, brand_name, memory, type, processor, price, os, name } =
    product;

  const hendelShopClick = () => {
    const buynowInfo = {
      brand_name: brand_name,
      name: name,
      price: price,
      user_name: user?.displayName,
      user_email: user?.email,
      user_photo: user?.photoURL,
      state: "Processin",
    };
    axiosSecure.post("/buynow", buynowInfo).then((res) => {
      if (res.data.insertedId) {
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
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className="card card-compact bg-[#040f29] shadow-2xl h-full relative">
        <img
          src={brand_image}
          alt="Shoes"
          className="w-full h-[400px] rounded-t-[1rem]"
        />
        <div className="card-body text-white">
          <h2 className="text-center text-2xl font-medium">{name}</h2>
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
          <div
            onClick={hendelShopClick}
            className="absolute left-0 bottom-0 w-full"
          >
            <button className="border-none rounded-b-lg py-3 text-lg w-full text-white bg-[#0b2566] hover:bg-[#081e52ea]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProdackCrad;
