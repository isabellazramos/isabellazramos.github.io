// ==================== CERTIFICATIONS PAGE ====================

function CertificationsPage() {
    const { useState } = React;
    const [filter, setFilter] = useState('Todas');

    const allCategories = Array.from(
        new Set(
            CERTIFICATIONS_DATA.flatMap(cert => cert.categories || [cert.category])
        )
    );

    const categories = ['Todas', ...allCategories];

    const filteredCerts =
        filter === 'Todas'
            ? CERTIFICATIONS_DATA
            : CERTIFICATIONS_DATA.filter(cert => {
                  const certCategories = cert.categories || [cert.category];
                  return certCategories.includes(filter);
              });

    return React.createElement(
        'div',
        { className: 'pt-32 pb-20 px-6 fade-in' },
        React.createElement(
            'h1',
            { className: 'text-6xl font-bold text-center mb-8 pb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent' },
            'Certificações'
        ),
        React.createElement(
            'p',
            { className: 'text-center text-gray-400 mb-12 text-xl max-w-3xl mx-auto' },
            'Certificações obtidas em plataformas como DataCamp, Coursera, Alura e Google Cloud, cobrindo engenharia de dados, big data, cloud e inteligência artificial.'
        ),
        // Filtros
        React.createElement(
            'div',
            { className: 'max-w-6xl mx-auto mb-8' },
            React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3 justify-center' },
                categories.map((cat, idx) =>
                    React.createElement(
                        'button',
                        {
                            key: idx,
                            onClick: () => setFilter(cat),
                            className: `filter-btn px-4 py-2 rounded-lg border transition-all ${
                                filter === cat
                                    ? 'active border-emerald-500 text-white'
                                    : 'border-zinc-700 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400'
                            }`
                        },
                        cat
                    )
                )
            )
        ),
        // Contador
        React.createElement(
            'p',
            { className: 'text-center text-gray-500 mb-8 text-sm' },
            `${filteredCerts.length} certificado${filteredCerts.length !== 1 ? 's' : ''} encontrado${filteredCerts.length !== 1 ? 's' : ''}`
        ),
        // Grid de certificados
        React.createElement(
            'div',
            { className: 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' },
            filteredCerts.map((cert, idx) =>
                React.createElement(CertificationCard, { key: idx, certification: cert })
            )
        )
    );
}
