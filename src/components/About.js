'use client';

import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const animatedEls = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        animatedEls?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                /* Base states — hidden before animation */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(36px);
                    transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                                transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .animate-on-scroll.slide-left {
                    transform: translateX(-48px);
                }
                .animate-on-scroll.slide-right {
                    transform: translateX(48px);
                }

                /* Triggered state */
                .animate-on-scroll.in-view {
                    opacity: 1;
                    transform: translate(0, 0);
                }

                /* Staggered delays */
                .delay-100 { transition-delay: 0.1s; }
                .delay-200 { transition-delay: 0.2s; }
                .delay-300 { transition-delay: 0.3s; }
                .delay-400 { transition-delay: 0.4s; }
                .delay-500 { transition-delay: 0.5s; }
                .delay-600 { transition-delay: 0.6s; }

                /* Shimmer accent line */
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                }
                .shimmer-bar {
                    background: linear-gradient(
                        90deg,
                        #EF4423 0%,
                        #FBAA18 40%,
                        #fff    60%,
                        #FBAA18 80%,
                        #EF4423 100%
                    );
                    background-size: 200% auto;
                    animation: shimmer 3s linear infinite;
                    height: 3px;
                    border-radius: 99px;
                    width: 64px;
                }

                /* Image reveal overlay */
                @keyframes revealRight {
                    from { transform: scaleX(1); }
                    to   { transform: scaleX(0); }
                }
                .image-reveal-overlay {
                    transform-origin: left;
                    animation: none;
                }
                .image-wrapper.in-view .image-reveal-overlay {
                    animation: revealRight 0.9s cubic-bezier(0.77, 0, 0.175, 1) 0.15s forwards;
                }

                /* Floating glow behind image */
                @keyframes floatGlow {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
                    50%       { transform: translateY(-12px) scale(1.04); opacity: 0.75; }
                }
                .glow-blob {
                    animation: floatGlow 6s ease-in-out infinite;
                }

                /* Button pulse ring */
                @keyframes pulseRing {
                    0%   { transform: scale(1);   opacity: 0.6; }
                    100% { transform: scale(1.55); opacity: 0; }
                }
                .btn-ring {
                    position: absolute;
                    inset: 0;
                    border-radius: 9999px;
                    background: linear-gradient(to right, #EF4423, #FBAA18);
                    animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    pointer-events: none;
                }

                /* Counter roll-up */
                @keyframes countUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .stat-item.in-view .stat-number {
                    animation: countUp 0.6s ease forwards;
                }
                .stat-item { opacity: 0; }
                .stat-item.in-view { opacity: 1; }
            `}</style>

            <section
                ref={sectionRef}
                className="relative w-full bg-gradient-to-r from-black via-zinc-900 to-black py-16 lg:py-32 overflow-hidden"
            >
                {/* Background decorative blobs */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="glow-blob absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#EF4423]/10 blur-3xl" />
                    <div className="glow-blob absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FBAA18]/10 blur-3xl" style={{ animationDelay: '3s' }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* ── Left Image ── */}
                        <div className="order-2 lg:order-1 animate-on-scroll slide-left image-wrapper">
                            <div className="relative h-[320px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/about.png"
                                    alt="Professional Plumbing & Heating"
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-black/20" />
                                {/* Reveal wipe overlay */}
                                <div className="image-reveal-overlay absolute inset-0 bg-zinc-900 z-10" />
                            </div>

                            {/* Stats strip below image */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {[
                                    { num: '10+', label: 'Years Experience' },
                                    { num: '500+', label: 'Jobs Completed' },
                                    { num: '24/7', label: 'Emergency Cover' },
                                ].map((s, i) => (
                                    <div
                                        key={s.label}
                                        className={`stat-item animate-on-scroll text-center delay-${(i + 3) * 100}`}
                                    >
                                        <p className="stat-number text-2xl font-extrabold text-[#FBAA18]">{s.num}</p>
                                        <p className="text-xs text-white/50 mt-0.5 leading-snug">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Right Content ── */}
                        <div className="order-1 lg:order-2 space-y-8">

                            {/* Shimmer accent */}
                            <div className="animate-on-scroll slide-right delay-100">
                                <div className="shimmer-bar mb-4" />
                            </div>

                            <h2 className="animate-on-scroll slide-right delay-200 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
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
                                <p className="animate-on-scroll slide-right delay-300">
                                    At <span className="text-white font-medium">Warm my house</span>, we deliver dependable
                                    plumbing and heating solutions tailored to your needs. Based in West Birmingham, UK,
                                    we proudly support homes and businesses with prompt, professional service.
                                </p>
                                <p className="animate-on-scroll slide-right delay-400">
                                    From emergency repairs and new installations to boiler servicing,
                                    every job is handled with precision and care. We use high-quality materials
                                    and proven methods to deliver long-lasting results you can rely on.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="pt-4 animate-on-scroll slide-right delay-500">
                                <div className="relative inline-flex">
                                    <div className="btn-ring" />
                                    <button className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EF4423] to-[#FBAA18] px-6 py-3 text-sm font-semibold text-black hover:opacity-80 hover:text-white transition cursor-pointer z-10">
                                        Get a Free Quote
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}