const { Manager, Engineer, Intern, Employee } = require("./src/classes");
const inquirer = require("inquirer");
const fs = require("fs");

// ("use strict");

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
        // writeCard(
        //   newManager.getRole(),
        //   newManager.getName(),
        //   newManager.getId(),
        //   newManager.getEmail(),
        //   newManager.getOfficeNumber()
        // );
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
            Q2(answers2);
          });
      });
      break;
  }
};

init = () => {
  Q1();
};

init();
