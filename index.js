const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const questions = [{
    type: 'input',
    message: "Enter your Github username",
    name: 'username',
    default: 'Your Username',

},
{
    type: 'input',
    message: "Enter the repo name for your project",
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
    message: "Enter installation instructions for your project (if installation is required)",
    name: 'installation'
},
{
    type: 'input',
    message: "Enter usage information for your project",
    name: 'usage'
},
{
    type: 'input',
    message: "Enter guidelines for contributions to your project by other developers",
    name: 'contributions'
},
{
    type: 'input',
    message: "Describe any tests involved with your project",
    name: 'tests'
},
{
    type: 'list',
    message: "Choose a license for your project",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been created")
    });
}

const writeInitFile = util.promisify(writeToFile);

async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const markdown = generateMarkdown(userInput);
        console.log("Your response: ", userInput);
        console.log("Generating your README next...")
        console.log(markdown);
        await writeInitFile('ExampleREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }
};
// Function call to initialize app
init();
