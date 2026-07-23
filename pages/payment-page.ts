import { type Locator, Page, expect } from "@playwright/test";

export class PaymentPage {
  readonly page: Page;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = this.page.getByRole("heading", {
      name: "Payment Successful",
    });
  }

  async verifyPaymentSuccess() {
    await expect(this.successMessage).toContainText("Payment Successful");
    await this.page.waitForSelector("text=Payment Successful", {
      state: "visible",
    });
  }
}
