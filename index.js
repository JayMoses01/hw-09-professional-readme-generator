// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
const readmePrompts = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project/application?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
      },
      {
        // JRM: I used the licenses listed here for this assignment: https://choosealicense.com/licenses/.
        type: 'list',
        name: 'license',
        message: 'License type: ',
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "No license"]
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'githubUrl',
        message: 'What is your GitHub URL?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };

// TODO: Create a function to write README file
// JRM: I commented out this function since I included writing the file in the Init() function below.
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    readmePrompts()
       .then((answers) => fs.writeFileSync('ProjectREADME.md', generateMarkdown(answers)))
       .then(() => console.log('Successfully created Project README file'))
       .catch((err) => console.error(err));

}

// Function call to initialize app
init();
