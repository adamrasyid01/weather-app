import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    proxy: {
      // Semua request ke /api-proxy akan diteruskan ke https://wilayah.id
      "/api-proxy": {
        target: "https://wilayah.id", // URL tujuan
        changeOrigin: true,           // ubah origin header agar tidak dianggap cross-origin
        rewrite: (path) => path.replace(/^\/api-proxy/, ""), // hapus prefix /api-proxy
        secure: true,                 // true jika target pakai HTTPS valid
      },
    },
  },
});
