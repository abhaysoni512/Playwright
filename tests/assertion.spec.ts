import {test, expect} from "@playwright/test";

test("Practice of assertion", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    