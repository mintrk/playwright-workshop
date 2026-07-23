import { type Locator, Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly cardHolderNameInput: Locator;
  readonly cardNumberInput: Locator;
  readonly expInput: Locator;
  readonly cvvInput: Locator;
  readonly paymentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardHolderNameInput = this.page.getByRole("textbox", {
      name: "Cardholder's Name",
    });
    this.cardNumberInput = this.page.getByRole("textbox", {
      name: "1234567890123457",
    });
    this.expInput = this.page.getByRole("textbox", { name: "MM/YYYY" });
    this.cvvInput = this.page.getByRole("textbox", { name: "●●●" });
    this.paymentButton = this.page.getByRole("button", { name: "Payment" });
  }

  async submitPayment(
    cardHolderNameInput: string,
    cardNumberInput: string,
    expInput: string,
    cvvInput: string,
  ) {
    await this.cardHolderNameInput.fill(cardHolderNameInput);
    await this.cardNumberInput.fill(cardNumberInput);
    await this.expInput.fill(expInput);
    await this.cvvInput.fill(cvvInput);
    await this.paymentButton.click();
  }
}
