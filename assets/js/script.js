// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Project details data
const projects = {
    'pipeline-etl': {
        title: 'Pipeline ETL Escalável com dbt',
        icon: '📊',
        description: `Desenvolvido um pipeline de dados robusto e escalável que integra múltiplas fontes de dados em um data warehouse centralizado usando as melhores práticas de engenharia de dados.`,
        challenge: `O principal desafio era processar 2.5M de registros diários mantendo alta qualidade de dados, performance aceitável e custos otimizados. Dados vinham de APIs externas, bancos de dados legados e datasets públicos em formatos variados.`,
        solution: `
        <strong>Arquitetura implementada:</strong>
        <ul>
            <li><strong>Camada Raw:</strong> Ingestão direta de dados no BigQuery usando Python e Airflow</li>
            <li><strong>Camada Staging:</strong> Limpeza e padronização com 50+ modelos dbt</li>
            <li><strong>Camada Mart:</strong> Modelos analíticos otimizados para BI e dashboards</li>
            <li><strong>Validações:</strong> Testes automatizados com dbt e Great Expectations</li>
            <li><strong>Orquestração:</strong> DAGs Apache Airflow com monitoring e alertas</li>
        </ul>
        `,
        results: `
        <strong>Resultados alcançados:</strong>
        <ul>
            <li>✅ 2.5M registros processados diariamente</li>
            <li>✅ 99.9% uptime do pipeline</li>
            <li>✅ 40% redução em custos de armazenamento</li>
            <li>✅ 35% melhoria na qualidade dos dados</li>
            <li>✅ Latência média < 30 minutos (raw → mart)</li>
            <li>✅ 50+ dashboards Looker alimentados em tempo real</li>
        </ul>
        `,
        tech: ['Apache Airflow', 'dbt', 'BigQuery', 'Python', 'SQL', 'GCP', 'Great Expectations'],
        github: 'https://github.com/isabellazramos'
    },
    'apis-externas': {
        title: 'Integração com APIs Externas',
        icon: '🔄',
        description: `Sistema robusto e escalável para ingestão de dados de múltiplas APIs externas, com tratamento avançado de erros, retry logic inteligente e validação de dados em tempo real.`,
        challenge: `Integrar dados de 10+ APIs externas com diferentes padrões, rate limits, formatos de resposta e níveis de confiabilidade. Garantir resiliência, qualidade de dados e facilitar manutenção e monitoramento.`,
        solution: `
        <strong>Implementação:</strong>
        <ul>
            <li><strong>Framework genérico:</strong> Adaptadores para diferentes tipos de API</li>
            <li><strong>Retry Logic:</strong> Exponential backoff com tratamento de rate limits</li>
            <li><strong>Validação:</strong> Schema validation e data quality checks</li>
            <li><strong>Monitoramento:</strong> Logging estruturado e alertas de falha</li>
            <li><strong>Containerização:</strong> Docker para fácil deploy e scaling</li>
            <li><strong>IBGE APIs:</strong> Integração com datasets públicos brasileiros</li>
        </ul>
        `,
        results: `
        <strong>Resultados:</strong>
        <ul>
            <li>✅ 10+ APIs integradas com sucesso</li>
            <li>✅ 99%+ taxa de sucesso em requisições</li>
            <li>✅ Tempo de resposta médio < 5 segundos</li>
            <li>✅ Recuperação automática de falhas temporárias</li>
            <li>✅ Logs centralizados e alertas em tempo real</li>
        </ul>
        `,
        tech: ['Python', 'REST APIs', 'Docker', 'GCP', 'Logging', 'Error Handling'],
        github: 'https://github.com/isabellazramos'
    },
    'data-warehouse': {
        title: 'Data Warehouse com Modelagem Dimensional',
        icon: '📈',
        description: `Arquitetura completa de data warehouse seguindo padrões dimensionais (Star Schema), otimizada para queries analíticas com índices estratégicos, particionamento e best practices de performance.`,
        challenge: `Desenhar uma arquitetura de data warehouse que suportasse queries complexas de negócio, oferecesse boa performance mesmo com volume crescente de dados e mantivesse manutenibilidade e documentação clara.`,
        solution: `
        <strong>Design dimensional implementado:</strong>
        <ul>
            <li><strong>Fact Tables:</strong> Tabelas de fatos granulares com medidas de negócio</li>
            <li><strong>Dimension Tables:</strong> 15+ dimensões bem estruturadas e documentadas</li>
            <li><strong>Indexação:</strong> Índices estratégicos em chaves e atributos frequentes</li>
            <li><strong>Particionamento:</strong> Tabelas particionadas por data para performance</li>
            <li><strong>dbt:</strong> Modelos dbt mantendo documentação e testes</li>
            <li><strong>Versionamento:</strong> Schema versionado para evolução segura</li>
        </ul>
        `,
        results: `
        <strong>Resultados:</strong>
        <ul>
            <li>✅ Queries analíticas executadas em < 10 segundos</li>
            <li>✅ 15+ dimensões bem estruturadas</li>
            <li>✅ 30% redução em tempo de query vs schema anterior</li>
            <li>✅ Fácil compreensão do modelo de dados</li>
            <li>✅ Suporta centenas de queries simultâneas</li>
        </ul>
        `,
        tech: ['PostgreSQL', 'BigQuery', 'dbt', 'Star Schema', 'SQL', 'Modelagem'],
        github: 'https://github.com/isabellazramos'
    },
    'airflow': {
        title: 'Orquestração com Apache Airflow',
        icon: '🗄️',
        description: `Sistema completo de orquestração de pipelines de dados críticos usando Apache Airflow, com monitoramento em tempo real, alertas proativos, retry logic inteligente e padrões production-ready.`,
        challenge: `Orquestrar múltiplos pipelines com dependências complexas, garantir resiliência, manter visibilidade do que está acontecendo e facilitar troubleshooting quando algo falha.`,
        solution: `
        <strong>Arquitetura Airflow implementada:</strong>
        <ul>
            <li><strong>DAGs estruturadas:</strong> Padrões reutilizáveis e bem documentadas</li>
            <li><strong>Retry Logic:</strong> Exponential backoff, alertas na falha final</li>
            <li><strong>Monitoramento:</strong> Integração com Datadog e logs centralizados</li>
            <li><strong>Alertas:</strong> Notificações em Slack para falhas críticas</li>
            <li><strong>SLA:</strong> Configuração de SLAs e monitoramento de cumprimento</li>
            <li><strong>Testing:</strong> Testes unitários das DAGs e tasks</li>
        </ul>
        `,
        results: `
        <strong>Resultados:</strong>
        <ul>
            <li>✅ 50+ DAGs em produção</li>
            <li>✅ 99.9% taxa de sucesso de pipelines</li>
            <li>✅ MTTR (Mean Time To Recovery) < 10 minutos</li>
            <li>✅ Visibilidade completa de todos os pipelines</li>
            <li>✅ Alertas rápidos para problemas críticos</li>
            <li>✅ Facilidade para adicionar novos pipelines</li>
        </ul>
        `,
        tech: ['Apache Airflow', 'Python', 'Monitoring', 'Datadog', 'Slack', 'Testing'],
        github: 'https://github.com/isabellazramos'
    }
};

function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;

    const html = `
        <div class="project-detail-header">
            <h1><span style="font-size: 48px; margin-right: 16px;">${project.icon}</span>${project.title}</h1>
        </div>
        <div class="project-detail-body">
            <section>
                <h2>Descrição</h2>
                <p>${project.description}</p>
            </section>

            <section>
                <h2>Desafio</h2>
                <p>${project.challenge}</p>
            </section>

            <section>
                <h2>Solução</h2>
                <div>${project.solution}</div>
            </section>

            <section>
                <h2>Resultados</h2>
                <div>${project.results}</div>
            </section>

            <section>
                <h2>Stack Tecnológico</h2>
                <div class="tech-stack-detail">
                    ${project.tech.map(tech => `<span class="tech-badge-detail">${tech}</span>`).join('')}
                </div>
            </section>

            <section>
                <h2>Acesso</h2>
                <a href="${project.github}" target="_blank" class="btn btn-primary">Ver no GitHub</a>
            </section>
        </div>
    `;

    document.getElementById('projectDetail').innerHTML = html;
    document.getElementById('projectModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProject();
    }
});
