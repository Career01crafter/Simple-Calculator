#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter the first number", type: "number", name: "firstNumber" },
  { message: "Enter the second number", type: "number", name: "secondNumber" },
  { message: "Enter the third number", type: "number", name: "thirdNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);

//Conditional statement(if and else if):
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber + answer.thirdNumber); 
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber - answer.thirdNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber * answer.thirdNumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber / answer.thirdNumber);
} else {
    console.log("Please select valid operator");
}
console.log("Final Answer");
