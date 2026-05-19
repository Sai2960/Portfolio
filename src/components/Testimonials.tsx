import { motion } from 'framer-motion';
import { BadgeCheck, Star } from 'lucide-react';

const certifications = [
  {
    org: 'JPMorgan Chase & Co.',
    role: 'Software Engineering Job Simulation',
    content: 'Completed enterprise-level simulations involving Kafka, H2 database integration, and REST API controller development — skills used in real JPMorgan production systems.',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg',
    date: 'Aug 2025',
    rating: 5,
    bg: '#003087',
  },
  {
    org: 'Deloitte',
    role: 'Data Analytics Capstone',
    content: 'Applied data framing and visual design strategies for communicating analytical insights effectively to business stakeholders in a real-world consulting simulation.',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
    date: 'Aug 2025',
    rating: 5,
    bg: '#86BC25',
  },
  {
    org: 'Tata Group',
    role: 'Data Visualisation via Forage',
    content: 'Mastered interactive data visualisation and storytelling techniques to empower business decision-making — completed as part of Tata\'s professional simulation program.',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg',
    date: 'Aug 2025',
    rating: 5,
    bg: '#1E3A8A',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-primary-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-orange/5 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Industry <span className="text-accent-orange">Certifications</span>
          </h2>
          <p className="text-soft-gray max-w-2xl mx-auto">
            Professional simulations and certifications completed through top global organizations via Forage and Intel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] glass-card flex flex-col justify-between group hover:border-accent-orange/20 transition-all hover:-translate-y-2"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center text-accent-orange">
                  <div className="flex gap-1">
                    {[...Array(cert.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <BadgeCheck size={24} className="opacity-60" />
                </div>
                <p className="text-lg font-light leading-relaxed text-warm-white/90">
                  {cert.content}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden p-1.5 grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: cert.bg }}>
                  <img src={cert.avatar} alt={cert.org} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{cert.org}</h4>
                  <p className="text-xs text-soft-gray uppercase tracking-widest font-bold">{cert.role}</p>
                  <p className="text-xs text-accent-orange/70 mt-1 font-semibold">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra certs row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            'NullClass — Web Dev Internship Certificate',
            'NullClass — Real-Time Project Training',
            'Intel & CBSE — AI For All',
          ].map((cert) => (
            <div key={cert} className="flex items-center gap-2 px-5 py-3 glass-card rounded-full text-sm text-soft-gray border border-white/5">
              <BadgeCheck size={16} className="text-accent-orange" />
              {cert}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}