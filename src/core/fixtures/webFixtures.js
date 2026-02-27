import { test as base } from '@playwright/test';
import { LoginPage } from '../../modules/web/login/LoginPage.js';
import { InventoryPage } from '../../modules/web/inventory/InventoryPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  inventoryPage: async ({ page }, use) => { await use(new InventoryPage(page)); }
});

export { expect } from '@playwright/test';
