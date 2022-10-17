//required Node modules
const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

//link to script for generating HTML page
const writeTeam = require("./src/generateHTML");
let employeeArray = [];
//Questions to begin app

function createManager() {
  console.log("Please follow the prompts to create your team. ");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        validate: (nameEntry) => {
          if (nameEntry) {
            return true;
          } else {
            console.log("Please enter a name for the manager.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the managers's id?",
        name: "id",
        validate: (idValidation) => {
          if (!isNaN(idValidation)) {
            //possibly write as (!isNaN(parseInt(idValidation)))
            return true;
          } else {
            console.log("Please enter a numeric value for the employee's id.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
        validate: (ans) => {
          if (ans === "") {
            return "Please enter an email address.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
        validate: (idValidation) => {
          if (!isNaN(idValidation)) {
            //possibly write as (!isNaN(parseInt(idValidation)))
            return true;
          } else {
            console.log(
              "Please enter a numeric value for the manager's office number."
            );
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Do you want to add anyone else to the team?",
        choices: ["Engineer", "Intern", "Finished"],
        name: "title",
      },
    ])
    .then((ans) => {
      employeeArray.push(
        new Manager(
          ans.name.trim(),
          ans.id.trim(),
          ans.email.trim(),
          ans.officeNumber.trim()
        )
      );

      switch (ans.title) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Finished":
          writeTeam(employeeArray);
          break;
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        validate: (nameEntry) => {
          if (nameEntry) {
            return true;
          } else {
            console.log("Please enter a name for the engineer.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the engineer's id?",
        name: "id",
        validate: (idValidation) => {
          if (!isNaN(idValidation)) {
            //possibly write as (!isNaN(parseInt(idValidation)))
            return true;
          } else {
            console.log("Please enter a numeric value for the engineer's id.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
        validate: (ans) => {
          if (ans === "") {
            return "Please enter an email address.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the engineer's Github username?",
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
      {
        type: "list",
        message: "Do you want to add anyone else to the team?",
        choices: ["Engineer", "Intern", "Finished"],
        name: "title",
      },
    ])
    .then((ans) => {
      employeeArray.push(
        new Engineer(
          ans.name.trim(),
          ans.id.trim(),
          ans.email.trim(),
          ans.github.trim()
        )
      );

      switch (ans.title) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Finished":
          writeTeam(employeeArray);
          break;
      }
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the interns's name?",
        name: "name",
        validate: (nameEntry) => {
          if (nameEntry) {
            return true;
          } else {
            console.log("Please enter a name for the intern.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the intern's id?",
        name: "id",
        validate: (idValidation) => {
          if (!isNaN(idValidation)) {
            //possibly write as (!isNaN(parseInt(idValidation)))
            return true;
          } else {
            console.log("Please enter a numeric value for the intern's id.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
        validate: (ans) => {
          if (ans === "") {
            return "Please enter an email address.";
          }
          return true;
        },
      },
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
      {
        type: "list",
        message: "Do you want to add anyone else to the team?",
        choices: ["Engineer", "Intern", "Finished"],
        name: "title",
      },
    ])
    .then((ans) => {
      employeeArray.push(
        new Intern(
          ans.name.trim(),
          ans.id.trim(),
          ans.email.trim(),
          ans.school.trim()
        )
      );

      switch (ans.title) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Finished":
          writeTeam(employeeArray);
          break;
      }
    });
}

module.exports = createManager;
createManager();
// const init = () => {

//   addEmployee();
// };

// const addEmployee = async () => {
//   await inquirer
//     .prompt(employeeBasic)
//     .then((response) => {
//       let name = response.name;
//       let id = response.id;
//       let email = response.email;
//       let title = response.title;
//       let officeNumber;
//       let github;
//       let school;

//     if (title === "Manager") {
//       inquirer.prompt(managerPrompt).then((response) => {
//         officeNumber = response.officeNumber;
//         let employee = new Manager(name, id, email, officeNumber, title);
//         employeeArray.push(employee);
//         newEmployee(employeeArray);
//         console.log("employeeArray", employeeArray);
//       });
//     } else if (title === "Engineer") {
//       inquirer.prompt(engineerPrompt).then((response) => {
//         github = response.github;
//         let employee = new Engineer(name, id, email, github, title);
//         employeeArray.push(employee);
//         newEmployee(employeeArray);
//       });
//     } else if (title === "Intern") {
//       inquirer.prompt(internPrompt).then((response) => {
//         school = response.school;
//         let employee = new Intern(name, id, email, school, title);
//         employeeArray.push(employee);
//         newEmployee(employeeArray);
//       });
//     }
//   });
// };

// const newEmployee = async (array) => {
//   await inquirer
//     .prompt({
//       type: "confirm", //boolean yes or no
//       name: "newEmployee",
//       message: "Do you want to add a new employee?",
//     })
//     .then(async (response) => {
//       // console.log("response", response);
//       var createNew = response.newEmployee;
//       if (await createNew === true) {
//         addEmployee();
//       } else if (await createNew === false) {
//         if (!fs.existsSync(newFile)) {
//           fs.mkdirSync(newFile);
//         }
// console.log("filePath", filePath);
// console.log("array", array);
// console.log("generateHTML(array)", generateHTML(array));

// init();
