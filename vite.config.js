import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  define: {
      'import.meta.env.VITE_TINYMCE_API_KEY': JSON.stringify(env.VITE_TINYMCE_API_KEY)
    },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
