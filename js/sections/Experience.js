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

    return (
        <div className="relative pl-12 pb-12 last:pb-0">
            <div className={dotClasses}>
                {experience.current && (
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                )}
            </div>

            <div className={cardClasses}>
                {experience.current && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full mb-3 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                        Atual
                    </div>
                )}
                
                <h3 className="text-xl font-bold mb-1 text-gray-100">{experience.title}</h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                        <span className="text-emerald-400">💼</span>
                        {experience.company}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="text-emerald-400">📍</span>
                        {experience.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="text-emerald-400">📅</span>
                        {experience.period}
                    </span>
                </div>

                <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-emerald-400 mt-1">▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <section id="experiencia" className="py-20 px-6 bg-zinc-900/30">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Experiência Profissional
            </h2>
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent"></div>
                {EXPERIENCES_DATA.map((exp, idx) => (
                    <ExperienceCard key={idx} experience={exp} />
                ))}
            </div>
        </section>
    );
}