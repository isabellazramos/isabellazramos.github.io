import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 95 },
      { name: "R", level: 70 },
    ],
  },
  {
    title: "Engenharia & Orquestração",
    icon: "⚙️",
    skills: [
      { name: "Apache Airflow", level: 90 },
      { name: "dbt", level: 85 },
      { name: "Apache Spark", level: 80 },
      { name: "LangChain", level: 75 },
    ],
  },
  {
    title: "Cloud & Databases",
    icon: "☁️",
    skills: [
      { name: "Google Cloud Platform", level: 85 },
      { name: "BigQuery", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Bibliotecas & Frameworks",
    icon: "📚",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "PySpark", level: 85 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    title: "Ferramentas",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Docker", level: 75 },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Habilidades Técnicas
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-secondary"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
