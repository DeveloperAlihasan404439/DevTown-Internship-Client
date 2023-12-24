import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAdminBuyNow = () => {
    const axiosSecure = useAxios();
  const {data: adminBuyNow=[], isLoading, refetch,  } = useQuery({
    queryKey: ['adminBuyNow',],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/allbuynow`)
        return res.data
    }
  })
  return { adminBuyNow, isLoading, refetch, };
};

export default useAdminBuyNow;