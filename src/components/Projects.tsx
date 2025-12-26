import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, MessageCircle, FileText, Shield } from 'lucide-react';
import surakshaLogo from '@/assets/suraksha-logo.png';

const projects = [
  {
    title: 'Suraksha Saathi',
    subtitle: 'SOS Application',
    description: 'A comprehensive safety mobile application featuring emergency alerts, real-time location sharing, and contact management. Integrated Google Maps API for accurate live location tracking.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
    logo: surakshaLogo,
    gradient: 'from-primary via-primary/80 to-accent',
    publicationLink: 'https://journals.stmjournals.com/rtecs/article=2024/view=176534/',
    publicationNote: 'Published at ICATM-2024, STM Journals',
  },
  {
    title: 'Connectify',
    subtitle: 'Chat Application',
    description: 'A secure chat application with user authentication, session handling, and real-time messaging. Optimized database queries for improved performance and security.',
    technologies: ['Java', 'MySQL', 'Socket Programming', 'JDBC'],
    icon: MessageCircle,
    gradient: 'from-accent via-accent/80 to-primary',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="section-title mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real-world applications that solve meaningful problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden card-hover h-full flex flex-col">
                {/* Project Header */}
                <div className={`p-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}
                  />
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                        {project.logo ? (
                          <img src={project.logo} alt={project.title} className="w-10 h-10 object-contain" />
                        ) : project.icon ? (
                          <project.icon className="w-8 h-8 text-white" />
                        ) : (
                          <Shield className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-white/80 text-sm font-medium">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{project.description}</p>

                  {/* Publication Link */}
                  {project.publicationLink && (
                    <a
                      href={project.publicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-colors flex items-center gap-3 group/link"
                    >
                      <FileText className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground group-hover/link:text-primary transition-colors">
                          View Published Paper
                        </p>
                        <p className="text-xs text-muted-foreground">{project.publicationNote}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                    </a>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="skill-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;