import { motion } from 'motion/react';
import { BadgeCheck, Star } from 'lucide-react';

const certifications = [
  {
    org: 'JPMorgan Chase & Co.',
    role: 'Software Engineering Job Simulation',
    content:
      'Completed enterprise-level simulations involving Kafka, H2 database integration, and REST API controller development — skills used in real JPMorgan production systems.',
    date: 'Aug 2025',
    rating: 5,
    bg: '#003087',
    avatar: 'https://i.ibb.co/TxWMq5rq/Jp.png',
    useText: false,
    textLines: ['JPMorgan', 'Chase & Co.'],
    textColor: '#FFFFFF',
  },
  {
    org: 'Deloitte',
    role: 'Data Analytics Capstone',
    content:
      'Applied data framing and visual design strategies for communicating analytical insights effectively to business stakeholders in a real-world consulting simulation.',
    date: 'Aug 2025',
    rating: 5,
    bg: '#86BC25',
    avatar: 'https://i.ibb.co/FZgnBrL/Deloitte.png',
    useText: false,
    textLines: ['Deloitte'],
    textColor: '#000000',
  },
  {
    org: 'Tata Group',
    role: 'Data Visualisation via Forage',
    content:
      "Mastered interactive data visualisation and storytelling techniques to empower business decision-making — completed as part of Tata's professional simulation program.",
    date: 'Aug 2025',
    rating: 5,
    bg: '#1E3A8A',
    avatar: 'https://i.ibb.co/21dpB44X/Tata.png',
    useText: false,
    textLines: ['TATA'],
    textColor: '#FFFFFF',
  },
];

/** Renders logo image or fallback initials */
function LogoAvatar({
  org,
  bg,
  textColor,
  textLines,
  avatar,
  useText,
}: {
  org: string;
  bg: string;
  textColor: string;
  textLines: string[];
  avatar: string;
  useText: boolean;
}) {
  const initials =
    textLines.length === 1
      ? textLines[0].slice(0, 4)
      : textLines.map((t) => t[0]).join('');

  return (
    <div
      className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg }}
      title={org}
    >
      {!useText && avatar ? (
        <img
          src={avatar}
          alt={org}
          className="w-full h-full object-contain p-1.5"
        />
      ) : (
        <span
          className="font-black leading-none text-center select-none"
          style={{
            color: textColor,
            fontSize: initials.length <= 2 ? '1rem' : '0.6rem',
            letterSpacing: '-0.03em',
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-primary-black overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-orange/5 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Industry{' '}
            <span className="text-accent-orange">Certifications</span>
          </h2>
          <p className="text-soft-gray max-w-2xl mx-auto">
            Professional simulations and certifications completed through top
            global organizations via Forage and Intel.
          </p>
        </div>

        {/* Main cards */}
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
                {/* Stars + badge */}
                <div className="flex justify-between items-center text-accent-orange">
                  <div className="flex gap-1">
                    {[...Array(cert.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <BadgeCheck size={24} className="opacity-60" />
                </div>

                {/* Description */}
                <p className="text-lg font-light leading-relaxed text-warm-white/90">
                  {cert.content}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                {/* Logo: grayscale by default, color on hover */}
                <div className="grayscale group-hover:grayscale-0 transition-all duration-500">
                  <LogoAvatar
                    org={cert.org}
                    bg={cert.bg}
                    textColor={cert.textColor}
                    textLines={cert.textLines}
                    avatar={cert.avatar}
                    useText={cert.useText}
                  />
                </div>

                <div>
                  <h4 className="font-bold text-sm tracking-tight">
                    {cert.org}
                  </h4>
                  <p className="text-xs text-soft-gray uppercase tracking-widest font-bold">
                    {cert.role}
                  </p>
                  <p className="text-xs text-accent-orange/70 mt-1 font-semibold">
                    {cert.date}
                  </p>
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
            'Palkova IT Solutions — Internship & Training',
            'Intel & CBSE — AI For All',
          ].map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 px-5 py-3 glass-card rounded-full text-sm text-soft-gray border border-white/5"
            >
              <BadgeCheck size={16} className="text-accent-orange" />
              {cert}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}