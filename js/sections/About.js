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
                        Engenheira de Dados com experiência em coleta, processamento e transformação de dados, 
                        além de desenvolvimento de soluções em nuvem e criação de dashboards. Graduada em Ciência da Computação pela Universidade
                        Federal de Viçosa, possuo conhecimentos em 
                        <span className="text-emerald-400 font-semibold"> Python</span>,{' '}
                        <span className="text-emerald-400 font-semibold">SQL</span>,{' '}
                        <span className="text-emerald-400 font-semibold">dbt</span>,{' '}
                        <span className="text-emerald-400 font-semibold">Apache Airflow</span>,{' '}
                        <span className="text-emerald-400 font-semibold">GCP</span> e diversas ferramentas
                        voltadas para engenharia de dados e machine learning.
                    </p>
                    <p>
                        Atualmente, atuo como Engenheira de Dados na <span className="text-emerald-400 font-semibold">NIU — Stefanini</span>, trabalhando com a migração e integração
                        de fontes de dados, manutenção de data lakes e orquestração de processos de dados. Também tive experiências
                        anteriores no setor varejista e governamental.
                    </p>
                    <p>
                        Além do trabalho técnico, tenho um forte background acadêmico, com pesquisas em análise de dados e experiência
                        no desenvolvimento de aplicações voltadas para ciência e educação. Busco sempre aprimorar meus conhecimentos
                        por meio de certificações e cursos em tecnologias emergentes. Sempre aberta a desafios e oportunidades para
                        aplicar e expandir meus conhecimentos em dados!
                    </p>
                </div>
            </div>
        </section>
    );
}