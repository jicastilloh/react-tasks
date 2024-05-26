import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-tasks-application/',  // Asegúrate de que esto coincide con el subdirectorio de tu aplicación
  plugins: [react()]
});