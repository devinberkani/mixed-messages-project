//A simple meal generator

//welcomes user to the program
console.log('Welcome to MealBot!')

//begins engagement with user

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//creates empty array for information to be used later
const userInfo = [];

//asks user for their name and greets them after short delay
rl.question('Let’s get to know each other!\nWhat is your name? ', userName => {
    //if user enters a number, they will get an error
    if (isNaN(userName) === false) {
        console.log(`ERROR: Name must be letters only.\n`);
        rl.close();
    } else { // if user enters a string
        //removes white space and defines userName var
        userName = userName.trim();
        //push userName into userInfo array
        userInfo.push(userName);
        //ask how many meals user wants
        rl.question(`Hello, ${userName}!\nHow many meals would you like me to plan for you?\n(Please enter a number between 1 and 7)\n`, numberOfMeals => {
            //removes white space from numberOfMeals var
            numberOfMeals = numberOfMeals.trim();
            //turns numberOfMeals into an int
            numberOfMeals = parseInt(numberOfMeals, 10);
            //defines numberOfMeals logic
            if (isNaN(numberOfMeals) || numberOfMeals > 7 || numberOfMeals < 1) {
                console.log(`ERROR: Must be a number between 1 and 7`)
                rl.close();
            } else {
                //push numberOfMeals into userInfo array
                userInfo.push(numberOfMeals);
                //ask how many vegetarian meals user wants
                rl.question(`Of those ${numberOfMeals} meal(s), how many vegetarian meals would you like?\n(Please enter a number between 0 and ${numberOfMeals})\n`, numberOfVeg => {
                //removes white space from numberOfVeg var
                numberOfVeg = numberOfVeg.trim();
                //turns numberOfVeg into an int
                numberOfVeg = parseInt(numberOfVeg, 10);
                //defines numberOfVeg logic
                if (isNaN(numberOfVeg) || numberOfVeg > numberOfMeals ||  numberOfVeg < 1) {
                console.log(`ERROR: Must be a number between 1 and 7`)
                rl.close();
                } else {
                //push numberOfVeg into userInfo array
                userInfo.push(numberOfVeg);
                console.log(`Beep boop beep...\nPlanning your meals...\nHere you go! Thanks for using MealBot!`)
                console.log(userInfo);
                rl.close();
                }
                })
            }
        })
    }
});