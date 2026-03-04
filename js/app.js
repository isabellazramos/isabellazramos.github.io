// ==================== APP PRINCIPAL ====================

function App() {
  const [currentPage, setCurrentPage] = React.useState(PAGES.HOME);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case PAGES.HOME:
        return <HomePage />;
      case PAGES.PROJECTS:
        return (
          <ProjectsPage
            setCurrentPage={setCurrentPage}
            setSelectedProject={setSelectedProject}
          />
        );
      case PAGES.PROJECT_DETAIL:
        return selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

// ==================== RENDERIZAÇÃO ====================

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
