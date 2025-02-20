import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  // use: {
  //   baseURL: process.env.BASE_URL || 'https://your-api.com',
  //   extraHTTPHeaders: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.API_TOKEN || ''}`,
  //   },
  // },
});
