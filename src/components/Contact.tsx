import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a192f] text-[#8892b0] min-h-[60vh] flex flex-col justify-center items-center text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#64ffda] font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
          <p className="text-lg mb-12">
            I'm currently looking for new opportunities as a Flutter Developer. Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out. I'll do my best to get back to you!
          </p>
          <Button
            size="lg"
            className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 rounded-md px-8 py-6 text-lg font-mono transition-all"
            onClick={() => window.location.href = 'mailto:a7medalqalawyi@gmail.com'}
          >
            Say Hello
          </Button>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24 text-sm font-mono hover:text-[#64ffda] transition-colors"
        >
          <a href="https://github.com/a7medAlqal3awyi" target="_blank" rel="noopener noreferrer">
            Designed & Built by Ahmed Khaled
          </a>
        </motion.footer>
      </div>
    </section>
  );
};
