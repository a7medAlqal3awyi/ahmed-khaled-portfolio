import { motion } from "framer-motion";
import { Code, Coffee, Bug, Briefcase } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Projects Completed", value: "10+", icon: Code },
  { label: "Bugs Fixed", value: "500+", icon: Bug },
  { label: "Coffee Cups", value: "1000+", icon: Coffee },
];

const technologies = [
  "Flutter", "Dart", "Firebase", "REST APIs", "Bloc", "Cubit", "Provider", "GetX", "Git", "GitHub", "Clean Architecture", "MVVM"
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a192f] text-[#8892b0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-[#233554] flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-lg"
          >
            <p>
              Hello! My name is Ahmed Khaled and I'm passionate about creating beautiful, functional mobile applications. My journey in mobile development started with Flutter, and I've been hooked ever since on building cross-platform solutions that work seamlessly on both iOS and Android.
            </p>
            <p>
              I specialize in designing, developing, and deploying mobile applications with clean architecture principles. I have experience with state management solutions like Bloc, Cubit, and Provider, RESTful API integration, and building scalable app architectures.
            </p>
            <p>
              I've published multiple apps on Google Play and the App Store, and I'm passionate about clean code, performance optimization, and creating impactful digital experiences.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
              {["Flutter", "Dart", "Firebase", "REST APIs", "Bloc/Cubit", "Git & GitHub"].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#64ffda]">
                <stat.icon className="w-8 h-8 text-[#64ffda] mb-4" />
                <h3 className="text-3xl font-bold text-[#ccd6f6] mb-2">{stat.value}</h3>
                <p className="text-sm font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Ticker */}
        <div className="mt-20 overflow-hidden relative">
          <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="text-2xl font-bold text-[#233554] hover:text-[#64ffda] transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
