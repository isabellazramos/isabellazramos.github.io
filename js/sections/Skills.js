// ==================== SKILLS SECTION ====================

function SkillCard({ skill }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500 transition-all hover-scale">
            <h3 className="text-xl font-semibold mb-4 text-emerald-500">{skill.title}</h3>
            <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-md text-sm text-gray-400">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Competências Técnicas
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS_DATA.map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} />
                ))}
            </div>
        </section>
    );
}