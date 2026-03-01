# 👩‍💻 Isabella Ramos - Portfólio de Engenharia de Dados

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://isabellazramos.github.io)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![Clean Code](https://img.shields.io/badge/Clean%20Code-Yes-success)](https://github.com/isabellazramos/isabellazramos.github.io)

## 🚀 Sobre o Projeto

Portfólio profissional de **Engenharia de Dados** com foco em:
- 📊 **Data Engineering**: Pipelines ETL/ELT, orquestração com Airflow
- ☁️ **Cloud Computing**: Google Cloud Platform, BigQuery
- 🔧 **Ferramentas**: dbt, Apache Spark, Python, SQL
- 🎯 **Melhores Práticas**: Clean Code, arquitetura modular, responsividade

## 💻 Tecnologias Utilizadas

- **Frontend**: React 18 (sem build tools, usando CDN)
- **Estilização**: Tailwind CSS
- **Arquitetura**: Component-Based Architecture
- **Deploy**: GitHub Pages

## 📁 Estrutura do Projeto

```
isabellazramos.github.io/
├── index.html              # Página principal (importa módulos)
├── README.md               # Documentação do projeto
├── .gitignore              # Arquivos ignorados pelo Git
│
├── css/
│   └── styles.css          # Estilos customizados e animações
│
└── js/
    ├── constants.js        # Constantes da aplicação
    ├── app.js              # Lógica principal e renderização
    │
    ├── data/               # 📊 Dados estáticos
    │   ├── projects.js
    │   ├── certifications.js
    │   ├── skills.js
    │   └── experiences.js
    │
    ├── components/         # 🧱 Componentes reutilizáveis
    │   ├── Header.js
    │   └── Footer.js
    │
    ├── sections/           # 📋 Seções da página home
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Skills.js
    │   ├── Experience.js
    │   ├── Certifications.js
    │   └── Contact.js
    │
    └── pages/              # 📱 Páginas da aplicação
        ├── HomePage.js
        ├── ProjectsPage.js
        └── ProjectDetail.js
```

## ✨ Funcionalidades

### 🏠 Página Principal
- Hero section com apresentação
- Sobre mim
- Experiência profissional (timeline interativa)
- Certificações (com filtros por categoria)
- Competências técnicas
- Seção de contato

### 💼 Projetos
- Grid de projetos com preview
- Páginas de detalhes individuais
- Desafios, soluções e resultados
- Links para repositórios GitHub

### 🎨 Design
- Dark mode nativo
- Animações suaves
- Totalmente responsivo
- Gradientes e efeitos visuais

## 🛠️ Arquitetura e Clean Code

### Princípios Aplicados

1. **Single Responsibility Principle (SRP)**
   - Cada arquivo tem uma única responsabilidade
   - Componentes focados em uma funcionalidade

2. **Separation of Concerns**
   - Dados separados da lógica
   - Estilos em arquivo próprio
   - Componentes independentes

3. **DRY (Don't Repeat Yourself)**
   - Componentes reutilizáveis
   - Constantes centralizadas
   - Cards genéricos

4. **Component-Based Architecture**
   - Componentes modulares e componíveis
   - Props bem definidas
   - Estado gerenciado adequadamente

### Estrutura de Pastas

- **`data/`**: Conteúdo estático (fácil de atualizar)
- **`components/`**: Componentes UI reutilizáveis
- **`sections/`**: Seções da home (composição)
- **`pages/`**: Páginas completas da aplicação

## 🚀 Como Executar Localmente

### Pré-requisitos
- Nenhum! 🎉 (Usa CDNs para React e Tailwind)

### Passos

1. **Clone o repositório:**
```bash
git clone https://github.com/isabellazramos/isabellazramos.github.io.git
cd isabellazramos.github.io
```

2. **Abra o arquivo:**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Usar um servidor local (recomendado)
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 📝 Como Atualizar Conteúdo

### Adicionar Novo Projeto

Edite `js/data/projects.js`:

```javascript
const PROJECTS_DATA = [
    // ... projetos existentes
    {
        id: 'novo-projeto',
        title: '🌟 Novo Projeto',
        shortDesc: 'Descrição curta',
        tags: ['Tag1', 'Tag2'],
        fullDescription: 'Descrição completa...',
        challenges: ['Desafio 1', 'Desafio 2'],
        solutions: ['Solução 1', 'Solução 2'],
        results: ['Resultado 1', 'Resultado 2'],
        github: 'https://github.com/usuario/repo',
        tech: ['Tecnologia1', 'Tecnologia2']
    }
];
```

### Adicionar Nova Certificação

Edite `js/data/certifications.js`:

```javascript
const CERTIFICATIONS_DATA = [
    // ... certificações existentes
    { 
        title: 'Nome da Certificação', 
        provider: 'Plataforma', 
        date: 'Mês Ano', 
        category: 'Categoria' 
    }
];
```

### Adicionar Nova Experiência

Edite `js/data/experiences.js`:

```javascript
const EXPERIENCES_DATA = [
    {
        title: 'Cargo',
        company: 'Empresa',
        location: 'Local',
        period: 'Período',
        current: true, // ou false
        description: [
            'Atividade 1',
            'Atividade 2'
        ]
    }
];
```

## 📌 Deploy

O site é automaticamente publicado via **GitHub Pages** quando há push no branch `master`.

### Configurar GitHub Pages

1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione:
   - Branch: `master`
   - Folder: `/ (root)`
3. Salve e aguarde o deploy

## 👥 Contato

- **Email**: [isabellamenezesramos@outlook.com](mailto:isabellamenezesramos@outlook.com)
- **LinkedIn**: [Isabella Ramos](https://linkedin.com/in/isabella-ramos-03a5a2207)
- **GitHub**: [@isabellazramos](https://github.com/isabellazramos)

## 📜 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

<div align="center">
  <strong>✨ Feito com ❤️ por Isabella Ramos ✨</strong>
  <br>
  <sub>Engenheira de Dados | Python | SQL | Cloud | Big Data</sub>
</div>