import { motion } from 'framer-motion';
import { ArrowDown, Code2, Mail } from 'lucide-react';
import profileImage from '@/assets/tejas-profile.jpg';
import SkillLogos from './SkillLogos';
import TypeWriter from './TypeWriter';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  const roles = ['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast', 'Problem Solver'];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl floating-delayed" />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="relative">
              {/* Ring decoration */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Profile container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profileImage}
                  alt="Tejas Thakare"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
            </div>
          </motion.div>

          {/* Badge with TypeWriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <TypeWriter words={roles} speed={80} deleteSpeed={40} pauseDuration={2500} />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Tejas <span className="gradient-text">Thakare</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Building quality software with expertise in{' '}
            <span className="text-foreground font-medium">full-stack development</span>,{' '}
            <span className="text-foreground font-medium">mobile apps</span>, and{' '}
            <span className="text-foreground font-medium">AI-assisted systems</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              <Code2 className="w-5 h-5" />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <ResumeDownload />
          </motion.div>

          {/* Skill Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full"
          >
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Tech Stack</p>
            <SkillLogos />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;