import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function AllProducts() {
    const { currentUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    // data fetch using tanstack query
    const { data: products = [] } = useQuery({
        queryKey: ['products', currentUser.email],
        queryFn: async () => {
            const response = await axiosSecure.get('/api/admin/products?limit=6');
            return response.data.products;
        }
    });
    console.log(products);
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
                            <th>Category</th>
                            <th>Price</th>
                            <th>Created By</th>
                            <th>Show on Homepage</th>
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
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.addedByEamil}</td>
                                <td>
                                    <input type="checkbox" defaultChecked={product.showOnHome} className="checkbox" />
                                </td>
                                <td className="flex gap-3 items-center">
                                    <button type='button' className="btn btn-primary">btn1</button>
                                    <button type='button' className="btn btn-primary">btn2</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}