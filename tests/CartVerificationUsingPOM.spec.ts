import {test, expect} from '@playwright/test';
import {LoginPage} from '../page/LoginPage';
import {HomePage} from '../page/HomePage';
import {CartPage} from '../page/CartPage';

test("Cart Verification Using POM", async ({page}) => {
    // Create an instance of the LoginPage class, passing the page object as an argument to the constructor.
    const loginPage = new LoginPage(page);

    // Open the application by calling the openApplication method of the LoginPage instance.
    await loginPage.openApplication();

    // Perform the login action by calling the login method of the LoginPage instance, passing the username and password as arguments.
    await loginPage.login("standard_user", "secret_sauce");

    // Create an instance of the HomePage class, passing the page object as an argument to the constructor.
    const homePage = new HomePage(page);

    // assertion can be added here to verify that the user has successfully logged in, such as checking for the presence of a specific element on the home page or verifying the URL.
    await expect(homePage.homePageHeading).toHaveText("Swag Labs");

    // Click the "Add to Cart" button for the backpack item by calling the backPackAddToCart method of the HomePage instance.
    await homePage.backPackAddToCart();

    // now assertion can be added to verify that the item has been added to the cart successfully, such as checking for the presence of a cart icon or verifying the cart count.
    await expect(homePage.CartIcon).toHaveText("1");
    await expect(homePage.BackPackRemoveFromCartButton).toBeVisible();

    // Click the cart icon to navigate to the cart page by calling the gotoCart method of the HomePage instance.
    await homePage.gotoCart();

    const cartPage = new CartPage(page);

    // assertion can be added here to verify that the user has successfully navigated to the cart page, such as checking for the presence of a specific element on the cart page or verifying the URL.
    await expect(cartPage.backpackItemLink).toHaveText("Sauce Labs Backpack");

});