// ==================== FEMINICIDIOS BRASIL PIPELINE ====================


function FeminicidiosBrasilPipelineProject() {
    const project = {
        title: '📊 Pipeline de Análise de Feminicídios no Brasil',
        tech: ['Python', 'GCP', 'BigQuery', 'Cloud Storage', 'dbt', 'Data Studio', 'Cloud Function' ,'ELT' ],
        fullDescription: 'Um pipeline de dados completo para coleta, processamento e visualização de dados de feminicídios no Brasil, utilizando dados públicos do SINESP (Sistema Nacional de Informações de Segurança Pública).',
        challenges: [
            'Dados fragmentados e não estruturados (PDFs e Excel sem APIs públicas)',
            'Subnotificação estrutural de feminicídios nos registros oficiais',
            'Atraso na alimentação de dados por estados, resultando em séries temporais incompletas'
        ],
        solutions: [
            'Utilização do SINESP VDE como fonte mais abrangente e atualizada',
            'Implementação de pipeline ELT serverless com Cloud Functions, GCS e BigQuery',
            'Filtragem automática de registros de feminicídio via análise de texto com keywords',
            'Transformações com dbt para normalização e criação de modelos analíticos',
            'Dashboard interativo em Looker Studio para visualização e exploração de dados'
        ],
        results: [
            'Dashboard com séries históricas de feminicídios (2022-2025) e comparações anuais',
            'Distribuição geográfica por região, estado e município com rankings de impacto',
            'Métricas absolutas e relativas para identificação de tendências estruturais',
            'Painel analítico para suporte a políticas públicas e monitoramento de feminicídios'
        ],
        github: CONTACT_LINKS.GITHUB + '/feminicidios-brasil-pipeline'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
