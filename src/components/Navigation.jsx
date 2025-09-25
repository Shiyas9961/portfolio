import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#hero", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" 
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MS</span>
              </div>
              <span className="font-bold text-lg text-text-primary">Mohamed Shiyas</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 hover:text-primary relative px-3 py-2 rounded-md",
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-text-secondary hover:text-primary"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                Let's Connect
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center h-full transition-transform duration-300",
            isOpen ? "transform translate-y-0" : "transform -translate-y-4"
          )}
        >
          {/* Mobile Navigation Items */}
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "flex items-center space-x-4 text-lg font-medium transition-colors duration-300 px-6 py-3 rounded-lg",
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-text-secondary hover:text-primary hover:bg-surface/50"
                  )}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-12">
            <Button 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow px-8"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};