import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Root from "../layout/public/Root";
import PrivateRoute from "./PrivateRoutes";
import AuthLayout from "../pages/auth/AuthLayout";
const Home = lazy(() => import('../pages/home/Home'));
const Dashboard = lazy(() => import('../layout/dashboard/Dashboard'));
const NoPage = lazy(() => import('../pages/NoPage'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

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
            {
                path: '/dashboard',
                element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
                children: [
                    { path: '*', element: <NoPage /> }
                ]
            },
            { path: '*', element: <NoPage /> }
        ]
    }
]);