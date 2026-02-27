import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/modules',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ]
});
