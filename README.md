# pagination code  

import ResponsivePagination from "react-responsive-pagination";
import 'react-responsive-pagination/themes/classic.css';

const ItemsPerPage = 15;
const indexOfLastItem = currentPage \* ItemsPerPage;
const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
const currentItems = brandData?.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(brandData.length / ItemsPerPage);
console.log(currentItems);

<div className="w-full lg:w-[400px] m-auto py-5">
    <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
    />
</div>
