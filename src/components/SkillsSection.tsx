import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend & Database",
      skills: [
        { name: "Java", level: 95 },
        { name: "MySQL", level: 90 },
        { name: "WildFly", level: 85 },
        { name: "HL7 Messages", level: 88 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Frontend & Web",
      skills: [
        { name: "Ember.js", level: 88 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 78 }
      ]
    },
    {
      title: "DevOps & Bioinformática",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Linux", level: 90 },
        { name: "Git", level: 95 },
        { name: "Shell Scripting", level: 85 },
        { name: "Bioinformatics Tools", level: 88 }
      ]
    }
  ];

  const certifications = [
    "Laboratory Information Systems (LIS)",
    "HL7 Integration Standards",
    "Docker & Container Technologies",
    "Bioinformatics Tools Development",
    "Healthcare Software Development"
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Competências</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Certificações</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-primary/10 transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;