import {test} from "@playwright/test";

test("Practice of fill , press and press sequence", async ({ page }) => {
    // await page.goto("https://ultimateqa.com/filling-out-forms");
    // await page.locator('#et_pb_contact_name_0').fill("Abhay Soni");
    // await page.locator('#et_pb_contact_message_0').fill("This is a practice of fill and press sequence in Playwright");


    // practice of press sequence
    // await page.goto("https://www.google.com/");
    //await page.getByRole('combobox', { name: 'Search' }).fill("Playwright");
    // await page.getByRole('combobox', { name: 'Search' }).pressSequentially("Playwright",{ delay: 500 });

    // practice of press
    // this method is used to simulate the pressing of a key on the keyboard. It can be used to simulate the pressing of a single key or a combination of keys. For example, if we want to simulate the pressing of the "Enter" key after filling out a search query in Google, we can use the press method to do that. This allows us to test the functionality of the search feature and ensure that it works as expected when the user presses the "Enter" key after entering their search query.
    await page.goto("https://www.google.com/");
    await page.getByRole('combobox', { name: 'Search' }).pressSequentially("Playwright",{ delay: 500 });
    await page.getByRole('combobox', { name: 'Search' }).press("ArrowDown+ArrowDown+ArrowDown+Enter", { delay: 1000 });

});