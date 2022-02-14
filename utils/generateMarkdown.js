// License badge variables
var agplv3 = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
var gnugplv3 = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
var gnulgplv3 = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
var mozilla = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
var apache = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
var mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
var boost = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
var unlicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
var nolicense = '';



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (answers.license == "GNU AGPLv3") {
    var badge = agplv3;
  } else if (answers.license == "GNU GPLv3") {
    var badge = gnugplv3;
  } else if (answers.license == "GNU LGPLv3") {
    var badge = gnulgplv3;
  } else if (answers.license == "Mozilla Public License 2.0") {
    var badge = mozilla;
  } else if (answers.license == "Apache License 2.0") {
    var badge = apache;
  } else if (answers.license == "MIT License") {
    var badge = mit;
  } else if (answers.license == "Boost Software License 1.0") {
    var badge = boost;
  } else if (answers.license == "The Unlicense") {
    var badge = unlicense;
  } else var badge = nolicense;
}





// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Project Title: ${answers.projectTitle}
  ${badge}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
  Please visit my GitHub profile to view this project repository (details below).
  
  GitHub Username: ${answers.github}

  GitHub URL: ${answers.githubUrl}

  If you have any questions, please reach out via email at ${answers.email}.

`;
}


module.exports = generateMarkdown;
