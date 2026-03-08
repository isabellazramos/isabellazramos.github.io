// ==================== HANDSETS & CENSUS DATA PROJECT ====================


function HandsetsCensusProject() {
    const project = {
        title: '📱 Análise Handsets & Dados Censitários',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Scikit-learn', 'Statsmodels', 'Jupyter'],
        fullDescription: 'Projeto de Iniciação Científica investigando correlações entre características sociodemográficas de municípios brasileiros (IBGE) e padrões de adoção/distribuição de dispositivos móveis.',
        challenges: [
            'Integração de bases heterogêneas (dados censitários IBGE + handsets)',
            'Dados com alta dimensionalidade e colinearidade entre variáveis',
            'Validação estatística de correlações em contexto geográfico',
            'Tratamento de outliers e valores ausentes em dados reais'
        ],
        solutions: [
            'Pipeline de análise exploratória com limpeza e pré-processamento sistemático',
            'Correlação de Pearson para relações lineares + Kendall para robustez',
            'Modelos de regressão linear com validação via statsmodels e scikit-learn',
            'Heatmaps e scatter plots para identificação visual de padrões',
            'Remoção de variáveis redundantes e agregações pré-computadas',
            'Merge inner join por código IBGE para garantir consistência'
        ],
        results: [
            'Identificação de correlações significativas entre renda, escolaridade e tipo de dispositivo',
            'Análise geográfica de padrões de adoção tecnológica por município',
            'Modelos preditivos com R² e p-values para validação estatística',
            '3 notebooks completos com análises reproduzíveis'
        ],
        github: CONTACT_LINKS.GITHUB + '/Analise-de-Handsets-e-Dados-Censitarios'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
