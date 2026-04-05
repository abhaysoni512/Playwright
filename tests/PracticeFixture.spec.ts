import { test } from '../Fixtures/MyCutomFixture';


// test fixture example

// test("Practice Fixture 1", async ({fixture1}) => {
//     console.log("Inside test 1");
//     console.log(fixture1);

// });

// test ("Practice Fixture 2", async ({fixture1}) => {
//     console.log("Inside test 2");
//     console.log(fixture1);
// })

// worker fixture example

test("Practice Worker Fixture 1", async ({ fixture1, workerFixture1 }) => {
    console.log("Inside test 1");
    console.log(fixture1);
    console.log(workerFixture1);
});

test("Practice Worker Fixture 2", async ({ workerFixture1 }) => {
    console.log("Inside test 2");
    console.log(workerFixture1);
});
