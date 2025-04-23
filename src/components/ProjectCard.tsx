import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, PlayCircle } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
    codeLink?: string;
    demoVideo?: string;
    projectReport?: string; // ✅ Add this line
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`
        overflow-hidden border transition-all duration-500 slide-up
        bg-grayscale-200 dark:bg-grayscale-400 
        border-grayscale-200 dark:border-grayscale-400 
        shadow-md hover:shadow-xl group
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={project.image || "placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
        </div>
      )}

      <CardHeader className="p-6">
        <CardTitle className="text-xl mb-2 text-grayscale-500 dark:text-grayscale-100">
          {project.title}
        </CardTitle>
        <CardDescription className="text-grayscale-400 dark:text-grayscale-200">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground transition-all duration-300"
              style={{
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                transitionDelay: `${techIndex * 0.05}s`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      {(project.codeLink || project.link || project.demoVideo) && (
        <CardFooter className="p-6 pt-0 flex flex-wrap gap-4">
          {project.codeLink && (
            <Button
              variant="outline"
              className="flex items-center justify-center hover:bg-grayscale-300 dark:hover:bg-grayscale-300 transition"
              onClick={() => window.open(project.codeLink, "_blank")}
            >
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {project.link && (
            <Button
              variant="outline"
              className="flex items-center justify-center hover:bg-grayscale-300 dark:hover:bg-grayscale-300 transition"
              onClick={() => window.open(project.link, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {project.demoVideo && (
            <Button
              variant="outline"
              className="flex items-center justify-center hover:bg-grayscale-300 dark:hover:bg-grayscale-300 transition"
              onClick={() => window.open(project.demoVideo, "_blank")}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Demo Video
            </Button>
          )}
          {project.projectReport && (
            <Button
              variant="outline"
              className="flex items-center justify-center hover:bg-grayscale-300 dark:hover:bg-grayscale-300 transition"
              onClick={() => window.open(project.projectReport, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Project Report
            </Button>
          )}

        </CardFooter>
      )}
    </Card>
  );
}
