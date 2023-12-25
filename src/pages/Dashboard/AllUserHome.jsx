import { useState } from "react";
import useUsers from "../../Share/Hooks/useUsers";
import ShareTitle from "../../Share/ShareTitle";
import AllUsersHomeCrad from "./AllUsersHomeCrad";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const AllUserHome = () => {
    const [currentPage, setCurrentPage] = useState(1);
const { usersdata } = useUsers();

const ItemsPerPage = 6;
const indexOfLastItem = currentPage * ItemsPerPage;
const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
const currentItems = usersdata?.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(usersdata.length / ItemsPerPage);
  return (
    <section>
      <ShareTitle heading="User" title="All User Information" />
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems?.map((data) => (
          <AllUsersHomeCrad key={data._id} data={data} />
        ))}
      </div>
      <div className="w-full lg:w-[400px] m-auto py-5">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default AllUserHome;
