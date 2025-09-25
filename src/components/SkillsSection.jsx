import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { usePortfolio } from "@/context/PortfolioContext";

export const SkillsSection = () => {
  const { skillCategories, personalInfo } = usePortfolio();
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-surface/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive experience across the full technology stack, from backend development 
              to cloud infrastructure and monitoring systems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="group bg-surface/50 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:shadow-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Experience Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-surface border border-border">
              <div className="text-3xl font-bold text-primary mb-2">{personalInfo.yearsExperience}</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-surface border border-border">
              <div className="text-3xl font-bold text-accent mb-2">{personalInfo.technologies}</div>
              <div className="text-text-secondary">Technologies</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-surface border border-border">
              <div className="text-3xl font-bold text-primary mb-2">{personalInfo.commitment}</div>
              <div className="text-text-secondary">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};