import { defineCliConfig } from '@sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gv69ml1p',
    dataset: 'production',
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
  vite: (config) => config,
})
