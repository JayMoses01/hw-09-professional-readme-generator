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
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description: ',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Project installation instructions: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Project usage information: ',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines: ',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test instructions: ',
      },
      {
        type: 'list',
        name: 'license',
        message: 'License type: ',
        choices: ["MIT", "Choice 2", "Choice 3"]
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


/* JRM: THIS IS LOW PRIORITY SINCE EVERYTHING ELSE WORKS.
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    .then((answers) => fs.writeFileSync('ProjectREADME.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created Project README file'))
    .catch((err) => console.error(err));
}
*/








// TODO: Create a function to initialize app
function init() {
    readmePrompts()
       .then((answers) => fs.writeFileSync('ProjectREADME.md', generateMarkdown(answers)))
       .then(() => console.log('Successfully created Project README file'))
       .catch((err) => console.error(err));

}



// Function call to initialize app
init();
