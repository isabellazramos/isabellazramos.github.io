// ==================== PROJECT DETAIL TEMPLATE ====================

function ProjectSection({ title, emoji, children }) {
    return React.createElement(
        'section',
        null,
        React.createElement(
            'h2',
            { className: 'text-3xl font-bold mb-4 text-emerald-400' },
            emoji + ' ' + title
        ),
        children
    );
}

function ProjectDetailTemplate({ project }) {
    return React.createElement(
        'div',
        { className: 'pt-32 pb-20 px-6 max-w-5xl mx-auto' },
        React.createElement('h1', { className: 'text-5xl font-bold mb-6' }, project.title),
        
        React.createElement(
            'div',
            { className: 'flex flex-wrap gap-2 mb-8' },
            project.tech.map((tech, i) =>
                React.createElement(
                    'span',
                    {
                        key: i,
                        className: 'px-4 py-2 bg-emerald-600 rounded-lg text-sm font-medium'
                    },
                    tech
                )
            )
        ),

        React.createElement(
            'div',
            { className: 'space-y-12' },
            React.createElement(
                ProjectSection,
                { title: 'Descrição', emoji: '📋' },
                React.createElement(
                    'p',
                    { className: 'text-gray-300 text-lg leading-relaxed' },
                    project.fullDescription
                )
            ),

            React.createElement(
                ProjectSection,
                { title: 'Desafios', emoji: '🎯' },
                React.createElement(
                    'ul',
                    { className: 'space-y-3' },
                    project.challenges.map((challenge, i) =>
                        React.createElement(
                            'li',
                            { key: i, className: 'flex items-start gap-3' },
                            React.createElement('span', { className: 'text-emerald-500 text-xl mt-1' }, '•'),
                            React.createElement('span', { className: 'text-gray-300 text-lg' }, challenge)
                        )
                    )
                )
            ),

            React.createElement(
                ProjectSection,
                { title: 'Soluções Implementadas', emoji: '💡' },
                React.createElement(
                    'ul',
                    { className: 'space-y-3' },
                    project.solutions.map((solution, i) =>
                        React.createElement(
                            'li',
                            { key: i, className: 'flex items-start gap-3' },
                            React.createElement('span', { className: 'text-green-500 text-xl mt-1' }, '✓'),
                            React.createElement('span', { className: 'text-gray-300 text-lg' }, solution)
                        )
                    )
                )
            ),

            React.createElement(
                ProjectSection,
                { title: 'Resultados', emoji: '📊' },
                React.createElement(
                    'div',
                    { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
                    project.results.map((result, i) =>
                        React.createElement(
                            'div',
                            {
                                key: i,
                                className: 'bg-zinc-900 border border-zinc-800 rounded-xl p-6'
                            },
                            React.createElement('p', { className: 'text-gray-300 text-lg' }, result)
                        )
                    )
                )
            ),

            React.createElement(
                'section',
                { className: 'border-t border-zinc-800 pt-8' },
                React.createElement(
                    'a',
                    {
                        href: project.github,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg text-lg font-semibold transition-all hover-scale shadow-lg shadow-emerald-500/30'
                    },
                    'Ver no GitHub →'
                )
            )
        )
    );
}
