import React from 'react';
import Section from './Section';

const companies = [
    { name: 'Arsa Adventures', logo: 'https://placehold.co/150x50/333/666?text=LOGO' },
    { name: 'I Love Spikes', logo: 'https://placehold.co/150x50/333/666?text=TECH' },
    { name: 'Mahalakshmi Constructions', logo: 'https://placehold.co/150x50/333/666?text=CORP' },
    // { name: 'Agency D', logo: 'https://placehold.co/150x50/333/666?text=AGENCY' },
    // { name: 'Studio E', logo: 'https://placehold.co/150x50/333/666?text=STUDIO' },
    // { name: 'Brand F', logo: 'https://placehold.co/150x50/333/666?text=BRAND' },
];

const TrustBar = () => {
    return (
        <Section className="border-y border-white/5 bg-white/[0.02]" noPadding>
            <div className="py-12">
                <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">Trusted by innovative companies</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center opacity-50">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:scale-110 cursor-pointer"
                        >
                            {/* Replacing placeholder with text if no logo, but keeping the img structure for future */}
                            <div className="h-8 flex items-center justify-center font-bold text-xl text-gray-400 hover:text-white transition-colors">
                                {company.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TrustBar;
