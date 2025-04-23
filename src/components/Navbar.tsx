
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-grayscale-100/80 dark:bg-grayscale-500/80 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold text-grayscale-500 dark:text-grayscale-100"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Varshitha Segu
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["hero", "experience", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-grayscale-400 dark:text-grayscale-200 hover:text-grayscale-500 dark:hover:text-grayscale-100 transition-colors duration-300 capitalize"
            >
              {item === "hero" ? "Home" : item}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-grayscale-500 dark:text-grayscale-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-grayscale-100/95 dark:bg-grayscale-500/95 backdrop-blur-sm shadow-md py-4 px-4 fixed inset-x-0 top-[calc(var(--navbar-height,60px))] transition-all duration-300 z-40 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {["hero", "experience", "projects", "contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-grayscale-400 dark:text-grayscale-200 hover:text-grayscale-500 dark:hover:text-grayscale-100 transition-all duration-300 capitalize py-3 border-b border-grayscale-200 dark:border-grayscale-400 transform hover:translate-x-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item === "hero" ? "Home" : item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
