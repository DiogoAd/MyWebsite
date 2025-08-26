import { Card } from "@/components/ui/card";
import { Code, Activity, Database } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Java, Ember.js, WildFly and MySQL for robust and scalable systems"
    },
    {
      icon: Activity,
      title: "Healthcare Systems",
      description: "LIS (Laboratory Information Systems) development and HL7 messages"
    },
    {
      icon: Database,
      title: "Bioinformatics",
      description: "Development of Docker-based tools for biological data analysis"
    }
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a Biomedical Engineer and Full Stack Developer passionate about leveraging technology in healthcare to create innovative solutions that improve lives.
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

<div className="grid lg:grid-cols-2 gap-8">
  {/* Caixa 1: My Journey */}
  <div className="bg-card rounded-2xl p-8 shadow-soft">
    <h3 className="text-2xl font-bold mb-6">My Journey</h3>
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>I am a Full Stack Developer with a background in Biomedical Engineering, experienced in Java, Ember.js, WildFly, and MySQL, building robust healthcare systems.</p>
      <p>Currently, I work on a Laboratory Information System (LIS) that processes HL7 messages, adding new features and resolving complex technical challenges.</p>
      <p>Previously, at the Phenotypic Evolution Group (pegi3s), I maintained the Bioinformatics Docker Images project and created tools like DocNRun and Docker Manager to simplify Docker usage.</p>
      <p>Beyond work, I develop personal and collaborative projects, including an image recognition project and the website for NEEB (now discontinued).</p>
    </div>
  </div>

  <div className="bg-card rounded-2xl p-8 shadow-soft">
    <h3 className="text-2xl font-bold mb-6">Technical Skills & Proficiency</h3>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="font-medium">Full-Stack Development</span>
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
        <span className="font-medium">Electronics</span>
        <span className="text-primary font-semibold">90%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div className="bg-hero-gradient h-2 rounded-full w-[90%]"></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium">Bioinformatics & Docker</span>
        <span className="text-primary font-semibold">70%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div className="bg-hero-gradient h-2 rounded-full w-[70%]"></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium">Machine Learning</span>
        <span className="text-primary font-semibold">WIP</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div className="bg-hero-gradient h-2 rounded-full w-[0%] animate-pulse"></div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutSection;