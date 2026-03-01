// ==================== HOME PAGE ====================

function HomePage() {
    return React.createElement(React.Fragment, null,
        React.createElement(Hero),
        React.createElement(About),
        React.createElement(Experience),
        React.createElement(Certifications),
        React.createElement(Skills),
        React.createElement(Contact)
    );
}