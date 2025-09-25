import { Navigation } from "../components/Navigation";
import { PortfolioHero } from "../components/PortfolioHero";
import { SkillsSection } from "../components/SkillsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <PortfolioHero />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;