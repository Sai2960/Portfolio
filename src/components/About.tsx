import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js / TypeScript', level: 75 },
  { name: 'Node.js / Express.js', level: 70 },
  { name: 'MongoDB / MySQL', level: 65 },
  { name: 'Java / Python', level: 60 },
  { name: 'Flutter / Responsive UI', level: 55 },
];

const techStack = [
  'React.js', 'TypeScript', 'Node.js', 'Express.js',
  'MongoDB', 'Firebase', 'Next.js', 'Tailwind CSS',
  'JWT', 'Socket.io', 'Git', 'Figma',
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <div className="aspect-square bg-deep-gray rounded-[2rem] overflow-hidden border border-white/5">
             <img 
               src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" 
               alt="Code Workspace"
               className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent-orange/20 rounded-full blur-[64px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Building Scalable <span className="text-accent-orange">Ecosystems</span>
            </h2>
            <p className="text-soft-gray leading-relaxed text-lg italic">
              "Passionate about clean architecture, performance optimization, and modern user experiences."
            </p>
            <p className="text-soft-gray leading-relaxed">
              Full Stack Developer skilled in building scalable web applications using React.js, Node.js, TypeScript, and MongoDB. Experienced through 2 industry internships in developing responsive frontend systems, REST APIs, and production-ready applications.
            </p>
            <p className="text-soft-gray leading-relaxed">
              Final-year BCA student at Tilak Maharashtra Vidyapeeth with a CGPA of 8.5/10, complemented by certifications from Deloitte, JPMorgan, Tata, and Intel. Solved 300+ DSA problems on LeetCode and GeeksforGeeks.
            </p>
          </div>

          {/* Tech stack tags — honest and modern */}
          <div id="skills" className="space-y-4 pt-4">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white/50">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-black border border-white/10 rounded-xl text-sm font-semibold text-soft-gray hover:border-accent-orange/40 hover:text-accent-orange transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skill bars with honest levels */}
          <div className="space-y-6 pt-2">
             <h3 className="text-xl font-bold uppercase tracking-widest text-white/50">Core Expertise</h3>
             <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span>{skill.name}</span>
                      <span className="text-accent-orange">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-black rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-accent-orange glow-orange"
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
