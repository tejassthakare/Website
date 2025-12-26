import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const TypeWriter = ({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseDuration = 2000 
}: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text">{currentText}</span>
      <span className="animate-blink ml-0.5 h-8 w-0.5 bg-primary inline-block" />
    </span>
  );
};

export default TypeWriter;
