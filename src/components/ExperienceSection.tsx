import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Pet Universal",
      location: "Porto, Portugal",
      period: "Dec 2024 - Now",
      description: "Development of a Laboratory Information System (LIS) handling HL7 messages, contributing with new features, bug fixes, and performance improvements using Java, Ember.js, WildFly, and MySQL.",
      skills: ["Java", "JavaScript", "Ember.js","MySQL", "HL7", "Wildfly", "GIT"]
    },
    {
      title: "Thesis Internship",
      company: "Phenotypic Evolution Group (pegi3s)",
      location: "Porto, Portugal",
      period: "Sep 2023 - Jul 2024",
      description: "Maintained the Bioinformatics Docker Images project and developed user-friendly tools (DocNRun, Docker Manager) to simplify Docker usage in bioinformatics.",
      skills: ["Python", "GUI", "Docker", "Bioinformatics", "Linux", "Shell Scripting"]
    },
    {
      title: "Bachelor's Internship",
      company: "Phenotypic Evolution Group (pegi3s)",
      location: "Porto, Portugal",
      period: "Mar 2022 - Jul 2022",
      description: "Supported the Quality Department (GQ) through projects in Health Metrology, equipment calibration, Eye Bank requirements, and document management systems.",
      skills: ["Hospital Information Systems", "Medical Equipment", "GHAF", "Research"]
    },
    {
      title: "Student Association",
      company: "Phenotypic Evolution Group (pegi3s)",
      location: "Porto, Portugal",
      period: "Mar 2020 - Dec 2024",
      description: "Board member of the Sports Department, managing college teams, coordinating national competitions, and organizing major student events.",
      skills: ["Problem Solving", "Communication", "Leadership", "Teamwork"]
    }
  ];

  const education = [
    {
      degree: "Master's in Biomedical Engineering",
      school: "ISEP - Instituto Superior de Engenharia do Porto",
      period: "Sep 2022 - Jul 2024",
      description: "An advanced program integrating engineering, science, and technology, equipping professionals to work at the interface between engineering and health sciences."
    },
    {
      degree: "Erasmus+ BIP - Molecular Biotechnology",
      school: "HELHa — Haute École Louvain en Hainaut",
      period: "Mar 2021 - Mar 2021", 
      description: "A solid program combining engineering principles with health sciences, preparing students to address clinical challenges and develop biomedical technologies."
    },
    {
      degree: "Baschelor's in Biomedical Engineering",
      school: "ISEP - Instituto Superior de Engenharia do Porto",
      period: "Sep 2019 - Sep 2022", 
      description: "A solid program combining engineering principles with health sciences, preparing students to address clinical challenges and develop biomedical technologies."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional and academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-hero-gradient rounded-full mr-3"></div>
              Professional Experience
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
              Academic Formation
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