// ==================== POPULAÇÃO EM SITUAÇÃO DE RUA BH PROJECT ====================


function PopulacaoRuaBHProject() {
    const project = {
        title: '🏥 Análise População em Situação de Rua BH',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Scikit-learn', 'Yellowbrick'],
        fullDescription: 'Análise exploratória de 652.277 registros administrativos da população em situação de rua em Belo Horizonte (2020-2025), investigando perfil demográfico, distribuição territorial e vulnerabilidades sociais através de dados públicos do CadÚnico.',
        challenges: [
            'Volume massivo de dados longitudinais (59 meses, 652.277 registros)',
            'Dados administrativos com possíveis duplicidades e valores faltantes',
            'Análise multidimensional (temporal, geográfica, demográfica e socioeconômica)',
            'Padronização de dados de múltiplos anos com estruturas heterogêneas'
        ],
        solutions: [
            'Pipeline modular de ETL com src/ dedicado (loading, cleaning, analysis, visualization)',
            'Organização hierárquica de dados por ano para escalabilidade',
            'Análise estatística descritiva com pandas e numpy',
            'Visualizações exploratórias com matplotlib, seaborn e yellowbrick',
            'Notebooks estruturados para reprodutibilidade científica',
            'Documentação de limitações e vieses dos dados administrativos'
        ],
        results: [
            'Identificação de crescimento contínuo: 652.277 registros em 6 anos',
            'Perfil predominante: homens (85%), adultos 30-50 anos, pardos/pretos',
            'Concentração territorial na regional Centro-Sul',
            'Vulnerabilidades: renda ≤ R$ 89,00, dependência de benefícios sociais'
        ],
        github: CONTACT_LINKS.GITHUB + '/analise-populacao-em-situacao-de-rua-bh-2022-2025'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
