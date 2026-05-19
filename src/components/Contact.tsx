import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Twitter, Instagram, Linkedin, Github, Youtube, Briefcase, X, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-primary-black overflow-y-auto"
        >
          {/* Background Elements */}
          <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] border border-accent-orange/5 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
          <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] border border-white/5 rotate-45 -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 py-12 relative">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-16">
              <motion.button
                onClick={onClose}
                whileHover={{ x: -10 }}
                className="flex items-center gap-2 text-soft-gray hover:text-accent-orange transition-colors font-bold uppercase tracking-widest text-xs"
              >
                <ArrowLeft size={20} /> Back to Home
              </motion.button>
              
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-warm-white hover:bg-white/5 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-7xl font-display font-bold leading-tight">
                    Hire Me & <br />
                    <span className="orange-gradient-text">Let's Build Together</span>
                  </h2>
                  <p className="text-soft-gray max-w-lg text-lg md:text-xl font-light leading-relaxed">
                    I’m a fresher with a passion for building clean, modern digital experiences. If you’re looking for someone eager to learn, contribute, and grow with your team — let’s talk.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { icon: <Mail size={24} />, label: 'Email', value: 'saichandorkar96@gmail.com' },
                    { icon: <Phone size={24} />, label: 'Phone', value: '+91 8591627541' },
                    { icon: <MapPin size={24} />, label: 'Location', value: 'Mumbai, India' },
                    { icon: <Briefcase size={24} />, label: 'Looking for', value: 'Full-time / Internship' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-charcoal flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all duration-300 shadow-xl border border-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-soft-gray mb-1">{item.label}</p>
                        <p className="text-lg md:text-2xl font-display font-semibold group-hover:text-accent-orange transition-colors">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Twitter, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/saichandorkar' },
                    { icon: Github, href: 'https://github.com/saichandorkar' },
                    { icon: Youtube, href: '#' }
                  ].map((Social, i) => (
                    <motion.a
                      key={i}
                      href={Social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 rounded-xl bg-charcoal border border-white/10 flex items-center justify-center text-warm-white hover:text-accent-orange transition-all duration-300"
                    >
                      <Social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-8 md:p-12 glass-card rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-orange/10 blur-[96px] rounded-full -z-10" />
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="Sai Sanjay"
                        className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Company</label>
                      <input 
                        type="text" 
                        placeholder="Google / Startup"
                        className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="sai@example.com"
                        className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Role / Internship</label>
                      <input 
                        type="text" 
                        placeholder="Full Stack Developer"
                        className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Message</label>
                    <textarea 
                      rows={6}
                      placeholder="Tell me about the opportunity..."
                      className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent-orange text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 glow-orange hover:opacity-90 transition-all shadow-xl text-lg mt-4"
                  >
                    Send Message <Send size={22} />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

