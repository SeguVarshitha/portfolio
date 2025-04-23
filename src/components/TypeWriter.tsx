
import { useEffect, useState } from "react";

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function TypeWriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      setText((current) => {
        if (isDeleting) {
          // Delete a character
          return current.substring(0, current.length - 1);
        } else {
          // Add a character
          return currentWord.substring(0, current.length + 1);
        }
      });
      
      if (!isDeleting && text === currentWord) {
        // Start deleting after a delay
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && text === "") {
        // Start typing the next word
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }
    };
    
    const typingInterval = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <div className="flex">
      <span className="text-primary font-semibold relative z-10">
        {text}
        <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-[blink_0.7s_infinite]"></span>
        
        {/* Highlight decoration */}
        <span className="absolute -bottom-0.5 left-0 w-full h-2 bg-grayscale-300/50 dark:bg-grayscale-300/50 -z-10 transform -skew-x-6 rounded-sm"></span>
      </span>
    </div>
  );
}
