import {test as baseTest} from '@playwright/test';

type MyhookFixtures = {
    loginLogoutFixture: any;
};

export const test = baseTest.extend<MyhookFixtures>({
    loginLogoutFixture: async ({ page }, use) => {
        const loginlogoutfixture = undefined;
        // login
        await page.goto("https://www.saucedemo.com/");
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();

        await use(loginlogoutfixture);

        //logout
         await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();

    }
});

export { expect } from "@playwright/test";