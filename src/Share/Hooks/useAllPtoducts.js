import { useState } from "react";
import useAxios from "./useAxios";

const useAllPtoducts = () => {
    const axiosSecure = useAxios()
    const [gallery, setGallery] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    useEffect(() => {
      fetchData();
    }, [page]);
  
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(
          `/mobile?offset=${
            (page - 1) * itemsPerPage
          }&limit=${itemsPerPage}`
        );
        const data = await res.json();
        setGallery((prevGallery) => [...prevGallery, ...data]);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };
  
    const fetchMoreData = () => {
      setPage((prevPage) => prevPage + 1);
    };
      return {gallery,fetchMoreData}
};

export default useAllPtoducts;

