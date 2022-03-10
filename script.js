//A simple meal generator

//function for a short delay between messages
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

//welcomes user to the program
console.log('Welcome to MealBot!')

//begins engagement with user

// import readline module
const readline = require("readline");

// create interface for input and output
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//asks user for their name and greets them after short delay
delay(750).then(() =>
readLine.question('Let’s get to know each other!\nWhat is your name? ', name => {
    delay(750).then(() =>
        console.log(`Hello, ${name}!`));
        readLine.close();
}));

//changes string to integer
//numberOfMeals = parseInt(numberOfMeals, 10);