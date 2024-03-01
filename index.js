// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter the description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter tests instructions:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license for your application:',
        name: 'License',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }
];

// TODO: Create a function to generate the README answers
function generateREADME(answers) {
        return `
# ${answers.title}
    
## Description
${answers.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage$
${answers.usage}

## License
![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions about this project, please visit my [GitHub profile](https://github.com/${answers.github}) or email me at ${answers.email}.
`;
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md successfully generated!');
        }
        });
}

// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateREADME(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch(error => {
            console.error('An error occured generating README.md:', error);
        });
}
// Function call to initialize app
init();