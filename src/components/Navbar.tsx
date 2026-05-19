import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
];

interface NavbarProps {
  onHireMeClick: () => void;
}

export default function Navbar({ onHireMeClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.9)']
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(255, 255, 255, 0.05)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-1"
        >
          COD<span className="relative flex flex-col justify-center h-4 w-4">
            <span className="w-full h-[2px] bg-accent-orange rounded-full mb-[2px]"></span>
            <span className="w-full h-[2px] bg-accent-orange rounded-full mb-[2px]"></span>
            <span className="w-full h-[2px] bg-accent-orange rounded-full"></span>
          </span>R
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-orange ${
                activeSection === link.name.toLowerCase() ? 'text-accent-orange' : 'text-soft-gray'
              }`}
            >
              {link.name}
            </a>
          ))}
          <motion.button
            onClick={onHireMeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-orange text-white px-6 py-2 rounded-full text-sm font-bold glow-orange"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-warm-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 right-0 bg-primary-black border-b border-white/5 p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-soft-gray hover:text-accent-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              onHireMeClick();
              setIsOpen(false);
            }}
            className="w-full bg-accent-orange text-white py-3 rounded-xl font-bold glow-orange"
          >
            Hire Me
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
