import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

test("test-login POM", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/e-commerce/register");
  const loginPage = new LoginPage(page);
  await loginPage.login("demo01@demo.com", "Welcome1");
});
