import { motion } from "motion/react";
import Card from "../../components/products/Card";

export default function OurProducts() {
    return (
        <section className="p-4 py-10">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 text-center"
            >
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    Our <span className="text-indigo-400">Produts</span>
                </h2>
                <p className="mx-auto max-w-2xl text-slate-400">
                    A simple and transparent workflow that connects buyers, managers, and
                    production teams from order to delivery.
                </p>
            </motion.div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </section>
    );
}