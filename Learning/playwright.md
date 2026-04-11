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

Hook functions are used to set up and tear down test environments . Playwright provides several hook functions that can be used to perform actions before and after tests, as well as before and after each test.

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

2. `afterEach`: This hook runs after each test in a test suite. It is typically used to clean up the test environment, such as closing a browser or clearing cookies.
Syntax:
```typescript
test.afterEach(hookFunction);
```
Syntax:
```typescript
test.afterEach(title, hookFunction);
```

3. `beforeAll`: This hook runs once before all tests in a test suite. It is typically used to set up resources that are shared across multiple tests, such as a database connection or a web server.

Syntax:
```typescript
test.beforeAll(hookFunction);
```

4. `afterAll`: This hook runs once after all tests in a test suite. It is typically used to clean up resources that were set up in the `beforeAll` hook, such as closing a database connection or shutting down a web server.

Note: it depends on each worker, if you are running tests in parallel, each worker will have its own instance of the `beforeAll` and `afterAll` hooks. This means that if you have multiple workers running tests, the `beforeAll` hook will run once for each worker, and the `afterAll` hook will also run once for each worker. If you want to share resources across workers, you can use a global setup and teardown file instead of the `beforeAll` and `afterAll` hooks.

Note: If multiple hooks of the same type are defined, they will run in the order they were defined. For example, if you have two `beforeEach` hooks, the first one defined will run before the second one. 
 
# Chapter 5 : Page Object Model (POM)

The Page Object Model (POM) is a design pattern that helps to create maintainable and reusable test code by encapsulating the interactions with web pages into separate classes. Each class represents a specific page or component of the web application, and contains methods that perform actions on that page or component.

POM is a design pattern in test automation that creates an object repository for storing all locators. The page object will contain the representation of the page, and the services the page provides via methods. This design pattern helps to reduce code duplication and improve test maintenance by separating the test logic from the page structure.

representation of the page = locators and elements on the page
services the page provides = methods that perform actions on the page

## Playwright Test fixtures :

Fixtures are a powerful feature in Playwright Test that allow you to set up and tear down test environments, as well as share resources across multiple tests. They are similar to hook functions, but they provide more flexibility and control over the test environment.

### Creating a fixture:

* To create a fixture, you can use the `test.extend` function, which allows you to define a new fixture that can be used in your tests. The `test.extend` function takes an object as an argument, where the keys are the names of the fixtures and the values are functions that set up the fixture.
* Cutom created fixtures can be used with POM and over before/after hooks. They can be used to set up and tear down test environments, as well as share resources across multiple tests. For example, you can create a fixture that sets up a database connection before each test and tears it down after each test, or a fixture that creates a new user account before each test and deletes it after each test.

### Types of fixtures:
1. `Test Fixtures`: Test Fixture gets requested once per test. It is used to set up and tear down test environments, such as launching a browser or navigating to a specific page before each test, and closing the browser or clearing cookies after each test.

2. `Worker Fixtures`: Worker Fixture gets requested once per worker. It is used to set up and tear down resources that are shared across multiple tests, such as a database connection or a web server before all tests in a worker, and closing the database connection or shutting down the web server after all tests in a worker.

# Chapter 6 : Introduction to Playwright with API testing

* Most common API testing

- Most common APIs are REST APIs, which use HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. REST APIs typically return data in JSON format, and can be tested using tools like Postman or by writing test scripts in programming languages like JavaScript or Python.

