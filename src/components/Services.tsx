import React from 'react';
import { Code, Palette, Smartphone, Layers, Bot, Globe, ArrowUpRight } from 'lucide-react';
import Section from './Section';
import BentoGrid from './BentoGrid';
import BentoCard from './BentoCard';

const Services = () => {
  return (
    <Section id="services" className="bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Our Expertise
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg text-center">
          We combine creative design with technical excellence to deliver robust digital solutions.
        </p>
      </div>

      <BentoGrid>
        {/* Large Web Dev Card - Spans 4 columns */}
        <BentoCard
          title="Web Development"
          description="High-performance websites built with React, Next.js, and modern frameworks. We focus on speed, SEO, and scalability."
          icon={<Code />}
          className="md:col-span-4 min-h-[300px]"
        // image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000"
        >
          <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
            <Code size={120} />
          </div>
        </BentoCard>

        {/* UI/UX Card - Spans 2 columns */}
        <BentoCard
          title="UI/UX Design"
          description="Intuitive interfaces that guide users and convert visitors into customers."
          icon={<Palette />}
          className="md:col-span-2 min-h-[300px] bg-gradient-to-br from-purple-900/10 to-transparent"
        />

        {/* App Dev Card - Spans 3 columns */}
        <BentoCard
          title="App Development"
          description="Native and cross-platform mobile apps for iOS and Android using React Native and Flutter."
          icon={<Smartphone />}
          className="md:col-span-3 min-h-[250px]"
        />

        {/* Branding Card - Spans 3 columns */}
        <BentoCard
          title="Branding & Identity"
          description="Complete brand systems including logos, typography, and visual guidelines."
          icon={<Layers />}
          className="md:col-span-3 min-h-[250px]"
        />

        {/* AI Solutions - Spans 6 columns (Full width) */}
        <BentoCard
          title="AI & Machine Learning Solutions"
          description="Leverage the power of AI to automate workflows, analyze data, and create intelligent user experiences. We integrate OpenAI, Claude, and custom models."
          icon={<Bot />}
          className="md:col-span-6 min-h-[250px] border-purple-500/20"
        >
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex gap-4">
              {/* Visual decorative elements for AI */}
              <div className="w-16 h-16 rounded-full bg-purple-500/20 animate-pulse flex items-center justify-center">
                <Bot className="text-purple-400" />
              </div>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-pulse delay-700 flex items-center justify-center">
                <Zap className="text-blue-400" />
              </div>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </Section>
  );
};

// Start Icon helper need import
import { Zap } from 'lucide-react';

export default Services;
