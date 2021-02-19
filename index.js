const { Manager, Engineer, Intern, Employee } = require("./src/classes");
const inquirer = require("inquirer");
const fs = require("fs");

// ("use strict");

let content = `
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Team Builder</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
  </head>
  <body> 
  <nav class="navbar navbar-dark bg-dark justify-content-center">
  <h1 class= "text-white"> Assemble Team!</h1>
</nav>
  <div class="container">
      <div class="row d-flex justify-content-center">
  \n
`;

function writeCard(role, name, id, email, special, color, symbol) {
  content =
    content +
    `<div id= "first-card" class="card text-white ${color} m-3" style="max-width: 18rem">
      <div class="card-header">${symbol}  ${role}</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        
       <p> id: ${id} </p>
        <p> email: ${email} </p>
       <p> ${special}
        </p>
      </div>
    </div>`;
}

function redundant(answers) {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What's the ${answers}'s name?`,
    },
    {
      type: "input",
      name: "id",
      message: `What's team ${answers}'s ID.`,
    },
    {
      type: "input",
      name: "email",
      message: `Whats team ${answers}'s email.`,
    },
  ]);
}

Q1 = () => {
  redundant("manager").then((answers) => {
    newEmployee = new Employee(answers.name, answers.id, answers.email);
    inquirer
      .prompt([
        {
          type: "input",
          name: "office",
          message: `What's the team managers office number?`,
        },
        {
          type: "list",
          name: "type",
          message: "Add additional Engineer or Inten",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((answers2) => {
        newManager = new Manager(
          newEmployee.name,
          newEmployee.id,
          newEmployee.email,
          answers2.office
        );
        writeCard(
          newManager.getRole(),
          newManager.getName(),
          newManager.getId(),
          newManager.getEmail(),
          newManager.getOfficeNumber(),
          newManager.getColor(),
          newManager.getSymbol()
        );
        Q2(answers2);
      });
  });
};

Q2 = (answers2) => {
  switch (answers2.type) {
    case "Engineer":
      redundant("Engineer").then((answers) => {
        newEmployee = new Employee(answers.name, answers.id, answers.email);
        inquirer
          .prompt([
            {
              type: "input",
              name: "Git",
              message: `What's the Engineers Github?`,
            },
            {
              type: "list",
              name: "type",
              message:
                "Finish building team or add additional Engineer or Intern",
              choices: ["Finished", "Engineer", "Intern"],
            },
          ])
          .then((answers2) => {
            newEngineer = new Engineer(
              newEmployee.name,
              newEmployee.id,
              newEmployee.email,
              answers2.Git
            );
            writeCard(
              newEngineer.getRole(),
              newEngineer.getName(),
              newEngineer.getId(),
              newEngineer.getEmail(),
              newEngineer.getGithub(),
              newEngineer.getColor(),
              newEngineer.getSymbol()
            );
            Q2(answers2);
          });
      });
      break;

    case "Intern":
      redundant("Intern").then((answers) => {
        newEmployee = new Employee(answers.name, answers.id, answers.email);
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: `What's school did the intern attend?`,
            },
            {
              type: "list",
              name: "type",
              message:
                "Finish building team or add additional Engineer or Intern",
              choices: ["Finished", "Engineer", "Intern"],
            },
          ])
          .then((answers2) => {
            newEngineer = new Intern(
              newEmployee.name,
              newEmployee.id,
              newEmployee.email,
              answers2.School
            );
            writeCard(
              newIntern.getRole(),
              newIntern.getName(),
              newIntern.getId(),
              newIntern.getEmail(),
              newIntern.getSchool(),
              newIntern.getColor(),
              newIntern.getGetsymbol()
            );
            Q2(answers2);
          });
      });
      break;
    case "Finished":
      content =
        content +
        `</div>
        </div>
    </body>
  </html>`;
      fs.writeFile("dist/index2.html", content, function (err) {
        err ? console.log(err) : console.log("Success!");
      });

      break;
  }
};

init = () => {
  Q1();
};

init();
