// ==================== COVID MISINFO DETECTOR PROJECT ====================


function CovidMisinfoDetectorProject() {
    const project = {
        title: '🔍 Detecção de Fake News COVID-19',
        tech: ['Python', 'PySpark', 'scikit-learn', 'NLTK', 'Pandas', 'Folium', 'Plotly', 'Jupyter', 'Google Fact Check API'],
        fullDescription: 'TCC — Pipeline end-to-end de detecção automática de desinformação sobre COVID-19 em ~93.000 mensagens de grupos públicos do WhatsApp, combinando NLP (TF-IDF + Jaccard), dados de fact-checkers e análise geoespacial por UF com microdados do DATASUS e Censo IBGE 2022.',
        challenges: [
            'Processamento de microdados DATASUS em escala de gigabytes com PySpark',
            'Comparação automatizada de 93k mensagens com 400+ checagens verificadas',
            'Normalização e cruzamento de 4 fontes heterogêneas (WhatsApp, DATASUS, IBGE, Google API)',
            'Definição de thresholds de similaridade para minimizar falsos positivos',
            'Filtragem de mensagens curtas (< 100 chars) e do tipo documento antes da classificação'
        ],
        solutions: [
            'TF-IDF Vectorizer + similaridade de cosseno via scikit-learn, threshold ≥ 0.7',
            'Índice de Jaccard com tokenização e remoção de stopwords em PT-BR via NLTK, threshold ≥ 0.5',
            'Pipeline de staging com normalização de texto (remoção de \\r, \\n, \\t) antes de cada algoritmo',
            'PySpark para leitura e agregação de microdados DATASUS em escala GB por UF',
            'Coleta automatizada de checagens via Google Fact Check Tools API exportadas em df_fakenews.csv',
            'Mapas coropléticos interativos com Folium/Plotly cruzando fake news, vacinação e mortalidade por UF',
            'Análise temporal cruzando volume de fake news com períodos eleitorais e fases da pandemia'
        ],
        results: [
            '~93.000 mensagens analisadas de grupos públicos do WhatsApp cobrindo todos os 26 estados + DF',
            'SP lidera com 14.750 mensagens (2.811 usuários únicos), seguido por RJ (10.852) e MG (9.814)',
            'RN destaca-se com alta concentração de envio: 4.408 mensagens por apenas 290 usuários — maior razão mensagens/usuário do top 5',
            'Desinformação identificada em grupos de espectros políticos opostos, como "USA2 BRASIL BOLSONARISTA 🇧🇷" e "Democracia Socialista PT2"',
            'Dois algoritmos NLP comparados: Cosseno (detecção semântica) e Jaccard (detecção lexical), com resultados exportados em JSON para análise cruzada',
            'Mensagens detectadas por ambos os algoritmos simultaneamente representam os casos de maior confiança na classificação',
            'Mapas coropléticos revelaram correlação geográfica entre volume de fake news por UF, cobertura vacinal e mortalidade COVID-19',
            'Análise temporal evidenciou picos de desinformação associados ao calendário eleitoral de 2022'
        ],
        github: 'https://github.com/isabellazramos/covid-misinfo-detector'
    };


    return React.createElement(ProjectDetailTemplate, { project: project });
}

