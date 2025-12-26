import { motion } from 'framer-motion';

// Skill logos with CDN-hosted SVG icons
const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
];

const SkillLogos = () => {
  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.15, y: -5 }}
            className="group relative"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain filter transition-all duration-300 group-hover:drop-shadow-lg"
              />
            </div>
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap bg-card px-2 py-1 rounded-md border border-border shadow-sm">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillLogos;
