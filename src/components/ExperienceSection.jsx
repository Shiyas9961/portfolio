import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export const ExperienceSection = () => {
  const { experiences, certifications, personalInfo } = usePortfolio();
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-text-secondary">
              {personalInfo.description}
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title}
                className={`bg-surface/30 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card animate-fade-in ${
                  exp.current ? 'border-primary/50 shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-3">
                        <Briefcase className="h-6 w-6 text-primary" />
                        {exp.title}
                      </h3>
                      <p className="text-lg text-accent font-semibold">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      {exp.current && (
                        <Badge className="bg-accent text-accent-foreground">
                          Current Position
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-text-secondary hover:border-primary hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Learning */}
          <div className="mt-16">
            <Card className="bg-gradient-surface border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  </div>
                  Continuous Learning & Certifications
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};