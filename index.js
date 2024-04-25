#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const userNumber = await inquirer.prompt([
    {
        message: "Please guess a number between 1 to 10: ",
        type: "number",
        name: "guessNumber",
    },
]);
if (userNumber.guessNumber === randomNumber) {
    console.log("Congratulation...! You Guess a Correct Number");
}
else
    console.log("You Guess Incorrect Number, try again");
