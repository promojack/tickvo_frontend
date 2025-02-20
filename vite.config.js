import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: "192.168.170.28", // Replace with your actual IP
    port: 5173, // Change if needed
    strictPort: true, // Ensures the exact port is used
  },
});
