import { useDownloadCV } from "@/hooks/useDownloadCV";
import { useCopyEmail } from "@/hooks/useCopyEmail";
import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin,  MessageCircleMore} from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  const { copyEmail } = useCopyEmail() 
  const { downloadCV } = useDownloadCV() 

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
                Welcome to my<br />
                <span className="text-foreground">Website</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Full Stack Developer & Biomedical Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Combining software development and bioinformatics to create innovative healthcare solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <Button size="lg" className="hero-gradient text-primary-foreground shadow-medium hover:shadow-strong transition-spring" onClick={downloadCV}>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>

              <a
                href="https://www.linkedin.com/in/diogo-ad%C3%A3o-822831210/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 transition-spring">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 transition-spring" onClick={copyEmail}>
                  <Mail className="h-5 w-5" />
                </Button>
              <a
                href="https://wa.me/351934943932"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 transition-spring">
                  <MessageCircleMore className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-hero-gradient rounded-full blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-full shadow-strong border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;