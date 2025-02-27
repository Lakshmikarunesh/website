import React from 'react';
import { Code, Palette, Smartphone, Layers, Video, Share2 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Building robust and scalable web applications using cutting-edge technologies.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences that delight your customers.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'App Development',
    description: 'Developing native and cross-platform mobile applications for iOS and Android.',
    gradient: 'from-pink-500 to-red-500',
  },
  {
    icon: <Layers size={32} />,
    title: 'Branding',
    description: 'Crafting unique brand identities that make your business stand out.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: <Video size={32} />,
    title: 'Video Production',
    description: 'Creating high-quality video content that tells your brand story effectively.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: <Share2 size={32} />,
    title: 'Social Media',
    description: 'Strategic social media management to boost your brand presence and engagement.',
    gradient: 'from-yellow-500 to-green-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;