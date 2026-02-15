import React from 'react';
import { Search, PenTool, Code2, Rocket, Headset } from 'lucide-react';
import Section from './Section';

const steps = [
    { icon: Search, title: 'Discovery', description: 'We dive deep into your business goals and user needs.' },
    { icon: PenTool, title: 'Design', description: 'Crafting pixel-perfect designs and intuitive prototypes.' },
    { icon: Code2, title: 'Development', description: 'Building robust, scalable, and secure solutions.' },
    { icon: Rocket, title: 'Launch', description: 'Rigorous testing and seamless deployment to production.' },
    { icon: Headset, title: 'Support', description: 'Ongoing maintenance and optimization for growth.' },
];

const Process = () => {
    return (
        <Section className="bg-gradient-to-b from-black to-indigo-950/20">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Process</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A proven methodology to deliver exceptional results, every time.
                </p>
            </div>

            <div className="relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute top-[40px] left-0 w-full h-0.5 bg-gradient-to-r from-white/5 via-purple-500/20 to-white/5"></div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group text-center">
                            {/* Step Number Badge */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-white/5 select-none transition-colors group-hover:text-purple-500/10">
                                0{index + 1}
                            </div>

                            {/* Icon Circle */}
                            <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-300">
                                <step.icon size={32} className="text-gray-400 group-hover:text-purple-400 transition-colors" />

                                {/* Active Dot on Line */}
                                <div className="hidden md:block absolute top-1/2 -left-1/2 w-full h-0.5 bg-transparent" />
                            </div>

                            <h3 className="text-xl font-bold font-playfair text-white mb-3 group-hover:text-purple-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Process;
