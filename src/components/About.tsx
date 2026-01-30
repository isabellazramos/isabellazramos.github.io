import { motion } from "framer-motion";
import { MapPin, GraduationCap, Ghost, Terminal } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Sobre Mim
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou <strong className="text-foreground">Engenheira de Dados</strong> apaixonada 
                por transformar dados brutos em informações valiosas. Com experiência em 
                construção de pipelines ETL/ELT, orquestração de workflows e soluções cloud.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atualmente trabalho na <strong className="text-primary">NIU — Stefanini</strong>, 
                desenvolvendo soluções de dados escaláveis e automatizadas para diversos clientes.
              </p>
              
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Formação</p>
                    <p className="font-medium text-sm">Ciência da Computação - UFV</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium text-sm">Contagem - MG</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Card */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono ml-2">
                    about_me.py
                  </span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-primary">~</span>
                    <span>python about_me.py</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <p>
                      <span className="text-primary">name</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-green-400">"Isabella Menezes Ramos"</span>
                    </p>
                    <p>
                      <span className="text-primary">role</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-green-400">"Data Engineer"</span>
                    </p>
                    <p>
                      <span className="text-primary">location</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-green-400">"Contagem, MG"</span>
                    </p>
                    <p>
                      <span className="text-primary">education</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-green-400">"BSc Computer Science"</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="text-primary">fun_fact</span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-green-400">"I love horror movies"</span>
                      <Ghost className="w-4 h-4 text-primary inline ml-1" />
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground pt-2">
                    <span className="text-primary">▊</span>
                    <span className="animate-typing-cursor">_</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
