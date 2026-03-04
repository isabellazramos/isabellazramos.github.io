// ==================== SAÚDE PÚBLICA PROJECT ====================

function SaudePublicaProject() {
    const project = {
        title: '🏥 Análise Saúde Pública',
        tech: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Jupyter', 'Matplotlib', 'Seaborn'],
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
        github: 'https://github.com/isabellazramos/analise-excesso-de-mortes-covid19-america-latina'
    };

    return React.createElement(ProjectDetailTemplate, { project: project });
}
