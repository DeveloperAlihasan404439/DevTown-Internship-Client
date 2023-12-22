import { useEffect, useState } from "react";
import useAxios from "./useAxios";
const useBrands = () => {
    const [brands, setBrands] = useState([])
    const axiosSecure = useAxios()
    useEffect(()=>{
        axiosSecure.get('/brand')
        .then(res =>setBrands(res.data))
    },[axiosSecure])
    return {brands};
};

export default useBrands;