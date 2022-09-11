DROP DATABSE IF EXISTS department_db;
CREATE DATABSE department_db;

USE department_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dpt_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT DECIMAL,  /* NEED TO CHECK */
    dpt_id INT,
    FOREIGN KEY (dpt_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id),
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id),
)