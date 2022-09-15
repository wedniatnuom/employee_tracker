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
        addRole();
    } else if (answers.options === "Add an employee") {
        addEmployee();
    } else if (answers.options === "Update an employee role") {
        updateEmployee();
    } return;
  }) 
}

// Function to view all departments in the database:

function viewDepartments() {
        const viewDpts = `
        SELECT 
             departments.dpt_name AS Department,
             departments.id AS DepartmentID
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

// Function to view all roles in the database:

function viewRoles() {
    const viewRoles = `
    SELECT 
         roles.title AS JobTitle,
         roles.id As JobID,
         departments.dpt_name AS Department,
         roles.salary AS Salary
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

// Function to view all employees in the database:

function viewEmployees() {
    const viewEmplys = 
  `SELECT 
        employee.id AS ID,
        employee.manager_id AS ManagerId,
        employee.first_name AS FirstName,
        employee.last_name AS LastName,
        roles.title AS JobTitle,
        roles.salary AS Salary,
        departments.dpt_name AS Department
    FROM employee
    JOIN roles 
    ON employee.role_id = roles.id
    JOIN departments
    ON roles.dpt_id = departments.id`;

    db.query(viewEmplys, (err, emplys) => {
        if (err) {
            console.log(err);
             return;
          };
          console.table(emplys);
          runApp();
    });
};

// Function to add a new department:

async function addDepartment() {
    await inquirer
    .prompt([
        {
            type: "input",
            name: "dpt_name",
            message: "What is the department name?"
        },
    ])
    .then((answers) => {
        db.query("INSERT INTO departments SET ?", {
            dpt_name: answers.dpt_name,
        });
    });
   runApp();
};

// Function to add a new role:

async function addRole() {
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
    ])
    .then((answers) => {
        db.query("INSERT INTO roles SET ?", {
            title: answers.title,
            dpt_id: answers.dpt_id,
            salary: answers.salary,
        });
    });
   runApp();
};

// Function to add a new employee:

async function addEmployee() {
        await inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the employee's last name?"
            },
            {
                type: "input",
                name: "role",
                message: "What is the id number of their role?"
            },
            {
                type: "input",
                name: "manager",
                message: "What is their manager's employee ID#?"
            },
        ])
        .then((answers) => {
            db.query("INSERT INTO employee SET ?", {
                first_name: answers.firstName,
                last_name: answers.lastName,
                role_id: answers.role,
                manager_id: answers.manager,
            });
        });
       runApp();
    };


// Function to update and employee:

async function updateEmployee() {
    await inquirer
    .prompt([
        {
            type: "input",
            name: "getId",
            message: "What is the ID# of the employee you wish to update?"
        },
        {
            type: "input",
            name: "role",
            message: "What is the employee's role?"
        },
        {
            type: "input",
            name: "manager",
            message: "What is the id# of the employee's manager (NULL if they are moving into a management position)?"
        }
    ]).then((answers) => {
        const sql1 = "UPDATE employee SET role_id = ? WHERE id = ?"
        const sql2 = "UPDATE employee SET manager_id = ? WHERE id = ?"
        const roleParams = [answers.role,answers.getId];
        const managerParams = [answers.manager,answers.getId];
         db.query(sql1, roleParams);
         db.query(sql2, managerParams);
    });
    runApp();
};

runApp();
