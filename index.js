//required Node modules
const inquirer = import('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


//link to script for generating HTML page
const generateHTML = require('./src/generateHTML');

//function to begin questions
function beginPrompt()  {
    const employeeBasic = [{
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    }, 
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'ID',
    },  
    {   
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {   
        type: 'list',
        message: 'What is the title of this employee?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
        ],
        name: 'title',
    }];

    return inquirer
        .prompt(employeeBasic);
}


// function to generate HTML page  
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // if success
        } else {
            console.log("Success! Your team profile has been created! Please open the index.html file.")
        }
    })
}; 