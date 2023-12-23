import useAxios from "./useAxios";
import Auth from "../AuthProvider/Auth";
import { useQuery } from "@tanstack/react-query";
const useBuyNowProducts = () => {
  const { user } = Auth();
  const axiosSecure = useAxios();
  const {data: buyNow=[], isLoading, refetch,  } = useQuery({
    queryKey: ['repoData',user?.email],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/buynow?email=${user?.email}`)
        return res.data
    }
  })
  return { buyNow, isLoading, refetch, };
};

export default useBuyNowProducts;
