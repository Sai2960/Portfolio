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
    // Inline SVG as data URI — no external fetch, no referrer block
    avatar: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'><text x='4' y='28' font-family='Arial' font-weight='bold' font-size='18' fill='white'>JPMorgan</text></svg>`,
    useText: true,
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
    avatar: '',
    useText: true,
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
    avatar: '',
    useText: true,
    textLines: ['TATA'],
    textColor: '#FFFFFF',
  },
];

/** Renders a colored circle with bold initials — works 100% offline, no CORS */
function LogoAvatar({
  org,
  bg,
  textColor,
  textLines,
}: {
  org: string;
  bg: string;
  textColor: string;
  textLines: string[];
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
                {/* ✅ Logo: grayscale by default, color on hover */}
                <div className="grayscale group-hover:grayscale-0 transition-all duration-500">
                  <LogoAvatar
                    org={cert.org}
                    bg={cert.bg}
                    textColor={cert.textColor}
                    textLines={cert.textLines}
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

        {/* ✅ Extra certs row — NullClass #2 replaced with Palkova IT Solutions */}
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