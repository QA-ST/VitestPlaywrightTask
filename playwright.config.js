import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: ['*.spec.js'],  // <-- Optional: match only .spec.js files
  

  webServer: {
    command: 'npm run dev',
    port: 5173,          // or any port Vite uses
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },

  use: {
    baseURL: 'http://localhost:5173',
  },

  ignoreSnapshots: true,
  ignoreTestFiles: [
  'src/**',
  'node_modules/**',
],
});