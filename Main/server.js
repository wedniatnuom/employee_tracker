const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require('express');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'department_db'
    },
    console.log(`Connected to the departments_db database.`)
  );

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
        viewRoles();
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
        const viewDpts = `
        SELECT * 
        FROM departments`;        
        db.query(viewDpts, (err, dpts) => {
            if (err) {
                console.log(err);
                 return;
              };
              console.table(dpts);
              runApp();
        });
};

function viewRoles() {
    const viewRoles = `
    SELECT * 
    FROM roles 
    JOIN departments 
    ON roles.dpt_id = departments.id`;

    db.query(viewRoles, (err, roles) => {
        if (err) {
            console.log(err);
             return;
          };
          console.table(roles);
          runApp();
    });
};

function viewEmployees() {
    const viewEmplys = `
    SELECT * 
    FROM employee 
    JOIN roles 
    ON employee.role_id = roles.id
    JOIN departments
    ON roles.dpt_id = departments.id`

    db.query(viewEmplys, (err, emplys) => {
        if (err) {
            console.log(err);
             return;
          };
          console.table(emplys);
          runApp();
    });
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
