import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export default function useRole(){
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useAuth();
    const { data: role = 'buyer', refetch, isLoading } = useQuery({
        queryKey: ['user-role', currentUser?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/api/users/role?email=${currentUser?.email}`);
            return response.data.role;
        }
    });
    return { role, isLoading };
}