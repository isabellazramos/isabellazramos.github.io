// ==================== DADOS PÚBLICOS BRASIL PROJECT ====================

function DadosPublicosBrasilProject() {
    const project = {
        title: '🇧🇷 Pipeline Dados Públicos Brasil',
        tech: ['Python', 'Pandas', 'APIs REST', 'SQLAlchemy', 'FastAPI', 'PostgreSQL'],
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
        github: CONTACT_LINKS.GITHUB
    };

    return React.createElement(ProjectDetailTemplate, { project: project });
}
