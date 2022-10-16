const path = require("path");
const fs = require("fs");
// const Employee = require("../lib/employee");
// const Manager = require("../lib/manager");
// const Intern = require('../lib/intern')
const cards = path.resolve(__dirname, "/Users/wendywilgus/git/wendywilgus/Team Profile Generator/src");


const writeManager = (manager) => {
    // console.log("manager", manager);
    let template = fs.readFileSync(
      path.resolve(cards,
        "src/manager.html"),
      "utf8"
    );
    template = replacePlaceholders(template, "name", manager.getName());
    // template = replacePlaceholders(template, "title", manager.getTitle());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    // console.log("template", template);
    template = replacePlaceholders(
      template,
      "officeNumber",
      manager.getOfficeNumber()
    );
    return template;
  };

  const writeEngineer = (engineer) => {
    let template = fs.readFileSync(
      path.resolve(
        cards,
        "/Users/wendywilgus/git/wendywilgus/Team Profile Generator/src/engineer.html"
      ),
      "utf8"
    );
    template = replacePlaceholders(template, "name", engineer.getName());
    // template = replacePlaceholders(template, "title", engineer.getTitle());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
  };
  
  const writeIntern = (intern) => {
    let template = fs.readFileSync(
      path.resolve(
        cards,
        "/Users/wendywilgus/git/wendywilgus/Team Profile Generator/src/cards/intern.html"
      ),
      "utf8"
    );
    template = replacePlaceholders(template, "name", intern.getName());
    // template = replacePlaceholders(template, "title", intern.getTitle());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
  };

const replacePlaceholders = (template, placeholder, value) => {
  console.log("replacePlaceholders", {
    template,
    placeholder,
    value,
  });
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm"); 
  if (typeof template === "string") {
    const output = template.replace(pattern, value);
    console.log("output", output);
    return output;
  }
  return "did not find a string";
};

const generateHTML = (Employee) => {
  const writeHTML = [];

  writeHTML.push(
    Employee.filter((Employee) => Employee.getTitle() === "Manager").map(
      (Manager) => writeManager(Manager)
    )
  );

  writeHTML.push(
    Employee.filter((Employee) => Employee.getTitle() === "Engineer").map(
      (Engineer) => writeEngineer(Engineer)
    )
  );
  writeHTML.push(
    Employee.filter((Employee) => Employee.getTitle() === "Intern").map(
      (Intern) => writeIntern(Intern)
    )
  );
  console.log("writeHTML", writeHTML);
  console.log("writeHTML.join", writeHTML.join(""));
  const newfileCreated = createNewFile(writeHTML.join(""));
  console.log("newfileCreated", newfileCreated);
  return newfileCreated;
};





function createNewFile(html) {
  return fs.readFileSync(
    path.resolve(
      cards,
      "/Users/wendywilgus/git/wendywilgus/Team Profile Generator/src/cards/main.html"
    ),
    "utf8"
  );
}

const createHybridNewFile = (html) => {
  return "dumb stuff goes nowhere";
};

module.exports = generateHTML;
