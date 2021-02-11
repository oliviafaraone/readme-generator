// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    name: 'email',
    message: 'Please enter your email address.'},

    {type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.'},

   {type: 'input',
    name: 'title',
    message: 'Enter the title of your project.'}, 

    {type: 'input',
    name: 'Description',
    message: 'Add a description for your project.'},

    {type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?'},

    {type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.'},
    //would you like to add screenshots? T or F, if F then follow up question for image link; else skip

    {type: 'checkbox',
    name: 'License',
    message: 'Select the license used',
    choices: ['MIT', 'ISC', 'None of the Above']},

    {type: 'input',
    name: 'Contributing',
    message: 'List your collaborators, if any, with links to their GitHub profiles.'},

    {type: 'input',
    name: 'Tests',
    message: 'If you created tests for your application, please provide them below.'}

];
// Import generateMarkdown
function importMD(){
    fs.readFile('./utils/generateMarkdown.js', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
   // console.log(data)

  });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    importMD();
 fs.writeFile('/README.md', generateMarkdown(data), err => {
   if (err) throw err;

   console.log('README is complete!');
 });
};

// TODO: Create a function to initialize app
function init() {
    const promptUser = () => {
        return  inquirer.prompt(questions)

         // Write the user response to a file by chaining the below callback method to the prompt above.
        .then(function(data){
        //writeToFile();
        // {
            // Bonus: Generate the name of your user file from their input
            // const filename =
            // data.title
            //     .toLowerCase()
            //     .split(' ')
            //     .join('') + '.json';

            // fs.writeFile('readme.json', JSON.stringify(data, null, '\t'), function(err) {
            // if (err) {
            //     return console.log(err);
            // }

            return console.log('Your data has been stored')

            });
        };
    
    promptUser()
    .then(writeToFile);
};


// Function call to initialize app
init();
