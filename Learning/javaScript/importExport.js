// form1 : when we export without default keyword, we can export multiple things from the same file, and we have to import them using the same name as they were exported. This is called named export.
// export class PracticeImportExport {
//     constructor() {
//         console.log("PracticeImportExport class instantiated");
//     }

//     clickLoginButton() {
//         console.log("Login button clicked");
//     }
// }

// form2 : when we export with default keyword, we can only export one thing from the file, and we can import it using any name we want. This is called default export.
export default class PracticeImportExport {
    constructor() {
        console.log("PracticeImportExport class instantiated");
    }

    clickLoginButton() {
        console.log("Login button clicked");
    }
}

export function sampleFunction() {
    console.log("This is a sample function");
}

