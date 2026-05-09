import { motion } from 'motion/react';
import { Layout, Code, Smartphone, Figma, Rocket, Layers } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Interactive and responsive user interfaces built with React.js, Tailwind CSS, and Flutter.',
    icon: <Code size={32} />,
    color: 'from-blue-500/20'
  },
  {
    title: 'Backend Systems',
    description: 'Scalable server-side logic and RESTful APIs using Node.js, Express.js, and MVC architecture.',
    icon: <Layers size={32} />,
    color: 'from-purple-500/20'
  },
  {
    title: 'Database Design',
    description: 'Efficient data architecture and management with MongoDB, MySQL, and Firebase Firestore.',
    icon: <Layout size={32} />,
    color: 'from-green-500/20'
  },
  {
    title: 'Mobile Applications',
    description: 'Developing high-performance cross-platform mobile apps for Android and iOS using Flutter.',
    icon: <Smartphone size={32} />,
    color: 'from-orange-500/20'
  },
  {
    title: 'UI/UX Strategy',
    description: 'Design-centric thinking and user-centric flows prototyped in Figma to ensure engagement.',
    icon: <Figma size={32} />,
    color: 'from-red-500/20'
  },
  {
    title: 'API Integration',
    description: 'Seamless integration of third-party services and real-time features using WebSockets and REST.',
    icon: <Rocket size={32} />,
    color: 'from-cyan-500/20'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-primary-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            My <span className="text-accent-orange">Specializations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-soft-gray max-w-2xl mx-auto"
          >
            I combine strategy, code, and design to help businesses establish a powerful digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass-card relative group"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-display">{service.title}</h3>
                  <p className="text-soft-gray font-light">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4">
                  <button className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:gap-3 flex items-center gap-2 transition-all">
                    Learn More <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
