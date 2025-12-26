import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>@tejassthakare</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors text-primary"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
