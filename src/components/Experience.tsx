import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Flutter Developer",
    company: "KamahTech",
    period: "Present",
    type: "On-site",
    description: [
      "Developed and maintained cross-platform applications using Flutter & Dart",
      "Integrated mobile apps with Odoo ERP system",
      "Implemented responsive UI/UX with modern design practices",
      "Used Bloc/Cubit for scalable state management",
      "Performed code reviews & followed Clean Architecture & SOLID principles",
      "Worked in agile sprints with continuous deployment",
    ],
  },
  {
    title: "Flutter Developer (Internship)",
    company: "Five Software Solutions",
    period: "Oct 2024 – Jan 2025",
    type: "Remote",
    description: [
      "Built high-performance Flutter apps with secure API integration",
      "Integrated payment gateways for seamless transactions",
      "Worked with CI/CD pipelines for automated deployments",
      "Improved code quality through debugging and testing",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in mobile app development
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-slide-up ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background hidden sm:block" />

                <div className="glass-card rounded-2xl p-6 ml-16 sm:ml-0 hover:shadow-hover transition-all">
                  <div className={`flex items-start gap-4 ${index % 2 === 1 ? "md:flex-row-reverse md:text-left" : ""}`}>
                    <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
