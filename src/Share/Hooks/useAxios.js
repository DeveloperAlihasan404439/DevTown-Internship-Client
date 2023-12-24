import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://internship-task-devtown.vercel.app",
  });
const useAxios = () => {
    return axiosSecure;
};

export default useAxios;