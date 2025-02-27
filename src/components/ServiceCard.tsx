import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="group relative p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border-2 border-transparent hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 inline-block group-hover:scale-110 transition-transform duration-500`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      <div className="absolute inset-0 rounded-2xl border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500" />
    </div>
  );
};

export default ServiceCard;