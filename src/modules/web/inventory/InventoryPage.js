import { BasePage } from '../../../core/base/BasePage.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstItemAddBtn = page.locator('.inventory_item').first().locator('button');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addFirstItemToCart() {
    await this.click(this.firstItemAddBtn);
  }
}
