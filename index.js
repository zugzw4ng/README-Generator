// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter your Github username",
        name: 'username',
        default: 'Your Username',

    },
    {
        type: 'input',
        message: "Enter the repo name for this project",
        name: 'repo',
        default: 'Repository Name',

    },
    {
        type: 'input',
        message: "Enter the title of your project",
        name: 'title',
        default: 'Project Title',

    },
    {
        type: 'input',
        message: "Enter a project description",
        name: 'description',
        default: 'Project Description',

    },
    {
        type: 'input',
        message: "Enter installation instructions for this project (if installation is required)",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Enter usage information for this project",
        name: 'usage'
    },
    {
        type: 'input',
        message: "",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
