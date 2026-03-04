// ==================== AIRFLOW PIPELINE PROJECT ====================

function AirflowPipelineProject() {
    const project = {
        title: '🔄 Pipeline Airflow Multi-API',
        tech: ['Apache Airflow', 'Python', 'Docker', 'PostgreSQL', 'APIs REST', 'Slack API'],
        fullDescription: 'Pipeline de dados robusto usando Apache Airflow para orquestrar a ingestão de dados de múltiplas APIs externas.',
        challenges: [
            'Integração com 5+ APIs externas diferentes',
            'Tratamento de rate limits e timeouts',
            'Necessidade de retry inteligente',
            'Monitoramento e alertas em tempo real'
        ],
        solutions: [
            'DAGs modulares e reutilizáveis',
            'Custom operators para cada API',
            'Implementação de exponential backoff',
            'Integração com Slack para alertas',
            'Logs estruturados e centralizados'
        ],
        results: [
            'Pipeline com 99.9% de disponibilidade',
            '100% de dados capturados sem perdas',
            'Redução de 90% em falhas manuais',
            'Tempo de resposta a incidentes < 5 min'
        ],
        github: CONTACT_LINKS.GITHUB
    };

    return React.createElement(ProjectDetailTemplate, { project: project });
}
