import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ayush Sharma</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Political Consultant & Social Media Manager
            </p>
            <p className="text-muted-foreground text-sm">
              Empowering political leaders with strategic digital campaigns
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`button-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:ayushsharma.chh@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  ayushsharma.chh@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919893064257"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-9893064257
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Indore, Madhya Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Ayush Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
