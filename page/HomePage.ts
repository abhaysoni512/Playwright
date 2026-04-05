import { Page, Locator } from "@playwright/test"

export class HomePage {
    readonly page: Page;
    readonly homePageHeading: Locator;
    readonly BackPackAddToCartButton: Locator;
    readonly BackPackRemoveFromCartButton: Locator;
    readonly CartIcon: Locator;

    constructor(page: Page) {
        // Initialize the home page
        this.page = page;
        this.homePageHeading = page.getByText('Swag Labs');
        this.BackPackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.BackPackRemoveFromCartButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.CartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    backPackAddToCart = async () => {
        // Click the "Add to Cart" button for the backpack item.
        await this.BackPackAddToCartButton.click();
    }

    gotoCart = async () => {
        // Click the cart icon to navigate to the cart page.
        await this.CartIcon.click();
    }

    backPackRemoveFromCart = async () => {
        // Click the "Remove from Cart" button for the backpack item.
        await this.BackPackRemoveFromCartButton.click();
    }

    



}