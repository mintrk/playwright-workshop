import { firefox, test } from "@playwright/test";

test("test new-tab", async ({ page, context }) => {
  //browser (chrome/egde) -> browser context (shared storage/cookies -> to not shared incognito) -> page (tab)

  await page.goto("https://web-demo.qahive.com/");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // will trigger when new page
    await page.getByRole("link", { name: "ทำแบบสอบถาม คลิก" }).click(),
  ]);

  await newPage.getByRole("radio", { name: "แน่น๊อนน" }).click();

  const pageEmpty = await context.newPage(); // create empty page
});

test("test multi-context", async ({ page, context, browser }) => {
  await page.goto("https://web-demo.qahive.com/");

  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();
  await newPage.goto("https://web-demo.qahive.com/form-demo");

  const firefoxBrowser = await firefox.launch();
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();
  await firefoxPage.goto("https://web-demo.qahive.com/form-demo");
});
