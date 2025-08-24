import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Laboratory Information System Project",
      location: "Portugal",
      period: "Presente",
      description: "Desenvolvimento de um Laboratory Information System (LIS) que processa mensagens HL7, contribuindo para novas funcionalidades e resolução de bugs. Trabalho com Java, Ember.js, WildFly e MySQL.",
      skills: ["Java", "Ember.js", "WildFly", "MySQL", "HL7", "LIS"]
    },
    {
      title: "Software Developer",
      company: "Phenotypic Evolution Group (pegi3s)",
      location: "Portugal",
      period: "Anterior",
      description: "Manutenção do projeto Bioinformatics Docker Images e desenvolvimento de ferramentas user-friendly como DocNRun e Docker Manager para simplificar o uso de Docker na bioinformática.",
      skills: ["Docker", "Bioinformatics", "Linux", "Shell Scripting", "Git"]
    }
  ];

  const education = [
    {
      degree: "Mestrado em Engenharia Biomédica",
      school: "Universidade",
      period: "Anos de Estudo",
      description: "Especialização em sistemas de informação médica, processamento de sinais biomédicos e tecnologias aplicadas à saúde"
    },
    {
      degree: "Licenciatura em Engenharia Biomédica",
      school: "Universidade",
      period: "Anos de Estudo", 
      description: "Formação sólida em engenharia aplicada à medicina, programação e sistemas biomédicos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experiência</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O meu percurso profissional e académico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-hero-gradient rounded-full mr-3"></div>
              Experiência Profissional
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-hero-gradient rounded-full mr-3"></div>
              Formação Académica
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                      <p className="text-lg font-medium">{edu.school}</p>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;