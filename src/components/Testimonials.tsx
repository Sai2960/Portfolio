import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'JPMorgan Chase & Co.',
    role: 'Software Engineering Simulation',
    content: 'Completed rigorous simulations involving Kafka, H2 database, and REST API controller development for enterprise systems.',
    avatar: 'https://logo.clearbit.com/jpmorganchase.com',
    rating: 5
  },
  {
    name: 'Deloitte',
    role: 'Data Analytics Capstone',
    content: 'Developed framing and visual design strategies for communicating data insights effectively to business stakeholders.',
    avatar: 'https://logo.clearbit.com/deloitte.com',
    rating: 5
  },
  {
    name: 'Tata Group',
    role: 'Data Visualisation',
    content: 'Mastered the art of empowering business decisions through interactive data visualization and storytelling.',
    avatar: 'https://logo.clearbit.com/tata.com',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-primary-black overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-orange/5 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Industry <span className="text-accent-orange">Validations</span>
          </h2>
          <p className="text-soft-gray max-w-2xl mx-auto">
            Certifications and professional simulations completed through top global organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] glass-card flex flex-col justify-between group hover:border-accent-orange/20 transition-all hover:-translate-y-2"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center text-accent-orange">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} className="opacity-20" />
                </div>
                <p className="text-lg font-light leading-relaxed text-warm-white/90 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{t.name}</h4>
                  <p className="text-xs text-soft-gray uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
