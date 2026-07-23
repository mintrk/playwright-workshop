import { test, expect } from "@playwright/test";

// test("id locator", async ({ page }) => {
//   await page.goto("https://web-demo.qahive.com/form-demo");
//   await page.locator("id=username").fill("testuser");
// });

// test("data-testid locator", async ({ page }) => {
//   await page.goto("https://web-demo.qahive.com/e-commerce/register");
//   await page.locator("data-testid=email").fill("demo01@demo.com");
//   await page.locator("data-testid=password").fill("Welcome1");
//   await page.locator("css=.gap-2 button.btn-primary").click();

//   await page
//     .locator("css=div.card-body")
//     .filter({ hasText: "Tra" })
//     .locator("button")
//     .click();
// });

// test("data-testid xpath", async ({ page }) => {
//   await page.goto("https://web-demo.qahive.com/e-commerce/register");
//   await page.locator("xpath=(//input)[1]").fill("demo01@demo.com");
//   await page.locator("xpath=(//input)[2]").fill("Welcome1");
//   await page.locator("xpath=(//button)[2]").click();
// });

// test("data-testid shadcn", async ({ page }) => {
//   await page.goto("https://ui.shadcn.com/");
//   await page.getByRole("textbox", { name: "Name" }).click();
//   await page.getByRole("textbox", { name: "Name" }).fill("hello");
//   await page.getByText("I'm building a chat for our").click();
//   await page.getByRole("button", { name: "Add files" }).click();
//   await page.locator("html").click();
//   await page.locator(".group\\/field-group").first().click();
//   await page.getByRole("textbox", { name: "Name" }).click();
//   await page.getByRole("textbox", { name: "Name" }).fill("helloyoyo");
//   await page.getByRole("textbox", { name: "Message" }).click();
//   await page.getByRole("textbox", { name: "Message" }).fill("eiei");
// });

test.beforeEach(async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/todo-list");
  await page.locator("data-testid=markRemove").nth(0).click();
});

test.afterEach(async ({ page }) => {
  await page.screenshot({ path: "screenshot/result.png" });
});

test("data-testid todolist", async ({ page }) => {
  await page
    .locator("data-testid=inputTodo")
    .fill("Day 1  - playwright overview");
  await page.locator("data-testid=submitTodo").nth(0).click();
  await page.locator("data-testid=inputTodo").fill("Day 2  - playwright POM");
  await page.locator("data-testid=submitTodo").nth(0).click();
  await page.locator("data-testid=markDone").nth(0).click();
});

test("data-testid hover", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await page.getByRole("button", { name: "Node.js" }).hover();
  await page.getByRole("link", { name: "Java", exact: true }).click();
});
