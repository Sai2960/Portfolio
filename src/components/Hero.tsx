import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onHireMeClick: () => void;
}

export default function Hero({ onHireMeClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-32 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-accent-orange/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-accent-orange/5 rounded-full blur-[128px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-accent-orange text-sm font-semibold tracking-wide"
            >
              Hello, I'm
            </motion.span>
            <h1 className="text-4xl md:text-8xl font-display font-bold tracking-tighter leading-tight md:leading-none">
              Sai Sanjay <br className="hidden md:block" />
              <span className="orange-gradient-text">Chandorkar</span>
            </h1>
            <p className="text-base md:text-2xl text-soft-gray font-light max-w-lg mx-auto lg:mx-0">
              Full Stack Web Developer crafting scalable, production-ready digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.button
              onClick={onHireMeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-accent-orange text-white rounded-2xl font-bold flex items-center gap-2 glow-orange"
            >
              Hire Me <ArrowRight size={20} />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="Sai_Sanjay_Chandorkar_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-charcoal border border-white/10 text-warm-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 transition-colors"
            >
              Download CV <Download size={20} />
            </motion.a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-black bg-deep-gray flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="client" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-bold">Industry Certified</p>
              <p className="text-xs text-soft-gray">Deloitte, JPMorgan, Tata, Intel</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-[500px] mx-auto"
        >
          <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-deep-gray relative z-10 border border-white/5 shadow-2xl">
            <img 
              src="https://i.ibb.co/by8Rj5t/Blazer-1.jpg" 
              alt="Sai Sanjay Chandorkar"
              className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-2 border-accent-orange/20 rounded-[2rem] md:rounded-[3rem] -translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] md:rounded-[3rem] translate-x-4 -translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </div>

          {/* Floating Stats - Hidden on Mobile */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden sm:block absolute -top-6 -right-6 p-4 glass-card rounded-2xl z-20"
          >
            <p className="text-2xl font-display font-bold text-accent-orange">2</p>
            <p className="text-[10px] text-soft-gray uppercase tracking-widest font-bold">Industry Internships</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="hidden sm:block absolute -bottom-6 -left-6 p-4 glass-card rounded-2xl z-20"
          >
            <p className="text-2xl font-display font-bold text-accent-orange">85%</p>
            <p className="text-[10px] text-soft-gray uppercase tracking-widest font-bold">BCA Score</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
