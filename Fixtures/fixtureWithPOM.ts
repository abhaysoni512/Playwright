import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { HomePage } from '../page/HomePage';
import { CartPage } from '../page/CartPage';

type MyPOMFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
};

export const test = baseTest.extend<MyPOMFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});