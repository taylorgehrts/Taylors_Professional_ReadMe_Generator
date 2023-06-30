// Function to render the license badge based on the license value
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }

  return ""; // Return an empty string if no matching license is found
}

// Function to render the license link based on the license value
function renderLicenseLink(license) {
  return license ? `[License](https://opensource.org/licenses/${license})` : '';
}

// Function to render the license section based on the license value
function renderLicenseSection(license) {
  return license ? `## License\nThis project is licensed under the ${license} license. Click ${renderLicenseLink(license)} for more information.` : '';
}

// Function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.License);

  return `# ${answers.Title} ${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.Description}

## Installation
${answers.Installation}

## Usage
${answers.Usage}

${renderLicenseSection(answers.License)}

## Contributing
${answers.Contributions}

## Tests
${answers.Tests}

## Questions
If you have any questions, you can reach out to me via GitHub:

- GitHub: [${answers.Questions}](https://github.com/${answers.Questions})
`;
}



module.exports = generateMarkdown;
