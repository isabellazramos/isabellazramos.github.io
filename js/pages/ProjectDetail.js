// ==================== PROJECT DETAIL PAGE ====================

function ProjectSection({ title, emoji, children }) {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-4 text-emerald-400">{emoji} {title}</h2>
            {children}
        </section>
    );
}

function ProjectDetail({ project }) {
    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-emerald-600 rounded-lg text-sm font-medium">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="space-y-12">
                <ProjectSection title="Descrição" emoji="📋">
                    <p className="text-gray-300 text-lg leading-relaxed">{project.fullDescription}</p>
                </ProjectSection>

                <ProjectSection title="Desafios" emoji="🎯">
                    <ul className="space-y-3">
                        {project.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-emerald-500 text-xl mt-1">•</span>
                                <span className="text-gray-300 text-lg">{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </ProjectSection>

                <ProjectSection title="Soluções Implementadas" emoji="💡">
                    <ul className="space-y-3">
                        {project.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-green-500 text-xl mt-1">✓</span>
                                <span className="text-gray-300 text-lg">{solution}</span>
                            </li>
                        ))}
                    </ul>
                </ProjectSection>

                <ProjectSection title="Resultados" emoji="📊">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.results.map((result, i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                <p className="text-gray-300 text-lg">{result}</p>
                            </div>
                        ))}
                    </div>
                </ProjectSection>

                <section className="border-t border-zinc-800 pt-8">
                    <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg text-lg font-semibold transition-all hover-scale shadow-lg shadow-emerald-500/30"
                    >
                        Ver no GitHub →
                    </a>
                </section>
            </div>
        </div>
    );
}