
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
    const userRes = await readLineAsync("How are you? ");
    readline.close();
    console.log("Your response was: " + userRes + " - Thanks!");
}

startApp();
