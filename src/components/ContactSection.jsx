import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  Send,
  Calendar,
  FileText,
  MapPin
} from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

export const ContactSection = () => {
  const { contactMethods, personalInfo } = usePortfolio();
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-surface/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Ready to contribute to your DevOps team and help build reliable, scalable infrastructure. 
              Let's discuss opportunities and how I can add value to your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Get In Touch</h3>
                <p className="text-text-secondary mb-8">
                  I'm actively seeking DevOps engineer positions where I can leverage my development 
                  background and growing infrastructure expertise. Open to remote and hybrid opportunities.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <Card 
                      key={method.label}
                      className="group bg-surface/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <a 
                          href={method.href}
                          className="flex items-center gap-4"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`h-5 w-5 ${method.color}`} />
                          </div>
                          <div>
                            <div className="font-semibold text-text-primary">{method.label}</div>
                            <div className="text-sm text-text-secondary group-hover:text-primary transition-colors duration-300">
                              {method.value}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/Shiyas_B.pdf" download="Shiyas_B.pdf">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  </a>
                  <Button variant="outline" className="border-primary/30 hover:border-primary flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Call
                  </Button>
                </div>
              </div>

              {/* Location */}
              <Card className="bg-gradient-surface border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">Location</div>
                      <div className="text-text-secondary">{personalInfo.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-surface/30 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-text-primary">Name</Label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-text-primary">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-text-primary">Subject</Label>
                    <Input 
                      id="subject"
                      placeholder="DevOps Opportunity - [Company Name]"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-text-primary">Message</Label>
                    <Textarea 
                      id="message"
                      placeholder="I'm interested in discussing how my development background and DevOps skills could contribute to your team..."
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};