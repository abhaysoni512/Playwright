// *****Variables in JavaScript*****
// const channelName = "general";
// console.log(channelName);

// let url = "https://www.example.com";
// url = 123; // No error, but it can lead to unexpected behavior
// console.log(url);


// ****Data Types in JavaScript*****

// let titile = 'Hello, World!'; // String : difference between single and double quotes is that single quotes are more common in JavaScript, while double quotes are more common in JSON. Both can be used interchangeably, but it's important to be consistent within your codebase.
// let age = 5;
// console.log(typeof titile); // Output: string
// console.log(typeof age); // Output: number

// let isActive = true;
// console.log(isActive,typeof isActive); // Output: boolean

// array
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers,typeof numbers); // Output: object
// console.log(numbers[0]); // Output: 1


// object <C++ : struct>
// const userDetails = {
//     name: "Abhay",
//     age: 23,
//     isAdmin: true
// };
// console.log(userDetails,typeof userDetails); // Output: object
// console.log(userDetails.name); // Output: Abhay

// *****Functions in JavaScript*****
// function sayhello() {
//     console.log("Hello, World!");
// }
// console.log(sayhello,typeof sayhello); // Output: function
// sayhello(); // Output: Hello, World!

// // Arrow function <C++ : lambda>
// const sayHello1 = () => {
//     console.log("Hello, World!");
// }
// sayHello1(); // Output: Hello, World!


// difference between regular function and arrow function

// // Regular function
// function add(a, b) {
//     return a + b;
// }

// // Arrow function (same logic, shorter syntax)
// const add = (a, b) => {
//     return a + b;
// };

// // Even shorter (single expression)
// const add = (a, b) => a + b;

// parameters and arguments 
// const greet = (name) => {
//     console.log(`Hello, ${name}!`); // backticks are used for string interpolation, allowing us to embed the value of the name variable directly within the string.
// }
// greet("Abhay"); // Output: Hello, Abhay!

// returning values from functions
// const add = (a, b) => {
//     return a + b;
// }
// const result = add(5, 3);
// console.log(result); // Output: 8

// *****Arthimetic Operators in JavaScript*****
// console.log(5 + 3); // Output: 8
// console.log(4/3); // Output: 1.3333333333333333
// // to get the integer part of the division, we can use Math.floor() or Math.trunc()
// console.log(Math.floor(4/3)); // Output: 1
// console.log(Math.trunc(4/3)); // Output: 1
// // to restrict the result to a certain number of decimal places, we can use toFixed() method
// console.log((4/3).toFixed(2)); // Output: 1.33


// *****Comparison Operators in JavaScript*****
// console.log(5 > 3); // Output: true
// console.log(5 < 3); // Output: false
// console.log(5 >= 5); // Output: true
// console.log(5 <= 4); // Output: false
// console.log(5 == '5'); // Output: true (loose equality, performs type coercion)
// console.log(5 === '5'); // Output: false (strict equality, no type coercion)
// console.log(5 != '5'); // Output: false (loose inequality, performs type coercion)
// console.log(5 !== '5'); // Output: true (strict inequality, no type coercion)

// *****Logical Operators in JavaScript*****
// console.log(true && false); // Output: false
// console.log(3 === 5 && 4 > 2); // Output: false

// ******if-else statements in JavaScript*****
// const age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }


// ******Loops in JavaScript*****

// for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i); // Output: 0, 1, 2, 3, 4
// }

// while loop
// let count = 0;
// while (count < 5) {
//     console.log(count); // Output: 0, 1, 2, 3, 4
//     count++;
// }

// do-while loop
// let num = 0;
// do {
//     console.log(num); // Output: 0, 1, 2, 3, 4
//     num++;
// } while (num < 5);

// let users = ["Alice", "Bob", "Charlie"];
// for (const user of users) {  // for each loop in c++
//     console.log(user); // Output: Alice, Bob, Charlie
// }


// *****Aysnc/Await in JavaScript*****
// async function fetchData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();
// await can only be used inside an async function, and it pauses the execution of the function untit the promise is resolved or rejected. This allows us to write asynchronous code in a more synchronous and readable manner. 
// async marks function as asynchronous, meaning it will return a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.
// async/await is built on top of promises, and it provides a cleaner and more intuitive syntax for working with asynchronous code. It allows us to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

// *****Classes in JavaScript*****
// In automation classes are commonly used to represent pages or modules of the application under test, encapsulating the elements and actions related to that page or module. This is often referred to as the Page Object Model (POM) design pattern, which helps improve the maintainability and readability of test code.

// class loginPage {
//     // constructor
//     constructor(usernameSelector, passwordSelector, loginButtonSelector) {
//         // Here you would typically initialize any properties related to the login page, such as selectors for the username and password fields, and the login button.
//         this.usernameSelector = usernameSelector; // Example selector for username field
//         this.passwordSelector = passwordSelector; // Example selector for password field
//         this.loginButtonSelector = loginButtonSelector; // Example selector for login button
//     }

//     // methods
//     enterUsername(username) {
//         // Code to enter the username using the usernameSelector
//         console.log(`Entering username: ${username} into field with selector: ${this.usernameSelector}`);
//     }

//     enterPassword(password) {
//         // Code to enter the password using the passwordSelector
//         console.log(`Entering password: ${password} into field with selector: ${this.passwordSelector}`);
//     }

//     clickLoginButton() {
//         // Code to click the login button using the loginButtonSelector
//         console.log(`Clicking login button with selector: ${this.loginButtonSelector}`);

//     }
    
// }

// // Usage
// const login = new loginPage('username', 'password', 'loginButton');
// login.enterUsername('testuser');
// login.enterPassword('password123');
// login.clickLoginButton();


// *****Import/Export in JavaScript*****

// form1 : when we export without default keyword, we can export multiple things from the same file, and we have to import them using the same name as they were exported. This is called named export. how to import multiple things from the same file using named export is shown in the below code snippet.
// import { PracticeImportExport, sampleFunction } from "./importExport.js";
// const practice = new PracticeImportExport();
// practice.clickLoginButton(); // Output: Login button clicked
// sampleFunction(); // Output: This is a sample function

// form2 : when we export with default keyword, we can only export one thing from the file, and we can import it using any name we want. This is called default export. how to import a default export is shown in the below code snippet.

// import PracticeImportExport from "./importExport.js";
// import { sampleFunction } from "./importExport.js";
// const practice = new PracticeImportExport();
// practice.clickLoginButton(); // Output: Login button clicked
// sampleFunction(); // Output: This is a sample function

// **** Additional Notes ****
// const value = 5;
// const str1 = "The value is: " + value; // String concatenation
// const str2 = `The value is: ${value} and this is string interpolation`; // String interpolation using template literals
// console.log(str1); // Output: The value is: 5
// console.log(str2); // Output: The value is: 5



// *******Fuc