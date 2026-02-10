'use client';

import Image from 'next/image';

export default function Cta() {
    return (
        <section className="w-full bg-gradient-to-r from-black via-zinc-900 to-black py-16 mb-2">
            <div className="max-w-7xl mx-auto px-6">
                {/* CTA Content */}
                <div className="text-center mb-12">
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        FOR <span className='text-[#FBAA18]'>EXPERT</span>  AND TAILOR-FIT <span className='text-[#EF4423]'>PLUMBING</span> SERVICES, VISIT US
                    </h2>
                    <p className="text-white text-lg md:text-xl font-medium mb-8">
                        ELEMENT HOUSE, CHRISTOPHER CLOSE, WEST BROMWICH
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transition duration-300 cursor-pointer">
                            EMAIL US
                        </button>
                        <button className="px-8 py-3 bg-white text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition duration-300 shadow-lg cursor-pointer">
                            CALL 0121 295 9888
                        </button>
                    </div>
                </div>

                {/* Certification Logos */}
                <div className="bg-[#fff] rounded-lg py-8 px-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {/* City & Guilds */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/work1.png"
                                alt="City & Guilds Qualified"
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>

                        {/* Gas Safe */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/work2.png"
                                alt="Gas Safe Registered"
                                width={100}
                                height={60}
                                className="object-contain"
                            />
                        </div>

                        {/* Vaillant */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/work3.png"
                                alt="Vaillant"
                                width={140}
                                height={60}
                                className="object-contain"
                            />
                        </div>

                        {/* Baxi */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/assets/work4.png"
                                alt="Baxi"
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}