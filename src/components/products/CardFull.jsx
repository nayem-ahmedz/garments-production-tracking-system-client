import { motion } from "motion/react";

export default function CardFull({product}) {
    const { name, images, price, category, availableQuantity } = product;
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2 * 0.12 }}
            whileHover={{ y: -6 }}
            className="card bg-base-100 shadow-md dark:bg-gray-800">
            <figure className="aspect-3/2 xl:aspect-square">
                <img src={images[0]} alt={name} className="w-full h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <h3 className="text-xl">Price : ${price}</h3>
                <p className="text-base">Avaible Quantity : {availableQuantity}</p>
                <div className="card-actions justify-between mt-2">
                    <div className="btn btn-primary btn-outline">View Details</div>
                </div>
            </div>
        </motion.div>
    );
}