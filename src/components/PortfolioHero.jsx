import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export const PortfolioHero = () => {
  const { personalInfo } = usePortfolio();
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-surface">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-primary opacity-10 blur-3xl rounded-full animate-glow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-accent/20 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-secondary">{personalInfo.status}</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-primary bg-clip-text text-transparent -mt-4 sm:mt-0">
            {personalInfo.name}
          </h1>
          
          {/* Subheading */}
          <h2 className="text-md sm:text-xl md:text-2xl text-text-secondary mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {personalInfo.title}
          </h2>
          
          {/* Description */}
          <p className="text-md sm:text-lg text-text-muted max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {personalInfo.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="default" size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-border hover:border-primary transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-border hover:border-primary transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-border hover:border-primary transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-text-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};