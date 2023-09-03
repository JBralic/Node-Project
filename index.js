// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'What are your current credits?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is the name of your repository license?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'features',
        message: 'What are the features of your application?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How would others contribute to this app?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Does your app include tests and how would you run them?',
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses)=> {
    console.log("generating ReadMe...");
    writeToFile("README.md",generateMarkdown({...inquirerResponses}))
  })
}

// Function call to initialize app
init();
