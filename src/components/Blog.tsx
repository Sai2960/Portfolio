import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'How I Built a Full Stack YouTube Clone in 5 Sprint Cycles',
    category: 'Case Study',
    date: 'Nov 2025',
    readTime: '5 min read',
    excerpt: 'A behind-the-scenes look at architecting a video streaming platform with JWT auth, MVC backend, and adaptive playback — built during my NullClass internship.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop',
    live: true,
  },
  {
    title: 'Why TypeScript Made Me a Better JavaScript Developer',
    category: 'Learning',
    date: 'Coming Soon',
    readTime: '4 min read',
    excerpt: 'Type safety caught bugs before production. Here\'s what switching from JS to TS taught me about writing scalable code.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    live: false,
  },
  {
    title: 'Socket.io + MongoDB: Building Real-Time Order Tracking',
    category: 'Tutorial',
    date: 'Coming Soon',
    readTime: '6 min read',
    excerpt: 'How I implemented live order status updates in SnapCart using Socket.io rooms and MongoDB change streams.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    live: false,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Insights & <span className="text-accent-orange">Learnings</span>
            </h2>
            <p className="text-soft-gray max-w-sm">
              Writing about what I build, what I learn, and what breaks in production.
            </p>
          </div>
          <div className="flex items-center gap-2 text-accent-orange font-bold uppercase tracking-widest text-sm">
            More posts coming <ArrowRight size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer ${!post.live ? 'opacity-60' : ''}`}
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
                {!post.live && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-black/40 backdrop-blur-sm">
                    <span className="px-4 py-2 bg-primary-black/80 rounded-full text-xs font-bold uppercase tracking-widest text-soft-gray border border-white/10">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-soft-gray text-xs font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-accent-orange transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
