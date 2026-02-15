import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CutsComingSoon = () => {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center pt-24">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
                        <Sparkles size={14} className="text-purple-400" />
                        <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Introducing</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-100">
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                            Cuts
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4 animate-fade-in-up animation-delay-200">
                        AI-powered short video and caption generation platform
                    </p>

                    <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
                        We're building something powerful to automate your content creation workflow.
                        Create viral clips in seconds.
                    </p>

                    {/* Coming Soon & Notify */}
                    <div className="flex flex-col items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
                        <div className="text-2xl font-bold text-white tracking-tight">
                            Coming Soon — Stay Tuned
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2">
                                Notify Me
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            Get early access and exclusive updates. No spam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CutsComingSoon;
