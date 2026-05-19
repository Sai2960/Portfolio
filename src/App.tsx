/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PortfolioGrid from './components/PortfolioGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  return (
    <main className="relative selection:bg-accent-orange/30 selection:text-accent-orange">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Decorative Geometric Elements */}
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] border border-accent-orange/5 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] border border-white/5 rotate-45 -z-10" />
      <div className="fixed top-1/2 left-[-10%] w-[500px] h-[500px] border border-accent-orange/5 rounded-[5rem] -rotate-12 -z-10" />

      <Navbar onHireMeClick={() => setIsHireMeOpen(true)} />

      <Hero onHireMeClick={() => setIsHireMeOpen(true)} />
      <About />
      <Stats />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <Blog />
      
      <Footer />

      {/* Hire Me Modal */}
      <Contact isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
    </main>
  );
}

