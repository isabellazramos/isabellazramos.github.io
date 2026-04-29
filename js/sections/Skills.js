// ==================== SKILLS SECTION ====================

function SkillCard({ skill }) {
    return React.createElement(
        'div',
        { className: 'bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500 transition-all hover-scale' },
        React.createElement('h3', { className: 'text-xl font-semibold mb-4 text-emerald-500' }, skill.title),
        React.createElement(
            'div',
            { className: 'flex flex-wrap gap-2' },
            skill.tags.map((tag, i) =>
                React.createElement(
                    'span',
                    {
                        key: i,
                        className: 'px-3 py-1 bg-zinc-800 rounded-md text-sm text-gray-400'
                    },
                    tag
                )
            )
        )
    );
}

function Skills() {
    return React.createElement(
        'section',
        { id: 'skills', className: 'py-20 px-6' },
        React.createElement(
            'h2',
            { className: 'text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent' },
            'Competências Técnicas'
        ),
        React.createElement(
            'div',
            { className: 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            SKILLS_DATA.map((skill, idx) =>
                React.createElement(SkillCard, { key: idx, skill: skill })
            )
        )
    );
}