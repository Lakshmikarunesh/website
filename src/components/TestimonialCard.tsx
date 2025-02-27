import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, image }) => {
  return (
    <div className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/80 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"
        />
        <div>
          <h4 className="font-semibold group-hover:text-white transition-colors">{author}</h4>
          <p className="text-purple-400 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-400 italic group-hover:text-gray-300 transition-colors">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;