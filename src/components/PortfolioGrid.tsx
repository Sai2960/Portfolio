import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Vybe - Social Media',
    description: 'Instagram-inspired platform with JWT auth, real-time Stories, Reels, and recommendation algorithms.',
    image: 'https://i.ibb.co/Fbfs2t4v/favicon.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'YouTube Clone',
    description: 'Video sharing platform with upload/playback, likes, comments, and subscriptions.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/YouTube_social_white_square_%282024%29.svg/1280px-YouTube_social_white_square_%282024%29.svg.png',
    tags: ['TypeScript', 'React', 'Express'],
    category: 'Web App',
  },
  {
    id: '3',
    title: 'SnapCart E-Commerce',
    description: 'Grocery shopping app with product catalogue, cart, and order tracking.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'MySQL', 'REST API'],
    category: 'Full Stack',
  },
  {
    id: '4',
    title: 'AI College Bot',
    description: 'Intelligent chatbot with NLP-based intent recognition for admissions and courses.',
    image: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/03/marquee-agentforce-ai-chatbot.png?w=1024',
    tags: ['JavaScript', 'NLP', 'Full Stack'],
    category: 'Web App',
  },
  {
    id: '5',
    title: 'Rydex Booking App',
    description: 'Ride-hailing clone featuring real-time booking, fare estimation, and separate dashboards.',
    image: 'https://static.vecteezy.com/system/resources/previews/004/305/696/non_2x/car-booking-concept-neumorphic-templates-set-transportation-services-choice-of-vehicles-rating-of-drivers-ui-ux-gui-screens-for-responsive-mobile-app-design-kit-in-neumorphism-style-vector.jpg',
    tags: ['Maps API', 'React', 'Node.js'],
    category: 'Full Stack',
  },
  {
    id: '6',
    title: 'Hospital Management',
    description: 'Java desktop app for patient registration and appointment scheduling.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Java', 'MySQL', 'OOP'],
    category: 'Web App',
  },
];

const categories = ['All', 'Web App', 'UI Design', 'Branding', 'Full Stack', 'Mobile'];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 bg-primary-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Featured <span className="text-accent-orange">Projects</span>
            </h2>
            <p className="text-soft-gray max-w-sm">
              Explore my latest work across web development, design, and branding.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-orange text-white glow-orange'
                    : 'bg-charcoal text-soft-gray border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden glass-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-primary-black via-primary-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase font-bold text-accent-orange bg-accent-orange/10 px-2 py-1 rounded-md">
                           {tag}
                         </span>
                       ))}
                    </div>
                    <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                    <p className="text-soft-gray text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                    <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <button className="p-3 bg-accent-orange rounded-full text-white glow-orange">
                         <ExternalLink size={20} />
                       </button>
                       <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 backdrop-blur-md">
                         <Github size={20} />
                       </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white rounded-full border border-white/20 group-hover:bg-accent-orange group-hover:border-accent-orange transition-colors">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
