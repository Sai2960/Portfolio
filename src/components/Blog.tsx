import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Architecting Scalable Social Platforms',
    category: 'Architecture',
    date: 'Jan 12, 2026',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'The Power of TypeScript in Full Stack Apps',
    category: 'Coding',
    date: 'Feb 28, 2026',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Agile Best Practices for Dev Interns',
    category: 'Workflow',
    date: 'Mar 15, 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Insights & <span className="text-accent-orange">Stories</span>
            </h2>
            <p className="text-soft-gray max-w-sm">
              Sharing my thoughts on design, technology, and the future of digital products.
            </p>
          </div>
          <button className="text-accent-orange font-bold uppercase tracking-widest text-sm flex items-center gap-3 group">
            View All Posts <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 relative border border-white/5">
                <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                   referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-primary-black/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-orange border border-accent-orange/20">
                  {post.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-soft-gray text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-accent-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed line-clamp-2">
                   Exploring how modern tools and methodologies are shaping the landscape of digital experiences in the coming years.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
