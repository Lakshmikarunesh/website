import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const team = [
  {
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    name: 'Alex Morgan',
    role: 'CEO & Founder',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    name: 'Sarah Chen',
    role: 'Lead Designer',
  },
  {
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    name: 'Michael Torres',
    role: 'Tech Lead',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    name: 'Emma Wilson',
    role: 'Project Manager',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;