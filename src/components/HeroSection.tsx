
import { TypeWriter } from "./TypeWriter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  name: string;
}

export function HeroSection({ name }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-grayscale-200/50 to-transparent dark:from-grayscale-500/30 dark:to-transparent"></div>
      
      {/* Decorative elements - geometric shapes */}
      <div className="absolute w-64 h-64 -top-20 -left-20 bg-grayscale-300/20 dark:bg-grayscale-300/10 rounded-full blur-3xl"></div>
      <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-grayscale-300/20 dark:bg-grayscale-300/10 rounded-full blur-3xl"></div>
      
      <div className="section-container z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div 
          className={`space-y-6 text-center md:text-left transition-all duration-1000 delay-300 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-grayscale-500 dark:text-grayscale-100">Hello, I'm </span>
            <br className="sm:hidden" />
            <span className="text-grayscale-500 dark:text-grayscale-100 relative inline-block">
              {name}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-grayscale-300 dark:bg-grayscale-300 rounded"></span>
            </span>
          </h1>
          
          <div className="flex justify-center md:justify-start items-center text-xl sm:text-2xl text-grayscale-400 dark:text-grayscale-200">
            <span className="mr-2">I'm a</span>
            <TypeWriter words={["Java Programmer", "Web Developer"]} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-grayscale-500 hover:bg-grayscale-400 text-grayscale-100 hover-scale transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-grayscale-300 text-grayscale-500 dark:border-grayscale-300 dark:text-grayscale-100 hover-scale transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div 
            className={`w-64 h-64 sm:w-80 sm:h-80 relative rounded-full overflow-hidden border-4 border-grayscale-300 dark:border-grayscale-300 shadow-xl transition-all duration-1000 delay-500 transform ${
              isLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-12"
            }`}
            style={{
              animationName: 'float',
              animationDuration: '5s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            <img
              src="/profile.jpg" // Replace with your actual image path
              alt="Your Name"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <svg 
          className="w-6 h-6 text-grayscale-400 dark:text-grayscale-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{ cursor: 'pointer' }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
