import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full top-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-[#64ffda] font-mono text-xl font-bold border-2 border-[#64ffda] p-1 rounded">
          AK
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[#ccd6f6] hover:text-[#64ffda] font-mono text-sm transition-colors"
                >
                  <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0a192f] z-40 flex flex-col items-center justify-center md:hidden">
          <ul className="space-y-8 text-center">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#ccd6f6] hover:text-[#64ffda] font-mono text-lg block"
                >
                  <span className="text-[#64ffda] block text-sm mb-1">0{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="text-[#64ffda] border border-[#64ffda] px-8 py-3 rounded font-mono text-lg hover:bg-[#64ffda]/10 transition-colors inline-block mt-4"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};
