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
                if (isNaN(numberOfVeg) || numberOfVeg > numberOfMeals ||  numberOfVeg < 0) {
                console.log(`ERROR: Must be a number between 1 and 7`)
                rl.close();
                } else {
                //push numberOfVeg into userInfo array
                userInfo.push(numberOfVeg);
                console.log(`Beep boop beep...\nPlanning your meals...\nHere you go! Thanks for using MealBot!`)
                rl.close();
                //start of menu
                let userMealNumber = userInfo[1];
                let userVegNumber = userInfo[2];
                const menu = {
                    _meals: {
                      vegetarian: [],
                      nonVegetarian: [],
                    },
                    get vegetarian() {
                      return this._meals.vegetarian;
                    },
                    get nonVegetarian () {
                      return this._meals.nonVegetarian;
                    },
                    set vegetarian(vegetarian) {
                      this._meals.vegetarian = vegetarian;
                    },
                    set nonVegetarian(nonVegetarian) {
                      this._meals.nonVegetarian = nonVegetarian;
                    },
                    get meals() {
                      return this._meals;
                    },
                    addMealToMeals(mealType, mealName) {
                      const meal = {
                        Meal: mealName,
                      };
                      return this._meals[mealType].push(meal);
                    },
                    getRandomMealFromMeals(mealType) {
                      const meals = this._meals[mealType];
                      const randomIndex = Math.floor(Math.random() * meals.length);
                      return meals[randomIndex];
                    },
                    generateRandomMeal(mealType) {
                      randomMealList= [];
                      let vegetarian = this.getRandomMealFromMeals('vegetarian');
                      let nonVegetarian = this.getRandomMealFromMeals('nonVegetarian');
                      if (mealType === 'vegetarian') {
                        return vegetarian;
                      } else {
                        return nonVegetarian;
                      }
                    },
                    generateMealList () {
                      let personalMealList = [];
                      if (userVegNumber > 0) {
                        for ( i = 0; i < userVegNumber; i++) {
                            personalMealList.push(this.generateRandomMeal('vegetarian'));
                        }
                        for ( j = 0; j < (userMealNumber - userVegNumber); j++) {
                            personalMealList.push(this.generateRandomMeal('nonVegetarian'));
                        }
                      } else {
                        for ( i = 0; i < userMealNumber; i++) {
                            personalMealList.push(this.generateRandomMeal('nonVegetarian'));
                        }
                      }
                      return personalMealList;
                    }
                  };
                  
                menu.addMealToMeals('vegetarian', 'Minestrone soup');
                menu.addMealToMeals('vegetarian', 'Veggie lasagne');
                menu.addMealToMeals('vegetarian', 'Vegetarian tortilla soup');
                menu.addMealToMeals('vegetarian', 'Kale salad');
                menu.addMealToMeals('vegetarian', 'Vegetarian fried rice');
                menu.addMealToMeals('vegetarian', 'Thai red curry with vegetables');
                menu.addMealToMeals('vegetarian', 'Cheese quesadillas');
                menu.addMealToMeals('vegetarian', 'Mac & cheese');
                menu.addMealToMeals('vegetarian', 'Grilled cheese');
                menu.addMealToMeals('vegetarian', 'Lettuce wraps');
                
                
                menu.addMealToMeals('nonVegetarian', 'Tacos');
                menu.addMealToMeals('nonVegetarian', 'Chicken pie');
                menu.addMealToMeals('nonVegetarian', 'Meatloaf');
                menu.addMealToMeals('nonVegetarian', 'Sausage pepper pasta');
                menu.addMealToMeals('nonVegetarian', 'Enchiladas');
                menu.addMealToMeals('nonVegetarian', 'Chicken stir-fry');
                menu.addMealToMeals('nonVegetarian', 'Chicken noodle soup');
                menu.addMealToMeals('nonVegetarian', 'Stuffed peppers');
                menu.addMealToMeals('nonVegetarian', 'Steak');
                menu.addMealToMeals('nonVegetarian', 'Cheeseburgers');
                
                  
                const myMeals = menu.generateMealList();
                
                console.log(myMeals);
                }
                })
            }
        })
    }
});