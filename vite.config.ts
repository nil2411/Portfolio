import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      // Keep the custom SSR error wrapper as the server entry.
      server: { entry: "server" },
    }),
    tailwindcss(),
    nitro(),
    viteReact(),
  ],
});
