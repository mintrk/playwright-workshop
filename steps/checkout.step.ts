import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/login-page";
import { expect } from "@playwright/test";
import { ProductListPage } from "../pages/product-list-page";

setDefaultTimeout(30 * 1000);

Given(
  "the user adds product {string} to cart",
  async function (this: CustomWorld, productName: string) {
    const productListPage = new ProductListPage(this.page);
    await productListPage.addProduct(productName);
  },
);

When("the user proceeds to checkout", async function (this: CustomWorld) {
  const productListPage = new ProductListPage(this.page);
  await productListPage.checkout();
});

// Then(
//   "the user should be redirected to the dashboard",
//   async function (this: CustomWorld) {
//     const productListPage = new ProductListPage(this.page);
//     await expect(productListPage.cartLink).toBeVisible();
//     // expect(this.page.getByRole("link", { name: "eCommerce" })).toBeVisible();
//   },
// );

// Then(
//   "the user should see an error message {string}",
//   async function (this: CustomWorld, errorMessage: string) {
//     await expect(this.page.getByText(errorMessage)).toBeVisible();
//   },
// );
