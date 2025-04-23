
import React, { createContext, useContext, useEffect } from "react";

type SmoothScrollContextType = {
  scrollTo: (elementId: string) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  // Function to handle smooth scrolling
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    
    if (element) {
      // Add some offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  // Handle anchor links with # automatically
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        // Remove the '#' character
        const id = hash.replace("#", "");
        setTimeout(() => {
          scrollTo(id);
        }, 100);
      }
    };
    
    // Initial check for hash in URL
    if (window.location.hash) {
      handleHashChange();
    }
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  
  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
