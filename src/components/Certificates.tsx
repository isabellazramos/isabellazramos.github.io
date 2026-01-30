import { motion } from "framer-motion";
import { Award, ExternalLink, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  title: string;
  institution: string;
  year: string;
  link?: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    title: "Data Engineer",
    institution: "DataCamp",
    year: "2023",
    category: "DataCamp",
  },
  {
    title: "SQL for Data Science",
    institution: "DataCamp",
    year: "2022",
    category: "DataCamp",
  },
  {
    title: "Python para Data Science",
    institution: "Alura",
    year: "2022",
    category: "Alura",
  },
  {
    title: "Apache Airflow",
    institution: "Alura",
    year: "2023",
    category: "Alura",
  },
  {
    title: "dbt Fundamentals",
    institution: "dbt Labs",
    year: "2023",
    category: "Outros",
  },
  {
    title: "Google Cloud Platform Fundamentals",
    institution: "Google Cloud",
    year: "2023",
    category: "Google",
  },
  {
    title: "BigQuery for Data Warehousing",
    institution: "Google Cloud",
    year: "2023",
    category: "Google",
  },
  {
    title: "Data Engineering on Google Cloud",
    institution: "Coursera",
    year: "2023",
    category: "Coursera",
  },
];

const categories = ["Todos", "DataCamp", "Alura", "Google", "Coursera", "Outros"];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCertificates =
    selectedCategory === "Todos"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Certificados
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Filter */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <Filter className="w-5 h-5 text-muted-foreground self-center mr-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.institution}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border p-5 card-hover group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {cert.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {cert.year}
                    </Badge>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
