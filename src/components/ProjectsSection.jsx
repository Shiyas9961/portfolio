import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export const ProjectsSection = () => {
  const { projects } = usePortfolio();
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-surface/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Key Projects
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hands-on experience building scalable systems, implementing monitoring solutions, 
              and managing cloud infrastructure in production environments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.title}
                  className="group bg-surface/50 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:shadow-glow animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="p-6 pb-4">
                    {/* Project Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className="bg-secondary/50 text-secondary-foreground mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline"
                            className="border-primary/20 text-text-muted hover:border-primary hover:text-primary transition-all duration-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-surface border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-text-secondary mb-6">
                  I'm passionate about creating reliable, scalable infrastructure and automating complex systems. 
                  Let's discuss how I can contribute to your DevOps team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow">
                    View All Projects
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:border-primary">
                    Contact Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};