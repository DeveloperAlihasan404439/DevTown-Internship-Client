import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUsers = () => {
  const axiosSecure = useAxios();
  const {data: usersdata=[], isLoading, refetch,  } = useQuery({
    queryKey: ['usersdata',],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/usersdata`)
        return res.data
    }
  })
  return { usersdata, isLoading, refetch, };
};

export default useUsers;