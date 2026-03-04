// ==================== DADOS DE PROJETOS ====================

const PROJECTS_DATA = [
    {
        id: 'dbt-architecture',
        title: '🏭 Arquitetura dbt com Modelos Incrementais',
        shortDesc: 'Arquitetura escalável com modelos incrementais e macros customizadas. Implementação de best practices para transformação de dados em larga escala.',
        tags: ['dbt', 'BigQuery', 'SQL'],
        component: 'DbtArchitectureProject',
        github: CONTACT_LINKS.GITHUB,
        tech: ['dbt', 'BigQuery', 'SQL', 'Jinja2', 'GitHub Actions', 'Python']
    },
    {
        id: 'bigquery-optimization',
        title: '💰 Otimização de Custos BigQuery',
        shortDesc: 'Redução de 60% em custos através de query optimization, particionamento e clustering. Análise de performance e implementação de melhores práticas.',
        tags: ['BigQuery', 'SQL', 'Otimização'],
        component: 'BigQueryOptimizationProject',
        github: CONTACT_LINKS.GITHUB,
        tech: ['BigQuery', 'SQL', 'GCP', 'Performance Tuning']
    },
    {
        id: 'airflow-pipeline',
        title: '🔄 Pipeline Airflow Multi-API',
        shortDesc: 'Orquestração de múltiplas APIs com tratamento robusto de erros, retry policies e monitoramento. Pipeline de dados complexo com SLAs definidos.',
        tags: ['Apache Airflow', 'Python', 'APIs'],
        component: 'AirflowPipelineProject',
        github: CONTACT_LINKS.GITHUB,
        tech: ['Apache Airflow', 'Python', 'Docker', 'PostgreSQL', 'APIs REST', 'Slack API']
    },
    {
        id: 'spark-processing',
        title: '⚡ Processamento Distribuído com Spark',
        shortDesc: 'Processamento distribuído de dados em larga escala com PySpark. Otimização de jobs e análise de performance em clusters.',
        tags: ['PySpark', 'Spark', 'Big Data'],
        component: 'SparkProcessingProject',
        github: CONTACT_LINKS.GITHUB,
        tech: ['PySpark', 'Apache Spark', 'Python', 'Hadoop', 'YARN', 'Scala']
    },
    {
        id: 'dados-publicos-brasil',
        title: '🇧🇷 Pipeline Dados Públicos Brasil',
        shortDesc: 'Pipeline de ingestão e transformação de dados públicos brasileiros (IBGE, DATASUS). Integração com múltiplas APIs governamentais.',
        tags: ['Python', 'APIs', 'ETL'],
        component: 'DadosPublicosBrasilProject',
        github: CONTACT_LINKS.GITHUB,
        tech: ['Python', 'Pandas', 'APIs REST', 'SQLAlchemy', 'FastAPI', 'PostgreSQL']
    },
    {
        id: 'saude-publica',
        title: '🏥 Análise Saúde Pública',
        shortDesc: 'Análise de dados de saúde pública com foco em PNPS e PNH. Visualizações e insights sobre políticas de saúde no Brasil.',
        tags: ['Python', 'Pandas', 'Análise de Dados'],
        component: 'SaudePublicaProject',
        github: 'https://github.com/isabellazramos/analise-excesso-de-mortes-covid19-america-latina',
        tech: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Jupyter', 'Matplotlib', 'Seaborn']
    }
];
