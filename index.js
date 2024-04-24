#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "q1",
            message: "What would you like to add in your todos?",
            type: "input",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "Enter a valid task.";
            },
        },
        {
            name: "q2",
            message: "Would you like to add more in your todos",
            type: "confirm",
            default: "true",
        },
    ]);
    // Check if the input is not empty before pushing it to the array
    if (todoQuestions.q1.trim() !== "") {
        todos.push(todoQuestions.q1);
        console.log(`Task "${todoQuestions.q1}" added to the list.`);
    }
    else {
        console.log("Enter a valid task.");
    }
    console.log(todos);
    condition = todoQuestions.q2;
}
