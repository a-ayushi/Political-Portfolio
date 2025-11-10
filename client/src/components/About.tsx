import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Users, TrendingUp } from "lucide-react";

export default function About() {
  const strengths = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Managing volunteers and ground teams effectively"
    },
    {
      icon: TrendingUp,
      title: "Social Media Growth",
      description: "Proven track record in digital engagement"
    },
    {
      icon: Target,
      title: "Campaign Strategy",
      description: "Data-driven political campaign planning"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Trained by former Chief Minister of MP"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-about">
          About Me
        </h2>

        <div className="space-y-8">
          <div className="text-base md:text-lg text-foreground leading-relaxed space-y-4">
            <p>
              As a dedicated political consultant and social media manager, I specialize in helping political leaders 
              amplify their voice and connect with constituents through strategic digital campaigns. My expertise lies 
              in managing social media accounts for MLAs and MPs, creating engaging content, and driving meaningful 
              public engagement.
            </p>
            <p>
              With hands-on experience in state elections and collaboration with national-level political parties, 
              I bring a comprehensive understanding of grassroots campaigning, booth-level management, and digital strategy 
              to every project.
            </p>
          </div>

          <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-foreground">
                  <span className="font-semibold">Master of Computer Application (MCA)</span>
                  <br />
                  Devi Ahilya Vishwavidyalaya, Indore
                  <br />
                  <span className="text-muted-foreground">Sep 2023 – Jun 2025</span>
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-strength-${index}`}>
                <strength.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                <p className="text-muted-foreground text-sm">{strength.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
