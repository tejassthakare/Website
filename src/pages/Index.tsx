import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BentoSkills from '@/components/BentoSkills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background text-foreground overflow-x-hidden"
          >
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <BentoSkills />
            <Projects />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
