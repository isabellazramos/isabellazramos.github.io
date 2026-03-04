// ==================== APP PRINCIPAL ====================

function App() {
  const [currentPage, setCurrentPage] = React.useState(PAGES.HOME);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case PAGES.HOME:
        return React.createElement(HomePage);
      case PAGES.PROJECTS:
        return React.createElement(ProjectsPage, { 
          setCurrentPage: setCurrentPage,
          setSelectedProject: setSelectedProject
        });
      case PAGES.PROJECT_DETAIL:
        if (!selectedProject || !selectedProject.component) {
          return null;
        }
        // Renderiza o componente específico do projeto
        const ProjectComponent = window[selectedProject.component];
        return ProjectComponent ? React.createElement(ProjectComponent) : null;
      default:
        return null;
    }
  };

  return React.createElement('div', { className: 'min-h-screen bg-zinc-950' },
    React.createElement(Header, { currentPage: currentPage, setCurrentPage: setCurrentPage }),
    renderPage(),
    React.createElement(Footer)
  );
}

// ==================== RENDERIZAÇÃO ====================

console.log('App function defined');
console.log('PAGES:', PAGES);
console.log('Root element:', document.getElementById('root'));

try {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error rendering React app:', error);
}
