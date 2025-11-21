import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  staticText: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  staticText,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    const type = () => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    };

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      // Finished typing word, pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      // Typing or deleting characters
      timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
      {staticText} <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient-x">
        {text}
      </span>
      <span className="animate-cursor ml-1 text-cyan-400">|</span>
    </h1>
  );
};

export default Typewriter;