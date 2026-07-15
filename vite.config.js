import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base "/Portifolio/" para publicar em GitHub Pages como projeto (usuario.github.io/Portifolio/).
// Se um dia este site virar o repo especial usuario.github.io, troque para '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portifolio/',
})
