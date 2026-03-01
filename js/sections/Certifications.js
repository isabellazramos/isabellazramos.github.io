// ==================== CERTIFICATIONS SECTION ====================

function CertificationCard({ certification }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500 hover-scale hover:shadow-emerald-500/20 hover:shadow-lg">
            <h3 className="text-base font-semibold mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {certification.title}
            </h3>
            <p className="text-gray-500 text-xs mb-1">{certification.provider}</p>
            <p className="text-gray-600 text-xs">{certification.date}</p>
            <span className="inline-block mt-3 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-xs text-emerald-400">
                {certification.category}
            </span>
        </div>
    );
}

function Certifications() {
    const { useState } = React;
    const [filter, setFilter] = useState('Todas');
    const categories = ['Todas', 'Big Data', 'Data Engineering', 'AI/ML', 'Cloud', 'Programming'];

    const filteredCerts = filter === 'Todas' 
        ? CERTIFICATIONS_DATA 
        : CERTIFICATIONS_DATA.filter(cert => cert.category === filter);

    return (
        <section id="certificacoes" className="py-20 px-6">
            <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Certificações
            </h2>
            
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`filter-btn px-4 py-2 rounded-lg border ${
                            filter === cat 
                                ? 'active' 
                                : 'bg-zinc-800 border-zinc-700 text-gray-400 hover:border-emerald-500'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredCerts.map((cert, idx) => (
                    <CertificationCard key={idx} certification={cert} />
                ))}
            </div>
        </section>
    );
}