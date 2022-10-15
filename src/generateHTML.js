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
    return newFile(writeHTML.join(""));
}

const writeManager = manager => {
    let template = fs.readFileSync(path.resolve(cards, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "title", manager.getTitle());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getID());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
}

const writeEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(cards, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "title", engineer.getTitle());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getID());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
}

const writeIntern = intern => {
    let template = fs.readFileSync(path.resolve(cards, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "title", intern.getTitle());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getID());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
}