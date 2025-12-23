import CardFull from "../../components/products/CardFull";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export default function AllProducts() {
    const axios = useAxios();
    // data fetch using tanstack query
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', 'all-products'],
        queryFn: async () => {
            const response = await axios.get('/api/products');
            return response.data.products;
        }
    });
    return (
        <section className="p-4 py-10">
            <title>All Products</title>
            <div className="text-center mb-16">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    All <span className="text-indigo-400">Produts</span>
                </h2>
                <p className="mx-auto max-w-2xl text-slate-400">
                    All availables products, browse, order and get delivered within weeks
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 min-h-[400px]">
                {
                    isLoading ? <span className="loading loading-spinner loading-lg col-span-full mx-auto mt-10"></span> : products.length > 0 ? products.map(product => <CardFull key={product._id} product={product} />) : <p className="col-span-full mx-auto mt-10 text-xl md:text-2xl text-red-500">Opps! Products is not available right now</p>
                }
            </section>
        </section>
    );
}