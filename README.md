# Portfólio

Site pessoal de portfólio construído com React + Vite, Tailwind CSS e Framer Motion.
Traz páginas de Início, Sobre, Projetos (com página de detalhe por projeto) e Contato,
com transições suaves entre rotas e animações de entrada ao rolar a página.

## Stack

- [Vite](https://vitejs.dev/) + React
- [React Router](https://reactrouter.com/) — navegação entre páginas
- [Framer Motion](https://www.framer.com/motion/) — transições e animações
- [Tailwind CSS](https://tailwindcss.com/) — estilização

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173/Portifolio/`.

## Build de produção

```bash
npm run build
npm run preview
```

## Conteúdo

Todo o conteúdo (textos, projetos, mídias) está com **placeholders** para você
substituir:

- `src/data/projects.js` — dados dos projetos (título, descrição, tags, links, stack)
- `src/pages/*.jsx` — textos de cada página (Home, Sobre, Contato)
- Componente `MediaPlaceholder` — troque por `<img>`/`<video>` reais assim que tiver
  as imagens/vídeos dos projetos (recomenda-se colocar os arquivos em `src/assets/`)

## Deploy no GitHub Pages

Este repo já inclui um workflow (`.github/workflows/deploy.yml`) que builda e publica
o site no GitHub Pages a cada push na branch `main`. Para ativar:

1. No GitHub, vá em **Settings → Pages** e selecione a origem **GitHub Actions**.
2. Dê push na branch `main` — o workflow builda o projeto e publica automaticamente.
3. O site ficará disponível em `https://<seu-usuario>.github.io/Portifolio/`.

O `base` em `vite.config.js` já está configurado como `/Portifolio/` para bater com o
nome deste repositório. Se o nome do repo mudar, atualize esse valor.
