'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md border-b border-gray-200'
                : 'bg-black/20 backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <img src='Logo.png' className="w-18 h-18 flex items-center justify-center" alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <Link
                            href="/"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/central-heating"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            Central Heating
                        </Link>
                        <Link
                            href="/gas-work"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            Gas Work
                        </Link>
                        <Link
                            href="/boiler-breakdown"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            Boiler Breakdown
                        </Link>
                        <Link
                            href="/other-services"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            Other Services
                        </Link>
                        <Link
                            href="/special-offer"
                            className={`hover:text-orange-500 transition-colors duration-200 text-lg font-medium whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            Special Offer
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-[#FBAA18] to-[#EF4423] hover:from-[#EF4423] hover:to-[#FBAA18] text-white px-5 py-2 rounded-xl transition-all duration-300 ease-in-out text-lg font-medium"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/central-heating"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Central Heating
                    </Link>
                    <Link
                        href="/gas-work"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Gas Work
                    </Link>
                    <Link
                        href="/boiler-breakdown"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Boiler Breakdown
                    </Link>
                    <Link
                        href="/other-services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Other Services
                    </Link>
                    <Link
                        href="/special-offer"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Special Offer
                    </Link>
                    <Link
                        href="/contact"
                        className="block w-fit px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-[#FBAA18] to-[#EF4423] text-white hover:bg-orange-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}