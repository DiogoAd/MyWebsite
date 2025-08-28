import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diogojoseadao@gmail.com",
      href: "mailto:diogojoseadao@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+351 934943932",
      href: "tel:+351934943932"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Porto, Portugal"
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about improving health through technology? Let’s collaborate!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Informations</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-semibold mb-3">Specialization</h4>
              <p className="text-muted-foreground mb-4">
                Specialized in developing digital tools and systems to improve healthcare and biomedical workflows.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Open to collaborations</span>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" className="transition-all focus:shadow-soft" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" placeholder="your@email.com" className="transition-all focus:shadow-soft" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Subject" className="transition-all focus:shadow-soft" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project or question"
                  rows={6}
                  className="transition-all focus:shadow-soft resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full hero-gradient text-primary-foreground hover:shadow-medium transition-all">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;