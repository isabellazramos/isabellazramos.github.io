// Projects Data
const projects = {
    'dbt-pipeline': {
        title: 'Pipeline dbt Avançado',
        icon: '📦',
        description: 'Arquitetura escalável com modelos incrementais e macros customizadas',
        challenge: 'Processar milhões de registros diariamente mantendo a qualidade dos dados e reduzindo o tempo de processamento.',
        solution: 'Implementei um pipeline dbt com modelos incrementais, testes de dados e documentação automática. Utilizei macros customizadas para reutilizar lógica complexa.',
        results: 'Redução de 40% no tempo de processamento. Aumento de confiabilidade com testes dbt em CI/CD.',
        tech: ['dbt', 'SQL', 'BigQuery', 'YAML', 'Git'],
        github: 'https://github.com/isabellaramos'
    },
    'bigquery-optimization': {
        title: 'Otimização BigQuery',
        icon: '⚡',
        description: 'Redução de 60% em custos através de query optimization e particionamento',
        challenge: 'Queries de análise consumindo grandes volumes de dados resultando em custos crescentes no BigQuery.',
        solution: 'Análise de queries com EXPLAIN PLAN. Implementação de particionamento, clustering e views materializadas. Criação de tabelas otimizadas.',
        results: 'Redução de 60% nos custos mensais. Queries 3x mais rápidas. Implementação de monitoring contínuo.',
        tech: ['BigQuery', 'SQL', 'Google Cloud', 'Python'],
        github: 'https://github.com/isabellaramos'
    },
    'api-integration': {
        title: 'Integração de APIs',
        icon: '🔗',
        description: 'Orquestração de múltiplas APIs com tratamento robusto de erros',
        challenge: 'Integrar dados de múltiplas APIs externas com diferentes formatos, rate limits e políticas de retry.',
        solution: 'Desenvolveu orquestrador em Python com Apache Airflow. Implementei retry logic, error handling e transformação de dados heterogêneos.',
        results: 'Pipeline estável ingestando 10M+ registros/dia. SLA de 99.9% de disponibilidade.',
        tech: ['Python', 'Apache Airflow', 'APIs REST', 'Docker', 'PostgreSQL'],
        github: 'https://github.com/isabellaramos'
    },
    'spark-analysis': {
        title: 'Análise com Spark',
        icon: '🔥',
        description: 'Processamento distribuído de dados em larga escala com PySpark',
        challenge: 'Análise exploratória de datasets massive (>100GB) que não cabem em memória local.',
        solution: 'Implementação de jobs PySpark com particionamento otimizado, broadcast variables e caching estratégico.',
        results: 'Processamento 50x mais rápido que pandas. Limpeza e transformação de 500M+ registros em <1h.',
        tech: ['PySpark', 'Hadoop', 'Google Cloud Dataproc', 'Python', 'SQL'],
        github: 'https://github.com/isabellaramos'
    },
    'ibge-data': {
        title: 'Dados Públicos IBGE',
        icon: '📈',
        description: 'Pipeline de ingestão e transformação de dados públicos brasileiros',
        challenge: 'Integrar dados do IBGE com diferentes formatos (JSON, CSV) e atualizar periodicamente.',
        solution: 'Developed API client para IBGE com cache inteligente. Pipeline dbt para transformação e validação de dados.',
        results: 'Database de dados públicos brasileiros com atualização diária. Base para análises geopolíticas.',
        tech: ['Python', 'dbt', 'APIs IBGE', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/isabellaramos'
    },
    'health-data': {
        title: 'Sistema de Saúde Pública',
        icon: '🏥',
        description: 'Análise de dados de saúde pública com foco em PNPS e PNH',
        challenge: 'Consolidar dados de múltiplas fontes de saúde pública em um único data warehouse.',
        solution: 'Implementei staging layer com validações. Models dbt para PNPS (Política Nacional de Promoção da Saúde) e PNH (Política Nacional de Humanização).',
        results: 'Dashboard interativo para monitoramento de KPIs. Insights para tomada de decisão na saúde pública.',
        tech: ['dbt', 'BigQuery', 'Python', 'SQL', 'Google Analytics'],
        github: 'https://github.com/isabellaramos'
    }
};

// Functions for Modal
function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    let techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    modalBody.innerHTML = `
        <h3>${project.icon} ${project.title}</h3>
        <p><strong>Descrição:</strong> ${project.description}</p>
        
        <h4>Desafio</h4>
        <p>${project.challenge}</p>
        
        <h4>Solução</h4>
        <p>${project.solution}</p>
        
        <h4>Resultados</h4>
        <p>${project.results}</p>
        
        <h4>Tecnologias</h4>
        <div class="tech-tags">${techTags}</div>
        
        <h4>Links</h4>
        <a href="${project.github}" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">Ver no GitHub</a>
    `;
    
    modal.style.display = 'block';
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#9D7FFF';
        } else {
            link.style.color = '#E2E8F0';
        }
    });
});