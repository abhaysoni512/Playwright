import {test} from "@playwright/test"

test("Double Click Action Button", async ({page}) => {
    // await page.goto("https://the-internet.herokuapp.com/    add_remove_elements/");
    // await page.getByRole('button', { name: 'Add Element' }).dblclick({delay: 1000});

    // right click action button
    // await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    // await page.getByText('right click me', { exact: true }).click({ button: 'right'});

    // dispacth event action button :- it is used to trigger an event on an element. It is used to trigger an event on an element that is not visible or not interactable. It is also used to trigger an event on an element that is not present in the DOM.
    await page.goto("https://www.boot.dev/");
    await page.getByRole('button', { name: 'Sign In & Skip Demo →' }).click();
    await page.getByRole('link', { name: 'DEMO THE LEARNING PATH' }).first().dispatchEvent('click');
    
});