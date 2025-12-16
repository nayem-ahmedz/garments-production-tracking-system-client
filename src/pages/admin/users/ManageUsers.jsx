import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";

export default function ManageUsers() {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get('/api/admin/users');
            return response.data.users;
        }
    });
    console.log(users);
    return (
        <section className="p-4">
            <h2>All Users</h2>
            <ul className="list bg-base-100 rounded-box shadow-md max-w-5xl mt-4">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">List of all exisiting users</li>
                {
                    users.map(user => <UserCard user={user} key={user._id} />)
                }
            </ul>
        </section>
    );
}