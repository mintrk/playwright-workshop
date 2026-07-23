import { expect, test } from "@playwright/test";

test("test-web-elements", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");

  //Combobox
  await page.getByRole("combobox").selectOption("Thailand");
  await page.getByRole("combobox").selectOption({ value: "PH" });

  //Checkbox
  await page.getByRole("checkbox").check(); //uncheck

  //Radio Button
  await page.getByTestId("male").check();
});

test("test-alert", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  await page.getByTestId("alert-1").click();

  page.on("dialog", async (dialog) => {
    await dialog.dismiss();
  });
  await page.getByTestId("alert-2").click();
});

test("test-download file", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download file" }).click();
  const download = await downloadPromise;
  await download.saveAs("./download/file.txt");
});

test("test-upload file", async ({ page }) => {
  await page.goto("https://qahive-demo.w3spaces.com/index.html");
  await page.getByRole("link", { name: "Continue" }).click();
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.getByRole("button", { name: "Select a file:" }).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles("./upload/test.png");
});

test("test-wait for", async ({ page }) => {
  await page.goto("https://web-demo.qahive.com/form-demo");
  await page.getByRole("textbox", { name: "username*" }).fill("Sawaddee");
  await page.locator('input[name="firstname"]').fill("Jaa");
  await page.getByRole("textbox").nth(2).fill("Che");
  await page.getByRole("combobox").selectOption("HK");
  await page.getByRole("checkbox").check();
  await page.getByTestId("submit").click();

  // wait for
  await page.locator("css=div.alert-success").waitFor({ timeout: 15000 });
  const alertText = await page.locator("css=div.alert-success").textContent();
  console.log("Alert text: ", alertText);

  await expect(page.locator("css=div.alert-success")).toContainText(
    "username: Sawaddee",
  );
});
