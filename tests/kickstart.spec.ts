// We are importing the test function from Playwright's testing library. This allows us to write and run tests for our application using Playwright's features and capabilities.
import {test} from "@playwright/test";

test("kickstart", ():void => {
    console.log("Kickstart test is running...");
    // Here, we are simply logging a message to the console to indicate that the "kickstart" test is running. This is a basic test case that can be used as a starting point for writing more complex tests in the future.
});

test("kickstart1", ():void => {
    console.log("Kickstart1 test is running...");
    // Similar to the previous test, this test case logs a message to the console to indicate that the "kickstart1" test is running. This can be used as a placeholder for future tests or as a simple check to ensure that the testing framework is set up correctly.
});

