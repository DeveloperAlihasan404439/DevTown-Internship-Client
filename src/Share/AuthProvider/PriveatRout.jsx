import { Navigate, useLocation } from "react-router-dom";
import Auth from "./Auth";
import Loading from "../../companent/Loading";

const PriveatRout = ({children}) => {
    const {user,loading} = Auth()
    const location = useLocation()
    if(user){
        return children
    }
    if(loading){
        return <Loading/>

    }
    return <Navigate state={location.pathname} to='/login'/>;
};

export default PriveatRout;