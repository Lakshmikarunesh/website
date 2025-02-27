import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Working with TECHLOGX was a game-changer for our business. Their innovative solutions and attention to detail exceeded our expectations.",
    author: "John Smith",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team's expertise in UI/UX design helped us create an intuitive platform that our users love. Highly recommended!",
    author: "Emily Brown",
    company: "StartUp Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "TECHLOGX delivered our project on time and within budget. Their communication and professionalism were outstanding.",
    author: "David Chen",
    company: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;