# 🧹 Guia de Limpeza do Repositório

Este repositório contém arquivos de uma estrutura React/Vite que **não estão sendo utilizados**.

O site atual funciona com um único arquivo `index.html` standalone.

## 📋 Arquivos Desnecessários

### Para Remover:

```bash
# Estrutura React/TypeScript não utilizada
src/

# Arquivos de configuração do projeto Vite/React
package.json
package-lock.json
bun.lockb
vite.config.ts
vitest.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json

# Configurações de ferramentas
tailwind.config.ts
postcss.config.js
eslint.config.js
components.json

# Pasta pública do Vite
public/

# Workflows (verificar antes de remover)
.github/
```

## ✅ Arquivos Necessários (Manter):

```bash
index.html          # Site principal
README.md          # Documentação
.gitignore         # Configuração Git
```

## 🛠️ Como Executar a Limpeza

### Opção 1: Via GitHub Web Interface

1. Acesse cada arquivo/pasta no GitHub
2. Clique em "Delete this file" ou "Delete directory"
3. Commit as alterações

### Opção 2: Via Git Local

```bash
# Clone o repositório
git clone https://github.com/isabellazramos/isabellazramos.github.io.git
cd isabellazramos.github.io

# Remova os arquivos
git rm -r src/
git rm -r public/
git rm -r .github/
git rm package.json
git rm package-lock.json
git rm bun.lockb
git rm vite.config.ts
git rm vitest.config.ts
git rm tsconfig.json
git rm tsconfig.app.json
git rm tsconfig.node.json
git rm tailwind.config.ts
git rm postcss.config.js
git rm eslint.config.js
git rm components.json

# Commit e push
git commit -m "chore: Remove arquivos desnecessários do projeto Vite/React"
git push origin master

# Remova este arquivo de instruções
git rm CLEANUP.md
git commit -m "chore: Remove guia de limpeza após execução"
git push origin master
```

### Opção 3: Script Automatizado

```bash
#!/bin/bash
# cleanup.sh

echo "🧹 Iniciando limpeza do repositório..."

# Remover diretórios
rm -rf src/
rm -rf public/
rm -rf .github/
rm -rf node_modules/

# Remover arquivos de configuração
rm -f package.json
rm -f package-lock.json
rm -f bun.lockb
rm -f vite.config.ts
rm -f vitest.config.ts
rm -f tsconfig*.json
rm -f tailwind.config.ts
rm -f postcss.config.js
rm -f eslint.config.js
rm -f components.json

echo "✅ Limpeza local concluída!"
echo "📦 Commite e faça push das alterações:"
echo "  git add -A"
echo "  git commit -m 'chore: Remove arquivos desnecessários'"
echo "  git push origin master"
```

## 📊 Estatísticas

**Antes da limpeza:**
- ~17 arquivos de configuração
- 2 diretórios grandes (src/, public/)
- Peso estimado: ~500KB+ (sem node_modules)

**Depois da limpeza:**
- 3 arquivos essenciais
- Peso estimado: ~50KB
- **Redução de ~90%**

## ⚠️ Aviso

Após a limpeza:
- O site **continuará funcionando normalmente** (usa apenas `index.html`)
- Será impossível buildar com Vite (mas não é necessário)
- O repositório ficará mais limpo e organizado

## 🔄 Reverter (se necessário)

Se precisar reverter:

```bash
git log  # Encontre o commit antes da limpeza
git revert <commit-hash>
git push origin master
```

---

**Nota:** Este arquivo pode ser deletado após executar a limpeza.