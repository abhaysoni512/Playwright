# Chapter 1:  Introduction to Playwright

* Playwright is a Node.js library for automating web browsers. It provides a high-level API to control headless Chrome, allowing you to perform tasks such as web scraping, testing, and automation.

* It supports multiple browsers, including Chrome, Firefox, and WebKit, making it a versatile tool for web automation. With Playwrite, you can write scripts to interact with web pages, fill out forms, click buttons, and extract data.

* Supported languages include JavaScript, TypeScript, Python, and C#. This makes it accessible to a wide range of developers.

## Cool features of Playwrite include:
- Automatic download of browser binaries
- Support for multiple browsers
- record video of test runs
- intercepting network requests
- taking screenshots
- emulate devices

* Playwright is commonly used for end-to-end testing of web applications, but it can also be used for web scraping and automation tasks. It provides a powerful and flexible API that allows you to interact with web pages in a way that mimics user behavior. This makes it an excellent choice for testing web applications, as it can help you identify issues and ensure that your application works as expected across different browsers and devices.

### Playwright test: 

Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling. Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed, with native mobile emulation for Chrome (Android) and Mobile Safari.

# Chapter 2 : Installation :- 

Before installing Playwright, make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

## Installing Playwright using npm:
```bash
npm init playwright@latest
```
When prompted, choose / confirm:

* TypeScript or JavaScript (default: TypeScript)
* Tests folder name (default: tests, or e2e if tests already exists)
* Add a GitHub Actions workflow (recommended for CI)
* Install Playwright browsers (default: yes)

Note : We can re-run the command later; it does not overwrite existing tests.

## VS code extension for Playwright <best way to install Playwright>

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. In the search bar, type "Playwright" and press Enter.
4. Find the Playwright extension in the search results and click on the "Install" button.
5.  open command palette by pressing `Ctrl+Shift+P` and type "Playwright: Install Playwright" and select it to install Playwright. you will be prompted to select the browsers you want to install. Choose the browsers you need and click "Install".


Note: To check playwright version, you can run:

```bash
npm list playwright
```

### What's Installed

```file
playwright.config.ts         # Test configuration
package.json
package-lock.json            # Or yarn.lock / pnpm-lock.yaml
tests/
  example.spec.ts            # Minimal example test
```

# Chapter 3 : Configuration

# Chapter 4 : Writing your first test

## Running the Example Test

By default tests run headless in parallel across Chromium, Firefox and WebKit (configurable in playwright.config). Output and aggregated results display in the terminal. It means that you can run your tests in CI without any additional configuration. To run the example test, use the following command:

```bash
npx playwright test
```
