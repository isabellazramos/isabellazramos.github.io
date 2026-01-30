import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Database, Code, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[15%] text-primary/20"
        >
          <Database className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[15%] text-primary/20"
        >
          <Code className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[20%] text-primary/15"
        >
          <Cloud className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src="https://avatars.githubusercontent.com/u/62624785"
                alt="Isabella Menezes Ramos"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Isabella{" "}
              <span className="text-primary">Menezes</span>{" "}
              Ramos
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 rounded-full border border-border">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-lg md:text-xl font-mono text-primary">
                Data Engineer
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Transformando dados em insights estratégicos através de pipelines robustos, 
            orquestração eficiente e soluções cloud escaláveis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" asChild className="glow-sm">
              <a href="https://github.com/isabellazramos" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/isabella-ramos" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1 },
              y: { delay: 1, duration: 2, repeat: Infinity },
            }}
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll para baixo"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
