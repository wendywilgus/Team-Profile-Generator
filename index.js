//required Node modules
const inquirer = require("inquirer");
const fs = require("fs");
const validator = require("email-validator");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

//link to script for generating HTML page
const generateHTML = require("./src/generateHTML");


//Questions to begin app
function createEmployee() {
    const employeeBasic = [{
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        validate: nameEntry =>  {
            if (nameEntry)  {
                return true;
            } else{
                console.log("Please enter a name for this employee.")
                return false;
            }
            }
        }, 
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'ID',
        validate: idValidation =>  {
            if (!isNaN(idValidation))  { //possibly write as (!isNaN(parseInt(idValidation)))
                return true;
            } else{
                console.log("Please enter a numeric value for the employee's ID.")
                return false;
                }
            }
    },  
    {   
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: validator.validate("test@email.com"), // true
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
    }
    ]
    return inquirer.prompt(createEmployee);

    function createManager() {
    managerPrompt = [{
            type: 'input',
            message: 'What is the office number for the manager?',
            name: 'officeNumber',
            validate: officeNumber =>   {
                if (officeNumber)   {
                    return true;
                } else{
                    console.log("Office number is required.");
                    return false;
                }
            }
        }];
        return inquirer.prompt(createEmployee);
    };

    function createEngineer() {
    engineerPrompt = [{
            type: 'input',
            message: 'What is their Github username?',
            name: 'github',
            validate: github =>   {
                if (github)   {
                    return true;
                } else{
                    console.log("Github username is required.");
                    return false;
                }
            }
        }];
        return inquirer.prompt(createEmployee);
};
    
    function createIntern() {
    internPrompt = [{
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'school',
            validate: school =>   {
                if (school)   {
                    return true;
                } else{
                    console.log("Name of school is required.");
                    return false;
                }
            }
        }];
        return inquirer.prompt(createEmployee);
}
}

async function addEmployee()    {
    let employeeArray = [];
    
}
//this is a change. 