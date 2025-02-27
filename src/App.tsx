import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Smartphone, Layers, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <nav className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-sm bg-transparent ${
        isScrolled ? 'py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-playfair font-medium">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                TECHLOGX
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Portfolio', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity transform hover:scale-105 duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Portfolio />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                TECHLOGX
              </h3>
              <p className="text-gray-400">
                Crafting unique digital experiences with modern technology.
              </p>
              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    <Icon size={20} className="text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'UI/UX Design', 'App Development', 'Branding'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-purple-400" />
                  <span className="text-gray-400">careers@techlogx.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-purple-400" />
                  <span className="text-gray-400">6369952428</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin size={18} className="text-purple-400" />
                  <span className="text-gray-400">Bangalore</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 TECHLOGX. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;