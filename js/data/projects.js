// ==================== DADOS DE PROJETOS ====================

const PROJECTS_DATA = [
    {
        id: 'twitch-data-pipeline',
        title: '🎮 Twitch Data Pipeline',
        shortDesc: 'Pipeline de dados end-to-end para coleta, processamento e análise de métricas dos principais canais da Twitch.',
        tags: ['Python', 'ETL', 'Data Pipeline', 'Airflow'],
        component: 'TwitchDataPipelineProject',
        github: CONTACT_LINKS.GITHUB + '/data-pipeline-twitch',
        tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Pandas', 'Psycopg2', 'Jupyter', 'Kaggle API']
    },
    {
        id: 'populacao-rua-bh',
        title: '🏥 Análise População em Situação de Rua BH',
        shortDesc: 'Análise exploratória da população em situação de rua em Belo Horizonte (2020-2025).',
        tags: ['Python', 'Análise de Dados', 'Visualização', 'Jupyter'],
        component: 'PopulacaoRuaBHProject',
        github: CONTACT_LINKS.GITHUB + '/analise-populacao-em-situacao-de-rua-bh-2022-2025',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Scikit-learn', 'Yellowbrick']
    },
    {
        id: 'saude-publica',
        title: '🏥 Análise Excesso de Mortes COVID-19',
        shortDesc: 'Análise comparativa do excesso de mortalidade e subnotificação de óbitos por COVID-19 em 5 países da América Latina.',
        tags: ['Google Sheets', 'Análise de Dados', 'Visualização'],
        component: 'SaudePublicaProject',
        github: CONTACT_LINKS.GITHUB + '/analise-excesso-de-mortes-covid19-america-latina',
        tech: ['Google Sheets', 'CSV', 'Análise de Dados', 'Visualização', 'Tabelas Dinâmicas']
    },
    {
        id: 'leiden-ranking-analysis',
        title: '📊 Análise Leiden Ranking',
        shortDesc: 'Análise de dados do Leiden Ranking usando R e visualizações gráficas. Insights sobre o desempenho acadêmico global.',
        tags: ['R', 'Análise de Dados', 'Visualização', 'Shiny'],
        component: 'LeidenRankingAnalysisProject',
        github: CONTACT_LINKS.GITHUB + '/LeidenRanking',
        tech: ['R', 'RStudio', 'ggplot2', 'dplyr', 'tidyverse', 'Shiny']
    },
    {
        id: 'api-ibge',
        title: '🇧🇷 API IBGE Data Pipeline',
        shortDesc: 'Pipeline ETL para coleta e processamento de dados da API do IBGE. Integração com MySQL e automação de tarefas.',
        tags: ['Python', 'ETL', 'APIs', 'SQL'],
        component: 'ApiIbgeProject',
        github: CONTACT_LINKS.GITHUB + '/API-Ibge',
        tech: ['Python', 'SQLAlchemy', 'MySQL', 'Pandas', 'NumPy', 'Requests', 'PyMySQL']
    },
    {
        id: 'handsets-census',
        title: '📱 Análise Handsets & Dados Censitários',
        shortDesc: 'Análise de dados sobre distribuição de dispositivos móveis e características sociodemográficas de municípios brasileiros.',
        tags: ['Python', 'Análise de Dados', 'Visualização', 'Jupyter'],
        component: 'HandsetsCensusProject',
        github: CONTACT_LINKS.GITHUB + '/Analise-de-Handsets-e-Dados-Censitarios',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Scikit-learn', 'Statsmodels', 'Jupyter']
    },
];
