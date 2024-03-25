#! /usr/bin/env node
import inquirer from "inquirer";
let Random = Math.floor(Math.random() * 100 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number between 0 and 100",
    },
]);
if (answer.userGuessNumber == Random) {
    console.log("You guessed correctly you win!");
}
else if (answer.userGuessNumber > 100) {
    console.log("Your guess is not between 0 and 100");
}
else {
    console.log("Your guess is not correct!");
}
