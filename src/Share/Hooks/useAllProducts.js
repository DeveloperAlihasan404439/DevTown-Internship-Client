import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllProducts = () => {
    const axiosSecure = useAxios();
  const {data: products=[], isLoading, refetch,  } = useQuery({
    queryKey: ['products',],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/mobile`)
        return res.data
    }
  })
  return { products, isLoading, refetch, };
};

export default useAllProducts;