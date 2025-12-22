import { Link, Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import useRole from "../../hooks/useRole";
import Loading from "../../components/utils/Loading";

export default function Dashboard() {
    const { role, isLoading } = useRole();
    if(isLoading) return <section className="min-h-screen w-full flex justify-center items-center"><Loading /></section>
    return (
        <section className="drawer lg:drawer-open min-h-screen containerr2">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <section className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <GiHamburgerMenu className="text-2xl"/>
                    </label>
                    <div className="px-2 grow">Navbar Title</div>
                    <div>
                        <Link to='/' className="btn btn-secondary btn-outline">Exit Dashboard</Link>
                    </div>
                </nav>

                {/* Page content here */}
                <section>
                    <Outlet />
                </section>
            </section>
            <Sidebar role={role} />
        </section>
    );
}