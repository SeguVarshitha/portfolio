
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-20 right-4 bg-grayscale-200 dark:bg-grayscale-400 z-40 rounded-full h-10 w-10 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-grayscale-500" />
      ) : (
        <Sun className="h-5 w-5 text-grayscale-100" />
      )}
    </Button>
  );
}
