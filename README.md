# Isabella Ramos - Portfólio Pessoal

👩‍💻 Portfólio profissional de Engenheira de Dados

## 🔗 Link do Site

**[isabellazramos.github.io](https://isabellazramos.github.io)**

## 📝 Sobre

Portfólio single-page desenvolvido com React (via CDN), showcasing:

- ✅ Experiência profissional em engenharia de dados
- ✅ Projetos técnicos detalhados (dbt, Airflow, BigQuery, Spark)
- ✅ Certificações e competências técnicas
- ✅ Design moderno com dark mode e animações
- ✅ Totalmente responsivo

## 🛠️ Tecnologias

- **React 18** (via CDN)
- **Tailwind CSS** (via CDN)
- **Babel Standalone** (para JSX no navegador)
- **HTML5 + CSS3**
- **GitHub Pages** (hospedagem)

## 📚 Estrutura do Projeto

```
.
├── index.html          # Arquivo principal (standalone, sem build)
├── README.md           # Este arquivo
└── .gitignore          # Ignora arquivos desnecessários
```

## ✨ Funcionalidades

### Seções Principais

1. **Hero** - Apresentação profissional
2. **Sobre** - Biografia e experiência
3. **Experiência Profissional** - Timeline de carreira
4. **Certificações** - Cursos e certificações com filtros
5. **Habilidades Técnicas** - Stack tecnológico
6. **Projetos** - Portfólio detalhado de projetos
7. **Contato** - Links para redes sociais

### Características Técnicas

- 🎨 Design dark mode fixo com gradientes verde/teal
- 📱 Responsivo (mobile-first)
- ⚡ Performance otimizada
- ♻️ Código componentizado e reutilizável
- 🧠 Gestão de estado com React hooks
- 🎯 Navegação SPA (Single Page Application)
- ✨ Animações e transições suaves

## 🚀 Como Executar Localmente

O projeto é **standalone** e não requer build:

1. Clone o repositório:
```bash
git clone https://github.com/isabellazramos/isabellazramos.github.io.git
cd isabellazramos.github.io
```

2. Abra o arquivo diretamente no navegador:
```bash
# Opção 1: Abrir diretamente
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Opção 2: Usar um servidor local simples
python -m http.server 8000
# ou
npx serve
```

3. Acesse: `http://localhost:8000`

## 📝 Estrutura do Código

### Organização do `index.html`

```javascript
// 1. CONFIGURAÇÕES
- Tailwind config

// 2. CONSTANTES
- PAGES: Rotas da aplicação
- CONTACT_LINKS: Links de contato
- NAVIGATION_ITEMS: Itens do menu

// 3. DADOS
- PROJECTS_DATA: Projetos completos
- CERTIFICATIONS_DATA: Certificações
- SKILLS_DATA: Habilidades técnicas
- EXPERIENCES_DATA: Experiências profissionais

// 4. COMPONENTES UI
- Header, NavigationLink, MobileMenu
- SkillCard, ExperienceCard, CertificationCard
- ProjectCard, ProjectSection

// 5. SEÇÕES
- Hero, About, Experience, Certifications
- Skills, Contact, Footer

// 6. PÁGINAS
- ProjectsPage, ProjectDetail

// 7. APP PRINCIPAL
- App component (router logic)
```

## 🔧 Manutenção

### Adicionar Novo Projeto

Edite a constante `PROJECTS_DATA` em `index.html`:

```javascript
const PROJECTS_DATA = [
    // ... projetos existentes
    {
        id: 'novo-projeto',
        title: '🎯 Título do Projeto',
        shortDesc: 'Descrição curta...',
        tags: ['Tech1', 'Tech2'],
        fullDescription: 'Descrição completa...',
        challenges: ['Desafio 1', 'Desafio 2'],
        solutions: ['Solução 1', 'Solução 2'],
        results: ['Resultado 1', 'Resultado 2'],
        github: 'https://github.com/...',
        tech: ['Tech1', 'Tech2', 'Tech3']
    }
];
```

### Adicionar Certificação

Edite `CERTIFICATIONS_DATA`:

```javascript
{ 
    title: 'Nome do Curso',
    provider: 'Plataforma', 
    date: 'Mês Ano',
    category: 'Big Data' // ou 'Data Engineering', 'AI/ML', etc.
}
```

### Atualizar Informações de Contato

Edite `CONTACT_LINKS`:

```javascript
const CONTACT_LINKS = {
    EMAIL: 'seu-email@exemplo.com',
    LINKEDIN: 'https://linkedin.com/in/seu-perfil',
    GITHUB: 'https://github.com/seu-usuario'
};
```

## 👨‍💻 Boas Práticas Implementadas

- ✅ **Componentização**: Código modular e reutilizável
- ✅ **Constantes**: Dados centralizados e fáceis de manter
- ✅ **Nomenclatura**: Variáveis e funções com nomes descritivos
- ✅ **DRY**: Sem repetição de código
- ✅ **Separação**: Lógica separada da apresentação
- ✅ **Acessibilidade**: Atributos ARIA e semântica HTML
- ✅ **Performance**: Otimizações e lazy loading
- ✅ **Responsividade**: Mobile-first design

## 📌 Stack Tecnológico do Portfólio

| Tecnologia | Versão | Uso |
|------------|---------|-----|
| React | 18 | Framework UI (via CDN) |
| Tailwind CSS | Latest | Estilização utilitária |
| Babel Standalone | Latest | Transformação JSX |
| GitHub Pages | - | Hospedagem estática |

## 📄 Licença

© 2026 Isabella Ramos. Todos os direitos reservados.

## 📧 Contato

- **Email**: isabellamenezesramos@outlook.com
- **LinkedIn**: [isabella-ramos-03a5a2207](https://linkedin.com/in/isabella-ramos-03a5a2207)
- **GitHub**: [@isabellazramos](https://github.com/isabellazramos)

---

<div align="center">
  <p>Desenvolvido com ❤️ por Isabella Ramos</p>
  <p>
    <a href="https://isabellazramos.github.io">🌐 Visitar Site</a>
  </p>
</div>