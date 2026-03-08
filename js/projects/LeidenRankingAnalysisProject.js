// ==================== LEIDEN RANKING PROJECT ====================


function LeidenRankingAnalysisProject() {
    const project = {
        title: '🎓 Leiden Ranking Analysis',
        tech: ['R', 'Shiny', 'Plotly', 'Leaflet', 'tidyverse', 'ggplot2', 'data.table', 'ggthemes'],
        fullDescription: 'Aplicação web interativa em R/Shiny para visualização e análise de dados bibliométricos do CWTS Leiden Ranking, cobrindo mais de 1000 universidades ao redor do mundo.',
        challenges: [
            'Dados bibliométricos multidimensionais de 1000+ universidades globais',
            'Necessidade de visualizações geográficas e estatísticas integradas',
            'Portabilidade dos dados entre edições anuais do ranking',
            'Métricas complexas de desempenho científico por instituição'
        ],
        solutions: [
            'Aplicação Shiny com UI responsiva e temas customizados',
            'Mapas interativos georreferenciados com Leaflet',
            'Gráficos interativos e filtráveis com Plotly',
            'Pipeline de conversão CSV → RDS para atualização sem alteração de código',
            'Modularização com ui.R e server.R para manutenção facilitada'
        ],
        results: [
            'Dashboard cobrindo 1000+ universidades de todo o mundo',
            'Visualizações geográficas e bibliométricas interativas',
            'Atualização de dados a cada nova edição sem modificar o código',
            'Análise comparativa entre instituições por país e indicador'
        ],
        github: CONTACT_LINKS.GITHUB + '/LeidenRanking'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
