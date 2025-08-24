import { Card } from "@/components/ui/card";
import { Code, Activity, Database } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desenvolvimento Full Stack",
      description: "Java, Ember.js, WildFly e MySQL para sistemas robustos e escaláveis"
    },
    {
      icon: Activity,
      title: "Sistemas de Saúde",
      description: "Experiência em LIS (Laboratory Information Systems) e mensagens HL7"
    },
    {
      icon: Database,
      title: "Bioinformática",
      description: "Desenvolvimento de ferramentas Docker e soluções para análise biológica"
    }
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um Engenheiro Biomédico e Full Stack Developer apaixonado por aplicar tecnologia 
            na área da saúde para criar soluções que melhoram vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-card p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-gradient rounded-full mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">A Minha Jornada</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Como Full Stack Developer com formação em Engenharia Biomédica, combino 
                  conhecimentos técnicos com experiência prática em Java, Ember.js, WildFly 
                  e MySQL para desenvolver sistemas robustos na área da saúde.
                </p>
                <p>
                  Atualmente trabalho no desenvolvimento de um Laboratory Information System (LIS) 
                  que processa mensagens HL7, contribuindo para novas funcionalidades e resolução 
                  de problemas técnicos complexos.
                </p>
                <p>
                  Anteriormente, trabalhei no Phenotypic Evolution Group (pegi3s), onde mantive 
                  o projeto Bioinformatics Docker Images e desenvolvi ferramentas user-friendly 
                  como DocNRun e Docker Manager para simplificar o uso de Docker.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">Java Development</span>
                <span className="text-primary font-semibold">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-hero-gradient h-2 rounded-full w-[95%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Healthcare Systems (HL7/LIS)</span>
                <span className="text-primary font-semibold">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-hero-gradient h-2 rounded-full w-[90%]"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Bioinformatics & Docker</span>
                <span className="text-primary font-semibold">88%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-hero-gradient h-2 rounded-full w-[88%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;