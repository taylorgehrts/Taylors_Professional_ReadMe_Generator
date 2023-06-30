// Function to render the license badge based on the license value
function renderLicenseBadge(license) {
  return license ? `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})` : '';
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

  return `# ${answers.Title}

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

## License
${licenseBadge}
${renderLicenseSection(answers.License)}

## Contributing
${answers.Contributing}

## Tests
${answers.Tests}

## Questions
If you have any questions, you can reach out to me via GitHub:

- GitHub: [${answers.Questions}](https://github.com/${answers.Questions})
`;
}



module.exports = generateMarkdown;
