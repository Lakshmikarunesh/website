import React from 'react';
import Section from './Section';

// Using simple SVG placeholders or text for logos if imports aren't available, 
// but assuming we can style them nicely.
const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Figma', category: 'Design' },
];

const TechStack = () => {
    return (
        <Section className="border-y border-white/5 bg-white/[0.02]">
            <div className="text-center mb-16">
                <h3 className="text-2xl font-bold font-playfair text-white mb-2">Powering Your Success with</h3>
                <p className="text-purple-400 font-medium">World-Class Technologies</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] transition-all duration-300 text-center"
                    >
                        <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-[10px] px-2 py-0.5 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                            {tech.category}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TechStack;
