//required Node modules
const inquirer = require("inquirer");
const fs = require("fs");


const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

//link to script for generating HTML page
const generateHTML = require("./src/generateHTML");
let employeeArray = [];
//Questions to begin app

  const employeeBasic = [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
      validate: (nameEntry) => {
        if (nameEntry) {
          return true;
        } else {
          console.log("Please enter a name for this employee.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "ID",
      validate: (idValidation) => {
        if (!isNaN(idValidation)) {
          //possibly write as (!isNaN(parseInt(idValidation)))
          return true;
        } else {
          console.log("Please enter a numeric value for the employee's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "list",
      message: "What is the title of this employee?",
      choices: ["Manager", "Engineer", "Intern"],
      name: "title",
    },
  ];
 
    managerPrompt = [
      {
        type: "input",
        message: "What is the office number for the manager?",
        name: "officeNumber",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Office number is required.");
            return false;
          }
        },
      },
    ];

    engineerPrompt = [
      {
        type: "input",
        message: "What is their Github username?",
        name: "github",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Github username is required.");
            return false;
          }
        },
      },
    ];

    internPrompt = [
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Name of school is required.");
            return false;
          }
        },
      },
    ];

const init = () =>  {
  console.log("Please follow the prompts to create your team. ")
  addEmployee()
};

const addEmployee = async () => {
  await inquirer.prompt(employeeBasic)
    .then((response)  =>  {
      let name  = response.name;
      let id = response.id;
      let email = response.email;
      let title = response.title;
      let officeNumber;
      let github;
      let school;

      if (title === "Manager") {
        inquirer.prompt(managerPrompt).then((response)  =>  {
          officeNumber = response.officeNumber;
          let employee = new Manager(name, id, email, officeNumber, title);
          employeeArray.push(employee);
          newEmployee(employeeArray);
        });
      } else if (title === "Engineer") {
        inquirer.prompt(engineerPrompt).then((response)  =>  {
          github = response.github;
          let employee = new Engineer(name, id, email, github, title);
          employeeArray.push(employee);
          newEmployee(employeeArray);
        });
      } else if (title === "Intern") {
        inquirer.prompt(internPrompt).then((response)  =>  {
          school = response.school;
          let employee = new Intern(name, id, email, school, title);
          employeeArray.push(employee);
          newEmployee(employeeArray);
      });
    }
  });
};

  

const newEmployee = async (array) => {
  await inquirer.prompt(
    { type: "confirm",//boolean yes or no
      name: "newEmployee",
      message: "Do you want to add a new employee?",

    }).then(async(response) =>  {
      let createNew = response.newEmployee;
      if (await createNew === true) {
        addEmployee();
      }
      else if (await createNew === false) {}
    });
}
init();