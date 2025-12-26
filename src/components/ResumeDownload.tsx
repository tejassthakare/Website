import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1goxkT-EjYbYdNITzPqzX2G00rSEjjN0D/view?usp=sharing', '_blank');
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-2xl hover:border-primary/30 transition-all group"
    >
      <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
        <FileText className="w-5 h-5 text-primary" />
      </div>
      <div className="text-left">
        <p className="font-semibold text-sm">Download Resume</p>
        <p className="text-xs text-muted-foreground">Get my CV</p>
      </div>
      <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
    </motion.button>
  );
};

export default ResumeDownload;
