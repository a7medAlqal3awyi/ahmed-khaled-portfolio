import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "Flutter Developer",
  "Mobile App Engineer",
  "Cross-Platform Developer",
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTitle.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Avatar */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-primary p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-5xl font-bold gradient-text">
                AK
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Ahmed Khaled
          </h1>
          <div className="h-16 md:h-20 mb-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            I design and build high-quality cross-platform apps with Flutter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="rounded-full shadow-hover hover:shadow-hover transition-all">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="https://github.com/a7medAlqal3awyi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:shadow-hover transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ahmedkhaledalkalawyi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:shadow-hover transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:a7medalqalawyi@gmail.com"
              className="p-3 rounded-full glass-card hover:shadow-hover transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
