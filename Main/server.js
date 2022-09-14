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

async function addDepartment() {
    await inquirer
    .prompt([
        {
            type: "input",
            name: "dpt_name",
            message: "What is the department name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the department's id #?"
        }
    ])
    .then((answers) => {
        db.query("INSERT INTO departments SET ?", {
            dpt_name: answers.dpt_name,
            id: answers.id,
        });
    });
   runApp();
};

async function addRoll() {
    await inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the new role?"
        },
        {
            type: "input",
            name: "dpt_id",
            message: "Which department id does the role belong to?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of this position?"
        },
        {
            type: "input",
            name: "id",
            message: "What is this role's id #?"
        }
    ])
    .then((answers) => {
        db.query("INSERT INTO roles SET ?", {
            id: answers.id,
            title: answers.title,
            dpt_id: answers.dpt_id,
            salary: answers.salary,
        });
    });
   runApp();
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
