import { motion } from 'framer-motion';
import { Code2, Database, Palette, Brain, Wrench, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Programming',
    icon: Code2,
    items: ['Java', 'C', 'JavaScript', 'SQL'],
    size: 'large',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-500',
  },
  {
    category: 'Web & App',
    icon: Globe,
    items: ['HTML', 'CSS', 'JSP', 'Flutter', 'React'],
    size: 'medium',
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-500',
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MySQL', 'Oracle', 'Firebase'],
    size: 'small',
    gradient: 'from-green-500/10 to-emerald-500/10',
    iconColor: 'text-green-500',
  },
  {
    category: 'AI & Data',
    icon: Brain,
    items: ['AI Quality Analysis', 'Data Annotation', 'Model Evaluation'],
    size: 'medium',
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconColor: 'text-orange-500',
  },
  {
    category: 'Design',
    icon: Palette,
    items: ['Figma', 'Canva', 'Power BI'],
    size: 'small',
    gradient: 'from-rose-500/10 to-red-500/10',
    iconColor: 'text-rose-500',
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Microsoft 365'],
    size: 'small',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    iconColor: 'text-indigo-500',
  },
];

const BentoSkills = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Expertise</span>
          <h2 className="section-title mt-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isLarge = skill.size === 'large';
            const isMedium = skill.size === 'medium';
            
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`
                  glass-card p-6 rounded-3xl cursor-pointer group transition-all duration-300
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isMedium ? 'md:col-span-2' : ''}
                  bg-gradient-to-br ${skill.gradient}
                `}
              >
                <div className={`flex flex-col h-full ${isLarge ? 'justify-between' : 'gap-4'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-background/80 ${skill.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'}`} />
                    </div>
                    <h3 className={`font-bold ${isLarge ? 'text-2xl' : 'text-lg'}`}>{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs md:text-sm bg-background/60 rounded-full font-medium text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoSkills;
