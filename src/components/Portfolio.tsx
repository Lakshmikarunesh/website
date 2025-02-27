import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'EcoTech Platform',
    category: 'Web Development',
    description: 'A sustainable technology platform for environmental monitoring.',
  },
  {
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'FinanceFlow App',
    category: 'App Design',
    description: 'Modern banking application with seamless user experience.',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'DataViz Dashboard',
    category: 'UI/UX Design',
    description: 'Data visualization dashboard for business analytics.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-500/10 border border-purple-500/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;