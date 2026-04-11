import {test, request} from "@playwright/test";

// If need base URL so we will use beforeAll and afterAll hooks to set up and tear down the request context, which allows us to reuse the same request context across multiple tests. This can be useful for maintaining session state or sharing authentication tokens between tests.
let reqContext : any;
test.beforeAll("Before all hook for API testing", async () => {
    reqContext = await request.newContext({
        baseURL : "https://restful-booker.herokuapp.com/"
    });
});

// test("API Testing GET Practice 1", async ({ request }) => {
//     // GET request : put base URL and endpoint in the request.get method and it will return the response of that API call
//    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking");

//    console.log(await resp1.json());
// });

test("API Testing GET Practice 2", async () => {
    const reqContext1 = await request.newContext({
        baseURL : "https://restful-booker.herokuapp.com/"
    });
    const resp1 = await reqContext1.get("booking");

    console.log(await resp1.json());
});

test("API Testing GET Practice 3", async () => {
    // GET request : put base URL and endpoint in the request.get method and it will return the response of that API call
    const resp1 = await  reqContext.get("booking");

    console.log(await resp1.json());
}); 