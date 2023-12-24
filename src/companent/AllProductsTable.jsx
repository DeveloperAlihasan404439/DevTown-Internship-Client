import Swal from "sweetalert2";
import useAxios from "../Share/Hooks/useAxios";
import { RiDeleteBin2Fill } from "react-icons/ri";

const AllProductsTable = ({product, i, refetch}) => {
    const axiosSecure = useAxios()
    const {_id,brand_image,brand_name,price,name}=product;

    const hendelDelete = (id) => {
        axiosSecure.delete(`/mobile/delete/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull Products Deleted",
              showConfirmButton: false,
              background: "#07163d",
              color: "white",
              timer: 2000,
            });
          }
        });
      };
    return (
        <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[100px] text-left text-lg">
        <img src={brand_image} alt="" className="w-[50px] h-[50px] rounded-[50%]" />
      </td>
      <td className="text-lg text-black  text-center">{brand_name}</td>
      <td className="text-lg text-black text-center">{name}</td>
      <td className="text-lg text-black text-center w-[200px]">${price}</td>
      <td className="text-lg text-black flex-1 ">
        <div
          onClick={() => hendelDelete(_id)}
          className="bg-[#07163d] text-3xl text-white flex justify-center py-2 rounded"
        >
          <RiDeleteBin2Fill />
        </div>
      </td>
    </tr>
    );
};

export default AllProductsTable;