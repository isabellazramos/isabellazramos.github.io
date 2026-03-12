// ==================== HEADER COMPONENT ====================

function NavigationLink({ item, onClick, currentPage, setCurrentPage }) {
    const { useState, useEffect } = React;

    const handleClick = (e) => {
        if (item.action) {
            e.preventDefault();
            setCurrentPage(item.action);
            window.scrollTo(0, 0);
        } else if (item.href && item.href.startsWith('#')) {
            e.preventDefault();
            
            if (currentPage !== PAGES.HOME) {
                setCurrentPage(PAGES.HOME);
                setTimeout(() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                const element = document.querySelector(item.href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    };

    if (item.action) {
        return (
            <button 
                onClick={handleClick}
                className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
                {item.label}
            </button>
        );
    }

    return (
        <a 
            href={item.href}
            onClick={handleClick}
            className="text-gray-400 hover:text-emerald-500 transition-colors"
        >
            {item.label}
        </a>
    );
}

function MobileMenu({ isOpen, onClose, items, currentPage, setCurrentPage }) {
    if (!isOpen) return null;

    const handleItemClick = (item) => {
        if (item.action) {
            setCurrentPage(item.action);
            window.scrollTo(0, 0);
        } else if (item.href && item.href.startsWith('#')) {
            if (currentPage !== PAGES.HOME) {
                setCurrentPage(PAGES.HOME);
                setTimeout(() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                const element = document.querySelector(item.href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
        onClose();
    };

    return (
        <div className="md:hidden fixed top-[73px] left-0 right-0 bg-zinc-950/95 backdrop-blur border-b border-emerald-500/20 shadow-xl z-40">
            <ul className="flex flex-col py-4">
                {items.map((item, idx) => (
                    <li key={idx}>
                        <button 
                            onClick={() => handleItemClick(item)}
                            className="block w-full text-left px-6 py-3 text-gray-400 hover:text-emerald-500 hover:bg-zinc-900/50 transition-colors"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Header({ currentPage, setCurrentPage }) {
    const { useState, useEffect } = React;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-emerald-500/20' : 'bg-transparent'
    }`;

    return (
        <header className={headerClasses}>
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <button 
                    onClick={() => { setCurrentPage(PAGES.HOME); window.scrollTo(0, 0); }}
                    className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent hover:from-emerald-400 hover:to-teal-400 transition-all"
                >
                    Isabella Ramos
                </button>
                
                {currentPage === PAGES.HOME ? (
                    <>
                        <ul className="hidden md:flex gap-8">
                            {NAVIGATION_ITEMS.map((item, idx) => (
                                <li key={idx}>
                                    <NavigationLink 
                                        item={item} 
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                    />
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-400 hover:text-emerald-500 transition-colors p-2"
                            aria-label="Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        <MobileMenu 
                            isOpen={mobileMenuOpen} 
                            onClose={() => setMobileMenuOpen(false)}
                            items={NAVIGATION_ITEMS}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </>
                ) : (
                    <button 
                        onClick={() => { 
                            if (currentPage === PAGES.PROJECT_DETAIL) {
                                setCurrentPage(PAGES.PROJECTS);
                            } else {
                                setCurrentPage(PAGES.HOME);
                            }
                            window.scrollTo(0, 0); 
                        }}
                        className="text-gray-400 hover:text-emerald-500 transition-colors flex items-center gap-2"
                    >
                        ← Voltar
                    </button>
                )}
            </nav>
        </header>
    );
}
