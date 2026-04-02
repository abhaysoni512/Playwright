const nameValue:string = "Abhay";
// nameValue = "Abhay"; // This will give an error because we cannot reassign a value to a constant variable.
// console.log(nameValue); // Output: Abhay

// let url:string = "https://www.google.com";
// console.log(url); // Output: https://www.google.com

// let a
// a=20
// console.log(a); // Output: 20

// *****Datatype in TypeScript*****

// 1. String
// let firstName: string = "Abhay";
// let lastName: string = " Soni";
// console.log(firstName + lastName); // Output: Abhay

// let fullName: string = `${firstName}${lastName}`;
// console.log(fullName); // Output: Abhay Soni

// 2. Number
// let count: number = 10;
// // count = "20"; // This will give an error because we cannot assign a string value to a number variable.
// // to resolve this instead of number we can use any as the datatype of count variable, but it is not recommended to use any as it defeats the purpose of using TypeScript.
// console.log(count); // Output: 10



// // 3. Boolean
// let isLoggedIn: boolean = true;
// console.log(isLoggedIn); // Output: true

// // 4. Array
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers); // Output: [1, 2, 3, 4, 5]
// console.log(numbers[0]); // Output: 1

// let numArray : Array<number> = [1, 2, 3, 4, 5]; // Here we have defined an array named numArray which can only have number type of elements.
// console.log(numArray); // Output: [1, 2, 3, 4, 5]
// console.log(numArray[0]); // Output: 1

// 5. Tuple
// // A tuple is an array with fixed number of elements where each element can have a different type.
// let person: [string, number] = ["Abhay", 25]; // Here we have defined a tuple named person which has two elements, the first element is of type string and the second element is of type number.
// console.log(person);

// let person1: any[] = ["Abhay", 25, true]; // Here we have defined an array named person1 which can have any type of elements, but it is not recommended to use any as it defeats the purpose of using TypeScript.
// console.log(person1);


// 6. Enum
// An enum is a way to define a set of named constants. It is used to define a set of related values that can be numeric or string values.
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }

// console.log(Direction.Up); // Output: 1
// console.log(Direction.Down); // Output: 2
// console.log(Direction.Left); // Output: 3
// console.log(Direction.Right); // Output: 4


// **********Objects in TypeScript**********

// let userDetails: {
//     userName: string,
//     age: number,
//     isAdmin: boolean
// } = {
//     userName: "Abhay",
//     age: 25,
//     isAdmin: true
// }
// console.log(typeof(userDetails) ,userDetails); // Output: { userName: 'Abhay', age: 25, isAdmin: true }


// **********Functions in TypeScript**********

// function sayHello() : void {
//     console.log("Hello, World!");
// }
// sayHello(); // Output: Hello, World!

// const sayHi = (): void => {
//     console.log("Hi, there!");
// }
// sayHi(); // Output: Hi, there!


// // 1st way to define a function in TypeScript
// function add(a: number, b: number) : void {
//     console.log(a + b);
// }
// add(5, 10); 

// // 2nd way to define a function in TypeScript using arrow function
// const subtract = (a:number, b: number) : number => {
//     return a - b;
// }
// console.log(subtract(10, 5)); // Output: 5


// // optional parameters in TypeScript functions
// function greet(name: string, greeting?: string) : void {
//     if(greeting) {
//         console.log(`${greeting}, ${name}!`);
//     } else {
//         console.log(`Hello, ${name}!`);
//     }
// }
// greet("Abhay"); // Output: Hello, Abhay!
// greet("Abhay", "Hi"); // Output: Hi, Abhay!


// ***********loops in TypeScript***********

// let users: string[] = ["Abhay", "Soni", "John", "Doe"];

// for (const user of users) {
//     console.log(user); // Output: Abhay, Soni, John, Doe
// }

// users.forEach((user) => {
//     console.log(user); // Output: Abhay, Soni, John, Doe
// });


// **********async/await in TypeScript**********

// // ex1:
// async function fetchData() : Promise<string> {
//      return "Data fetched successfully!";
// }

// async function fetchData1() : Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully!");
//         }, 5000);
//     });
// }
// // The above function fetchData is an asynchronous function that returns a promise which resolves to a string after 5 seconds. We can use the async/await syntax to call this function and get the resolved value.
// // promise<string> means that the function will return a promise that resolves to a string value.
// // return new Promise((resolve) => { ... }) is used to create a new promise. The resolve function is called when the asynchronous operation is complete and the promise is resolved with the value passed to it.

// // to use await with async functions, we need to call them inside another async function. Below is an example of how to use async/await to call the fetchData and fetchData1 functions.

// async function main() {
//     const data = await fetchData();
//     console.log(data); // Output: Data fetched successfully!

//     const data1 = await fetchData1();
//     console.log(data1); // Output: Data fetched successfully! (after 5 seconds)
// }

// main();


// **********Interfaces in TypeScript**********

// An interface is a way to define a contract for the shape of an object. It is used to define the structure of an object and the types of its properties. Below is an example of how to define and use an interface in TypeScript.

// interface User {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }

// let user: User = {
//     name: "Abhay",
//     age: 25,
//     isAdmin: true
// }

// console.log(user); // Output: { name: 'Abhay', age: 25, isAdmin: true }

// ********type in TypeScript**********
// A type is a way to define a custom type in TypeScript. It is used to define a new type that can be used to describe the shape of an object or a function. Below is an example of how to define and use a type in TypeScript.

// type User = {
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }

// let user: User = {
//     name: "Abhay",
//     age: 25,
//     isAdmin: true
// }

// console.log(user); // Output: { name: 'Abhay', age: 25, isAdmin: true }

// The main difference between an interface and a type in TypeScript is that an interface can only describe the shape of an object, while a type can describe the shape of an object as well as a function. Additionally, interfaces can be extended and implemented by classes, while types cannot be extended or implemented.

// type status = "success" | "error" | "loading";

// let testStatus: status = "success";
// console.log(testStatus); // Output: success

// testStatus =  "error";
// console.log(testStatus); // Output: error


// **********Classes in TypeScript**********

class LoginPage {
    nameVal: string;
    companyName: string = "Skytap";
    // how to use default parameter in constructor
    constructor(nameVal: string = "Abhay", companyName: string = "Skytap") {
        this.nameVal = nameVal;
        this.companyName = companyName;
    }
    login() : void {
        console.log("Login called");
    }
    clickLoginButton() : void {
        console.log("Login button clicked");
    }
    displayUserInfo() : void {
        console.log(`User Name: ${this.nameVal}, Company Name: ${this.companyName}`);
    }
}
// in typescript we can't use default constrctor if we have defined a constructor in the class, but we can use default parameters in the constructor to achieve the same functionality as a default constructor. 
let loginPage = new LoginPage("john", "Google");
loginPage.login(); // Output: Login called
loginPage.clickLoginButton(); // Output: Login button clicked
loginPage.displayUserInfo(); // Output: User Name: john, Company Name: Google

