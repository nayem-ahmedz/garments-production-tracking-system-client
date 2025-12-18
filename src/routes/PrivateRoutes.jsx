import { Navigate, useLocation } from "react-router";
import Loading from "../components/utils/Loading";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({children}){
    const { currentUser, loading } = useAuth();
    const location = useLocation();
    if(loading){
        return <Loading />;
    }
    if(!currentUser){
        return <Navigate to='/auth/login' state={location.pathname} />
    }
    return children;
}