import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnndqvvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });
        setFormData({ name: "", email: "", message: "" });

        if (formRef.current) {
          formRef.current.classList.add("animate-pulse");
          setTimeout(() => {
            formRef.current?.classList.remove("animate-pulse");
          }, 1000);
        }
      } else {
        toast({
          title: "Error",
          description: "There was a problem submitting your message. Try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your internet connection and try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-grayscale-100 dark:bg-grayscale-500 py-24">
      <div className="section-container">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grayscale-500 dark:text-grayscale-100">
            Contact Me
          </h2>
          <Separator className="w-24 h-1 mx-auto bg-grayscale-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="slide-up">
            <h3 className="text-2xl font-bold text-grayscale-500 dark:text-grayscale-100 mb-4">
              Get In Touch
            </h3>
            <p className="text-grayscale-400 dark:text-grayscale-200 mb-6">
              I'm always interested in new opportunities, projects, and challenges. 
              Whether you have a question or just want to say hello, I'll try my 
              best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-grayscale-300 flex items-center justify-center mr-4">
                  <svg 
                    className="w-5 h-5 text-grayscale-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-grayscale-400 dark:text-grayscale-200">
                  seguvarshitha@gmail.com
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-grayscale-300 flex items-center justify-center mr-4">
                  <svg 
                    className="w-5 h-5 text-grayscale-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-grayscale-400 dark:text-grayscale-200">
                  Vijayawada, Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            ref={formRef}
            className="bg-grayscale-200 dark:bg-grayscale-400 p-8 rounded-lg shadow-md slide-up space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-grayscale-500 dark:text-grayscale-100">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-grayscale-100 dark:bg-grayscale-500 border-grayscale-300 dark:border-grayscale-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-grayscale-500 dark:text-grayscale-100">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                placeholder="Your email"
                required
                className={`bg-grayscale-100 dark:bg-grayscale-500 border-grayscale-300 dark:border-grayscale-300 transition-all duration-300 ${
                  focusedField === "email" ? "border-grayscale-500 dark:border-grayscale-100 shadow-sm" : ""
                }`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-grayscale-500 dark:text-grayscale-100">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                placeholder="Your message"
                rows={5}
                required
                className={`bg-grayscale-100 dark:bg-grayscale-500 border-grayscale-300 dark:border-grayscale-300 transition-all duration-300 ${
                  focusedField === "message" ? "border-grayscale-500 dark:border-grayscale-100 shadow-sm" : ""
                }`}
              />
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-grayscale-500 hover:bg-grayscale-400 text-grayscale-100 hover-scale"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
