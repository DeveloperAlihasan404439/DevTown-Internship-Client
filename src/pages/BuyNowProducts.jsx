import useBuyNowProducts from "../Share/Hooks/useBuyNowProducts";
import BuyNowProductstTable from "../companent/BuyNowProductstTable";
import Loading from "../companent/Loading";

const BuyNowProducts = () => {
  const { buyNow, isLoading, refetch } = useBuyNowProducts();
  const confrim = buyNow?.filter(confirm => confirm.state==="Confirm")
  return (
    <div className="mb-10">
        <div className="relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1682088974202-def5b4b8f31b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob3AlMjBjb3VudGVyJTIwbW9iaWxlfGVufDB8fDB8fHww"
        alt=""
        className="w-full h-[60vh]"
      />
      <div className="absolute left-0 top-0 bg-black/50 w-full h-full flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-white">
          Buy Now Calection
        </h1>
      </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-10/12 mx-auto overflow-x-auto border-x-2 mt-5 md:mt-10  rounded-t-[30px]">
            <table className="table w-full">
              <thead>
                <tr className="w-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white ">
                  <th></th>
                  <th className="text-xl">Photo</th>
                  <th className="text-xl text-center">Name</th>
                  <th className="text-xl text-center">Email</th>
                  <th className="text-xl text-center">Brand</th>
                  <th className="text-xl text-center">Product Name</th>
                  <th className="text-xl text-center">Price</th>
                  <th className="text-xl text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {confrim?.map((userAll, i) => (
                  <BuyNowProductstTable key={i} buyNowSingle={userAll} i={i} refetch={refetch}/>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default BuyNowProducts;
