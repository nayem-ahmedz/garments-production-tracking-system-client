import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function ManageProducts() {
    const { currentUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    // data fetch using tanstack query
    const { data: products = [] } = useQuery({
        queryKey: ['products', currentUser.email],
        queryFn: async () => {
            const response = await axiosSecure.get('/api/products/my?limit=6');
            return response.data.products;
        }
    });
    return (
        <section className="p-4">
            <h2 className="text-2xl md:text-3xl my-4 text-center">All Products</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment Option</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={product.images[0]} alt={product.name} />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.paymentOption}</td>
                                <td className="flex gap-3 items-center">
                                    <button type='button' className="btn btn-primary">btn1</button>
                                    <button type='button' className="btn btn-primary">btn2</button>
                                    <button type='button' className="btn btn-primary">btn3</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}