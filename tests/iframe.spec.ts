import { test } from "@playwright/test";

test("test-iframe", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  const frame = await page.locator('iframe[title*="W3Schools"]').contentFrame();
  await frame.getByTestId("markDone").click();
});
