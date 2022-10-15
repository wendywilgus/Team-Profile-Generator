const path = require("path");
const fs = require("fs");
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const cards = path.resolve(__dirname, 'src/cards');

const generateHTML = Employee =>  {
    const writeHTML = [];

    writeHTML.push(Employee
        .filter(Employee => Employee.getTitle() === "Manager")
        .map(Manager => writeManager(manager))
    );
    writeHTML.push(Employee
        .filter(Employee => Employee.getTitle() === "Engineer")
        .map(Manager => writeEngineer(engineer))
    );
    writeHTML.push(Employee
        .filter(Employee => Employee.getTitle() === "Intern")
        .map(Manager => writeIntern(intern))
    );
}