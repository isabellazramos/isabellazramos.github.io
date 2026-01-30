import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Calendar, Code, ChevronLeft, ChevronRight } from "lucide-react";
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
  challenges?: string[];
  solutions?: string[];
  year?: string;
}

const projects: Project[] = [
  {
    id: "covid-analysis",
    title: "Análise COVID-19 América Latina",
    description: "Análise de óbitos por COVID-19 na América Latina usando planilhas e visualizações de dados.",
    longDescription: "Este projeto realiza uma análise detalhada dos dados de óbitos por COVID-19 na América Latina. Utilizando dados públicos disponibilizados por organizações de saúde, foram criadas visualizações informativas que ajudam a entender a evolução da pandemia na região. O projeto demonstra habilidades em coleta, limpeza e análise de dados.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    githubUrl: "https://github.com/isabellazramos/covid-analysis",
    year: "2021",
    challenges: [
      "Integração de múltiplas fontes de dados com formatos diferentes",
      "Tratamento de dados faltantes e inconsistentes",
      "Criação de visualizações claras e informativas",
    ],
    solutions: [
      "Desenvolvimento de scripts de ETL para padronização dos dados",
      "Implementação de técnicas de imputação e validação de dados",
      "Uso de bibliotecas de visualização com foco em storytelling com dados",
    ],
  },
  {
    id: "leiden-ranking",
    title: "Leiden Ranking",
    description: "Visualizações gráficas do Leiden Ranking utilizando R para análise de indicadores acadêmicos.",
    longDescription: "Desenvolvimento de visualizações interativas para explorar os dados do Leiden Ranking, um ranking de universidades baseado em indicadores científicos. O projeto utiliza R e ggplot2 para criar gráficos informativos que permitem analisar o desempenho de universidades em diferentes métricas de impacto científico.",
    technologies: ["R", "ggplot2", "tidyverse", "RMarkdown", "Shiny"],
    githubUrl: "https://github.com/isabellazramos/leiden-ranking",
    year: "2021",
    challenges: [
      "Processamento de grandes volumes de dados acadêmicos",
      "Criação de visualizações comparativas entre universidades",
      "Documentação clara e reprodutível da análise",
    ],
    solutions: [
      "Uso do tidyverse para manipulação eficiente de dados",
      "Implementação de gráficos interativos com ggplot2",
      "Documentação com RMarkdown para reprodutibilidade",
    ],
  },
  {
    id: "data-science-projects",
    title: "Data Science Projects",
    description: "Coleção de projetos de ciência de dados abrangendo machine learning, análise e visualização.",
    longDescription: "Repositório com diversos projetos de ciência de dados, incluindo análises exploratórias, modelos de machine learning e visualizações de dados. Os projetos demonstram conhecimento em diferentes técnicas e ferramentas utilizadas na área de ciência de dados.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    githubUrl: "https://github.com/isabellazramos/data-science-projects",
    year: "2022",
    challenges: [
      "Seleção de features relevantes para modelos",
      "Otimização de hiperparâmetros",
      "Validação e avaliação de modelos",
    ],
    solutions: [
      "Técnicas de feature engineering e seleção",
      "Grid search e cross-validation",
      "Métricas apropriadas para cada tipo de problema",
    ],
  },
  {
    id: "etl-fundamentals",
    title: "ETL Fundamentals",
    description: "Implementações de fundamentos de ETL em Python para processamento de dados.",
    longDescription: "Projeto educacional demonstrando os fundamentos de processos ETL (Extract, Transform, Load) com implementações práticas em Python. Inclui exemplos de extração de diferentes fontes, transformações de dados e carga em diversos destinos, seguindo as melhores práticas da área.",
    technologies: ["Python", "SQL", "PostgreSQL", "Apache Airflow", "Docker"],
    githubUrl: "https://github.com/isabellazramos/etl-fundamentals",
    year: "2023",
    challenges: [
      "Design de pipelines escaláveis e manuteníveis",
      "Tratamento de erros e logging",
      "Orquestração de workflows complexos",
    ],
    solutions: [
      "Arquitetura modular e documentada",
      "Implementação de retry logic e alertas",
      "Uso de Apache Airflow para orquestração",
    ],
  },
  {
    id: "ciencia-computacao-ufv",
    title: "Ciência da Computação UFV",
    description: "Trabalhos e projetos desenvolvidos durante a graduação em Ciência da Computação na UFV.",
    longDescription: "Compilação de trabalhos acadêmicos, projetos e exercícios desenvolvidos durante o curso de Ciência da Computação na Universidade Federal de Viçosa. Inclui implementações de algoritmos, estruturas de dados e projetos de diversas disciplinas.",
    technologies: ["Python", "Java", "C", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/isabellazramos",
    year: "2020-2024",
    challenges: [
      "Implementação de algoritmos complexos",
      "Otimização de performance",
      "Aplicação de conceitos teóricos",
    ],
    solutions: [
      "Estudo aprofundado de estruturas de dados",
      "Análise de complexidade algorítmica",
      "Implementações práticas dos conceitos estudados",
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button asChild>
            <Link to="/projects">Voltar para projetos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para projetos
              </Link>
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {project.featured && (
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Projeto em Destaque
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              {project.year && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                Ver código
              </a>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Project Content */}
          <div className="space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Sobre o Projeto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </motion.section>

            {/* Challenges */}
            {project.challenges && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4">🎯 Desafios</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Solutions */}
            {project.solutions && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-xl font-semibold mb-4">💡 Soluções</h2>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-8 border-t border-border"
            >
              <Button asChild className="glow-sm">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver no GitHub
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="outline" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Demo
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-between items-center mt-16 pt-8 border-t border-border"
          >
            {prevProject ? (
              <Button
                variant="ghost"
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Anterior</p>
                  <p className="text-sm font-medium">{prevProject.title}</p>
                </div>
              </Button>
            ) : (
              <div />
            )}

            {nextProject && (
              <Button
                variant="ghost"
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="flex items-center gap-2"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Próximo</p>
                  <p className="text-sm font-medium">{nextProject.title}</p>
                </div>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
