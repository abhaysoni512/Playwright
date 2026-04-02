import {test} from '@playwright/test';


test('Practice locator Method', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    // Selector : Xpath is a technique to navigate through elements and attributes in an XML document. In this case, we are using an XPath expression to locate the input element with the name attribute equal to 'user-name'. The expression //*[@name='user-name'] will search for any element in the document that has a name attribute with the value 'user-name' and return that element. This allows us to interact with the username input field on the login page of the saucedemo website.
    await page.locator("//*[@name='user-name']").fill("standard_user");
    // Selector : CSS selector is a pattern used to select elements in an HTML document based on their attributes, classes, IDs, and other characteristics. In this case, we are using a CSS selector to locate the input element with the ID 'password'. The expression input#password will search for an input element that has an ID attribute with the value 'password' and return that element. This allows us to interact with the password input field on the login page of the saucedemo website.
    await page.locator('input#password').fill("secret_sauce");
    // Selector : The CSS selector .submit-button is used to locate an element with the class name 'submit-button'. In this case, we are using it to find the login button on the saucedemo website. By using this selector, we can interact with the login button and perform actions such as clicking it to submit the login form.
    // await page.locator(`.submit-button`).click();
    // Selector : The CSS selector input[value=Login] is used to locate an input element that has a value attribute with the value 'Login'. In this case, we are using it to find the login button on the saucedemo website. By using this selector, we can interact with the login button and perform actions such as clicking it to submit the login form.
    await page.locator("input[value=Login]").click();
    // if we put double quotes then inside we need to put single quotes
    // case sensitive locator if we use ''
    //await page.locator("text='Sauce LABS Backpack'").click();
    // not case sensitive locator if we remove ''
    await page.locator("text=Sauce Labs Backpack").click();

    // css selector for add to cart button <it's space sensitive> so id=add-to-cart-sauce-labs-backpack
    //await page.locator("#add-to-cart-sauce-labs-backpack").click(); ? need to check
    
    console.log("Login successful...");
});

test("Practice of locator method options", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    // has option to locate element with the help of another element, for example, we can locate the input element with the name attribute equal to 'user-name' and then click on the parent element which is .form_group
    await page.locator(".form_group",{has : page.locator("input#user-name")}).click();
    await page.locator(".form_group",{has : page.locator("input#user-name")}).pressSequentially("standard_user");

    // has not option to locate element with the help of another element, for example, we can locate the input element with the name attribute equal to 'user-name' and then click on the parent element which is .form_group
    await page.locator(".form_group",{hasNot : page.locator("input#user-name")}).click();
    await page.locator(".form_group",{hasNot : page.locator("input#user-name")}).pressSequentially("secret_sauce");

    // 
    await page.locator("#login-button").click();

    // has text option to locate element with the help of text, for example, we can locate the button element with the text 'Login' and then click on it
    // : //a is an XPath expression that selects all anchor elements in the document. In this case, we are using it to locate all the links on the page. By using this locator method, we can interact with the links and perform actions such as clicking them or extracting their attributes. This allows us to test the functionality of the links on the saucedemo website and ensure that they are working as expected.
    await page.locator("//a",{hasText : "Sauce Labs Backpack"}).click();

    console.log("Locator method options is working...");
});

test("Practice of User facing locator method", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login");
    // we can optional exact to match the text exactly, for example, we can locate the button element with the text 'Login' and then click on it
    //await page.getByLabel("Email:",{exact : true}).fill("abtets@gmail.com");
    // we can also use getByLabel to locate the input element with the label 'Email' and then fill it with the email address
   // await page.getByLabel("Email:").fill("abtets@gmail.com");
   await page.getByLabel("Email:",{exact : true}).fill("abtets@gmail.com");

   // 2nd method : getByPlaceholder allows us to locate an input element based on its placeholder text. it is used where we don't have a label for the input field but we have a placeholder text that describes the expected input. By using getByPlaceholder, we can easily locate the input element and interact with it, such as filling it with the required information. This method is particularly useful when testing forms or input fields that rely on placeholder text for user guidance.
   //await page.getByPlaceholder('Search store').fill("Mobile");

   // 3rd method :  getByText allows us to locate an element based on its visible text content. It is used when we want to interact with an element that has specific text displayed on the page. By using getByText, we can easily locate the element and perform actions such as clicking it or extracting its attributes. This method is particularly useful when testing buttons, links, or any other elements that have visible text that we want to interact with.
    //await page.getByText("New Cust").click();
    
    // 4th method : getByAltText allows us to locate an image element based on its alternative text (alt text). It is used when we want to interact with an image that has a specific alt text attribute. By using getByAltText, we can easily locate the image element and perform actions such as clicking it or extracting its attributes. This method is particularly useful when testing images that have descriptive alt text for accessibility purposes.
    //await page.getByAltText("nopCommerce").click();

    // 5th method : getByTitle allows us to locate an element based on its title attribute. It is used when we want to interact with an element that has a specific title attribute value. By using getByTitle, we can easily locate the element and perform actions such as clicking it or extracting its attributes. This method is particularly useful when testing elements that have informative title attributes for user guidance.
   // await page.getByTitle("Show products in category Camera & photo").click();

   // 6th method : getByRole allows us to locate an element based on its ARIA role. It is used when we want to interact with an element that has a specific role attribute value. By using getByRole, we can easily locate the element and perform actions such as clicking it or extracting its attributes. This method is particularly useful when testing elements that have defined ARIA roles for accessibility purposes.
   await page.getByPlaceholder('Search store').fill("Mobile");
   await page.getByRole('button', { name: 'Search' }).click();
   // Note: Role is a way to define the purpose of an element in terms of accessibility. By using getByRole, we can locate elements based on their defined roles, such as buttons, links, or form controls. This allows us to interact with elements that have specific roles and ensure that they are functioning correctly.
   // Various roles include: button, link, checkbox, radio, textbox, etc.

   // 7th method : getByTestId allows us to locate an element based on a custom data attribute called 'data-testid'. It is used when we want to interact with an element that has a specific test ID attribute value. By using getByTestId, we can easily locate the element and perform actions such as clicking it or extracting its attributes. This method is particularly useful when testing elements that have unique test IDs assigned for testing purposes.
//    await page.goto("https://www.saucedemo.com/");
//     await page.getByTestId("username").fill("standard_user");
//     await page.getByTestId("password").fill("secret_sauce");
});