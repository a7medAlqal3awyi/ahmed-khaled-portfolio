import { motion } from "framer-motion";

const jobs = [
  {
    title: "Flutter Developer",
    company: "KamahTech",
    date: "2024 - Present",
    description: [
      "Developed and maintained cross-platform mobile applications using Flutter and Dart",
      "Implemented clean architecture principles and state management solutions (Bloc, Cubit, Provider)",
      "Integrated RESTful APIs and Firebase services for real-time data synchronization",
      "Collaborated with design teams to create pixel-perfect, responsive UI/UX implementations",
      "Published multiple applications to Google Play Store and Apple App Store"
    ],
    tech: ["Flutter", "Dart", "Firebase", "Bloc"]
  },
  {
    title: "Mobile Application Developer",
    company: "Freelance",
    date: "2023 - 2024",
    description: [
      "Built custom mobile applications for various clients using Flutter framework",
      "Designed and implemented scalable app architectures with clean code principles",
      "Integrated third-party APIs and services including payment gateways and social media",
      "Optimized app performance and implemented caching strategies for offline functionality",
      "Provided ongoing maintenance and feature updates for deployed applications"
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Provider"]
  },
  {
    title: "Junior Flutter Developer",
    company: "Training & Projects",
    date: "2022 - 2023",
    description: [
      "Completed comprehensive Flutter development training and certification courses",
      "Built multiple practice projects including e-commerce apps, chat applications, and medical apps",
      "Learned and implemented state management patterns and clean architecture",
      "Gained experience with Git version control and collaborative development workflows",
      "Studied mobile app design principles and user experience best practices"
    ],
    tech: ["Flutter", "Dart", "Git", "Firebase"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a192f] text-[#8892b0]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-[1px] bg-[#233554] flex-grow max-w-xs"></div>
        </motion.div>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                  {job.title}
                </h3>
                <span className="text-[#64ffda] font-mono">@ {job.company}</span>
              </div>
              <p className="font-mono text-sm mb-4">{job.date}</p>
              <ul className="space-y-2 mb-4">
                {job.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#64ffda] mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
