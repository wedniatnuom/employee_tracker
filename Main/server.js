const inquirer = require("inquirer");
const mysql = require("mysql2");

function runApp() {
  console.log("test running");
  return inquirer
    .prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
  .then((answers) => {
    if (answers.options === "View all departments") {
        viewDepartments();
    } else if (answers.options === "View all roles") {
        viewRolls();
    } else if (answers.options === "View all employees") {
        viewEmployees();
    } else if (answers.options === "Add a department") {
        addDepartment();
    } else if (answers.options === "Add a role") {
        addRoll();
    } else if (answers.options === "Add an employee") {
        addEmployee();
    } else if (answers.options === "Update an employee role") {
        updateEmployee();
    } return;
  }) 
}

function viewDepartments() {
    console.log("test 1")
    runApp()
};

function viewRolls() {
    console.log("test 2")
    runApp()
};

function viewEmployees() {
    console.log("test 3")
    runApp()
};

function addDepartment() {
    console.log("test 4")
    runApp()
};

function addRoll() {
    console.log("test 5")
    runApp()
};

function addEmployee() {
    console.log("test 6")
    runApp()
};

function updateEmployee() {
    console.log("test 7")
    runApp()
};

runApp();
