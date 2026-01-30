import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: "Engenheira de Dados Jr.",
    company: "NIU — Stefanini",
    location: "Remoto",
    period: "Jan 2024 – Presente",
    current: true,
    description: [
      "Desenvolvimento de pipelines ETL/ELT para processamento de dados em larga escala",
      "Implementação de soluções de data quality e governança de dados",
      "Orquestração de workflows com Apache Airflow",
      "Desenvolvimento de transformações com dbt e SQL avançado",
    ],
  },
  {
    title: "Engenheira de Dados Jr. / Estagiária",
    company: "ammo.varejo",
    location: "Remoto",
    period: "Jun 2022 – Dez 2023",
    description: [
      "Construção de pipelines de dados usando Python e SQL",
      "Implementação de data marts e data warehouses no BigQuery",
      "Automatização de processos de ingestão de dados",
      "Análise e modelagem de dados para equipes de negócio",
    ],
  },
  {
    title: "Desenvolvedora de Software",
    company: "Tribunal de Contas da União",
    location: "Brasília, DF",
    period: "Jul 2021 – Abr 2022",
    description: [
      "Desenvolvimento de aplicações web com Flask e Python",
      "Implementação de scripts de automação e análise de dados",
      "Suporte a sistemas internos e integração de dados",
    ],
  },
  {
    title: "Iniciação Científica Voluntária",
    company: "Universidade Federal de Viçosa",
    location: "Viçosa, MG",
    period: "Mar 2020 – Dez 2021",
    description: [
      "Pesquisa em análise de dados e visualização",
      "Desenvolvimento de projetos acadêmicos em ciência de dados",
      "Participação em projetos de pesquisa do departamento",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Experiência Profissional
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-4 ${
                    exp.current
                      ? "bg-primary border-primary glow-sm"
                      : "bg-card border-primary/50"
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`pl-8 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div
                  className={`bg-card rounded-2xl border border-border p-6 card-hover ${
                    exp.current ? "border-primary/50" : ""
                  }`}
                >
                  {exp.current && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Atual
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
