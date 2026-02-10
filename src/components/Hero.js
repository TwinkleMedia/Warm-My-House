'use client';

import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
    return (
        <section className="relative w-full bg-[#1D1D1D] overflow-hidden min-h-[800px] flex items-center pt-20">
            <Image
                src="/assets/plumbingbg.jpg"
                alt="Heating and Plumbing Background"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-0"></div>

            {/* 3. Content - Ensure z-10 so it stays above the overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 w-full">
                <div className="text-center">
                    <div className="text-white space-y-6">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="block text-[#FBAA18] mb-2 uppercase">
                                Reliable Gas, Heating & Plumbing Solutions
                            </span>
                            <span className="block text-white">
                                YOU CAN TRUST
                            </span>
                        </h1>

                        <p className="text-gray-200 text-sm md:text-lg lg:text-xl font-light max-w-2xl mx-auto">
                            Fast response • Certified engineers • Honest pricing
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/services"
                                className="inline-block bg-gradient-to-r from-[#FBAA18] to-[#EF4423] 
                   hover:scale-105 active:scale-95
                   text-white font-bold px-10 py-4 rounded-xl 
                   transition-all duration-300 ease-in-out
                   shadow-[0_0_20px_rgba(239,68,35,0.3)] hover:shadow-[0_0_25px_rgba(239,68,35,0.5)]
                   animate-pulse-slow
                   text-sm md:text-base"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}