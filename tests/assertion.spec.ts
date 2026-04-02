import {test, expect} from "@playwright/test";

test("Practice of assertion", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(  page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    //await expect( await page.locator('[data-test="login-button"]')).toBeDisabled();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    //await expect( await page.locator('[data-test="login-button"]')).toBeHidden();
    await expect(page.locator('[data-test="login-button"]')).toHaveText("Login");

    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute("name", "login-button");

    await expect(page.locator('[data-test="login-button"]')).toHaveId("login-button");

    await expect(page).toHaveURL("https://www.saucedemo.com/");

    // Negative assertion
    //await expect(page).not.toHaveURL("https://www.saucedemo.com/inventory.html");
    // we can also add custom error message in case of failure of assertion
    // await expect(page,"This is custom error message").not.toHaveTitle("Swag Labs");

    // Soft assertion: just put expect.soft instead of expect and it will not fail the test immediately if the assertion fails, it will continue to execute the rest of the test and at the end it will report all the failed assertions together.

    await expect.soft( await page.locator('[data-test="login-button"]')).toBeDisabled();
    await expect.soft(page,"This is custom error message").not.toHaveTitle("Swag Labs");

    console.log("This is after soft assertion");


});


    
    