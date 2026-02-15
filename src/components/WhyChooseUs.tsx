import React from 'react';
import { Zap, Shield, Code, Scaling, Puzzle } from 'lucide-react';
import Section from './Section';
import BentoGrid from './BentoGrid';
import BentoCard from './BentoCard';

const WhyChooseUs = () => {
    return (
        <Section className="bg-black">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Techlogx</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We don't just build software; we build robust digital assets that drive growth.
                </p>
            </div>

            <BentoGrid>
                <BentoCard
                    title="Fast Delivery"
                    description="We use modern frameworks and agile methodologies to ship products faster without compromising quality."
                    icon={<Zap />}
                    className="md:col-span-3 min-h-[250px] bg-gradient-to-br from-indigo-900/10 to-transparent"
                />

                <BentoCard
                    title="Scalable Architecture"
                    description="Built to grow with your business. We design systems that can handle millions of users."
                    icon={<Scaling />}
                    className="md:col-span-3 min-h-[250px] bg-gradient-to-bl from-purple-900/10 to-transparent"
                />

                <BentoCard
                    title="Modern Tech Stack"
                    description="We stay ahead of the curve, utilizing the latest and most efficient technologies available."
                    icon={<Code />}
                    className="md:col-span-2 min-h-[250px]"
                />

                <BentoCard
                    title="Clean Code"
                    description=" maintainable, documented, and testable code that is easy to extend and debug."
                    icon={<Puzzle />}
                    className="md:col-span-2 min-h-[250px]"
                />

                <BentoCard
                    title="Startup Expertise"
                    description="We understand the unique challenges of startups and build with MVP and scaling in mind."
                    icon={<Shield />}
                    className="md:col-span-2 min-h-[250px]"
                />
            </BentoGrid>
        </Section>
    );
};

export default WhyChooseUs;
