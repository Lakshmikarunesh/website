import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradient for the section */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl p-10 md:p-16 overflow-hidden group transition-all duration-500 hover:border-purple-500/30 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-purple-900/20">

                        {/* Card Internal Gradients/Glows */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-blue-600/10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                            {/* Left Side: Content */}
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4 leading-tight">
                                    <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                        Ready to Build Something Amazing?
                                    </span>
                                </h2>
                                <p className="text-white/60 text-lg md:text-xl max-w-xl">
                                    Let's collaborate to turn your vision into a powerful digital product.
                                </p>
                            </div>

                            {/* Right Side: Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 flex items-center justify-center gap-2">
                                    Start Your Project
                                    <ArrowRight size={20} />
                                </button>

                                <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2">
                                    Schedule a Call
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
