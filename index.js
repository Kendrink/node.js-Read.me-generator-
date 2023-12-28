// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = 
    [

      {
        type: 'input',
        name: 'username',
        message: 'what is your github username?'
        
      },

        {
          type: 'input',
          name: 'title',
          message: 'what is the title of your project?'
          
        },
        {
          type: 'input',
          name: 'description of the project',
          message: 'can you describe your project?',
        },
        {
          type: 'input',
          name: 'installation choices',
          message: ' what are your installation instructions ?',
        },


        {
          type: 'input',
          name: ' the table of contents',
          message: ' what are the table of contents for this file ?',
        },

        {
          type: 'input',
          name: 'contribution',
          message: ' what are you contributing to this file ?',
        },

        {
          type: 'input',
          name: 'tests',
          message: ' what are the test required in this project?',
        },

        {
          type: 'input',
          name: 'questions',
          message: ' what are the questions in this project ?',
        },

        {
            type: 'input',
            name: 'contents of the project',
            message: ' what are the contents of this project ?',
          },
          {
            type: 'input',
            name: '',
            message: 'what type of  installation is in this project ?',
          },
          {
            type: 'input',
            name: 'license',
            message: 'input your license ?',
          },
          {
            type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
       
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) {
          return console.log(err);
      }
  });


// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((data) => {
      console.log(JSON.stringify(data, null, " "));
      data.getLicense = getLicense(data.license);
      writeToFile("./example/README.md", data);
  });
}


 