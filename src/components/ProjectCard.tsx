import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-900/30">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6">
          <span className="text-purple-400 text-sm font-medium">
            {category}
          </span>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <p className="text-gray-300 mt-2">{description}</p>
          <button className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            View Project <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;