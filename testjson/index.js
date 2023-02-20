import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = msg => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        });
    });    
}

const startApp = async() => {
    const userRes = await readLineAsync("Enter the guests: ");
    readline.close();
    console.log("Your response was: " + btoa(userRes) + " in base64- Thanks!\n" + atob(btoa(userRes)));
}

startApp();
