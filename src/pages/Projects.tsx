import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Folder } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "covid-analysis",
    title: "Análise COVID-19 América Latina",
    description: "Análise de óbitos por COVID-19 na América Latina usando planilhas e visualizações de dados.",
    longDescription: "Projeto de análise de dados sobre a pandemia de COVID-19 na América Latina, utilizando dados públicos para criar visualizações informativas sobre a evolução da pandemia na região.",
    technologies: ["Python", "Pandas", "Data Analysis", "Visualization"],
    githubUrl: "https://github.com/isabellazramos/covid-analysis",
    featured: true,
  },
  {
    id: "leiden-ranking",
    title: "Leiden Ranking",
    description: "Visualizações gráficas do Leiden Ranking utilizando R para análise de indicadores acadêmicos.",
    longDescription: "Desenvolvimento de visualizações interativas para explorar os dados do Leiden Ranking, um ranking de universidades baseado em indicadores científicos.",
    technologies: ["R", "ggplot2", "Data Visualization", "Academic Research"],
    githubUrl: "https://github.com/isabellazramos/leiden-ranking",
    featured: true,
  },
  {
    id: "data-science-projects",
    title: "Data Science Projects",
    description: "Coleção de projetos de ciência de dados abrangendo machine learning, análise e visualização.",
    longDescription: "Repositório com diversos projetos de ciência de dados, incluindo análises exploratórias, modelos de machine learning e visualizações de dados.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    githubUrl: "https://github.com/isabellazramos/data-science-projects",
  },
  {
    id: "etl-fundamentals",
    title: "ETL Fundamentals",
    description: "Implementações de fundamentos de ETL em Python para processamento de dados.",
    longDescription: "Projeto educacional demonstrando os fundamentos de processos ETL (Extract, Transform, Load) com implementações práticas em Python.",
    technologies: ["Python", "ETL", "Data Engineering", "SQL"],
    githubUrl: "https://github.com/isabellazramos/etl-fundamentals",
    featured: true,
  },
  {
    id: "ciencia-computacao-ufv",
    title: "Ciência da Computação UFV",
    description: "Trabalhos e projetos desenvolvidos durante a graduação em Ciência da Computação na UFV.",
    longDescription: "Compilação de trabalhos acadêmicos, projetos e exercícios desenvolvidos durante o curso de Ciência da Computação na Universidade Federal de Viçosa.",
    technologies: ["Python", "Java", "C", "Algorithms"],
    githubUrl: "https://github.com/isabellazramos",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Projetos
              <span className="text-primary">/&gt;</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus projetos de engenharia e ciência de dados, 
              demonstrando habilidades em ETL, análise e visualização.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl border border-border p-6 h-full flex flex-col card-hover relative overflow-hidden">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Destaque
                      </Badge>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto"
                    >
                      Ver detalhes
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
