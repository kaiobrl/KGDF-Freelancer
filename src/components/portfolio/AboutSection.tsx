import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, User } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e formação profissional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Profile Info */}
          <Card className="glass-card p-6 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-brand-primary/10 rounded-xl">
                <User className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Perfil Profissional
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Desenvolvedor Web com experiência em HTML, CSS e JavaScript, 
                  procurando oportunidade para aplicar meus conhecimentos e habilidades 
                  em um ambiente de trabalho dinâmico e desafiador.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin className="h-4 w-4" />
                <span>Planalto Boa Esperança, Valentina S/N - João Pessoa</span>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="glass-card p-6 animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-brand-primary/10 rounded-xl">
                <GraduationCap className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Educação
                </h3>
                <div className="space-y-3">
                  <div>
                    <Badge variant="secondary" className="bg-brand-primary text-text-inverse mb-2">
                      2011
                    </Badge>
                    <p className="text-text-primary font-medium">
                      Ensino Médio Completo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Values/Qualities */}
        <Card className="glass-card p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Características Profissionais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary font-bold text-xl">🚀</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Proativo</h4>
              <p className="text-text-muted text-sm">
                Sempre em busca de novas oportunidades de aprendizado e crescimento
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary font-bold text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Focado</h4>
              <p className="text-text-muted text-sm">
                Determinado a entregar resultados de qualidade em cada projeto
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary font-bold text-xl">🤝</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Colaborativo</h4>
              <p className="text-text-muted text-sm">
                Trabalho bem em equipe e valorizo a comunicação eficaz
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default AboutSection;