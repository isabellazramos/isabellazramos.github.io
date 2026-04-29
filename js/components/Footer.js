// ==================== FOOTER COMPONENT ====================

function Footer() {
    return React.createElement(
        'footer',
        { className: 'py-8 px-6 border-t border-zinc-800' },
        React.createElement(
            'div',
            { className: 'max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4' },
            React.createElement(
                'p',
                { className: 'text-gray-500 text-sm' },
                '© 2026 Isabella Ramos. Todos os direitos reservados.'
            ),
            React.createElement(
                'div',
                { className: 'flex gap-6' },
                React.createElement(
                    'a',
                    {
                        href: CONTACT_LINKS.GITHUB,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'text-gray-500 hover:text-emerald-500 transition-colors'
                    },
                    'GitHub'
                ),
                React.createElement(
                    'a',
                    {
                        href: CONTACT_LINKS.LINKEDIN,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'text-gray-500 hover:text-emerald-500 transition-colors'
                    },
                    'LinkedIn'
                ),
                React.createElement(
                    'a',
                    {
                        href: `mailto:${CONTACT_LINKS.EMAIL}`,
                        className: 'text-gray-500 hover:text-emerald-500 transition-colors'
                    },
                    'Email'
                )
            )
        )
    );
}