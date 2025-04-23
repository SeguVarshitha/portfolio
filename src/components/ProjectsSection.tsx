
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string; // Made optional
  codeLink?: string;
  demoVideo?: string;
  projectReport?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-grayscale-100 dark:bg-grayscale-500 py-24 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-grayscale-300 rounded-full"
            style={{ 
              width: `${Math.random() * 3 + 1}px`, 
              height: `${Math.random() * 3 + 1}px`, 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.15,
              animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`
            }}
          ></div>
        ))}
      </div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grayscale-500 dark:text-grayscale-100">
            My Projects
          </h2>
          <p className="text-grayscale-400 dark:text-grayscale-200 mb-6">
            A collection of my recent work and personal projects.
          </p>
          <Separator className="w-24 h-1 mx-auto bg-grayscale-300" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
