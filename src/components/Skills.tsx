import { Code2, Layers, Cloud, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: [
      { name: "Clean Architecture", level: 90 },
      { name: "Bloc / Cubit", level: 95 },
      { name: "MVVM", level: 85 },
      { name: "Provider", level: 90 },
      { name: "GetX", level: 80 },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Cloud,
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Odoo Integration", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and tools I use to build exceptional mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 100 + skillIndex * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["SOLID Principles", "Clean Code", "Jira", "Swagger", "Agile", "Google Maps API"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:shadow-hover transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
