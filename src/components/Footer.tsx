
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <SocialLink
              href="https://github.com/SeguVarshitha"
              icon={<Github className="h-6 w-6" />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/varshitha-segu-b85756262"
              icon={<Linkedin className="h-6 w-6" />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://mail.google.com/mail/?view=cm&to=seguvarshitha@gmail.com"
              icon={<Mail className="h-6 w-6" />}
              label="Email"
            />


          </div>
          
          <Button 
            className="flex items-center gap-2 mb-12 transition-transform duration-300 hover:translate-y-[-5px]"
            onClick={() => window.open("https://drive.google.com/file/d/1FNNlJFMpjHO6M9-zC4JTfvAbiEu6S-Nf/view", "_blank")}
          >
            <FileText className="h-5 w-5" />
            View Resume
          </Button>
          
          <div className="flex space-x-8 mb-4">
            <FooterLink href="#hero" label="Home" />
            <FooterLink href="#experience" label="Experience" />
            <FooterLink href="#projects" label="Projects" />
            <FooterLink href="#contact" label="Contact" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Varshitha Segu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a 
        href={href} 
        className="text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:scale-125 p-3 border border-border rounded-full hover:border-foreground hover:bg-accent/20 transition-all"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-auto bg-popover text-popover-foreground border-border p-2">
      <p>{label}</p>
    </HoverCardContent>
  </HoverCard>
);

type FooterLinkProps = {
  href: string;
  label: string;
};

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <a 
    href={href} 
    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
  >
    {label}
  </a>
);
