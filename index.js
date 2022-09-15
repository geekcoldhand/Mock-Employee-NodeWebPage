const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { setFlagsFromString } = require("v8");

const staff = [];

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to make a new Employee?",
        name: "newEmployee",
        choices: ["yes", "no"],
      },
    ])
    .then((data) => {
      if (data.newEmployee === "yes") {
        newPerson();
      } else {
        //send array to end file makers
        employeePage(staff);
      }
    });
}
function newPerson() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Pick a role: ",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => {
      if (response.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter Manager name: ",
              name: "user",
            },
            {
              type: "input",
              message: "Enter manger Id number: ",
              name: "id",
            },
            {
              type: "input",
              message: "Enter your email: ",
              name: "email",
            },
            {
              type: "input",
              message: "Enter office number",
              name: "office",
            },
          ])
          .then((data) => {
            createManger(data);
            start();
          });
      }

      if (response.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter name: ",
              name: "user",
            },

            {
              type: "input",
              message: "Enter Id number: ",
              name: "id",
            },
            {
              type: "input",
              message: "Enter your email: ",
              name: "email",
            },
            {
              type: "input",
              message: "Enter your gitHub",
              name: "github",
            },
          ])
          .then((data) => {
            createEngineer(data);
            start();
          });
      }

      if (response.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter name: ",
              name: "user",
            },

            {
              type: "input",
              message: "Enter Id number: ",
              name: "id",
            },
            {
              type: "input",
              message: "Enter your email: ",
              name: "email",
            },
            {
              type: "input",
              message: "Enter your school",
              name: "school",
            },
          ])
          .then((data) => {
            createIntern(data);
            start();
          });
      }
    });
}
function createManger(response) {
  //data
  const name = response.user;
  const id = response.id;
  const email = response.email;
  const office = response.office;
  //object
  const managers = new Manager(name, id, email, office);
  staff.push(managers);
}
function createEngineer(response) {
  //data
  const name = response.user;
  const id = response.id;
  const email = response.email;
  const gitHub = response.gitHub;
  //object
  const engineers = new Engineer(name, id, email, gitHub);
  staff.push(engineers);
}
function createIntern(response) {
  //data
  const name = response.user;
  const id = response.id;
  const email = response.email;
  const school = response.school;
  //object
  const interns = new Intern(name, id, email, school);
  staff.push(interns);
}

function createEmployee(response) {
  //data
  const name = response.user;
  const id = response.id;
  const email = response.email;
  //object
  const employees = new Employee(name, id, email);
  staff.push(employees);
}

function employeePage(newEmployee) {
  console.log("emplyee has this:", newEmployee);
  head = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Bootstrap -->
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
  
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
      <title>Employee Managment</title>
  </head>`;
  body = `<body>
  <header style="
  height: 5rem;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  background: rebeccapurple;
"> My Team</header>
  <div class="container">`;

  bodyEnd = `</div>
  </body>
  </html>`;

  let content = ``;
  for (const index in newEmployee) {
    let name = newEmployee[index].name;
    let id = newEmployee[index].id;
    let email = newEmployee[index].email;

    let role = newEmployee[index].getRole();
    console.log("Emp role: ", role);

    let extraInfo = "";
    if (role === "Manager") extraInfo = "Office: " + newEmployee.officeNum;
    if (role === "Intern") extraInfo = "School: " + newEmployee.school;

    if (role === "Engineer") extraInfo = "Git: " + newEmployee.gitHub;

    content += `<div class="card">
    <div class="card-body">
    <h5 class="name card-title">Name: ${name}</h5>
    <h6 class="role card-subtitle mb-2 text-muted">Role: ${role}</h6>
    <p class="card-text">Id: ${id}</p>
    <a href="#" class="card-link">Email: ${email} </a>
    <p class="card-text">${extraInfo}</p>
  </div>
</div>`;
  }

  fs.writeFile("employee.html", `${head}${body}${content}${bodyEnd}`, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

start();
