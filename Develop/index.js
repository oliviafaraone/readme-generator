// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
   {type: 'input',
    name: 'title',
    message: 'Enter the title of your project. (Required)'}, 

    {type: 'input',
    name: 'Description',
    message: 'Add a description for your project. (Required)'},

    // {type: 'input',
    // name: 'TableOfContents',
    // message: 'Create a Table of Contents for your project. (Required)'},

    {type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project? (Required)'},

    {type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use. (Required)'},
    //would you like to add screenshots? T or F, if F then follow up question for image link; else skip

    {type: 'checkbox',
    name: 'License',
    message: 'Select the license used (Required)',
    choices: ['MIT', 'ISC', 'None of the Above']},

    {type: 'input',
    name: 'Contributing',
    message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)'},

    {type: 'input',
    name: 'Tests',
    message: 'If you created tests for your application, please provide them below. (Required)'},

    {type: 'input',
    name: 'questions',
    message: 'Please enter your email address. (Required)'},

    {type: 'input',
    name: 'questions2',
    message: 'Please enter your GitHub username. (Required)'}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// 
// const generateFile = require('./src/README.md');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// TODO: Create a function to initialize app
function init() {
    const promptUser = () => {
        return  inquirer.prompt(questions)

         // Write the user response to a file by chaining the below callback method to the prompt above.
        .then(function(data) {
            // Bonus: Generate the name of your user file from their input
            // const filename =
            // data.title
            //     .toLowerCase()
            //     .split(' ')
            //     .join('') + '.json';

            fs.writeFile('readme.json', JSON.stringify(data, null, '\t'), function(err) {
            if (err) {
                return console.log(err);
            }

            console.log('Your data has been stored');
            });
        });
    }
    promptUser()
};


// Function call to initialize app
init();
