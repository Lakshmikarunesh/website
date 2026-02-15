import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

interface HomeProps {
    scrollToSection: (sectionId: string) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
    return (
        <>
            <Hero scrollToSection={scrollToSection} />
            <TrustBar />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Process />
            <TechStack />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
        </>
    );
};

export default Home;
