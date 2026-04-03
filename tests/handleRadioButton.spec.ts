import { expect, test } from "@playwright/test";

test("Handle Radio Button", async ({ page }) => {
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const maleRadio =  page.locator('#male');
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
});