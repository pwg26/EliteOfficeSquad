const { Manager, Engineer, Intern } = require("./src/classes");
const inquirer = require("inquirer");

("use strict");

function redundant(answers) {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What's the ${answers}'s name?`,
    },
    {
      type: "input",
      name: "ID",
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
  redundant("manager").then(() => {
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
      .then((answers) => {
        Q2(answers);
      });
  });
};

Q2 = (answers) => {
  switch (answers.type) {
    case "Engineer":
      redundant("Engineer").then(() => {
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
          .then((answers) => {
            Q2(answers);
          });
      });
      break;

    case "Intern":
      redundant("Intern").then(() => {
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
          .then(function (answers) {
            Q2(answers);
          });
      });
      break;
  }
};

init = () => {
  Q1();
};

init();
