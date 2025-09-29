import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "AEC CENTRO DE CONTATOS S/A - JP II",
      position: "ATENDENTE TIPO I & II",
      period: "2025 - PRESENTE",
      description: "Concluí treinamento na AEC Centro de Contatos S/A - JP II. Trabalhei na operação do Bradesco financiamento de veículos. Migrado para o Sac Bradesco onde dava informações, abria reclamações mediante protocolo, cancelava cartão de débito e a chave de segurança.",
      current: true
    },
    {
      id: 2,
      company: "A TRADICIONAL TAPIOCA DO LULA",
      position: "SERVIÇOS GERAIS",
      period: "OUT 2019 - JUL 2024",
      description: "Abertura da loja. Atende os clientes, passa troco, prepara tapioca, vende, limpa e organiza a loja. Fechamento da loja.",
      current: false
    },
    {
      id: 3,
      company: "ON LINE PRESTADORA DE SERVIÇOS LTDA",
      position: "AUXILIAR DE PRODUÇÃO",
      period: "ABR 2013 - JUL 2013",
      description: "Empresa terceirizada. Auxiliar de produção na empresa São Braz S/A.",
      current: false
    },
    {
      id: 4,
      company: "CARREFOUR COMÉRCIO E INDÚSTRIA LTDA",
      position: "EMPACOTADOR",
      period: "MAI 2011 - AGO 2011",
      description: "Embalando os produtos dos clientes. Frente de caixa. Repositor.",
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Minha jornada profissional e experiências que moldaram minhas habilidades
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-brand-primary/10 rounded-lg mt-1">
                      <Briefcase className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-text-primary">
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-brand-primary text-text-inverse w-fit">
                            Atual
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-brand-primary font-medium mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="h-4 w-4 text-text-muted" />
                        <span className="text-text-muted text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="ml-0 lg:ml-14">
                <p className="text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;