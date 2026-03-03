import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className="text-5xl font-extrabold mb-4">
                    Hasan Master
                </h2>
                <p className="text-xl text-primary mb-4">
                    Full Stack Engineer – Software Developer
                </p>
                <p className="text-gray-400 max-w-xl mb-6">
                    I build scalable systems that bridge business strategy with engineering execution.
                </p>
                <p className="text-gray-500 mb-6">
                    Malton – Mississauga, ON, Canada
                </p>
                <div className="flex gap-4">
                    <a href="https://github.com/MasterHasan095" className="border px-4 py-2 rounded hover:bg-primary hover:text-black transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/hasan-master/" className="border px-4 py-2 rounded hover:bg-primary hover:text-black transition">LinkedIn</a>
                </div>
            </motion.div>
        </section>
    )
}