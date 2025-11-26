import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const featuredProject = {
  title: "Featured Project",
  name: "E-Commerce Mobile App",
  description: "A full-featured e-commerce application built with Flutter featuring product browsing, cart management, user authentication, and payment integration. Includes advanced features like cached image loading, shimmer effects, and smooth animations.",
  tech: ["Flutter", "Dart", "Firebase", "Bloc", "REST API"],
  github: "https://github.com/a7medAlqal3awyi",
  external: "https://play.google.com",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
};

const projects = [
  {
    title: "Chat Application Clone",
    description: "A real-time messaging app powered by Firebase with features including group chats, media sharing, push notifications, and user presence indicators.",
    tech: ["Flutter", "Firebase", "Provider"],
    github: "https://github.com/a7medAlqal3awyi",
    external: "https://play.google.com"
  },
  {
    title: "Medical Application",
    description: "A healthcare app connecting patients with doctors, featuring appointment booking, medical records, video consultations, and prescription management.",
    tech: ["Flutter", "Dart", "REST API", "Bloc"],
    github: "https://github.com/a7medAlqal3awyi",
    external: "https://play.google.com"
  },
  {
    title: "Task Management App",
    description: "A productivity app with task organization, reminders, categories, and offline sync capabilities using local database and cloud backup.",
    tech: ["Flutter", "SQLite", "Provider"],
    github: "https://github.com/a7medAlqal3awyi",
    external: "https://github.com"
  },
  {
    title: "Weather Forecast App",
    description: "A beautiful weather application with real-time data, 7-day forecasts, location-based updates, and custom animations.",
    tech: ["Flutter", "Weather API", "GetX"],
    github: "https://github.com/a7medAlqal3awyi",
    external: "https://github.com"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a192f] text-[#8892b0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda] font-mono text-xl mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="h-[1px] bg-[#233554] flex-grow max-w-xs"></div>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-24 relative grid md:grid-cols-12 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 relative z-10"
          >
            <a href={featuredProject.external} target="_blank" rel="noopener noreferrer" className="block relative group rounded overflow-hidden">
              <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <img src={featuredProject.image} alt={featuredProject.name} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 md:text-right relative z-20 bg-[#112240] md:bg-transparent p-6 md:p-0 rounded"
          >
            <p className="font-mono text-[#64ffda] text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
              <a href={featuredProject.external} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors">
                {featuredProject.name}
              </a>
            </h3>
            <div className="md:bg-[#112240] md:p-6 rounded shadow-xl mb-4 text-[#a8b2d1]">
              <p>{featuredProject.description}</p>
            </div>
            <ul className="flex flex-wrap justify-end gap-4 text-sm font-mono mb-8 text-[#a8b2d1]">
              {featuredProject.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="flex justify-end gap-4">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={featuredProject.external} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#112240] p-8 rounded hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="w-10 h-10 text-[#64ffda]" />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#a8b2d1] mb-4 text-sm">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 text-xs font-mono text-[#8892b0] mt-auto">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
