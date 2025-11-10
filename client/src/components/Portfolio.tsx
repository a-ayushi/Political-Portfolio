import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

interface PortfolioItem {
  title: string;
  description: string;
  driveLink: string;
}

export default function Portfolio() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Campaign Work Sample 1",
      description: "Social media campaign strategy and content examples",
      driveLink: "https://drive.google.com/file/d/1yt2OGnBNEHm_jwhsGI5OcQI7fKPufe1x/view?usp=drivesdk"
    },
    {
      title: "Campaign Work Sample 2",
      description: "Digital outreach and engagement metrics",
      driveLink: "https://drive.google.com/file/d/1dPkLW0rEPI8qeqwMi7AadDQ3xp9jfkFR/view?usp=drivesdk"
    },
    {
      title: "Campaign Work Sample 3",
      description: "Political campaign materials and visual content",
      driveLink: "https://drive.google.com/file/d/1USY4MXECCuLCYFS6yyl4kZZIE2VQXiMb/view?usp=drivesdk"
    },
    {
      title: "Campaign Work Sample 4",
      description: "Team coordination and event coverage documentation",
      driveLink: "https://drive.google.com/file/d/1JjRndzAxtPAjHZvlbrIq6NUETUGJ0RhP/view?usp=drivesdk"
    },
    {
      title: "Campaign Work Sample 5",
      description: "Social media performance analysis and insights",
      driveLink: "https://drive.google.com/file/d/1_Hy21Lh9yVMh5BVlUPj12fcn3KSoPCUZ/view?usp=drivesdk"
    },
    {
      title: "Campaign Work Sample 6",
      description: "Political content creation portfolio",
      driveLink: "https://drive.google.com/file/d/1yTEFbIRi27yTi08vSvzy15Ixq73KATFn/view?usp=drivesdk"
    },
    {
      title: "Campaign Work Sample 7",
      description: "Grassroots campaign documentation",
      driveLink: "https://drive.google.com/file/d/12S9ugb--VlTbqQ2Njvrnuk5bvrEiS17O/view?usp=drivesdk"
    }
  ];

  const handleViewWork = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-portfolio">
            Portfolio & Work Samples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View examples of my political campaign work, social media strategies, and digital content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 flex flex-col hover-elevate"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <Button
                variant="outline"
                className="w-full mt-auto"
                onClick={() => handleViewWork(item.driveLink)}
                data-testid={`button-view-work-${index}`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Work
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
