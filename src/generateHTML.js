// const path = require("path");
const fs = require("fs");
// const Employee = require("../lib/employee");
// const Manager = require("../lib/manager");
// const Intern = require('../lib/intern')
// const cards = path.resolve(__dirname, "/Users/wendywilgus/git/wendywilgus/Team Profile Generator/src");
function createCards(team) {
    let card = "";
    team.forEach(employee => {
        if(employee.getTitle() === 'Manager')   {
            card +- `<div class="cards border-dark mb-3" style="width: 18rem;">
                    <div class="card-header">
                        <h3 class="card-title">${employee.getName()}</h3>
                        <h4 class="card-title"><i class="fa-solid fa-people-roof"></i> Manager</h4>
                
                    </div>
                    <div class="card-body">
                        <ul  class='list-group'>
                            <li class="list-group-item" id="borderBot">ID: ${employee.getId()}</li>
                            <li class="list-group-item" id="borderBot">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>\n`
        } else if(employee.getTitle() === 'Engineer')  {
            card +- `<div class="cards border-dark mb-3" style="width: 18rem;">
                    <div class="card-header">
                        <h3 class="card-title">${employee.getName()}</h3>
                        <h4 class="card-title"><i class="fa-solid fa-laptop-code"></i> Engineer</h4>
                
                    </div>
                    <div class="card-body">
                        <ul  class='list-group'>
                            <li class="list-group-item" id="borderBot">ID: ${employee.getId()}</li>
                            <li class="list-group-item" id="borderBot">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item"><a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>\n`
        } else if(employee.getTitle() === 'Intern')  {
            card +- `<div class="cards border-dark mb-3" style="width: 18rem;">
                    <div class="card-header">
                        <h3 class="card-title">${employee.getName()}</h3>
                        <h4 class="card-title"><i class="fa-solid fa-graduation-cap"></i> Intern</h4>
                
                    </div>
                    <div class="card-body">
                        <ul  class='list-group'>
                            <li class="list-group-item" id="borderBot">ID: ${employee.getId()}</li>
                            <li class="list-group-item" id="borderBot">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item">School: ${employee.getSchool}</li>
                        </ul>
                    </div>
                </div>\n`
        }
    })
    return card;
};


function createHTML (fileName, html)    {
    fs.writeFile(fileName, html, err   =>  {
        if(err) {
            console.log(err);
        }
        console.log(
            "Your Team Profile has been created! Please open the index.html file in the 'dist' folder.");
    })
}

function writeTeam(team)   {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>My Team</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" href="/Users/wendywilgus/git/wendywilgus/Team Profile Generator/src/style.css"/>
        <script src="https://kit.fontawesome.com/a4998862a7.js" crossorigin="anonymous"></script>
       
    </head>
    
    
    <body>
        <header class="jumbotron text-center" >
            <h1>My Team</h1>
        </header>
    
        <main class="container">
            <div class="row">
                <div class="employees col-12 d-flex flex-wrap justify-content-between">
                    ${createCards(team)}
                    
                </div>
            </div>
        </main>
        <script src="./Users/wendywilgus/git/wendywilgus/Team Profile Generator/src/generateHTML.js"></script>
    </body>
    </html>`

    createHTML("./Users/wendywilgus/git/wendywilgus/Team Profile Generator/dist/index.html", html);
}
    
module.exports = writeTeam;
