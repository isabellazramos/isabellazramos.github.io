// ==================== FOOTER COMPONENT ====================

function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © 2026 Isabella Ramos. Todos os direitos reservados.
                </p>
                <div className="flex gap-6">
                    <a href={CONTACT_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors">
                        GitHub
                    </a>
                    <a href={CONTACT_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors">
                        LinkedIn
                    </a>
                    <a href={`mailto:${CONTACT_LINKS.EMAIL}`} className="text-gray-500 hover:text-emerald-500 transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}