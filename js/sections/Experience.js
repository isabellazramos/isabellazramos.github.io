// ==================== EXPERIENCE SECTION ====================

function ExperienceCard({ experience }) {
    const dotClasses = `absolute left-0 top-2 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
        experience.current 
            ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/50' 
            : 'bg-zinc-900 border-emerald-500/50'
    }`;

    const cardClasses = `bg-zinc-900 border rounded-xl p-6 hover:border-emerald-500 transition-all hover-scale ${
        experience.current ? 'border-emerald-500/50' : 'border-zinc-800'
    }`;

    return React.createElement(
        'div',
        { className: 'relative pl-12 pb-12 last:pb-0' },
        React.createElement(
            'div',
            { className: dotClasses },
            experience.current && React.createElement(
                'span',
                { className: 'w-3 h-3 bg-white rounded-full animate-pulse' }
            )
        ),
        React.createElement(
            'div',
            { className: cardClasses },
            experience.current && React.createElement(
                'div',
                { className: 'inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full mb-3 border border-emerald-500/30' },
                React.createElement('span', { className: 'w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse' }),
                'Atual'
            ),
            React.createElement('h3', { className: 'text-xl font-bold mb-1 text-gray-100' }, experience.title),
            React.createElement(
                'div',
                { className: 'flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-4' },
                React.createElement(
                    'span',
                    { className: 'flex items-center gap-1' },
                    React.createElement('span', { className: 'text-emerald-400' }, '💼'),
                    experience.company
                ),
                React.createElement(
                    'span',
                    { className: 'flex items-center gap-1' },
                    React.createElement('span', { className: 'text-emerald-400' }, '📍'),
                    experience.location
                ),
                React.createElement(
                    'span',
                    { className: 'flex items-center gap-1' },
                    React.createElement('span', { className: 'text-emerald-400' }, '📅'),
                    experience.period
                )
            ),
            React.createElement(
                'ul',
                { className: 'space-y-2' },
                experience.description.map((item, i) =>
                    React.createElement(
                        'li',
                        {
                            key: i,
                            className: 'flex items-start gap-2 text-sm text-gray-400'
                        },
                        React.createElement('span', { className: 'text-emerald-400 mt-1' }, '▹'),
                        React.createElement('span', null, item)
                    )
                )
            )
        )
    );
}

function Experience() {
    return React.createElement(
        'section',
        { id: 'experiencia', className: 'py-20 px-6 bg-zinc-900/30' },
        React.createElement(
            'h2',
            { className: 'text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent' },
            'Experiência Profissional'
        ),
        React.createElement(
            'div',
            { className: 'max-w-4xl mx-auto relative' },
            React.createElement('div', { className: 'absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent' }),
            EXPERIENCES_DATA.map((exp, idx) =>
                React.createElement(ExperienceCard, { key: idx, experience: exp })
            )
        )
    );
}