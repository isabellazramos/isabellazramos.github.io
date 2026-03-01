// ==================== ABOUT SECTION ====================

function About() {
    return (
        <section id="sobre" className="py-20 px-6 bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Sobre Mim
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Sou Engenheira de Dados apaixonada por transformar dados brutos em insights acionáveis. 
                        Com experiência em construção de pipelines escaláveis e arquiteturas de dados robustas, 
                        trabalho para otimizar processos e garantir a qualidade dos dados em cada etapa.
                    </p>
                    <p>
                        Minha jornada na engenharia de dados me proporcionou experiência com ferramentas modernas como{' '}
                        <span className="text-emerald-400 font-semibold">Apache Airflow</span>,{' '}
                        <span className="text-emerald-400 font-semibold">dbt</span>,{' '}
                        <span className="text-emerald-400 font-semibold">BigQuery</span> e{' '}
                        <span className="text-emerald-400 font-semibold">PySpark</span>. 
                        Tenho forte conhecimento em cloud computing (GCP), modelagem de dados e orquestração de workflows complexos.
                    </p>
                    <p>
                        Atualmente trabalho na <span className="text-emerald-400 font-semibold">NIU — Stefanini</span>, 
                        onde desenvolvo soluções de dados escaláveis e implemento melhores práticas de engenharia de dados. 
                        Sempre busco aprender novas tecnologias e compartilhar conhecimento com a comunidade.
                    </p>
                    <p>
                        Quando não estou codificando, gosto de explorar novas ferramentas de dados, 
                        contribuir em projetos open source e me manter atualizada com as últimas tendências 
                        em engenharia de dados e cloud computing.
                    </p>
                </div>
            </div>
        </section>
    );
}