import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.png";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-background to-background-secondary">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        
        {/* Avatar */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-primary/20 shadow-lg hover:shadow-brand-primary/30 transition-all duration-300">
            <img src={developerAvatar} alt="Kaio Gustavo - Desenvolvedor Front-End" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Kaio Gustavo</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-text-secondary">
            Desenvolvedor Front-End
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">Freelancer</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" size="sm" className="glass-card hover:bg-brand-primary hover:text-text-inverse transition-all duration-300" onClick={() => window.open('mailto:ikicicvt@gmail.com')}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" size="sm" className="glass-card hover:bg-brand-primary hover:text-text-inverse transition-all duration-300" onClick={() => window.open('tel:+5583987922753')}>
            <Phone className="mr-2 h-4 w-4" />
            Telefone
          </Button>
          <Button variant="outline" size="sm" className="glass-card hover:bg-brand-primary hover:text-text-inverse transition-all duration-300" onClick={() => window.open('https://linkedin.com/in/kaiobrl', '_blank')}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="glass-card hover:bg-brand-primary hover:text-text-inverse transition-all duration-300" onClick={() => window.open('https://github.com/Kaiobrl', '_blank')}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="hero-button" size="lg" onClick={() => scrollToSection('experience')}>
            Ver Experiência
          </Button>
          <Button variant="outline" size="lg" className="glass-card hover:bg-brand-primary hover:text-text-inverse transition-all duration-300" onClick={() => scrollToSection('contact')}>
            Entre em Contato
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <Button variant="ghost" size="sm" className="text-text-muted hover:text-brand-primary transition-colors" onClick={() => scrollToSection('about')}>
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;