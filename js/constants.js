// ==================== CONSTANTES ====================

const PAGES = {
    HOME: 'home',
    PROJECTS: 'projects',
    PROJECT_DETAIL: 'project-detail',
    CERTIFICATIONS: 'certifications'
};

const CONTACT_LINKS = {
    EMAIL: 'isabellamenezesramos@outlook.com',
    LINKEDIN: 'https://linkedin.com/in/isabella-menezes',
    GITHUB: 'https://github.com/isabellazramos',
    RESUME: 'assets/resume.pdf'
};

const NAVIGATION_ITEMS = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Certificados', action: PAGES.CERTIFICATIONS },
    { label: 'Projetos', action: PAGES.PROJECTS },
    { label: 'Currículo', href: CONTACT_LINKS.RESUME, external: true },
    { label: 'Contato', href: '#contato' }
];
