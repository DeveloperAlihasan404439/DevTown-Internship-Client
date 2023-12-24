import useAllProducts from "../../Share/Hooks/useAllProducts";
import AllProductsTable from "../../companent/AllProductsTable";
import Loading from "../../companent/Loading";

const AllProducts = () => {
    const { products, isLoading, refetch, } = useAllProducts()
    return (
        <div >
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
          All Prodicts Calection
        </h1>
          <div className="w-10/12 mx-auto overflow-x-auto border-x-2   rounded-t-[30px]">
            <table className="table w-full">
              <thead>
                <tr className="w-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white ">
                  <th></th>
                  <th className="text-xl">Photo</th>
                  <th className="text-xl text-center">Brand</th>
                  <th className="text-xl text-center">Name</th>
                  <th className="text-xl text-center">Price</th>
                  <th className="text-xl text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, i) => (
                  <AllProductsTable key={i} product={product} i={i} refetch={refetch}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    );
};

export default AllProducts;