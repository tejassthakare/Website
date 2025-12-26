import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Editorial Assistant',
    company: 'Enago (Crimson Interactive)',
    period: 'Oct 2024 – Present',
    description: 'Analyzing AI-processed technical documents to identify logical, syntactic, and semantic inconsistencies. Collaborating with AI-driven workflows to improve accuracy.',
    current: true,
  },
  {
    title: 'Software Developer Intern',
    company: 'Thru-Put Management Systems',
    period: 'Aug 2023 – Sep 2023',
    description: 'Debugged and enhanced enterprise software modules, reducing system errors by 20%. Contributed to feature improvements for Tantum.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Sahu Technologies',
    period: 'Aug 2022 – Sep 2022',
    description: 'Built responsive e-commerce website using HTML, CSS, and JavaScript with multi-device compatibility.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Background</span>
          <h2 className="section-title mt-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Education & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Bio Card */}
            <div className="glass-card p-8 rounded-3xl">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Computer Engineering graduate with hands-on experience in software development, 
                web technologies, and AI-assisted quality systems. Strong foundation in Java, 
                databases, and full-stack development, with experience contributing to AI 
                error-reduction workflows and building real-world applications.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card p-8 rounded-3xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">BE in Computer Engineering</h3>
                  <p className="text-muted-foreground mb-3">
                    Minor in Blockchain • University of Mumbai
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      2020 – 2024
                    </span>
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-semibold text-sm">
                      9.1 CGPA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl card-hover relative"
                >
                  {exp.current && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                  <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block mb-3">
                    {exp.period}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;