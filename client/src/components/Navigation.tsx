import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            data-testid="button-logo"
          >
            Ayush Sharma
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className="ml-2"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-nav-cta"
            >
              Get In Touch
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(item.href)}
                data-testid={`button-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => scrollToSection("#contact")}
              data-testid="button-mobile-nav-cta"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
