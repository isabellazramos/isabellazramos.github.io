// ==================== SAÚDE PÚBLICA PROJECT ====================


function SaudePublicaProject() {
    const project = {
        title: '🏥 Análise Excesso de Mortes COVID-19',
        tech: ['Google Sheets', 'CSV', 'Análise de Dados', 'Visualização', 'Tabelas Dinâmicas'],
        fullDescription: 'Análise comparativa do excesso de mortalidade e subnotificação de óbitos por COVID-19 em 5 países da América Latina (México, Peru, Chile, Brasil e Colômbia), utilizando dados semanais/mensais de 1.332 registros.',
        challenges: [
            'Comparação entre países com diferentes sistemas de registro de óbitos',
            'Identificação de subnotificação através do excesso de mortes',
            'Normalização de dados por população (taxa por 100.000 habitantes)',
            'Agregação temporal heterogênea (semanal vs. mensal) entre países'
        ],
        solutions: [
            'Pipeline de análise estruturado em planilhas eletrônicas',
            'Normalização demográfica com dados populacionais por país',
            'Cálculo de excesso de mortes como proxy para impacto indireto da pandemia',
            'Tabelas dinâmicas para agregação e comparação multidimensional',
            'Visualizações comparativas destacando diferenças entre países',
            'Documentação completa com resultados finais em CSV'
        ],
        results: [
            'Identificação de subnotificação significativa no México (+309.97 mortes/100k)',
            'Peru com maior impacto: 600.82 mortes COVID/100k habitantes',
            'Análise de 1.332 registros temporais em 5 países latino-americanos',
            'Evidência de excesso de mortes consistentemente maior que mortes confirmadas'
        ],
        github: CONTACT_LINKS.GITHUB + '/analise-excesso-de-mortes-covid19-america-latina'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
