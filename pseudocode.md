

js file using inquirer.js to prompt team members about their information in command line.
    Questions: 
        The first class is an Employee parent class with the following properties and methods:
            name
            id
                validation to ensure that user input is in the proper format.

            email
                validation to ensure that user input is in the proper format.

            record role as'Employee' or include list of types here???
            a LIST with the option to add an engineer or an intern or to finish building my team

            Manager Class 
                office number
                (needs to record Manager as job title)
                back to the menu

            Engineer Class
                GitHub username, 
                back to the menu
                (needs to record Engineer as job title)
            
            Intern Class
                school, 
                (needs to record Intern as job title)
                back to the menu

            Finish building my team, exit application,HTML generated
        

seperate file generate.js
    create elements of the HTML doc here.
    email address should have live link that populates the TO field of the email with the address (mail to:)
    Github username linked and opens new tab

    Parent Class Employee
        getName()
        getId()
        getEmail()
        getRole()—returns 'Employee'

        Class Manager
            officeNumber
            getRole()—overridden to return 'Manager'
        
        Class Engineer
            github—GitHub username
            getGithub()
            getRole()—overridden to return 'Engineer'

        Class Intern
            school
            getSchool()
            getRole()—overridden to return 'Intern'


function generateFile HTML file is generated
    fs
    fs.writeFile

CSS to style the cards displaying each member's information
HTML
    nav bar
    "My Team" centered
    red background

    body: white background
    Cards: blue top with Name on first line, title on second line, populate icon to match job title
        gray main
        white box for each element (3)

* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

Unit Test every part of code and ensure it passes with[Jest package](https://www.npmjs.com/package/jest) 

Submit video of functionality.   refer to the Fullstack Blog Video Submission Guide for additional guidance on creating a video.
    invoke from command line
    show functionality
    show generated HTML file
    show passing tests

Other Reqs
READMe
Sample HTML file generated
link to walk through video 

Submit:
    A walkthrough video 
    A sample HTML file generated using your application.
    The URL of the GitHub repository

