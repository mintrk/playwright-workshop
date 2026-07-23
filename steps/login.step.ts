import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/login-page";
import { expect } from "@playwright/test";
import { ProductListPage } from "../pages/product-list-page";

setDefaultTimeout(30 * 1000);

Given("the user is on the login page", async function (this: CustomWorld) {
  await this.page.goto("https://web-demo.qahive.com/e-commerce/register");
});

When(
  "the user submit credentials {string} and {string}",
  async function (this: CustomWorld, email: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(email, password);
  },
);

Then(
  "the user should be redirected to the dashboard",
  async function (this: CustomWorld) {
    const productListPage = new ProductListPage(this.page);
    await expect(productListPage.cartLink).toBeVisible();
    // expect(this.page.getByRole("link", { name: "eCommerce" })).toBeVisible();
  },
);

Then(
  "the user should see an error message {string}",
  async function (this: CustomWorld, errorMessage: string) {
    await expect(this.page.getByText(errorMessage)).toBeVisible();
  },
);
