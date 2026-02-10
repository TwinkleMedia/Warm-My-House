'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function MarqueeCarousel() {
    const [isPaused, setIsPaused] = useState(false);

    const cards = [
        {
            title: 'Home Heating',
            subtitle: 'Services',
            gradient: 'from-orange-500 to-yellow-400',
            image: '/assets/homeHeating.jpg'
        },
        {
            title: 'Gas Installation',
            subtitle: 'Services',
            gradient: 'from-gray-800 to-gray-600',
            image: '/assets/gasInstall.jpg'
        },
        {
            title: 'Boiler Fault Repairs',
            subtitle: 'Services',
            gradient: 'from-green-600 to-green-400',
            image: '/assets/boiler.jpg'
        },
        {
            title: '24/7 Plumbing Assistance',
            subtitle: 'Services',
            gradient: 'from-blue-600 to-cyan-400',
            image: '/assets/plumbing.webp'
        },
        {
            title: 'Pipe Installation & Repairs',
            subtitle: 'Services',
            gradient: 'from-pink-500 to-red-400',
            image: '/assets/pipeInstall.jpg'
        },
        {
            title: 'Landlord Safety Checks',
            subtitle: 'Services',
            gradient: 'from-orange-500 to-yellow-400',
            image: '/assets/landlord.jpg'
        },
        {
            title: 'Smart Heating Controls',
            subtitle: 'Services',
            gradient: 'from-gray-800 to-gray-600',
            image: '/assets/SmartHeating.jpg'
        },
        {
            title: 'System Power Flushing',
            subtitle: 'Services',
            gradient: 'from-green-600 to-green-400',
            image: '/assets/powerFlushing.webp'
        }
    ];

    return (
        <div className="bg-[#fff] py-20 overflow-hidden">
            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex gap-7">
                    {/* First set of cards */}
                    <div
                        className={`flex gap-7 ${isPaused ? '' : 'animate-scroll'}`}
                        style={{
                            animation: isPaused ? 'none' : 'scroll 30s linear infinite'
                        }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={`first-${index}`}
                                className="relative w-[352px] h-[198px] rounded-2xl overflow-hidden flex-shrink-0 group"
                            >
                                {/* Video */}

                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    priority={false}
                                />

                                {/* Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} mix-blend-multiply opacity-50`}
                                />

                                {/* Content */}
                                <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                                    <span className="text-xs uppercase tracking-wider p-2 bg-white/60 block w-fit rounded-full text-white">
                                        {card.subtitle}
                                    </span>
                                    <h3 className="text-4xl font-light leading-tight">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div
                        className={`flex gap-7 ${isPaused ? '' : 'animate-scroll'}`}
                        style={{
                            animation: isPaused ? 'none' : 'scroll 30s linear infinite'
                        }}
                        aria-hidden="true"
                    >
                        {cards.map((card, index) => (
                            <div
                                key={`second-${index}`}
                                className="relative w-[352px] h-[198px] rounded-2xl overflow-hidden flex-shrink-0 group"
                            >
                                {/* Video */}
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                >
                                    <source src={card.video} type="video/mp4" />
                                </video>

                                {/* Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} mix-blend-multiply opacity-50`}
                                />

                                {/* Content */}
                                <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                                    <span className="text-xs uppercase tracking-wider">
                                        {card.subtitle}
                                    </span>
                                    <h3 className="text-4xl font-light leading-tight">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-352px * 5 - 1.75rem * 5));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
        </div>
    );
}