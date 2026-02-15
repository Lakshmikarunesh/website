import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface BentoCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    children?: ReactNode;
    href?: string;
    image?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
    title,
    description,
    icon,
    className = '',
    children,
    href,
    image
}) => {
    return (
        <div className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${className}`}>

            {/* Background Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Optional Image Background */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>
            )}

            <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                {/* Icon */}
                {icon && (
                    <div className="mb-4 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                        {icon}
                    </div>
                )}

                {/* Content */}
                <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-bold font-playfair text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4 group-hover:text-gray-300 transition-colors">
                        {description}
                    </p>

                    {href && (
                        <div className="flex items-center text-sm font-medium text-purple-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Learn more <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                    )}
                </div>

                {/* Custom Children (for graphs, extra images, etc.) */}
                {children}
            </div>
        </div>
    );
};

export default BentoCard;
