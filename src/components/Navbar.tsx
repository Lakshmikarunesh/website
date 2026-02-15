import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Video } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
    scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToSection(id);
            }, 100);
        } else {
            scrollToSection(id);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4 ${isScrolled ? 'top-4' : 'top-6'}`}>
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-purple-500/10 px-6 py-3 flex items-center justify-between max-w-5xl w-full">

                {/* Left: Logo */}
                <div
                    className="text-xl font-bold font-playfair cursor-pointer justify-self-start min-w-[120px]"
                    onClick={() => {
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                        TECHLOGX
                    </span>
                </div>

                {/* Center: Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 justify-self-center">
                    <button
                        onClick={() => handleNavigation('services')}
                        className="text-white/70 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                        Services
                    </button>

                    <button
                        onClick={() => handleNavigation('portfolio')}
                        className="text-white/70 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                        Portfolio
                    </button>

                    {/* Products Dropdown */}
                    <div className="relative group h-full flex items-center">
                        <button className="flex items-center gap-1 text-white/70 group-hover:text-white transition-all duration-200 text-sm font-medium py-2">
                            Products
                            <ChevronDown size={14} className="transform transition-transform duration-200 group-hover:rotate-180 text-white/50 group-hover:text-white" />
                        </button>

                        {/* Invisible Bridge to prevent dropdown from closing */}
                        <div className="absolute top-full left-0 right-0 h-4 bg-transparent" />

                        {/* Dropdown Menu */}
                        <div
                            className="
                absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[280px] pt-2
                opacity-0 translate-y-2 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-200 ease-out
              "
                        >
                            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-purple-500/10 p-2 overflow-hidden ring-1 ring-white/5">
                                <Link
                                    to="/products/cuts"
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="mt-1 p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover/item:text-pink-300 group-hover/item:bg-pink-500/20 transition-colors">
                                        <Video size={16} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-sm">Cuts</div>
                                        <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                                            AI-powered short video and caption generation
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => handleNavigation('process')}
                        className="text-white/70 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                        Process
                    </button>

                    <button
                        onClick={() => handleNavigation('faq')}
                        className="text-white/70 hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                        FAQ
                    </button>
                </nav>

                {/* Right: CTA Button */}
                <div className="hidden md:flex justify-self-end min-w-[120px] justify-end">
                    <Link
                        to="/"
                        onClick={(e) => {
                            // If on home, scroll to contact/CTA, else navigate home then scroll
                            e.preventDefault();
                            handleNavigation('contact'); // Assuming CTA or contact section
                        }}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center gap-2"
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-1"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[calc(100%+1rem)] left-0 right-0 p-4 md:hidden animate-fade-in-up">
                    <div className="bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl shadow-purple-900/40 relative overflow-hidden">
                        {/* Background Gradient for Mobile Menu */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-2">
                            <button
                                onClick={() => handleNavigation('services')}
                                className="text-lg font-medium text-left text-gray-300 hover:text-white py-3 border-b border-white/5"
                            >
                                Services
                            </button>

                            <button
                                onClick={() => handleNavigation('portfolio')}
                                className="text-lg font-medium text-left text-gray-300 hover:text-white py-3 border-b border-white/5"
                            >
                                Portfolio
                            </button>

                            {/* Mobile Products Accordion */}
                            <div className="py-3 border-b border-white/5">
                                <div className="text-lg font-medium text-gray-300 mb-3">Products</div>
                                <div className="pl-4 border-l-2 border-white/10 ml-2">
                                    <Link
                                        to="/products/cuts"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 text-white py-2"
                                    >
                                        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                                            <Video size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-sm">Cuts</span>
                                            <span className="text-xs text-gray-500">AI Video Editor</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <button
                                onClick={() => handleNavigation('process')}
                                className="text-lg font-medium text-left text-gray-300 hover:text-white py-3 border-b border-white/5"
                            >
                                Process
                            </button>

                            <button
                                onClick={() => handleNavigation('faq')}
                                className="text-lg font-medium text-left text-gray-300 hover:text-white py-3"
                            >
                                FAQ
                            </button>

                            <button
                                onClick={() => handleNavigation('contact')}
                                className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-center shadow-lg shadow-purple-500/20"
                            >
                                Start Project
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
