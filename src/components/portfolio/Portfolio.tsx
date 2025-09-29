import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-card-border/30 bg-background-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted">
            © 2025 Kaio Gustavo. Desenvolvido com React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;