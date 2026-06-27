# 🌐 Portfólio — Bruno Difante

Portfólio pessoal desenvolvido com **Next.js 15**, **TypeScript** e **Tailwind CSS 4**, com tema dark em tons de azul escuro, animações suaves com Framer Motion e design moderno responsivo.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18+
- **npm** ou **yarn**

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/bruni/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o site.

### Build de produção

```bash
npm run build
npm start
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Tema e design tokens (cores, fontes, utilitários)
│   ├── layout.tsx           # Layout raiz, metadados SEO e fonte Inter
│   └── page.tsx             # Página principal — composição de todas as seções
│
└── components/
    ├── animations/
    │   ├── FadeIn.tsx        # Animação de fade-in ao entrar na viewport
    │   ├── Parallax.tsx      # Efeito parallax baseado em scroll
    │   └── StaggerChildren.tsx # Animação escalonada para listas
    │
    ├── sections/
    │   ├── Navbar.tsx        # Barra de navegação fixa com menu mobile
    │   ├── Hero.tsx          # Seção principal com nome, descrição e CTAs
    │   ├── About.tsx         # Sobre mim — habilidades e competências
    │   ├── Experience.tsx    # Experiência profissional em formato timeline
    │   ├── Projects.tsx      # Grid de projetos com cards interativos
    │   └── Contact.tsx       # Seção de contato com links e formulário
    │
    └── ui/
        └── ProjectCard.tsx   # Card reutilizável para exibição de projetos
```

---

## 🎨 Design System

O tema é centralizado em variáveis CSS definidas em `globals.css`, facilitando customização:

| Token | Cor | Uso |
|---|---|---|
| `--color-surface` | `#0b1121` | Fundo principal (navy escuro) |
| `--color-surface-alt` | `#111b33` | Fundo alternativo para seções |
| `--color-accent` | `#3b82f6` | Cor de destaque (azul) |
| `--color-text-primary` | `#e2e8f0` | Texto principal (claro) |
| `--color-text-secondary` | `#94a3b8` | Texto secundário |
| `--color-border` | `#1e2d4d` | Bordas e divisores |

Para alterar o tema, basta editar as variáveis no bloco `@theme` em [`globals.css`](src/app/globals.css).

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | Framework React com App Router |
| [React](https://react.dev/) | 19 | Biblioteca UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utility-first |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animações e transições |
| [Lucide React](https://lucide.dev/) | 0.468 | Ícones SVG |

---

## 📝 Seções do Site

- **Navbar** — Navegação fixa com blur, links âncora e menu mobile responsivo
- **Hero** — Apresentação com nome, descrição, botões CTA e links sociais
- **Sobre** — Competências técnicas organizadas por categoria
- **Experiência** — Timeline profissional com cards animados
- **Projetos** — Grid de projetos com links para repositório e demo
- **Contato** — Informações de contato e call-to-action

---

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.
