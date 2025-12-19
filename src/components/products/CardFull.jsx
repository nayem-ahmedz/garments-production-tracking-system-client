import { motion } from "motion/react";

export default function CardFull() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2 * 0.12 }}
            whileHover={{ y: -6 }}
            className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-base">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <h3 className="text-xl">Price : $100</h3>
                <div className="card-actions justify-between mt-2">
                    <div className="btn btn-primary btn-outline">Add to cart</div>
                    <div className="btn btn-primary btn-outline">View Details</div>
                </div>
            </div>
        </motion.div>
    );
}