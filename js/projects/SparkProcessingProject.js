// ==================== SPARK PROCESSING PROJECT ====================

function SparkProcessingProject() {
    const project = {
        title: '⚡ Processamento Distribuído com Spark',
        tech: ['PySpark', 'Apache Spark', 'Python', 'Hadoop', 'YARN', 'Scala'],
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
        github: CONTACT_LINKS.GITHUB
    };

    return React.createElement(ProjectDetailTemplate, { project: project });
}
