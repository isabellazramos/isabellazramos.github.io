// ==================== DADOS DE PROJETOS ====================

const PROJECTS_DATA = [
    {
        id: 'dbt-architecture',
        title: '🏗️ Arquitetura dbt com Modelos Incrementais',
        shortDesc: 'Arquitetura escalável com modelos incrementais e macros customizadas. Implementação de best practices para transformação de dados em larga escala.',
        tags: ['dbt', 'BigQuery', 'SQL'],
        fullDescription: 'Projeto completo de arquitetura de dados usando dbt (data build tool) para transformação de dados em larga escala no BigQuery.',
        challenges: [
            'Implementação de modelos incrementais para processar apenas dados novos',
            'Criação de macros customizadas para validação e qualidade de dados',
            'Otimização de performance em queries complexas'
        ],
        solutions: [
            'Arquitetura em camadas (bronze/silver/gold)',
            'Testes automatizados de dados',
            'Documentação gerada automaticamente',
            'CI/CD com GitHub Actions'
        ],
        results: [
            'Redução de 70% no tempo de processamento',
            'Melhoria na qualidade dos dados com testes automatizados',
            'Documentação sempre atualizada',
            'Deploy automatizado'
        ],
        github: CONTACT_LINKS.GITHUB,
        tech: ['dbt', 'BigQuery', 'SQL', 'Jinja2', 'GitHub Actions', 'Python']
    },
    {
        id: 'bigquery-optimization',
        title: '💰 Otimização de Custos BigQuery',
        shortDesc: 'Redução de 60% em custos através de query optimization, particionamento e clustering. Análise de performance e implementação de melhores práticas.',
        tags: ['BigQuery', 'SQL', 'Otimização'],
        fullDescription: 'Projeto focado em otimização de custos e performance no Google BigQuery através de técnicas avançadas de query optimization.',
        challenges: [
            'Custos elevados de processamento no BigQuery',
            'Queries lentas afetando dashboards',
            'Tabelas não otimizadas sem particionamento'
        ],
        solutions: [
            'Implementação de particionamento por data',
            'Clustering em colunas mais consultadas',
            'Reescrita de queries complexas',
            'Análise de Query Execution Plan'
        ],
        results: [
            'Redução de 60% nos custos mensais',
            'Melhoria de 80% na performance das queries',
            'Economia de R$ 15.000/mês',
            'SLAs de dashboards sempre cumpridos'
        ],
        github: CONTACT_LINKS.GITHUB,
        tech: ['BigQuery', 'SQL', 'GCP', 'Performance Tuning']
    },
    {
        id: 'airflow-pipeline',
        title: '🔄 Pipeline Airflow Multi-API',
        shortDesc: 'Orquestração de múltiplas APIs com tratamento robusto de erros, retry policies e monitoramento. Pipeline de dados complexo com SLAs definidos.',
        tags: ['Apache Airflow', 'Python', 'APIs'],
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
        github: CONTACT_LINKS.GITHUB,
        tech: ['Apache Airflow', 'Python', 'Docker', 'PostgreSQL', 'APIs REST', 'Slack API']
    },
    {
        id: 'spark-processing',
        title: '⚡ Processamento Distribuído com Spark',
        shortDesc: 'Processamento distribuído de dados em larga escala com PySpark. Otimização de jobs e análise de performance em clusters.',
        tags: ['PySpark', 'Spark', 'Big Data'],
        fullDescription: 'Implementação de processamento distribuído de grandes volumes de dados usando Apache Spark.',
        challenges: [
            'Processar 500GB+ de dados diariamente',
            'Otimização de jobs Spark lentos',
            'Gerenciamento de memória em clusters',
            'Transformações complexas em dados distribuídos'
        ],
        solutions: [
            'Particionamento inteligente de dados',
            'Uso de broadcast joins para tabelas pequenas',
            'Caching estratégico de dataframes',
            'Tuning de configurações do Spark',
            'Monitoramento com Spark UI'
        ],
        results: [
            'Redução de 75% no tempo de processamento',
            'Processamento de 500GB em < 2 horas',
            'Economia de recursos computacionais',
            'Pipeline totalmente automatizado'
        ],
        github: CONTACT_LINKS.GITHUB,
        tech: ['PySpark', 'Apache Spark', 'Python', 'Hadoop', 'YARN', 'Scala']
    },
    {
        id: 'dados-publicos-brasil',
        title: '🇧🇷 Pipeline Dados Públicos Brasil',
        shortDesc: 'Pipeline de ingestão e transformação de dados públicos brasileiros (IBGE, DATASUS). Integração com múltiplas APIs governamentais.',
        tags: ['Python', 'APIs', 'ETL'],
        fullDescription: 'Sistema completo de ingestão e transformação de dados públicos brasileiros de fontes como IBGE e DATASUS.',
        challenges: [
            'APIs governamentais com documentação limitada',
            'Formatos de dados inconsistentes',
            'Dados históricos extensos',
            'Necessidade de validação rigorosa'
        ],
        solutions: [
            'Wrapper Python para APIs governamentais',
            'Normalização e padronização de dados',
            'Pipeline incremental com controle de versão',
            'Validação automática de dados',
            'Armazenamento em Data Lake estruturado'
        ],
        results: [
            'Centralização de 10+ fontes de dados públicos',
            'Dados atualizados diariamente',
            'API unificada para consumo interno',
            'Documentação completa dos dados'
        ],
        github: CONTACT_LINKS.GITHUB,
        tech: ['Python', 'Pandas', 'APIs REST', 'SQLAlchemy', 'FastAPI', 'PostgreSQL']
    },
    {
        id: 'saude-publica',
        title: '🏥 Análise Saúde Pública',
        shortDesc: 'Análise de dados de saúde pública com foco em PNPS e PNH. Visualizações e insights sobre políticas de saúde no Brasil.',
        tags: ['Python', 'Pandas', 'Análise de Dados'],
        fullDescription: 'Projeto de análise exploratória e visualização de dados do sistema de saúde público brasileiro.',
        challenges: [
            'Dados complexos e multidimensionais',
            'Necessidade de análises estatísticas avançadas',
            'Visualizações para diferentes públicos',
            'Contextualização com políticas públicas'
        ],
        solutions: [
            'Pipeline de análise reproduzível em Python',
            'Visualizações interativas com Plotly',
            'Análise estatística com SciPy',
            'Notebooks documentados e compartilháveis',
            'Dashboard executivo com métricas chave'
        ],
        results: [
            'Identificação de padrões nas políticas de saúde',
            'Relatórios automáticos mensais',
            'Suporte a tomada de decisão',
            '20+ visualizações interativas'
        ],
        github: 'https://github.com/isabellazramos/analise-excesso-de-mortes-covid19-america-latina',
        tech: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Jupyter', 'Matplotlib', 'Seaborn']
    }
];