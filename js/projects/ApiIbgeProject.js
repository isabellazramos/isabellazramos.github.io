// ==================== API IBGE PROJECT ====================


function ApiIbgeProject() {
    const project = {
        title: '🇧🇷 API IBGE Data Pipeline',
        tech: ['Python', 'SQLAlchemy', 'MySQL', 'Pandas', 'NumPy', 'Requests', 'PyMySQL'],
        fullDescription: 'Sistema automatizado e robusto de ETL para coleta, processamento e importação em massa de dados da API do IBGE (35+ pesquisas, ~5.500 municípios) em banco de dados MySQL.',
        challenges: [
            'Extração de 35+ pesquisas com múltiplos indicadores e séries temporais',
            'Volume massivo de dados (~5.500 municípios × 35 pesquisas)',
            'Resiliência de rede com retry automático e tratamento de erros',
            'Importação otimizada em batch para milhões de registros'
        ],
        solutions: [
            'Cliente HTTP robusto com retry automático e backoff exponencial',
            'Arquitetura modular com separação de responsabilidades (API/Database/Scripts)',
            'Connection pooling e Singleton pattern para gerenciamento de conexões',
            'Operações batch otimizadas com SQLAlchemy ORM',
            'Pipeline ETL completo: extração JSON → processamento CSV → importação MySQL',
            'Logging detalhado e auditável em múltiplos níveis (DEBUG, INFO, WARNING, ERROR)'
        ],
        results: [
            'Coleta automatizada de dados de 35+ pesquisas do IBGE',
            'Processamento de ~5.500 municípios brasileiros',
            'Schema normalizado com chaves estrangeiras e integridade referencial',
            'Sistema modular e extensível para novas pesquisas e indicadores'
        ],
        github: CONTACT_LINKS.GITHUB + '/API-Ibge'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}
