import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Root from "../layout/public/Root";
import PrivateRoute from "./PrivateRoutes";
import AuthLayout from "../pages/auth/AuthLayout";
import AdminRoute from "./AdminRoutes";
import ManagerRoute from "./ManagerRoutes";
const Home = lazy(() => import('../pages/home/Home'));
const Dashboard = lazy(() => import('../layout/dashboard/Dashboard'));
const NoPage = lazy(() => import('../pages/NoPage'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const DashboardHome = lazy(() => import('../pages/dashboard/DashboardHome'));
const ManageUsers = lazy(() => import('../pages/admin/users/ManageUsers'));
const AllProducts = lazy(() => import('../pages/products/AllProducts'));
const AddProduct = lazy(() => import('../pages/managers/AddProduct'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    { index: true, element: <Login /> },
                    { path: 'login', element: <Login /> },
                    { path: 'register', element: <Register /> }
                ]
            },
            { path: '/all-products', element: <AllProducts /> },
            { path: '*', element: <NoPage /> }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
        children: [
            { index: true, element: <DashboardHome /> },
            { path: 'home', element: <DashboardHome /> },
            { path: 'manage-users', element: <AdminRoute><ManageUsers /></AdminRoute> },
            { path: 'add-product', element: <ManagerRoute> <AddProduct /> </ManagerRoute> },
            { path: '*', element: <NoPage /> }
        ]
    },
]);