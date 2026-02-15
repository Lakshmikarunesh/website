import React from 'react';
import { Check } from 'lucide-react';
import Section from './Section';

const pricingPlans = [
    {
        name: 'Starter',
        price: '₹9,999',
        description: 'Perfect for small businesses and startups.',
        features: ['Custom Web Design', 'Mobile Responsive', 'SEO Optimization', '1 Month Support', 'CMS Integration'],
        highlighted: false,
    },
    {
        name: 'Professional',
        price: '₹19,999',
        description: 'For growing companies that need more power.',
        features: ['Everything in Starter', 'video production', 'social media management', '3 months support'],
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large organizations.',
        features: ['Everything in Professional', 'Scalable Architecture', 'Dedicated Project Manager', '24/7 Priority Support', 'Security Audits', 'Cloud Infrastructure'],
        highlighted: false,
    },
];

const Pricing = () => {
    return (
        <Section className="bg-black relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
                    Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Pricing</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Choose the plan that fits your business needs. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${plan.highlighted
                            ? 'bg-white/10 border-purple-500 shadow-2xl shadow-purple-900/20 scale-105 z-10'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                            }`}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-bold font-playfair text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold font-playfair text-white">{plan.price}</span>
                                {plan.price !== 'Custom' && <span className="text-gray-400">/project</span>}
                            </div>
                            <p className="text-gray-400 mt-4 text-sm">{plan.description}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <div className="mt-0.5 min-w-[16px] flex items-center justify-center p-0.5 rounded-full bg-purple-500/20 text-purple-400">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.highlighted
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                                : 'bg-white text-black hover:bg-gray-100'
                                }`}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Pricing;
