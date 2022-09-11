INSERT INTO departments (id, dpt_name)
VALUES  (1, "Engineering"),
        (2, "Finance"),
        (3, "Legal"),
        (4, "Sales");

INSERT INTO roles (id, title, dpt_id, salary)
VALUES  (1, "Sales Lead", 4, 100000.00),
        (2, "Salesperson", 4, 80000.00),
        (3, "Lead Engineer", 1, 150000.00),
        (4, "Software Engineer", 1, 120000.00),
        (5, "Account Manager", 2, 160000.00),
        (6, "Accountant", 2, 125000.00),
        (7, "Legal Team Lead", 3, 250000.00),
        (8, "Lawyer", 3, 190000.00);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "John", "Doe", 1, NULL),
        (2, "Mike", "Chan", 2, 1),
        (3, "Ashley", "Rodriguez", 3, NULL),
        (4, "Kevin", "Tupik", 4, 3),
        (5, "Kumal", "Singh", 5, NULL),
        (6, "Malia", "Brown", 6, 5),
        (7, "Sarah", "Lourd", 7, NULL),
        (8, "Tom", "Allen", 8, 7);