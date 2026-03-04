// ==================== DBT ARCHITECTURE PROJECT ====================

function DbtArchitectureProject() {
    const project = {
        title: '🏭 Arquitetura dbt com Modelos Incrementais',
        tech: ['dbt', 'BigQuery', 'SQL', 'Jinja2', 'GitHub Actions', 'Python'],
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
        github: CONTACT_LINKS.GITHUB
    };

    return React.createElement(ProjectDetailTemplate, { project: project });
}
