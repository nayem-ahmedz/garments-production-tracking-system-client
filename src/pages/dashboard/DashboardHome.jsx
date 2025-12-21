import { lazy } from "react";
import useRole from "../../hooks/useRole";
const AdminDashboard = lazy(() => import('./AdminDashboard'));
const ManagerDashboard = lazy(() => import('./ManagerDashboard'));
const BuyerDashboard = lazy(() => import('./BuyerDashboard'));
const Loading = lazy(() => import('../../components/utils/Loading'));

export default function DashboardHome(){
    const { role, isLoading } = useRole();
    console.log(role)
    if(isLoading) return <Loading />;
    if(role === 'admin'){
        return <AdminDashboard />
    } else if(role === 'manager'){
        return <ManagerDashboard />
    }
    return <BuyerDashboard />;
}