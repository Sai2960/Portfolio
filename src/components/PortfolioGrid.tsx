import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Vybee — Social Media',
    description: 'Instagram-inspired platform with JWT auth, real-time Stories, Reels, and a social follow/unfollow graph. Firebase Storage handles media.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    category: 'Full Stack',
    github: 'https://github.com/Sai2960/Social-Media',
    live: 'https://social-media-1-bu2v.onrender.com',
  },
  {
    id: '2',
    title: 'YouTube Clone',
    description: 'Scalable video-sharing platform with JWT auth, adaptive video playback, threaded comments, channel subscriptions, and search.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop',
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/Sai2960/youtube-clone-project',
    live: 'https://youtube-clone-project-eosin.vercel.app',
  },
  {
    id: '3',
    title: 'SnapCart E-Commerce',
    description: 'Full-stack grocery platform with JWT auth, RBAC admin dashboard, dynamic product catalogue, cart, and real-time order tracking via Socket.io.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'MongoDB', 'Socket.io', 'JWT'],
    category: 'Full Stack',
    github: 'https://github.com/Sai2960/snapcart',
    live: 'https://snapcart-lake.vercel.app',
  },
  {
    id: '4',
    title: 'AI College Chatbot',
    description: 'NLP-powered chatbot covering 15+ intent categories with ~89% query resolution accuracy, admin panel, and graceful fallback handling.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'NLP', 'MongoDB'],
    category: 'Web App',
    github: 'https://github.com/Sai2960/college-chatbot',
    live: 'https://preeminent-torrone-ae055a.netlify.app',
  },
  {
    id: '5',
    title: 'Rydex Booking App',
    description: 'Ride-hailing clone featuring real-time booking, fare estimation, Maps API integration, and separate driver/rider dashboards.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Maps API', 'React', 'Node.js'],
    category: 'Web App',
    github: 'https://github.com/Sai2960',
    live: '#',
  },
  {
    id: '6',
    title: 'Hospital Management',
    description: 'Java desktop application for patient registration, appointment scheduling, and record management using OOP principles.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Java', 'MySQL', 'OOP'],
    category: 'Web App',
    github: 'https://github.com/Sai2960',
    live: '#',
  },
];

// Only categories that actually exist in projects
const categories = ['All', 'Full Stack', 'Web App'];

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
              Production-deployed applications across full stack web development and AI.
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
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
                       {/* Live demo link */}
                       {project.live !== '#' ? (
                         <a
                           href={project.live}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={`Live demo of ${project.title}`}
                           className="p-3 bg-accent-orange rounded-full text-white glow-orange hover:opacity-80 transition-opacity"
                         >
                           <ExternalLink size={20} />
                         </a>
                       ) : (
                         <span className="p-3 bg-white/10 rounded-full text-soft-gray cursor-not-allowed" title="Live demo coming soon">
                           <ExternalLink size={20} />
                         </span>
                       )}
                       {/* GitHub link */}
                       <a
                         href={project.github}
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label={`GitHub repo for ${project.title}`}
                         className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 backdrop-blur-md transition-colors"
                       >
                         <Github size={20} />
                       </a>
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
