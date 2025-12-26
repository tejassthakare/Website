import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-2xl border-b border-border/30 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">TT</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link text-sm font-medium">
                {item.name}
              </a>
            ))}
            <ThemeToggle />
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-foreground text-background rounded-full font-medium text-sm hover:bg-primary transition-colors"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
