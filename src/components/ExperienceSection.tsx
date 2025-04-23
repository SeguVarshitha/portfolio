
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="bg-grayscale-100 dark:bg-grayscale-500 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-grayscale-200/50 dark:bg-grayscale-400/30 -skew-x-12 transform -translate-x-20"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/3 bg-grayscale-200/30 dark:bg-grayscale-400/20 rounded-tr-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grayscale-500 dark:text-grayscale-100">
            Professional Experience
          </h2>
          <p className="text-grayscale-400 dark:text-grayscale-200 mb-6">
            My professional journey and the experience I've gained along the way.
          </p>
          <Separator className="w-24 h-1 mx-auto bg-grayscale-300" />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 flex relative">
              <div className="mr-8 flex-shrink-0">
                <div className="w-12 h-12 bg-grayscale-300 dark:bg-grayscale-300 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-grayscale-500 dark:text-grayscale-500" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-full bg-grayscale-300 dark:bg-grayscale-300 absolute left-6 top-12 transform -translate-x-1/2"></div>
                )}
              </div>
              
              <Card 
                className="flex-grow border border-grayscale-200 dark:border-grayscale-400 bg-grayscale-200 dark:bg-grayscale-400 shadow-md hover:shadow-xl transition-all duration-300 slide-up overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grayscale-300/0 dark:bg-grayscale-300/0 group-hover:bg-grayscale-300/5 dark:group-hover:bg-grayscale-300/5 transition-all duration-300"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-grayscale-500 dark:text-grayscale-100 group-hover:translate-x-1 transition-transform duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-grayscale-400 dark:text-grayscale-200 font-medium group-hover:text-grayscale-500 dark:group-hover:text-grayscale-100 transition-colors duration-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-grayscale-400 dark:text-grayscale-200 bg-grayscale-300/50 dark:bg-grayscale-300/20 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-grayscale-400 dark:text-grayscale-200 group-hover:text-grayscale-500 dark:group-hover:text-grayscale-100 transition-colors duration-300">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
