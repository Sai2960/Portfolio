import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter flex items-center gap-1">
            COD<span className="relative flex flex-col justify-center h-4 w-4">
              <span className="w-full h-[2px] bg-accent-orange rounded-full mb-[2px]"></span>
              <span className="w-full h-[2px] bg-accent-orange rounded-full mb-[2px]"></span>
              <span className="w-full h-[2px] bg-accent-orange rounded-full"></span>
            </span>R
          </div>

          <div className="flex gap-8 text-sm font-medium text-soft-gray">
            <a href="#about" className="hover:text-accent-orange transition-colors">About</a>
            <a href="#projects" className="hover:text-accent-orange transition-colors">Projects</a>
            <a href="#services" className="hover:text-accent-orange transition-colors">Services</a>
            <a href="#contact" className="hover:text-accent-orange transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs md:text-sm text-soft-gray">© 2026 Sai Sanjay Chandorkar. All rights reserved.</p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-accent-orange hover:bg-accent-orange hover:text-white transition-all"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
