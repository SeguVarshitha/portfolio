import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { useEffect } from "react";

// Sample data
const experiences = [
  {
    company: "Ambit SemiConductos",
    role: "Summer Intern",
    period: "June 2024 - July 2024",
    description: "Collaborated with HR professionals to understand their needs and requirements for the chatbot. Conducted detailed analysis to identify key features and functionalities to be automated and deployed the chatbot on comppany's internal MS Sharepoint website."
  },
  {
    company: "NextGenCloud Club",
    role: "Lead - Tech Python Department",
    period: "June 2023 - June 2024",
    description: "Developed responsive web applications using React.js, Node.js, and MongoDB. Collaborated with designers to implement UI/UX improvements and optimize performance."
  }
];

const projects = [
  {
    title: "PrepWise - AI Powered mock interview platform",
    description: "PrepWise is a smart interview practice platform developed during HackVerse, where our team ranked in the top 10 out of 150+ teams.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Firebase", "Gemini AI", "Vapi", "Git"],
    image: "/project-icons/prepwise.png",
    link: "https://prepwisemock.vercel.app/",
    codeLink: "https://github.com/SeguVarshitha/PrepWise.git"
  },
  {
    title: "Time Snap - Chrome Extension",
    description: "Developed a lightweight Chrome extension to take timestamped notes while watching YouTube videos. Published on the Chrome Web Store, complying with privacy policy and permissions best practices.",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome APIs", "Chrome Privacy Policy"],
    image: "/project-icons/timesnap.png",
    link: "https://chromewebstore.google.com/detail/timesnap/gpcaopagnaihjfbnamabohgofekciflp?authuser=0&hl=en-GB",
  },
  {
    title: "HR Automation Chatbot",
    description: "Designed and implemented a chatbot to automate routine HR activities and reduce manual workload. Improved HR operational efficiency through conversational automation.",
    technologies: ["Microsoft Power Virtual Agents", "Microsoft Copilot Studio"],
    image: "/project-icons/chatbot.jpg",
    projectReport: "https://drive.google.com/file/d/12gxeFQ2GIBj2ErpQr5LHv_FrFpKpyxOp/view",
    demoVideo: "https://drive.google.com/file/d/1C-fuBdv5wBFp0udOKDq7j_Har1j-FjMU/view?usp=sharing"
  },
  {
    title: "Audio Classifier",
    description: "Developed a deep learning model to help in identifying music genres from audio tracks efficiently.Converted audio files to melspectogram for feature extraction. Used libraries like librosa to work on audio files processing.",
    technologies: ["Python", "Librosa", "Tensorflow", "numpy", "pandas", "streamlit"],
    image: "/project-icons/music_genre_home.png",
    codeLink: "https://github.com/SeguVarshitha/Audio-Classifier.git", // Add your demo link here
    projectReport: "https://drive.google.com/file/d/1CM7P_1lO5DkXgUI7AvGqUDM6WV8xjvnB/view"
  },
  {
    title: "Book Recommender System",
    description: "Built a book recommendation system using Python, combining collaborative filtering and popularity-based approaches. Designed a clean interface using Flask.",
    technologies: ["Python", "Flask", "numpy", "pandas"],
    image: "/project-icons/book-recommender-system.png",
    codeLink: "https://github.com/SeguVarshitha/book-recommender-system.git", 
    demoVideo: "https://youtu.be/tCo9jmtsLnE?si=qZQ7ObVTvDdjKmP-"
  }
];

const Index = () => {
  useEffect(() => {
    // Add Inter font from Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <SmoothScrollProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <ThemeToggle />
          
          <main>
            <HeroSection name="Varshitha" />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
            <ContactSection />
          </main>
          
          <Footer />
          <ScrollToTop />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
};

export default Index;
