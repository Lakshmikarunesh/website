import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="text-2xl font-playfair font-bold">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                TECHLOGX
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Crafting unique digital experiences with modern technology.
                            Built for startups and visionary companies.
                        </p>
                        <div className="flex space-x-4">
                            {[Github, Twitter, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'UI/UX Design', 'App Development', 'Branding', 'AI Solutions'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Email us</span>
                                    <a href="mailto:careers@techlogx.com" className="text-gray-300 hover:text-white transition-colors">careers@techlogx.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Call us</span>
                                    <span className="text-gray-300">6369952428</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Visit us</span>
                                    <span className="text-gray-300">Bangalore, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 TECHLOGX. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Designed with</span>
                        <span className="text-red-500">♥</span>
                        <span>by Techlogx Team</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
