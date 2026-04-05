import { test as baseTest } from '@playwright/test';

// to create type for typescript
type MyFixtures = {
    fixture1: any;
    // add more fixtures here as needed
};
type MyWorkerFixtures = {
    workerFixture1: any;
    // add more worker fixtures here as needed
};


// Types of fixtures in Playwright Test :

// 1. Test Fixtures : Test Fixture gets requested once per test. It is used to set up and tear down test environments, such as launching a browser or navigating to a specific page before each test, and closing the browser or clearing cookies after each test.
export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
    // we can use predefined fixtures like page, browser, context etc. in our custom fixture as well
    fixture1: async ({ }, use) => {

        // before part of the fixture - setup code
        console.log("before part of test fixture1");


        // use the fixture in the test <actual test code will run at this point>
        const fixture1 = "This is fixture1";
        await use(fixture1);

        // after part of the fixture - teardown code // this line will run irrespective of the test status (pass/fail)
        console.log("After use part of test fixture1");

    },


    // for worker fixtures, we can use the same approach as test fixtures, but they will be set up and torn down once per worker instead of once per test. This can be useful for resources that are expensive to set up and tear down, such as a database connection or a web server.
    // for worker fixtures, we need to pass array with two argumnets 
    workerFixture1: [
        async ({ }, use) => {
            // before part of the worker fixture - setup code
            console.log("Before part of worker fixture1");
            // use the worker fixture in the test
            const workerFixture1 = "This is worker fixture1";
            await use(workerFixture1);
            // after part of the worker fixture - teardown code // this line will run irrespective of the test status (pass/fail)
            console.log("After part of worker fixture1");
        }
        , { scope: 'worker' }
    ]

});