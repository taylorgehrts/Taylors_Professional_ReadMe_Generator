//import of dependencies
const inquirer = require("inquirer");
const generateREADME = require("./utils/generateMarkdown")
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
        choices: ["MIT", "Apache-2.0", "GPL v3", "BSD", "ISC"]
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

    },

    {
        type: "input",
        name: "eMail",
        message: "Please enter your E-mail address"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log("Your ReadME has been generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            writeToFile("README.md", readmeContent);

        })
}





// Function call to initialize app
init();


