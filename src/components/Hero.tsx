import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onHireMeClick: () => void;
}

export default function Hero({ onHireMeClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-32 overflow-hidden relative">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-accent-orange/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-accent-orange/5 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">

        {/* ── LEFT: Text content ── */}
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
              download="Sai_Chandorkar_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border border-white/20 text-warm-white rounded-2xl font-bold flex items-center gap-2 hover:border-accent-orange/50 hover:text-accent-orange transition-all"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-black bg-deep-gray flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="client avatar" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-bold">Industry Certified</p>
              <p className="text-xs text-soft-gray">Deloitte · JPMorgan · Tata · Intel</p>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Premium fitted image card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-[420px] mx-auto"
        >
          {/*
            PREMIUM FIX:
            - Fixed height 520px so the card is always a controlled elegant rectangle
            - object-cover + object-top keeps face/upper-body fully visible
            - Soft bottom gradient fade instead of a hard crop — luxury finish
            - Inner orange rim glow for that premium glass card feel
          */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden bg-deep-gray z-10 border border-white/10 shadow-2xl"
            style={{ width: '100%', height: '520px' }}
          >
            {/* Profile photo */}
            <img
              src="/profile.jpg"
              alt="Sai Sanjay Chandorkar — Full Stack Developer"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />

            {/* Bottom soft fade — premium touch */}
            <div
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)',
              }}
            />

            {/* Inner orange rim glow */}
            <div
              className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
              style={{
                boxShadow:
                  'inset 0 0 0 1px rgba(255,100,0,0.18), inset 0 -80px 100px rgba(255,100,0,0.06)',
              }}
            />
          </div>

          {/* Decorative offset border layers */}
          <div className="absolute inset-0 rounded-[2.5rem] border-2 border-accent-orange/25 -translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 translate-x-4 -translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

          {/* Floating badge — top right */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:block absolute -top-5 -right-5 z-20"
          >
            <div
              className="px-4 py-3 rounded-2xl"
              style={{
                background: 'rgba(18,18,18,0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,100,0,0.2)',
              }}
            >
              <p className="text-2xl font-display font-bold text-accent-orange leading-none">2</p>
              <p className="text-[9px] text-soft-gray uppercase tracking-widest font-bold mt-0.5">Industry Internships</p>
            </div>
          </motion.div>

          {/* Floating badge — bottom left */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:block absolute -bottom-5 -left-5 z-20"
          >
            <div
              className="px-4 py-3 rounded-2xl"
              style={{
                background: 'rgba(18,18,18,0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,100,0,0.2)',
              }}
            >
              <p className="text-2xl font-display font-bold text-accent-orange leading-none">8.5</p>
              <p className="text-[9px] text-soft-gray uppercase tracking-widest font-bold mt-0.5">BCA CGPA / 10</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}