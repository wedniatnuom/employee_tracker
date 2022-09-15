
# Employee Tracker

## Description

- Project Motivation: To gain a better understanding of using MySQL.

- Purpose: The course requirements were to build a command-line application that accepts user input.

- What did it solve: The application allows you to keep an organized database of employees. It helps you view their role, salary, department, and managaer all in one easy to query place.

- What I learned along the way: I was able to gain an understanding of the basic syntax of MySQL and what it is doing. Going in to this project I could copy segments of the syntax from other locations, but I wasn't able to see the "why" of how they were functioning. The assignment also allowed me to play with Inquirer a bit more to the point where I feel comfortable with it.

## Installation

Steps required to get off the ground: When opening the file you will want to start with an " npm install". This will ensure that you have inquirer and MySQL to use. Next, you will want to change the password in the server.js file on line 9. It has a placeholder password of "password" currently. You will need it to be the same as your own MySQL password. Then, you will want to use "mysql -u root -p" to start MySQL, and enter your password. You will want to then do the commands "source ./db/schema.sql" and "source ./db/seeds.sql". You can change the seeds.sql file to reflect your own employees and company, or leave it as is for testing. If you want to build your own team and departments from the application then you don't need to source the seeds.sql file. From there you can quit MySQL. The server.js file will reopen it when necessary. Finally, you will want to run "node server.js". This will start the application, and you can follow the prompts from there.

## Usage/Links

- How to use: Follow this link to watch a demo video: https://drive.google.com/file/d/19ukQ4ywomF-RzU89Sya8bsA0V38-SpDG/view?usp=sharing

- GitHub: https://github.com/wedniatnuom/employee_tracker

## Credits

NA

## Licence

N/A

## Features

NA
