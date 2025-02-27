import React from 'react';
import { ArrowRight, Github, Code2, Figma, Database, Laptop } from 'lucide-react';

const TechIcon = ({ icon: Icon, className = "", delay = "0" }) => (
  <div 
    className={`absolute opacity-20 transform transition-all duration-1000 hover:opacity-40 hover:scale-110 ${className}`}
    style={{ animation: `float 6s ease-in-out ${delay} infinite` }}
  >
    <Icon size={32} />
  </div>
);

const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black opacity-80" />
      
      {/* Floating tech icons */}
      <TechIcon icon={Github} className="top-1/4 left-1/4" delay="0s" />
      <TechIcon icon={Code2} className="top-1/3 right-1/4" delay="1s" />
      <TechIcon icon={Figma} className="bottom-1/3 left-1/3" delay="2s" />
      <TechIcon icon={Database} className="top-1/2 right-1/3" delay="3s" />
      <TechIcon icon={Laptop} className="bottom-1/4 right-1/4" delay="4s" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6 font-playfair">
            <span className="block mb-2 typing-animation">
              Crafting Unique &
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent typing-animation second-line">
              Digital Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            We specialize in crafting unique and impactful design solutions that elevate 
            brands and bring creative visions to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group px-8 py-4 rounded-full bg-purple-500/10 border border-purple-500/30 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                View Work
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;