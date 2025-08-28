import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend & Database",
      skills: [
        { name: "Java", level: 95 },
        { name: "HL7 Messages", level: 95 },
        { name: "REST APIs", level: 95 },
        { name: "Git", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "WildFly", level: 50 },
      ]
    },
    {
      title: "Frontend & Web",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Ember.js", level: 85 },
        { name: "HTML/CSS", level: 85 },
        { name: "TypeScript", level: 30 },
        { name: "React", level: 30 },
        { name: "PHP", level: 30 }
      ]
    },
    {
      title: "DevOps & Bioinformatics",
      skills: [
        { name: "Bioinformatics Tools", level: 95 },
        { name: "Python", level: 95 },
        { name: "GUI Development", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 70 },
        { name: "Shell Scripting", level: 70 }
      ]
    },
    {
      title: "Others",
      skills: [
          { name: "Electronics Design", level: 95 },
          { name: "Microcontrollers (Arduino/Raspberry Pi)", level: 95 },
          { name: "Signal Acquisition & Processing", level: 95 },
          { name: "Embedded Systems", level: 85 },
          { name: "Biomechanics", level: 85 },
          { name: "SolidWorks 3D Modeling", level: 70 }
      ]
    }
  ];


  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and Tools I Am Confident With
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
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
      </div>
    </section>
  );
};

export default SkillsSection;