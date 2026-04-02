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


## Running playwright using terminal

1. to select only one project, use the `--project` flag:

```bash
npx playwright test --project=chromium
```
2. to run a specific test file, use the `--test` flag:

```bash
npx playwright test --test=tests/example.spec.ts
```

3. to run a specific test, use the `--grep` flag:

```bash 
npx playwright test --grep="should have the correct title"
```

4. to run tests in headed mode, use the `--headed` flag:

```bash
npx playwright test --headed
```

# test Annotation & Grouping

1. to group tests, use the `test.describe` function:

```typescript
test.describe('My test suite', () => {
  test('test 1', async ({ page }) => {
    // test code
  });
  test('test 2', async ({ page }) => {
    // test code
  });
});
```

2. test.only: to run only a specific test or group of tests, use the `test.only` function:

```typescript
test.only('should run only this test', async ({ page }) => {
  // test code
});
```

```test.describe.only('should run only this group of tests', () => {
  test('test 1', async ({ page }) => {
    // test code
  });
  test('test 2', async ({ page }) => {
    // test code
  });
});
```

3. test.skip: to skip a specific test or group of tests, use the `test.skip` function:

```typescript
test.skip('should skip this test', async ({ page }) => {
  // test code
});
```

other ways to skip tests include:

```typescript
test.('should skip this test', async ({ page }) => {
  test.skip(true, 'skipping this test');
  // test code
  ///
});
```
skip condition can be based on environment variables, browser type, or any other condition:

```typescript
test('should skip this test for chromium', async ({ page }) => {
  test.skip(page.browserName === 'chromium', 'skipping this test for chromium');  
  // test code
});

// if we want to skip all the tests in a test file, we can use the `test.skip` function at the top of the file:

```typescript
test.skip(true, 'skipping all tests in this file');
```

4. test.fixme: to mark a test as a known issue that needs to be fixed, use the `test.fixme` function:

```typescript
test.fixme('should fix this test', async ({ page }) => {
  // test code
});
```

5. test.slow: to mark a test as slow, use the `test.slow` function, which will increase the timeout for that test(3x by default):

```typescript
Inside a function:
test('should mark this test as slow', async ({ page }) => {
  test.slow(true, 'marking this test as slow');
  // test code
});
```

6. test.setTimeout: to set a custom timeout for a specific test, use the `test.setTimeout` function:

```typescript
test('should set a custom timeout', async ({ page }) => {
  test.setTimeout(10000); // set timeout to 10 seconds
  // test code
});
```

# Hook functions in Playwright

Hook functions are used to set up and tear down test environments, . Playwright provides several hook functions that can be used to perform actions before and after tests, as well as before and after each test.

1. `beforeEach`: This hook runs before each test in a test suite. It is typically used to set up the test environment, such as launching a browser or navigating to a specific page.

Syntax:

1st way to use beforeEach hook function:
```typescript
test.beforeEach(hookFunction);
```
2nd way to use beforeEach hook function:
```typescript
test.beforeEach(title, hookFunction);
```




2. `beforeAll`: This hook runs once before all tests in a test suite. It is typically used to set up resources that are shared across multiple tests, such as a database connection or a web server.

Syntax:
```typescript
test

