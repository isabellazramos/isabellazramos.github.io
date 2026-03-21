// ==================== CERTIFICATIONS SECTION ====================
// Componente de card reutilizado pela CertificationsPage

function CertificationCard({ certification }) {
    const certCategories = certification.categories || [certification.category];

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500 hover-scale hover:shadow-emerald-500/20 hover:shadow-lg">
            <h3 className="text-base font-semibold mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {certification.title}
            </h3>
            <p className="text-gray-500 text-xs mb-1">{certification.provider}</p>
            <p className="text-gray-600 text-xs">{certification.date}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {certCategories.map(cat => (
                    <span
                        key={cat}
                        className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-xs text-emerald-400"
                    >
                        {cat}
                    </span>
                ))}
            </div>
        </div>
    );
}
