import { useEffect, useState } from "react";
import useAxios from "./useAxios";
const useBrands = () => {
    const [brands, setBrands] = useState([])
    const [loader, setLoader] = useState(true);
    const axiosSecure = useAxios()
    useEffect(()=>{
        axiosSecure.get('/brand')
        .then(res =>{
            setBrands(res.data)
            setLoader()
        })
    },[axiosSecure])
    return {brands,loader};
};

export default useBrands;