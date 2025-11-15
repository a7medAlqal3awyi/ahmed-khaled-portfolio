import { GraduationCap, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed">
              Results-driven <span className="font-semibold text-primary">Flutter Developer</span> skilled in designing, developing, and deploying cross-platform mobile applications for iOS and Android.
            </p>
            <p className="text-lg leading-relaxed">
              Experienced with <span className="font-semibold">Flutter, Dart, Clean Architecture</span>, state management (Bloc, Cubit, Provider), RESTful API integration, and scalable app architecture.
            </p>
            <p className="text-lg leading-relaxed">
              Published multiple apps on <span className="font-semibold">Google Play</span> and the <span className="font-semibold">App Store</span>. Passionate about clean code, performance optimization, and building impactful digital experiences.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Clean Code Advocate</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Performance Optimizer</span>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
                  <p className="text-primary font-semibold mb-1">Computer Science</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Beni Suef University – Faculty of Computer and AI
                  </p>
                  <p className="text-sm font-medium">2020 – 2024</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold mb-4">Passionate About</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Mobile Development Excellence</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Continuous Learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Building Impactful Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
