// ==================== HERO SECTION ====================

function Hero() {
    return (
        <section className="pt-40 pb-32 px-6 relative glow-effect fade-in min-h-screen flex items-center">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-left">
                        <p className="text-emerald-400 text-lg mb-2">Olá, meu nome é</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text">
                            Isabella Ramos
                        </h1>
                        <p className="text-3xl md:text-4xl text-gray-400 mb-6">Engenheira de Dados</p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Transformando dados em insights estratégicos através de pipelines robustos, orquestração eficiente e soluções cloud escaláveis.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                            <img src="assets/isabella-ramos.jpeg" alt="Isabella Ramos" className="rounded-full object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}