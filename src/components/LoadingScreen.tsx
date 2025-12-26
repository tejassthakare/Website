import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                className="text-6xl md:text-8xl font-bold gradient-text"
                animate={{ 
                  textShadow: [
                    '0 0 20px hsl(230 85% 60% / 0.3)',
                    '0 0 40px hsl(230 85% 60% / 0.5)',
                    '0 0 20px hsl(230 85% 60% / 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                TT
              </motion.div>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--gradient-primary)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm tracking-widest uppercase"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
