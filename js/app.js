// ==================== APP PRINCIPAL ====================

function App() {
    const { useState } = React;
    const [currentPage, setCurrentPage] = useState(PAGES.HOME);
    const [selectedProject, setSelectedProject] = useState(null);

    const renderPage = () => {
        switch (currentPage) {
            case PAGES.HOME:
                return React.createElement(HomePage);
            case PAGES.PROJECTS:
                return React.createElement(ProjectsPage, { 
                    setCurrentPage, 
                    setSelectedProject 
                });
            case PAGES.PROJECT_DETAIL:
                return selectedProject ? React.createElement(ProjectDetail, { project: selectedProject }) : null;
            default:
                return null;
        }
    };

    return React.createElement('div', { className: 'min-h-screen bg-zinc-950' },
        React.createElement(Header, { currentPage, setCurrentPage }),
        renderPage(),
        React.createElement(Footer)
    );
}

// ==================== RENDERIZAÇÃO ====================

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('root')
    );
});