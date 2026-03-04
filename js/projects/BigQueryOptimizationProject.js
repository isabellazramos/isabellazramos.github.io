// ==================== BIGQUERY OPTIMIZATION PROJECT ====================

function BigQueryOptimizationProject() {
    const project = {
        title: '💰 Otimização de Custos BigQuery',
        tech: ['BigQuery', 'SQL', 'GCP', 'Performance Tuning'],
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
        github: CONTACT_LINKS.GITHUB
    };

    return React.createElement(ProjectDetailTemplate, { project: project });
}
