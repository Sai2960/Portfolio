import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github, Briefcase, X, ArrowLeft, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_ID = 'service_51604jo';
const TEMPLATE_ID = 'template_94k7k99';
const PUBLIC_KEY = 'zItEwaVhdCpuT7fMV';

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('sending');
  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        role: formData.get('role'),
        message: formData.get('message'),
      }),
    });
    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
};
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-primary-black overflow-y-auto"
        >
          <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] border border-accent-orange/5 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
          <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] border border-white/5 rotate-45 -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 py-12 relative">
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
                aria-label="Close contact modal"
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
                    I'm a fresher with a passion for building clean, modern digital experiences. If you're looking for someone eager to learn, contribute, and grow with your team — let's talk.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { icon: <Mail size={24} />, label: 'Email', value: 'saichandorkar96@gmail.com', href: 'mailto:saichandorkar96@gmail.com' },
                    { icon: <Phone size={24} />, label: 'Phone', value: '+91 8591627541', href: 'tel:+918591627541' },
                    { icon: <MapPin size={24} />, label: 'Location', value: 'Mumbai, India', href: null },
                    { icon: <Briefcase size={24} />, label: 'Looking for', value: 'Full-time / Internship', href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-charcoal flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all duration-300 shadow-xl border border-white/5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-soft-gray mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-lg md:text-2xl font-display font-semibold hover:text-accent-orange transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg md:text-2xl font-display font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Linkedin, href: 'https://linkedin.com/in/sai-chandorkar', label: 'LinkedIn' },
                    { icon: Github, href: 'https://github.com/Sai2960', label: 'GitHub' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                  ].map((Social) => (
                    <motion.a
                      key={Social.label}
                      href={Social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={Social.label}
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

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <Send size={28} className="text-accent-orange" />
                    </div>
                    <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
                    <p className="text-soft-gray">Thanks for reaching out. I'll get back to you soon.</p>
                    <button onClick={() => setStatus('idle')} className="text-accent-orange font-bold text-sm underline mt-2">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Your Name</label>
                        <input 
                          id="name"
                          name="name"
                          type="text" 
                          required
                          placeholder="Sai Sanjay"
                          className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Company</label>
                        <input 
                          id="company"
                          name="company"
                          type="text" 
                          placeholder="Google / Startup"
                          className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Email</label>
                        <input 
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="role" className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Role / Internship</label>
                        <input 
                          id="role"
                          name="role"
                          type="text" 
                          placeholder="Full Stack Developer"
                          className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs uppercase font-bold tracking-widest text-soft-gray ml-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell me about the opportunity..."
                        className="w-full bg-primary-black/50 border border-white/10 rounded-2xl p-4 focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm text-center">Something went wrong. Please email me directly at saichandorkar96@gmail.com</p>
                    )}

                    <motion.button 
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      className="w-full bg-accent-orange text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 glow-orange hover:opacity-90 transition-all shadow-xl text-lg mt-4 disabled:opacity-70"
                    >
                      {status === 'sending' ? (
                        <><Loader2 size={22} className="animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send size={22} /></>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}