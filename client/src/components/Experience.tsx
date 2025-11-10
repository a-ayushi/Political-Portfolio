import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Social Media Manager",
      organization: "Janmat Political Consulting",
      duration: "Dec 2024 – Present",
      type: "current",
      responsibilities: [
        "Handle social media accounts of MLAs and MPs across major platforms",
        "Create and manage posts, reels, and videos to increase public engagement",
        "Plan digital campaigns and monitor online reputation",
        "Analyse social media metrics to improve outreach",
        "Coordinate with ground teams for real-time updates and events"
      ]
    },
    {
      role: "Political Campaign & Leadership",
      organization: "State & National Elections",
      duration: "Dec 2023",
      type: "past",
      responsibilities: [
        "Collaborated with a Member of Legislative Assembly (MLA) during the 2023 state elections, managing the candidate's social media presence to enhance public engagement",
        "Worked with a national-level political party, engaging with Sarpanch, Janpad members, and Jila Panchayat representatives to support campaign activities",
        "Led a team of volunteers and oversaw social media strategy to increase outreach and voter awareness at the grassroots level",
        "Attended a 3-day election training program organized by the former Chief Minister of Madhya Pradesh"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-experience">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8" data-testid={`card-experience-${index}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  {exp.type === 'current' ? (
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    {exp.type === 'current' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground w-fit">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg text-muted-foreground font-medium mb-1">
                    {exp.organization}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
