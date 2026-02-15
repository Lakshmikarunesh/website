import React from 'react';
import { Star, Quote } from 'lucide-react';
import Section from './Section';

const testimonials = [
  {
    quote: "Working with TECHLOGX was a game-changer for our business. Their innovative solutions and attention to detail exceeded our expectations.",
    author: "John Smith",
    role: "CEO",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team's expertise in UI/UX design helped us create an intuitive platform that our users love. Highly recommended!",
    author: "Emily Brown",
    role: "Product Manager",
    company: "StartUp Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "TECHLOGX delivered our project on time and within budget. Their communication and professionalism were outstanding.",
    author: "David Chen",
    role: "CTO",
    company: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Exceptional quality and speed. The best dev team we've worked with.",
    author: "Sarah Wilson",
    role: "Director",
    company: "Creative Flow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <Section className="bg-gradient-to-t from-black to-indigo-950/20 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Stories</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Don't just take our word for it. Here's what our partners say about us.
        </p>
      </div>

      <div className="relative">
        {/* Gradient Fade for Slider */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none hidden md:block" />

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 text-purple-400">
                <Quote size={40} className="opacity-50" />
              </div>

              <p className="text-gray-300 text-lg mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/20"
                />
                <div>
                  <h4 className="font-bold font-playfair text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
