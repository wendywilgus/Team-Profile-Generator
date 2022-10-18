# Team Profile Generator

Module 10 Assignment
## Overview

This program is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The project was written using JavaScript, CSS, and HTML. 

Solving the problems of this project taught me to use Jest to run testing, create a directory structure for organizing materials, and use command-line prompts to generate an HTML webpage.

Link to sample website here: 


## Table of Contents

- [Story](#user-story)
- [Mockup](#mockup) 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Resources](#resources)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features cards listing employee names, titles, and other key info.]()

## Installation
The user should clone the repository from GitHub and install Node.js.  This application also requires the Inquirer module.

```bash
$ npm init -y
$ npm install
$ npm install inquirer

```

## Usage
The application will be invoked by using the following command:
node index.js


## License
This project was completed as part of Georgia Tech's Full Stack Development Boot Camp course. 
---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.



## Resources
The following resources were helpful in researching best practices and problem-solving on the project.
* [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

* [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

* [JavaScript Classes](https://www.w3schools.com/js/js_classes.asp)

* [JavaScript Class Syntax](https://www.w3schools.com/js/js_classes.asp)

* [Super Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

* [JavaScript RegExp Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)