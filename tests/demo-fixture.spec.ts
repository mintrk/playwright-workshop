import { PaymentPage } from "../pages/payment-page";
import { test } from "../fixtures/e2e-fixure";

test.beforeEach(async ({ page, loginPage }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  await loginPage.login("demo01@demo.com", "Welcome1");
});

test("Product POM", async ({ page, productListPage, checkoutPage }) => {
  await productListPage.addProduct("Travel Bag");
  await productListPage.addProduct("Apple Watch");
  await productListPage.checkout();

  await checkoutPage.submitPayment(
    "QA Test",
    "4242424242424242",
    "12/2029",
    "123",
  );

  const paymentPage = new PaymentPage(page);
  await paymentPage.verifyPaymentSuccess();
});
