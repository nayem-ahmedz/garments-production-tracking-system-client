import { Link } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdBorderAll } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import useRole from "../../hooks/useRole";

export default function Sidebar() {
    const { role } = useRole();
    const navLinks = [
        { id: 1, text: 'Dashboard', link: '/dashboard', icon: LuLayoutDashboard },
        { id: 2, text: 'Manage Users', link: '/dashboard/manage-users', icon: FaRegUser },
        { id: 3, text: 'All Products', link: '/dashboard/all-products', icon: GiClothes },
        { id: 4, text: 'All Orders', link: '/dashboard/all-orders', icon: MdBorderAll }
    ];

    // filtered links
    const rolePermissions = {
        admin: ['Dashboard', 'Manage Users', 'All Products', 'All Orders', 'Manage Dashboard', 'Settings'],
        manager: ['Dashboard', 'All Products', 'All Orders'],
        buyer: ['Dashboard', 'All Products', 'All Orders']
    };

    // Function to filter the links based on the role
    const filteredLinks = navLinks.filter(link => rolePermissions[role]?.includes(link.text));
    return (
        <div className="drawer-side is-drawer-close:overflow-visible">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                <ul className="menu w-full grow">
                    <li className="is-drawer-close:hidden text-2xl p-4">Dashboard</li>
                    {
                        filteredLinks.map(link => <li key={link.id}>
                            <Link to={link.link} className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-base" data-tip={link.text}>
                                <link.icon className="text-xl" />
                                <span className="is-drawer-close:hidden"> {link.text} </span>
                            </Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
}