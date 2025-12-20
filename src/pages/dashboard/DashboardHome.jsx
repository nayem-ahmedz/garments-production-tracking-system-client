import { lazy } from "react";
import useRole from "../../hooks/useRole";
const AdminDashboard = lazy(() => import('./AdminDashboard'));
const ManagerDashboard = lazy(() => import('./ManagerDashboard'));
const BuyerDashboard = lazy(() => import('./BuyerDashboard'));

export default function DashboardHome(){
    const { role } = useRole();
    console.log(role)
    if(role === 'admin'){
        return <AdminDashboard />
    } else if(role === 'manager'){
        return <ManagerDashboard />
    }
    return <BuyerDashboard />;
}