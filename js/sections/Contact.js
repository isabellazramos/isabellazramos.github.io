// ==================== CONTACT SECTION ====================

function Contact() {
    const contactButtons = [
        { href: `mailto:${CONTACT_LINKS.EMAIL}`, label: '📧 Email', primary: true },
        { href: CONTACT_LINKS.LINKEDIN, label: '💼 LinkedIn', primary: false },
        { href: CONTACT_LINKS.GITHUB, label: '🐙 GitHub', primary: false }
    ];

    return React.createElement(
        'section',
        { id: 'contato', className: 'py-20 px-6' },
        React.createElement(
            'h2',
            { className: 'text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent' },
            'Vamos Conversar?'
        ),
        React.createElement(
            'div',
            { className: 'max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center' },
            React.createElement(
                'h3',
                { className: 'text-2xl font-semibold mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent' },
                'Entre em contato'
            ),
            React.createElement(
                'p',
                { className: 'text-gray-400 mb-8' },
                'Estou sempre aberta a novas oportunidades e colaborações em projetos de dados.'
            ),
            React.createElement(
                'div',
                { className: 'flex justify-center gap-4 flex-wrap' },
                contactButtons.map((btn, idx) =>
                    React.createElement(
                        'a',
                        {
                            key: idx,
                            href: btn.href,
                            target: btn.href.startsWith('http') ? '_blank' : undefined,
                            rel: btn.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                            className: btn.primary 
                                ? 'px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-semibold transition-all hover-scale flex items-center gap-2'
                                : 'px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-emerald-500 rounded-lg font-semibold transition-all hover-scale flex items-center gap-2'
                        },
                        btn.label
                    )
                )
            )
        )
    );
}