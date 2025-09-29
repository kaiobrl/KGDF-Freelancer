import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ikicicvt@gmail.com",
      action: () => window.open('mailto:ikicicvt@gmail.com')
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (83) 9 8792-2753",
      action: () => window.open('tel:+5583987922753')
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "João Pessoa, PB",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/in/kaiobrl",
      url: "https://linkedin.com/in/kaiobrl"
    },
    {
      icon: Github,
      label: "GitHub",
      username: "/Kaiobrl",
      url: "https://github.com/Kaiobrl"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades e projetos. Estou sempre aberto a novas conexões!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="glass-card p-6 animate-slide-up">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${
                    item.action ? 'hover:bg-background-secondary cursor-pointer' : ''
                  }`}
                  onClick={item.action || undefined}
                >
                  <div className="p-2 bg-brand-primary/10 rounded-lg">
                    <item.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">{item.label}</p>
                    <p className="text-text-primary font-medium">{item.value}</p>
                  </div>
                  {item.action && (
                    <ExternalLink className="h-4 w-4 text-text-muted ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Social Links */}
          <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Redes Sociais
            </h3>
            
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <div 
                  key={social.label}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-background-secondary cursor-pointer transition-colors duration-200"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <div className="p-2 bg-brand-primary/10 rounded-lg">
                    <social.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-text-primary font-medium">{social.label}</p>
                    <p className="text-text-muted text-sm">{social.username}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-text-muted ml-auto" />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">
              <Button 
                className="w-full hero-button"
                onClick={() => window.open('mailto:ikicicvt@gmail.com')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Enviar Email
              </Button>
              <Button 
                variant="outline"
                className="w-full glass-card hover:bg-brand-primary hover:text-text-inverse transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/kaiobrl', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Conectar no LinkedIn
              </Button>
            </div>
          </Card>
        </div>

        {/* Professional Availability */}
        <Card className="glass-card p-6 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Disponível para Oportunidades
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Estou aberto a novas oportunidades de trabalho e projetos desafiadores. 
              Se você tem uma vaga ou projeto que se alinha com minhas habilidades, 
              adoraria conversar!
            </p>
            <Button 
              className="hero-button"
              size="lg"
              onClick={() => window.open('mailto:ikicicvt@gmail.com?subject=Oportunidade de Trabalho')}
            >
              Vamos Conversar
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;