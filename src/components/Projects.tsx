import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "HR Management",
    company: "KamahTech",
    description: "Complete HR system with leave management, loans, missions, and payslip features. Published on Google Play & App Store.",
    tags: ["Flutter", "Bloc", "REST API", "Clean Architecture"],
    playStore: "#",
    appStore: "#",
  },
  {
    title: "Van Sale",
    company: "KamahTech",
    description: "Real-time driver tracking, stock management, and return processing system with Google Maps integration.",
    tags: ["Flutter", "Dio", "Google Maps", "Local Storage"],
    link: "#",
  },
  {
    title: "NeuraDerm",
    company: "Graduation Project",
    description: "AI-powered skin cancer detection app with secure patient profiles and data encryption.",
    tags: ["Flutter", "AI/ML", "Firebase", "Encryption"],
    github: "#",
  },
  {
    title: "Gemini Clone",
    company: "Personal Project",
    description: "AI chat application using Google Generative AI API with interactive markdown rendering.",
    tags: ["Flutter", "Google AI", "Markdown"],
    github: "#",
  },
  {
    title: "E-Commerce App",
    company: "Joumla",
    description: "Full-featured e-commerce app with Bloc state management, favorites, cart, and authentication.",
    tags: ["Flutter", "Bloc", "REST API", "Auth"],
    link: "#",
  },
  {
    title: "Tejara",
    company: "E-Commerce",
    description: "E-commerce platform with Provider state management, smooth animations, and cached images.",
    tags: ["Flutter", "Provider", "Animations"],
    github: "#",
  },
  {
    title: "Portfolio Website",
    company: "Personal",
    description: "Flutter web portfolio with custom animations hosted on GitHub Pages.",
    tags: ["Flutter Web", "Animations", "GitHub Pages"],
    link: "#",
  },
  {
    title: "Project Placeholder",
    company: "Coming Soon",
    description: "Exciting new project in development. Stay tuned for updates!",
    tags: ["Flutter", "TBA"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my mobile application development work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium">{project.company}</p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                )}
                {project.link && (
                  <Button
                    size="sm"
                    className="rounded-full"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                )}
                {project.playStore && (
                  <Button
                    size="sm"
                    className="rounded-full"
                    onClick={() => window.open(project.playStore, "_blank")}
                  >
                    Play Store
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
