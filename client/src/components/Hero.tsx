import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-11-11 at 12.54.14 AM (1)_1762804215146.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20">
                <img
                  src={profileImage}
                  alt="Ayush Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg font-semibold">
                Available for Projects
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left order-2 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ayush Sharma
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                Political Consultant & Social Media Manager
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Empowering Political Leaders with Strategic Social Media Campaigns
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={() => scrollToSection("contact")}
                data-testid="button-schedule-consultation"
              >
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => scrollToSection("portfolio")}
                data-testid="button-view-work"
              >
                View My Work
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground pt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-5 h-5" />
                <span>Indore, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone className="w-5 h-5" />
                <span>+91-9893064257</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-medium pt-2">
              ✓ Trusted by MLAs, MPs & Political Leaders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
