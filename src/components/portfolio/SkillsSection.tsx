import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Briefcase, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Desenvolvimento",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Front-End Development"],
      description: "Tecnologias e ferramentas para desenvolvimento web"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Trabalho em Equipe", "Comunicação", "Resolução de Problemas"],
      description: "Habilidades interpessoais e de colaboração"
    },
    {
      title: "Gestão",
      icon: Briefcase,
      skills: ["Gestão de Projetos", "Organização", "Planejamento"],
      description: "Capacidades de liderança e administração"
    },
    {
      title: "Idiomas",
      icon: Globe,
      skills: ["Português (Nativo)", "English (Intermediário)", "Spanish (Iniciante)"],
      description: "Comunicação multilíngue"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Habilidades & Competências
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Tecnologias, ferramentas e habilidades que domino para criar soluções eficazes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl">
                  <category.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-brand-secondary text-text-primary hover:bg-brand-primary hover:text-text-inverse transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Courses */}
        <div className="mt-16">
          <Card className="glass-card p-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Cursos Técnicos
              </h3>
              <p className="text-text-muted">
                UNEPI - União de Ensino e Pesquisa Integrada
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Operador de Computador",
                "Manutenção e Suporte em Informática", 
                "Técnico de Apoio ao Usuário de Informática"
              ].map((course, index) => (
                <div 
                  key={course}
                  className="text-center p-4 rounded-lg bg-background-secondary/50 border border-card-border/30 hover:border-brand-primary/30 transition-colors duration-200"
                >
                  <p className="text-text-primary font-medium">{course}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;