import { expect } from '@playwright/test';
import { BasePage } from '../../../core/base/BasePage.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.inventoryContainer = page.locator('.inventory_list');
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async assertSuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.inventoryContainer).toBeVisible();
  }

  async assertLoginFailedWithMessage(expectedMessage) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);
    await expect(this.page).not.toHaveURL(/inventory/);
  }

//purposely to  display error
async assertSuccessfulLogin2() {
    await expect(this.page).toHaveURL(/inventory2/);
    await expect(this.inventoryContainer).toBeVisible();
  }
}
