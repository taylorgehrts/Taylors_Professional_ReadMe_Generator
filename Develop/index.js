//import of dependencies
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the Title of your project?"

    },

    {
        type: "input",
        name: "Description",
        message: "Describe your Project"

    },

    {
        type: "input",
        name: "Installation",
        message: "How do you install your project?"

    },

    {
        type: "input",
        name: "Title",
        message: "What is the Title of your project?"

    },

    {
        type: "input",
        name: "Usage",
        message: "How do you use the project?"

    },

    {
        type: "list",
        name: "License",
        message: "What license would you like to use?",
        choices: ["MIT License (MIT)", "Apache License 2.0 (Apache-2.0)", "GNU General Public License (GPL)", "Berkeley Software Distribution License (BSD)", "Internet Systems Consortium License (ISC)"]
    },

    {
        type: "input",
        name: "Contributions",
        message: "List Contributors?"

    },

    {
        type: "input",
        name: "Tests",
        message: "List any tests?"

    },

    {
        type: "input",
        name: "Questions",
        message: "What is your github username?"

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)



}

// Function call to initialize app
init();


