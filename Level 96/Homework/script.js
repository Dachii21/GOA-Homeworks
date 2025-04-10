//3

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
console.log(getCurrentDateTime());

//4

let timer = 0;
setInterval(() => {
    console.log(`Timer: ${timer} seconds`);
    timer++;
}, 1000);

//5

function displayMessageAfterDelay(message, delay) {
    if (typeof delay === "number" && delay >= 0) {
        setTimeout(() => {
            console.log(message);
        }, delay);
    } else {
        console.error("Please provide a valid non-negative number for the delay!");
    }
}

const userMessage = prompt("Enter your message:");
const userDelay = parseInt(prompt("Enter the delay in milliseconds:"), 10);

displayMessageAfterDelay(userMessage, userDelay);

//6

function logGreetingWithDelay() {
    setTimeout(() => {
        console.log("Hello World!");
    }, 2000);
}

logGreetingWithDelay();

//7

function message1() {
    console.log("This is the first message.");
}

function message2() {
    console.log("Here comes the second message.");
}

function message3() {
    console.log("And now, the third message.");
}

function message4() {
    console.log("Finally, this is the last message.");
}

//8

function logMessage1() {
    setTimeout(() => {
        console.log("This is the first message");
        logMessage2();
    }, 1000);
}

function logMessage2() {
    setTimeout(() => {
        console.log("This is the second message");
        logMessage3();
    }, 2000);
}

function logMessage3() {
    setTimeout(() => {
        console.log("This is the third message");
        logMessage4();
    }, 3000);
}

function logMessage4() {
    setTimeout(() => {
        console.log("This is the final message");
    }, 4000);
}

//I watched the videos