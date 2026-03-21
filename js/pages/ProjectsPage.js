// ==================== PROJECTS PAGE ====================

function ProjectCard({ project, onClick }) {
    return React.createElement(
        'div',
        {
            onClick: () => onClick(project),
            className: 'project-card bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover-scale hover:border-emerald-500'
        },
        React.createElement('h3', { className: 'text-xl font-semibold mb-3 text-emerald-400' }, project.title),
        React.createElement('p', { className: 'text-gray-400 mb-4 leading-relaxed' }, project.shortDesc),
        React.createElement(
            'div',
            { className: 'flex flex-wrap gap-2' },
            project.tags.map((tag, i) =>
                React.createElement(
                    'span',
                    {
                        key: i,
                        className: 'px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-sm text-emerald-400'
                    },
                    tag
                )
            )
        )
    );
}

function ProjectsPage({ setCurrentPage, setSelectedProject }) {
    const [selectedTag, setSelectedTag] = React.useState('Todos');

    const allTags = React.useMemo(() => {
        const tagsSet = new Set();
        PROJECTS_DATA.forEach(project => {
            project.tags.forEach(tag => tagsSet.add(tag));
        });
        return ['Todos', ...Array.from(tagsSet).sort()];
    }, []);

    const filteredProjects = React.useMemo(() => {
        if (selectedTag === 'Todos') {
            return PROJECTS_DATA;
        }
        return PROJECTS_DATA.filter(project => project.tags.includes(selectedTag));
    }, [selectedTag]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentPage(PAGES.PROJECT_DETAIL);
        window.scrollTo(0, 0);
    };

    return React.createElement(
        'div',
        { className: 'pt-32 pb-20 px-6 fade-in' },
        React.createElement(
            'h1',
            { className: 'text-6xl font-bold text-center mb-8 pb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent' },
            'Meus Projetos'
        ),
        React.createElement(
            'p',
            { className: 'text-center text-gray-400 mb-12 text-xl max-w-3xl mx-auto' },
            'Portfólio completo de projetos de engenharia de dados. Clique em qualquer projeto para ver os detalhes técnicos, desafios e resultados.'
        ),
        React.createElement(
            'div',
            { className: 'max-w-6xl mx-auto mb-12' },
            React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3 justify-center' },
                allTags.map((tag, idx) =>
                    React.createElement(
                        'button',
                        {
                            key: idx,
                            onClick: () => setSelectedTag(tag),
                            className: `filter-btn px-4 py-2 rounded-lg border transition-all ${
                                selectedTag === tag
                                    ? 'active border-emerald-500 text-white'
                                    : 'border-zinc-700 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400'
                            }`
                        },
                        tag
                    )
                )
            )
        ),
        React.createElement(
            'p',
            { className: 'text-center text-gray-500 mb-8 text-sm' },
            `${filteredProjects.length} projeto${filteredProjects.length !== 1 ? 's' : ''} encontrado${filteredProjects.length !== 1 ? 's' : ''}`
        ),
        React.createElement(
            'div',
            { className: 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            filteredProjects.map((project, idx) =>
                React.createElement(ProjectCard, { key: idx, project: project, onClick: handleProjectClick })
            )
        )
    );
}