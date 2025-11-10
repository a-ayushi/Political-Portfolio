import { Card } from "@/components/ui/card";
import { 
  Share2, 
  TrendingUp, 
  Users, 
  Target,
  MessageSquare,
  BarChart3,
  Video,
  FileText
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      points: [
        "Complete account management for MLAs & MPs",
        "Daily content creation and posting",
        "Multi-platform strategy (Facebook, Twitter, Instagram)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Campaign Planning",
      points: [
        "Strategic campaign roadmap development",
        "Target audience analysis",
        "Performance tracking and optimization"
      ]
    },
    {
      icon: Video,
      title: "Content Creation",
      points: [
        "Professional posts, reels, and videos",
        "Engaging visual content design",
        "Message crafting for maximum impact"
      ]
    },
    {
      icon: Users,
      title: "Team Management",
      points: [
        "Volunteer coordination and training",
        "Ground team leadership",
        "Cross-functional collaboration"
      ]
    },
    {
      icon: Target,
      title: "Booth Level Management",
      points: [
        "Grassroots campaign execution",
        "Voter outreach coordination",
        "Local representative engagement"
      ]
    },
    {
      icon: BarChart3,
      title: "Media Monitoring",
      points: [
        "Online reputation management",
        "Real-time social media tracking",
        "Crisis communication support"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-services">
            Services Offered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive political consulting and social media solutions tailored for political leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate active-elevate-2 transition-all"
              data-testid={`card-service-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{point}</span>
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
