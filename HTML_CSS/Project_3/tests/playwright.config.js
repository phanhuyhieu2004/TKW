// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',
  testMatch: '**/*.spec.js',
  timeout: 30000,
  expect: { timeout: 5000 },
  use: {
    baseURL: 'file:///C:/Users/hieuh/TKW/HTML_CSS/Project_3',
    screenshot: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { viewport: { width: 1280, height: 720 } },
    },
    {
      name: 'Tablet',
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'Mobile',
      use: { viewport: { width: 375, height: 812 } },
    },
  ],
  outputDir: './test-results',
});