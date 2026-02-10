'use client';

export default function About() {
    return (
        <section className="relative w-full bg-gradient-to-r from-black via-zinc-900 to-black py-16 lg:py-32 overflow-hidden">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative h-[320px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/about.png"
                                alt="Professional Plumbing & Heating"
                                className="w-full h-full object-cover"
                            />

                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            <span className="text-[#FBAA18]">
                                TRUSTED PLUMBING & <br />
                                HEATING EXPERTS IN
                            </span>
                            <br />
                            <span className="text-[#EF4423]">
                                WEST BIRMINGHAM
                            </span>
                        </h2>

                        <div className="space-y-5 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                            <p>
                                At <span className="text-white font-medium">Warm my house</span>, we deliver dependable
                                plumbing and heating solutions tailored to your needs. Based in West Birmingham, UK,
                                we proudly support homes and businesses with prompt, professional service.
                            </p>

                            <p>
                                From emergency repairs and new installations to boiler servicing,
                                every job is handled with precision and care. We use high-quality materials
                                and proven methods to deliver long-lasting results you can rely on.
                            </p>
                        </div>

                        {/* Optional CTA */}
                        <div className="pt-4">
                            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EF4423] to-[#FBAA18] px-6 py-3 text-sm font-semibold text-black hover:opacity-80 hover:text-white transition cursor-pointer">
                                Get a Free Quote
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
