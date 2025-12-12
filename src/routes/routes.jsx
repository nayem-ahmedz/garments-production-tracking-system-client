import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Root from "../layout/public/Root";
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
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children: [
                    { path: '*', element: <NoPage /> }
                ]
            },
            { path: '*', element: <NoPage /> }
        ]
    }
]);