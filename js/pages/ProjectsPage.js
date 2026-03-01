// ==================== PROJECTS PAGE ====================

function ProjectCard({ project, onClick }) {
    return (
        <div
            onClick={() => onClick(project)}
            className="project-card bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover-scale hover:border-emerald-500"
        >
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">{project.title}</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{project.shortDesc}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-sm text-emerald-400">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectsPage({ setCurrentPage, setSelectedProject }) {
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentPage(PAGES.PROJECT_DETAIL);
        window.scrollTo(0, 0);
    };

    return (
        <div className="pt-32 pb-20 px-6 fade-in">
            <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Meus Projetos
            </h1>
            <p className="text-center text-gray-400 mb-16 text-xl max-w-3xl mx-auto">
                Portfólio completo de projetos de engenharia de dados. Clique em qualquer projeto para ver os detalhes técnicos, desafios e resultados.
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.map((project, idx) => (
                    <ProjectCard key={idx} project={project} onClick={handleProjectClick} />
                ))}
            </div>
        </div>
    );
}