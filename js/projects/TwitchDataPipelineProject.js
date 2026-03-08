// ==================== TWITCH DATA PIPELINE PROJECT ====================


function TwitchDataPipelineProject() {
    const project = {
        title: '🎮 Twitch Data Pipeline',
        tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Pandas', 'Psycopg2', 'Jupyter', 'Kaggle API'],
        fullDescription: 'Pipeline de dados end-to-end para coleta, processamento e análise de métricas dos principais canais da Twitch, implementando arquitetura de medalhão (Bronze/Silver/Gold) com orquestração via Apache Airflow.',
        challenges: [
            'Orquestração de pipeline multi-etapas com dependências complexas',
            'Processamento de datasets grandes do Kaggle com múltiplas métricas temporais',
            'Garantir idempotência e resiliência em operações de ETL',
            'Integração entre Jupyter, PostgreSQL e Airflow'
        ],
        solutions: [
            'Arquitetura de medalhão em 3 camadas (Bronze/Silver/Gold)',
            'Orquestração com Apache Airflow para agendamento e monitoramento',
            'Ingestão automatizada de dados brutos no PostgreSQL',
            'Pipeline de transformação com validação e limpeza de inconsistências',
            'Notebooks Jupyter para análise exploratória e geração de insights',
            'Gestão segura de credenciais via variáveis de ambiente (.env)',
            'Logging estruturado e tratamento de erros em operações críticas'
        ],
        results: [
            'Pipeline completo de ETL para dados de streamers da Twitch',
            'Análise de métricas: tempo de visualização, seguidores, pico de viewers',
            'Processamento automatizado com Airflow DAGs',
            'Arquitetura escalável e reproduzível em 3 camadas'
        ],
        github: CONTACT_LINKS.GITHUB + '/data-pipeline-twitch'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
