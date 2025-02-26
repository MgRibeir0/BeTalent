# 🚀 Introdução

## O que é Bun?

**Bun** é um runtime JavaScript/TypeScript moderno e _all-in-one_ que inclui:
- ⚡ **Gerenciador de pacotes ultra-rápido** (substituto do Yarn/npm/pnpm)
- 📦 **Bundler integrado** (substituto do Webpack/Rollup)
- ✔️ **Test runner nativo** (substituto do Jest/Vitest)
- 🌐 **Runtime otimizado** para desenvolvimento web

Escrito em [Zig](https://ziglang.org/) e totalmente open-source, oferece:

### 🚀 Performance Revolucionária
- Startup 30x mais rápido que Node.js (JavaScriptCore vs V8)
- Instalação de dependências até 20x mais rápida
- Execução direta de TypeScript sem transpilação

### 🛠️ Tudo em Uma Ferramenta
```bash
# Comparação de comandos
bun install    # Substitui yarn/npm install
bun run dev    # Substitui vite/ts-node
bun test       # Substitui jest/vitest
```

### 🔌 Compatibilidade Total

- **Suporte nativo** a Vite, React, TypeScript e ESModules
- **Carregamento automático** de .env
- **Hot Reload** integrado
- **Web APIs** modernas (fetch, WebSocket, etc)

## 📊 Comparações de Performance

### Tempo de Instalação de Pacotes

Teste realizado em ambiente limpo (lockfiles e `node_modules` removidos):

| Gerenciador | Tempo Total | Pacotes Instalados | Velocidade Relativa |
|-------------|-------------|--------------------|---------------------|
| **Bun**     | 3.45s       | 230                | 1x (base)           |
| Yarn        | 22.02s      | 230                | 6.4x mais lento     |
| npm         | 19s         | 229                | 5.5x mais lento     |


```bash
# Resultado Detalhado - Bun
bun install v1.1.45
230 packages installed [3.45s]

# Resultado Detalhado - Yarn
Done in 22.01s

# Resultado Detalhado - npm
added 229 packages in 19s
```

### ✅ Vantagem do Bun:
- **84% mais rápido que Yarn** (economia de 18.57s por instalação)
- **82% mais rápido que npm** (economia de 15.55s por instalação)

## 📌 Por que Bun neste Projeto?

| Funcionalidade          | Benefício Direto                          |
|-------------------------|-------------------------------------------|
| TypeScript nativo       | Sem `ts-node` ou build steps              |
| Cache unificado         | Economia de ~80% em espaço em disco       |
| Hot Reload automático   | Tempo real entre alterações e preview     |
| Compatibilidade com Vite| Migração zero-config                      |
| Monorepo-friendly       | Escalabilidade simplificada               |
