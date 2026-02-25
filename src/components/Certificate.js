'use client';

import { motion } from 'framer-motion';

export default function Certificate() {
    // Animation variants for the container and children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Time between each card appearing
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className="relative w-full py-24 bg-gradient-to-r from-black via-zinc-900 to-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
                        CERTIFIED & <span className="text-[#FBAA18]">TRUSTED</span>
                        <br />
                        <span className="text-[#EF4423]">GAS ENGINEERS</span>
                    </h2>
                    <p className="mt-4 text-white/70 max-w-3xl mx-auto">
                        Fully qualified to carry out safe, legal, and compliant gas work across
                        domestic and commercial properties.
                    </p>
                </motion.div>

                {/* Cards Container */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >

                    {/* Domestic Card */}
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl border border-[#FBAA18]/30 bg-white/5 backdrop-blur-xl p-10 shadow-2xl group transition-colors hover:border-[#FBAA18]/60"
                    >
                        <h3 className="text-2xl font-bold text-[#FBAA18] mb-4">
                            Certified for Domestic Gas Work
                        </h3>
                        <ul className="space-y-3 text-white/75">
                            {[
                                "Gas boilers & heating systems",
                                "Cookers & gas appliances",
                                "Landlord gas safety certificates",
                                "Home inspections & repairs"
                            ].map((item, i) => (
                                <motion.li 
                                    key={i} 
                                    variants={itemVariants}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-[#FBAA18]">✔</span> {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Commercial Card */}
                    <motion.div 
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl border border-[#EF4423]/30 bg-white/5 backdrop-blur-xl p-10 shadow-2xl group transition-colors hover:border-[#EF4423]/60"
                    >
                        <h3 className="text-2xl font-bold text-[#EF4423] mb-4">
                            Certified for Commercial Gas Work
                        </h3>
                        <ul className="space-y-3 text-white/75">
                            {[
                                "Commercial boilers & plant rooms",
                                "Catering & restaurant gas systems",
                                "Offices, factories & retail units",
                                "Compliance & safety inspections"
                            ].map((item, i) => (
                                <motion.li 
                                    key={i} 
                                    variants={itemVariants}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-[#EF4423]">✔</span> {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Micro trust */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-center text-white/50 text-sm mt-12"
                >
                    All gas work carried out in full compliance with UK Gas Safety Regulations.
                </motion.p>
            </div>
        </section>
    );
}