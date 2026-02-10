'use client';

export default function Certificate() {
    return (
        <section className="relative w-full py-24 bg-gradient-to-r from-black via-zinc-900 to-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white">
                        CERTIFIED & <span className="text-[#FBAA18]">TRUSTED</span>
                        <br />
                        <span className="text-[#EF4423]">GAS ENGINEERS</span>
                    </h2>
                    <p className="mt-4 text-white/70 max-w-3xl mx-auto">
                        Fully qualified to carry out safe, legal, and compliant gas work across
                        domestic and commercial properties.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Domestic */}
                    <div className="relative rounded-2xl border border-[#FBAA18]/30 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-[#FBAA18] mb-4">
                            Certified for Domestic Gas Work
                        </h3>
                        <ul className="space-y-3 text-white/75">
                            <li>✔ Gas boilers & heating systems</li>
                            <li>✔ Cookers & gas appliances</li>
                            <li>✔ Landlord gas safety certificates</li>
                            <li>✔ Home inspections & repairs</li>
                        </ul>
                    </div>

                    {/* Commercial */}
                    <div className="relative rounded-2xl border border-[#EF4423]/30 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-[#EF4423] mb-4">
                            Certified for Commercial Gas Work
                        </h3>
                        <ul className="space-y-3 text-white/75">
                            <li>✔ Commercial boilers & plant rooms</li>
                            <li>✔ Catering & restaurant gas systems</li>
                            <li>✔ Offices, factories & retail units</li>
                            <li>✔ Compliance & safety inspections</li>
                        </ul>
                    </div>
                </div>

                {/* Micro trust */}
                <p className="text-center text-white/50 text-sm mt-12">
                    All gas work carried out in full compliance with UK Gas Safety Regulations.
                </p>
            </div>
        </section>


    );
}
