import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Skills() {
  const politicalSkills = [
    "Team Management",
    "Leadership",
    "Social Media Management",
    "Booth Level Management",
    "Ground Survey",
    "Rebel Tracking",
    "Media Monitoring",
    "Campaign Strategy",
    "Digital Marketing",
    "Content Creation",
    "Public Engagement",
    "Crisis Management"
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-skills">
          Core Competencies
        </h2>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Political & Social Media Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {politicalSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
                data-testid={`badge-skill-${index}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
