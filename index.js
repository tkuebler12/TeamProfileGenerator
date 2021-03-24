var Manager = require("./lib/manager");
var Engineer = require("./lib/engineer");
var Intern = require("./lib/intern");

var inquirer = require("inquirer");

var path = require("path");
var fs = require("fs");

var Output_dir = path.resolve(__dirname, "output");

var output = path.join(Output_dir, "team.html");
var render = require("./lib/render");

var teamMembers = [];
var idArray = [];

function mainMenu() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter your manager's name"
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter your manager's ID"
            },
            {
                type: "email",
                name: "managerEmail",
                message: "Enter your manager's email"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter your manager's office number"
            }
        ]).then(responses => {
            var manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(responses.managerId);
            addTeamMember();
        })
        }
        function createEngineer(){
            inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter your engineer's name"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter your engineer's ID"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter your engineer's email"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Enter your engineer's GitHub"
            }
            ]).then(responses => {
                var engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGitHub);
                teamMembers.push(engineer);
                idArray.push(responses.engineerId);
                addTeamMember();
            })
            }
        function createIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Enter your intern's name"
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Enter your intern's ID"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Enter your intern's email"
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "Enter your intern's school"
                }
            ]).then(responses => {
                var intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
                teamMembers.push(intern);
                idArray.push(responses.internId);
                addTeamMember;
            })
        }
        function addTeamMember() {
            inquirer.prompt([
                {
                    type: "list",
                    name: "newTeamMember",
                    message: "Which type of team member would you like to add?",
                    choices: ["engineer", "intern", "I don't want to add any team members"]
                }
            ]).then(responses => {
                switch(responses.newTeamMember) {
                    case "engineer":
                        createEngineer();
                        break;
                    case "intern":
                        createIntern();
                        break;
                    default: 
                    //Call team builder function
                }
            })
    }
    createManager();
}
mainMenu();