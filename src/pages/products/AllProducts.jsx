import { motion } from "motion/react";
import CardFull from "../../components/products/CardFull";

export default function AllProducts(){
    return(
        <section className="p-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8 text-center"
            >
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    All <span className="text-indigo-400">Produts</span>
                </h2>
                <p className="mx-auto max-w-2xl text-slate-400">
                    All availables products, browse, order and get delivered within weeks
                </p>
            </motion.div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <CardFull />
                <CardFull />
                <CardFull />
                <CardFull />
                <CardFull />
                <CardFull />
            </section>
        </section>
    );
}