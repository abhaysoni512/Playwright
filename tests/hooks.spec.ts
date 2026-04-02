import { test } from "@playwright/test";

// test.beforeEach("practice of beforeEach hook", async ({ page }) => {
//     console.log("This is before each hook");
// });

test("Practice Test 1", async ({ page }) => {
    console.log("Starting Practice Test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 1");
})

test("Practice Test 2", async ({ page }) => {
    console.log("Starting Practice Test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 2");
})

test("Practice Test 3", async ({ page }) => {
    console.log("Starting Practice Test 3");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 3");
})


// test.beforeAll( "Practice before all ",async () => {
//     console.log("This is before all hook");
// })

test.afterAll( "Practice after all ",async () => {
    console.log("This is after all hook");
});

test.describe("Practice of Describe", async () => {
    // test.beforeEach("practice of beforeEach hook", async ({ page }) => {
    //     console.log("This is before each hook");
    // });
    test("Practice Test 4", async ({ page, browserName }) => {
        console.log("Starting Practice Test 4");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 4");
    })

    test("Practice Test 5", async ({ page, browserName }) => {
        console.log("Starting Practice Test5");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 5");
    })

    test("Practice Test 6", async ({ page }) => {
        console.log("Starting Practice Test 6");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 6");
    })

})

test("Practice Test 7", async ({ page }) => {
    console.log("Starting Practice Test 7");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 7");
})


// test.afterEach( async () => {
//     console.log("This is after each hook");
// })