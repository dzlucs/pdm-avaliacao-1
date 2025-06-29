import { defineConfig } from 'cypress'

export default defineConfig({
  compilerOptions: {
    target: 'esnext',
    module: 'node16',
    moduleResolution: 'node16',
    esModuleInterop: true,
    strict: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    types: ['cypress'],
  },
  include: ['cypress/**/*.ts', 'cypress.config.ts'],
})
