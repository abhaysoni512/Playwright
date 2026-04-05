import { Locator, Page } from "@playwright/test"

export class LoginPage {
    // declared the properties of the login page, which include the page itself, the username text box, the password text box, and the login button. These properties are marked as readonly, indicating that they cannot be reassigned after they have been initialized in the constructor.
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page : Page) {
        // Initialize the login page
        this.page = page;
        this.usernameTextBox = page.locator('[data-test="username"]');
        this.passwordTextBox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async openApplication(): Promise<void> {
        // Open the application by navigating to the specified URL.
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string): Promise<void> {
        // Perform the login action by filling in the username and password fields and clicking the login button.
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }
};