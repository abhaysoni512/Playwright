import { expect } from '@playwright/test';
import { test } from '../Fixtures/fixtureWithPOM';

test("Cart Verification Using POM", async ({ page, loginPage, homePage, cartPage }) => {

    // login page
    await loginPage.openApplication();
    await loginPage.login("standard_user", "secret_sauce");
    // home page
    await expect(homePage.homePageHeading).toHaveText("Swag Labs");
    await homePage.backPackAddToCart();
    await expect(homePage.CartIcon).toHaveText("1");
    await expect(homePage.BackPackRemoveFromCartButton).toBeVisible();
    await homePage.gotoCart();
    // cart page
    await expect(cartPage.backpackItemLink).toHaveText("Sauce Labs Backpack");

});