import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CutsComingSoon from './pages/products/CutsComingSoon';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-inter selection:bg-purple-500/30 selection:text-white">
        <Navbar scrollToSection={scrollToSection} />

        <Routes>
          <Route path="/" element={<Home scrollToSection={scrollToSection} />} />
          <Route path="/products/cuts" element={<CutsComingSoon />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
