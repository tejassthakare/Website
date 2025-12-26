import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Award, Coffee } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatItem = ({ icon, value, suffix = '', label, duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const step = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 rounded-2xl text-center card-hover group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: 2, suffix: '+', label: 'Years Experience' },
    { icon: <Code2 className="w-6 h-6" />, value: 10, suffix: '+', label: 'Projects Completed' },
    { icon: <Award className="w-6 h-6" />, value: 1, suffix: '', label: 'Publications' },
    { icon: <Coffee className="w-6 h-6" />, value: 500, suffix: '+', label: 'Cups of Coffee' },
  ];

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
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Achievements</span>
          <h2 className="section-title mt-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
