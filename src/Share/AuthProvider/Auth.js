import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
const Auth = () => {
    const authContext = useContext(AuthContext)
    return authContext;
};

export default Auth;