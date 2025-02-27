import React from 'react';

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, role }) => {
  return (
    <div className="text-center group">
      <div className="relative mb-6 inline-block">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-purple-400">{role}</p>
    </div>
  );
};

export default TeamMemberCard;