import React, { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, noPadding = false }) => {
    return (
        <section
            id={id}
            className={`relative w-full overflow-hidden ${noPadding ? '' : 'py-20 md:py-32'} ${className}`}
        >
            <div className={`container mx-auto px-4 md:px-6 relative z-10 ${noPadding ? 'h-full' : ''}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
