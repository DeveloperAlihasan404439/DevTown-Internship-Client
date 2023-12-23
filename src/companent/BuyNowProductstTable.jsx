import { RiDeleteBin2Fill } from "react-icons/ri";
import useAxios from "../Share/Hooks/useAxios";
import Swal from "sweetalert2";
const BuyNowProductstTable = ({buyNowSingle,i,refetch}) => {
    const axiosSecure = useAxios()
    const {_id,name,price,user_email,user_name,brand_name,user_photo}= buyNowSingle;

    const hendelDelete = (id)=>{
        axiosSecure.delete(`/buynow/delete/${id}`)
        .then(res =>{
            if(res.data.deletedCount){
                refetch()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfull Buy Now Product Delete",
                    showConfirmButton: false,
                    background: "#07163d",
                    color: "white",
                    timer: 2000,
                  });
            }
        })
    }
  return (
    <tr className="bg-base-100 border-b-2 border-black ">
      <th className="">{i + 1}</th>
      <td className="text-lg w-[150px]">
        <img src={user_photo} alt="" className="w-[50px] h-[50px] rounded-[50%]" />
      </td>
      <td className="text-lg text-black w-[200px] text-center">{user_name}</td>
      <td className="text-lg text-black w-[250px] text-center">{user_email}</td>
      <td className="text-lg text-black w-[200px] text-center">{brand_name}</td>
      <td className="text-lg text-black w-[400px] text-center">{name}</td>
      <td className="text-lg text-black w-[200px] text-center">{price}</td>
      <td className="text-lg text-black flex-1 ">
        <div onClick={()=>hendelDelete(_id)} className="bg-[#01040A] text-3xl text-white flex justify-center py-2 rounded">

      <RiDeleteBin2Fill/>
        </div>
        </td>
    </tr>
  );
};

export default BuyNowProductstTable;
