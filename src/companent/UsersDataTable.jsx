import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";
import { FaUserTie,FaUserFriends } from "react-icons/fa";
import useAxios from "../Share/Hooks/useAxios";
import Swal from "sweetalert2";

const UsersDataTable = ({ userAll, i, refetch }) => {
  const axiosSecure = useAxios();
  const { _id, photo, name, email,roll } = userAll;
  const hendelUpdated = (id) => {
    axiosSecure.put(`/usersdata/updated?id=${id}`,userAll).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfull Usre Updated",
          showConfirmButton: false,
          background: "#07163d",
          color: "white",
          timer: 2000,
        });
      }
    });
  };
  const hendelDelete = (id) => {
    axiosSecure.delete(`/usersdata/delete/${id}`).then((res) => {
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
  return (
    <tr className="bg-base-100 border-b-2 border-black">
      <th className="w-[70px]">{i + 1}</th>
      <td className="w-[100px] text-left text-lg">
        <img src={photo} alt="" className="w-[50px] h-[50px] rounded-[50%]" />
      </td>
      <td className="text-lg text-black  text-center">{name}</td>
      <td className="text-lg text-black text-center">{email}</td>
      <td className="text-lg text-black flex-1 w-[100px]">
        <div
          className={`${roll==="Admin"?'bg-[#07163d]':"bg-[#215ae9]"}  text-3xl text-white flex justify-center py-2 rounded`}
        >
            {
                roll==="Admin"?
                <FaUserTie />:<FaUserFriends/>
            }
        </div>
      </td>
      <td className="text-lg text-black flex-1 w-[100px]">
        <div
          onClick={() => hendelUpdated(_id)}
          className="bg-orange-400 text-3xl text-white flex justify-center py-2 rounded"
        >
          <MdSystemUpdateAlt />
        </div>
      </td>
      <td className="text-lg text-black flex-1 ">
        <div
          onClick={() => hendelDelete(_id)}
          className="bg-red-500 text-3xl text-white flex justify-center py-2 rounded"
        >
          <RiDeleteBin2Fill />
        </div>
      </td>
    </tr>
  );
};

export default UsersDataTable;
