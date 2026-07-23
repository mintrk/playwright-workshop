import { type Locator, Page } from "@playwright/test";

export class ProductListPage {
  readonly page: Page;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = this.page.locator('a[href="/e-commerce/checkout"]');
  }

  async checkout() {
    await this.cartLink.click();
  }

  async addProduct(productName: string) {
    const productCard = this.page
      .locator(`div.card`)
      .filter({ hasText: productName });
    await productCard.getByRole("button", { name: "Add to cart" }).click();
  }
}
