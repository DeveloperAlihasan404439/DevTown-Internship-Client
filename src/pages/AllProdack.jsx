import { useEffect, useState } from "react";
import useAxios from "../Share/Hooks/useAxios";
import ShareTitle from "../Share/ShareTitle";
import AllProdackCrad from "../companent/AllProdackCrad";
import mobilebanner from "../assets/images/mobile-banner.png";
import Loading from "../companent/Loading";
const AllProdack = () => {
  const [brand, setBrand] = useState("");
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure.get("/mobile").then((res) => {
      setAllProducts(res.data);
      setLoader(false);
    });
  }, [axiosSecure]);
  //------------ search product start code ----------------
  function brandSearch(allProducts, brand, search) {
    let brandSearchAll = allProducts;
    if (search) {
      brandSearchAll = brandSearchAll.filter(
        ({ name, price, os, memory, processor, type }) =>
          (name && name.toLowerCase().includes(search.toLowerCase())) ||
          (memory && memory.toLowerCase().includes(search.toLowerCase())) ||
          (processor &&
            processor.toLowerCase().includes(search.toLowerCase())) ||
          (type && type.toLowerCase().includes(search.toLowerCase())) ||
          (os && os.toLowerCase().includes(search.toLowerCase())) ||
          (price && price.toString().includes(search))
      );
    }
    if (brand) {
      brandSearchAll = brandSearchAll.filter(
        (branddata) => branddata.brand_name === brand
      );
    }
    return brandSearchAll;
  }
  const brandData = brandSearch(allProducts, brand, search);


  return (
    <>
      <img src={mobilebanner} alt="" className="w-full" />
      <ShareTitle heading="Products" title="All Products Services" />
      <div className="w-11/12 lg:w-8/12 mx-auto md:flex gap-6 items-center justify-between mb-10">
        <div className="flex items-center gap-1 bg-gradient-to-r from-[#07163d] to-[#3D8AD0] md:w-[50%] rounded-lg mb-6 md:mb-0">
          <h1 className="text-xl pl-3 font-normal text-white">
            Search Products
          </h1>
          <input
            type="text"
            placeholder="search text"
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none bg-transparent border-none text-white py-3 px-3"
          />
        </div>
        <div className="flex items-center gap-1 bg-gradient-to-r from-[#07163d] to-[#3D8AD0] md:w-[50%] rounded-lg">
          <h1 className="text-xl pl-3 font-normal text-white">Select Brand</h1>
          <select
            onChange={(e) => setBrand(e.target.value)}
            className="outline-none bg-transparent border-none text-white py-3 px-3 w-[70%]"
          >
            <option
              disabled
              selected
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Pick your favorite Simpson
            </option>
            <option
              value="Oppo"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Oppo
            </option>
            <option
              value="Symphony"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Symphony
            </option>
            <option
              value="Samsung"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Samsung
            </option>
            <option
              value="Walton"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Walton
            </option>
            <option
              value="Xiaomi"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Xiaomi
            </option>
            <option
              value="Realme"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Realme
            </option>
            <option
              value="LG"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              LG
            </option>
            <option
              value="Nokia"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Nokia
            </option>
            <option
              value="Amazon"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Amazon
            </option>
            <option
              value="iPhone"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              iPhone
            </option>
            <option
              value="Huawei"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Huawei
            </option>
            <option
              value="Vivo"
              style={{ backgroundColor: "#07163d", color: "white" }}
            >
              Vivo
            </option>
          </select>
        </div>
      </div>
      {loader ? (
        <Loading />
      ) : (
        <>
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandData?.map((product) => (
              <AllProdackCrad key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllProdack;
