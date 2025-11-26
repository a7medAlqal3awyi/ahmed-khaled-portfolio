import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const titles = [
  "Flutter Developer",
  "Mobile Application Developer",
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#0a192f] text-[#ccd6f6]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#64ffda]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#64ffda]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#64ffda] font-mono text-lg mb-4">Hi, my name is</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-[#e6f1ff]"
          >
            Ahmed Khaled Alkalawyi.
          </motion.h1>

          <div className="h-16 md:h-20 mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-[#8892b0]"
            >
              I am a <span className="text-[#64ffda]">{displayText}</span>
              <span className="animate-pulse text-[#64ffda]">|</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[#8892b0] max-w-2xl mx-auto mb-12"
          >
            I'm a Mobile Application Developer specializing in building high-quality cross-platform applications using Flutter. Currently focused on creating accessible, performant mobile experiences for iOS and Android.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 rounded-md px-8 py-6 text-lg font-mono transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/a7medAlqal3awyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ahmedkhaledalkalawyi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:a7medalqalawyi@gmail.com"
              className="text-[#ccd6f6] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-[#64ffda]" />
      </motion.div>
    </section>
  );
};
