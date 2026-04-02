import {chromium, test} from '@playwright/test';

//  Write test to visit google.com
// test arg1 is the name of the test and arg2 is the function that contains the test code
// arg2 is an async function that takes a page object as an argument. The page object is used to interact with the web page being tested. why curly braces around page? because it is an object that contains multiple properties and methods that can be used to interact with the web page. By using curly braces, we are destructuring the page object and only extracting the properties and methods that we need for our test. This allows us to write cleaner and more concise code when working with the page object in our tests. without curly braces, we would have to access the properties and methods of the page object using dot notation, which can make our code more verbose and harder to read. By using destructuring, we can directly access the properties and methods we need without having to reference the page object every time.
test('visit google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'Google apps' }).click();
    console.log("Google test is running...");
});

// this page object is used to interact with the web page being tested. It provides various methods and properties that allow us to perform actions such as navigating to a URL, clicking on elements, filling out forms, and more. In this test, we are using the page object to navigate to Google's homepage and click on the "Google apps" button. The page object is an essential part of writing tests with Playwright, as it allows us to simulate user interactions and verify the behavior of our web application.

// writing own page
test('visit google and click on search', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'Google Search' }).click();
    console.log("Google search button is clicked...");
    await browser.close();
});

//  Verify title contains 'Google
test('verify title contains Google', async ({ page }) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    console.log("Title of the page is: " + title);
    if (title.includes('Google')) {
        console.log("Title contains 'Google'");
    } else {
        console.log("Title does not contain 'Google'");
    }
});