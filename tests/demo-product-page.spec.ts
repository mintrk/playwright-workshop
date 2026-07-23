import { test } from "@playwright/test";
import { ProductListPage } from "../pages/product-list-page";
import { LoginPage } from "../pages/login-page";
import { CheckoutPage } from "../pages/checkout-page";
import { PaymentPage } from "../pages/payment-page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  const loginPage = new LoginPage(page);
  await loginPage.login("demo01@demo.com", "Welcome1");
});

test("Product POM", async ({ page }) => {
  const productListPage = new ProductListPage(page);
  await productListPage.addProduct("Travel Bag");
  await productListPage.addProduct("Apple Watch");
  await productListPage.checkout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.submitPayment(
    "QA Test",
    "4242424242424242",
    "12/2029",
    "123",
  );

  const paymentPage = new PaymentPage(page);
  await paymentPage.verifyPaymentSuccess();
});
