import useUsers from "../../Share/Hooks/useUsers";
import Loading from "../../companent/Loading";
import UsersDataTable from "../../companent/UsersDataTable";

const UsersData = () => {
    const { usersdata, isLoading, refetch, } = useUsers()
    return (
        <div >
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
          All Users Calection
        </h1>
          <div className="w-10/12 mx-auto overflow-x-auto border-x-2   rounded-t-[30px]">
            <table className="table w-full">
              <thead>
                <tr className="w-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white ">
                  <th></th>
                  <th className="text-xl">Photo</th>
                  <th className="text-xl text-center">Name</th>
                  <th className="text-xl text-center">Email</th>
                  <th className="text-xl text-center">Roll</th>
                  <th className="text-xl text-center">Updated</th>
                  <th className="text-xl text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {usersdata?.map((userAll, i) => (
                  <UsersDataTable key={i} userAll={userAll} i={i} refetch={refetch}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersData;