import {expect, test} from '@playwright/test';

// context is used to handle multiple tabs in Playwright. We can use context to create a new tab and then we can switch between the tabs using the context. We can also use context to close the tabs after we are done with them. See the Playwright documentation for more information on how to handle multiple tabs in Playwright.
test("Handle Multiple Tabs", async ({ context }) => {
    const page = await context.newPage();
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/");
    
    const pagepromise = context.waitForEvent('page');
    // put context.waitForEvent('page') before the action that opens the new tab, so that it can wait for the new tab to open and then we can switch to the new tab using the context. If we put context.waitForEvent('page') after the action that opens the new tab, then it will not wait for the new tab to open and it will throw an error because it will not find the new tab.
    await page.getByRole('link', { name: 'Window with name in new tab' }).click();
    
    const page1 = await pagepromise;

    await page1.getByRole('button', { name: 'Click to reveal current' }).click();

    


});