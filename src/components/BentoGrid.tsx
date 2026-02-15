import React, { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default BentoGrid;
