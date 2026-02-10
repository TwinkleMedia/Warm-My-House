import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#FBAA18] to-[#EF4423] text-white py-8">
            <div className="container mx-auto px-4">
                {/* Top Section - Company Info */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">WARM MY HOUSE</h2>
                    <p className="text-sm mb-1">Wa 7Bs, Dadaart</p>
                    <p className="text-sm mb-1">45 Walkers Street, Derby DE1 3RN</p>
                    <p className="text-sm">
                        <a href="mailto:info@revivegardens.com" className="hover:underline">
                            info@revivegardens.com
                        </a>
                        {' | '}
                        <a href="tel:01332950900" className="hover:underline">
                            (01) 332 950 900
                        </a>
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-6">
                    <a
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
                        aria-label="YouTube"
                    >
                        <Youtube size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={18} />
                    </a>
                </div>

                {/* Bottom Section - Links and Copyright */}
                <div className="border-t border-white/30 pt-4">
                    <div className="flex flex-wrap justify-center gap-4 text-xs mb-3">
                        <a href="#" className="hover:underline">
                            Terms of Use
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:underline">
                            Privacy & Cookie Policy
                        </a>
                        <span>|</span>
                        <a href="#" className="hover:underline">
                            Trading Terms
                        </a>
                    </div>
                    <p className="text-center text-xs">
                        © 2026, all rights reserved. Designed & Developed by twinkle media hub.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;