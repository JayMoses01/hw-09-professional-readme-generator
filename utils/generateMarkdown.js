// JRM: License badge variables. I generally used the Markdown license badge syntax from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba. I used the licenses listed here for this assignment: https://choosealicense.com/licenses/.
var agplv3 = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
var gnugplv3 = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
var gnulgplv3 = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
var mozilla = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
var apache = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
var mit = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
var boost = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
var unlicense = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
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

  return badge;

}


var agplv3Link = `https://choosealicense.com/licenses/agpl-3.0/`;
var gnugplv3Link = `https://choosealicense.com/licenses/gpl-3.0/`;
var gnulgplv3Link = `https://choosealicense.com/licenses/lgpl-3.0/`;
var mozillaLink = `https://choosealicense.com/licenses/mpl-2.0/`;
var apacheLink = `https://choosealicense.com/licenses/apache-2.0/`;
var mitLink = `https://choosealicense.com/licenses/mit/`;
var boostLink = `https://choosealicense.com/licenses/bsl-1.0/`;
var unlicenseLink = `https://choosealicense.com/licenses/unlicense/`;
var nolicenseLink = '';




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if (answers.license == "GNU AGPLv3") {
    var link = agplv3Link;
  } else if (answers.license == "GNU GPLv3") {
    var link = gnugplv3Link;
  } else if (answers.license == "GNU LGPLv3") {
    var link = gnulgplv3Link;
  } else if (answers.license == "Mozilla Public License 2.0") {
    var link = mozillaLink;
  } else if (answers.license == "Apache License 2.0") {
    var link = apacheLink;
  } else if (answers.license == "MIT License") {
    var link = mitLink;
  } else if (answers.license == "Boost Software License 1.0") {
    var link = boostLink;
  } else if (answers.license == "The Unlicense") {
    var link = unlicenseLink;
  } else var link = nolicenseLink;

  return link;

}





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Project Title: ${answers.projectTitle}
  ${renderLicenseBadge(answers)}

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
  ${renderLicenseLink(answers)}

  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
  Please visit my GitHub profile to view this project repository (details below).
  
  GitHub Username: ${answers.github}

  GitHub URL: ${answers.githubUrl}

  If you have any questions, please reach out via email at: ${answers.email}.

`;
}


module.exports = generateMarkdown;
