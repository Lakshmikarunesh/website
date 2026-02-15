import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import BentoGrid from './BentoGrid';

const projects = [
  {
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1771151187/Screenshot_2026-02-15_155556_h6szkb.png',
    title: 'Arsa Adventures',
    category: 'Landing Page',
    description: 'Designed and developed a visually stunning landing page for Arsa Adventures, a company that offers adventure tourism services.',
    tags: ['React'],
    link: 'https://www.arsaadventures.com/',
    colSpan: 'md:col-span-4'
  },
  {
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1741936673/spike_wd5mng.jpg',
    title: 'I Love Spikes',
    category: 'E-commerce',
    description: 'Branding and E-commerce website for I Love Spikes, a company that sells spikes.',
    tags: ['React', 'Shopify'],
    link: '#',
    colSpan: 'md:col-span-2'
  },
  {
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1771151604/White_Illustrative_Real_Estate_Logo_f3ffhd.png',
    title: 'Mahalakshmi Constructions',
    category: 'Branding',
    description: 'Complete visual identity redesign for a real estate company.',
    tags: ['Figma', 'Illustrator', 'Canva'],
    link: '#',
    colSpan: 'md:col-span-3'
  },
  {
    image: 'https://res.cloudinary.com/dmip7daqc/image/upload/v1771151895/Screenshot_2026-02-15_160737_estp9x.png',
    title: 'FinCut',
    category: 'SaaS Platform',
    description: 'Collabrative expense management tool for small teams.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    link: '#',
    colSpan: 'md:col-span-3'
  },
];

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-black">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-purple-500 font-medium tracking-wider uppercase mb-2 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
          View All Projects <ArrowUpRight size={16} />
        </button>
      </div>

      <BentoGrid>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 ${project.colSpan} min-h-[400px]`}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-purple-400 text-sm font-medium mb-2 block">{project.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/5 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Link Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </BentoGrid>

      <div className="mt-12 text-center md:hidden">
        <button className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1">
          View All Projects <ArrowUpRight size={16} />
        </button>
      </div>
    </Section>
  );
};

export default Portfolio;
