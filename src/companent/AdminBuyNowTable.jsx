import Swal from "sweetalert2";
import useAxios from "../Share/Hooks/useAxios";

const AdminBuyNowTable = ({ product, refetch, i }) => {
  const axiosSecure = useAxios();
  const hendelConfirm = (id) => {
    axiosSecure.patch(`/allbuynow/confirm?id=${id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Buy Now Updated",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  const hendelRejected = (id) => {
    axiosSecure.patch(`/allbuynow/rejected?id=${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Usre Deleted",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  const { _id, user_photo, user_name, price, name, state } = product;
  return (
    <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[100px] text-left text-lg">
        <img
          src={user_photo}
          alt=""
          className="w-[50px] h-[50px] rounded-[50%]"
        />
      </td>
      <td className="text-lg text-black text-center">{user_name}</td>
      <td className="text-lg text-black  text-center">{name}</td>
      <td className="text-lg text-black flex-1 ">{price}</td>
      <td>
        <div
          onClick={() => hendelConfirm(_id)}
          className={`${
            state === "Confirm" ? "bg-[#3D8AD0]" : "bg-[#07163d]"
          } text-xl text-white flex justify-center py-1 rounded`}
        >
          {state === "Confirm" ? "Success" : "Confirm"}
        </div>
      </td>
      <td>
        <div
          onClick={() => hendelRejected(_id)}
          className={`${
            state === "Rejected" ? "bg-[#3D8AD0]" : "bg-[#07163d]"
          } text-xl text-white flex justify-center py-1 rounded`}
        >
          {state === "Rejected" ? "Cancel" : "Rejected"}
        </div>
      </td>
    </tr>
  );
};
export default AdminBuyNowTable;
