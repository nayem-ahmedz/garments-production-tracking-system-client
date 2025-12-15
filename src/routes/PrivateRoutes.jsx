import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/utils/Loading";

export default function PrivateRoute({children}){
    const { currentUser, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading />;
    }
    if(!currentUser){
        return <Navigate to='/auth/login' state={location.pathname} />
    }
    return children;
}