
SELECT *
FROM employee
JOIN roles
ON employee.role_id = roles.id;

SELECT * 
FROM roles
JOIN departments
ON roles.dpt_id = departments.id

