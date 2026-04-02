# Learning TypeScript

Typescript is a superset of JavaScript that adds static typing and other features to the language. It was developed by Microsoft and has gained popularity in recent years due to its ability to catch errors at compile time and improve code maintainability.

# Why use TypeScript?
- Static typing: TypeScript allows you to define types for your variables, functions, and objects. This helps catch errors at compile time and improves code readability.
- Improved tooling: TypeScript has excellent support for code editors and IDEs, providing features like autocompletion, refactoring, and error checking.
- Better code organization: TypeScript supports modules and namespaces, allowing you to organize your code in a more structured way.
- Compatibility with JavaScript: TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This makes it easy to gradually adopt TypeScript in existing JavaScript projects

# Installing TypeScript
To install TypeScript, you can use npm, the package manager for Node.js. Run the following command in your terminal:
```bash
npm install -g typescript
```

* to check the version of TypeScript installed, you can run:
```bash
tsc --version
```

# Compiling TypeScript

To compile TypeScript code, you can use the TypeScript compiler (tsc) from the command line. Here are the steps to compile a TypeScript file:

1. Create a TypeScript file with the .ts extension, for example, `hello.ts`.
2. Write your TypeScript code in the file. For example:
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
3. Open a terminal and navigate to the directory where your TypeScript file is located.
4. Run the following command to compile the TypeScript file:
```bash
tsc hello.ts
```
This will generate a JavaScript file with the same name (hello.js) in the same directory. The generated JavaScript code will look something like this:
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
```

## Note: 

* TypeScript code can't be run directly in the browser or Node.js. It needs to be compiled to JavaScript first using the TypeScript compiler (tsc). 

* By default, typescript compiler compiles to ES3 JavaScript which doesn't support async/await and other modern JavaScript features. 

* What is ES3?
ECMAScript 3 (ES3) is the third edition of the ECMAScript standard, which is the standard for JavaScript. It was released in 1999 and introduced several new features to the language, including regular expressions, try/catch statements, and improved string handling. However, ES3 is now considered outdated, and most modern JavaScript code is written using newer versions of ECMAScript, such as ES6 (ECMAScript 2015) and later. TypeScript can be configured to compile to different versions of ECMAScript using the "target" option in the tsconfig.json file. For example, to compile to ES6, you can set the target option to "es6":
```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```
This will allow you to use modern JavaScript features while still benefiting from TypeScript's static typing and other features. 

## Note:

* If we have tsconfig.json file in the project, we can simply run `tsc` command in the terminal to compile all the TypeScript files in the project according to the configuration specified in the tsconfig.json file.

```bash
tsc
```

* To compile single file we need to ignore tsconfig.json:-
```bash
tsc hello.ts --ignoreConfig
```

* Other way to compile single file is to add the file to tsconfig.json:
```bash
{
    "compilerOptions": { "target": "esnext" },
    "files": ["1_index.ts"]
}
```

* To watch for changes and automatically recompile, you can use the --watch flag:
```bash
tsc --watch
```

* lib option in tsconfig.json allows you to specify which library files to include in the compilation. By default, TypeScript includes a set of standard library files that provide type definitions for built-in JavaScript features. However, you can customize this by specifying the libraries you want to include. For example, if you want to include the DOM library for browser-based projects, you can add it to the lib array in your tsconfig.json file:
```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "es6"]
  }
}
```
This will include both the DOM library and the ES6 library in the compilation, allowing you to use features from both libraries in your TypeScript code. You can specify other libraries as needed, such as "es2015", "es2016", "es2017", etc., depending on the features you want to use in your project.

* How to install third party libraries in TypeScript?



