import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true, // 自動でブラウザを開く
  },
  base: "./",
  root: "./src", // index.htmlの位置
  build: {
    outDir: "../public",
    emptyOutDir: true, // 本番ビルド前にビルドディレクトリを空にする
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // import React from "react"の記述を不要にする
  },
  plugins: [
    react(),
    legacy({
      // IE11向けのビルド作成
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
});
