const { Manager, Engineer, Intern } = require("./src/classes");
const inquirer = require("inquirer");

function redundant(answer) {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What's the ${answer}'s name?`,
    },
    {
      type: "input",
      name: "ID",
      message: `What's team ${answer}'s ID.`,
    },
    {
      type: "input",
      name: "email",
      message: `Whats team ${answer}'s email.`,
    },
  ]);
}

Q1 = () => {
  redundant("manager");
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
    .then(function (answers) {
      Q2(answers);
    });
};

Q2 = (answers) => {
  switch (answers.type) {
    case "Engineer":
      redundant("Engineer");
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
            message: "Add additional Engineer or Inten",
            choices: ["Engineer", "Intern"],
          },
        ])
        .then(function (answers) {
          Q2(answers);
        });
      break;

    case "Intern":
      redundant("Intern");
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
            message: "Add additional Engineer or Inten",
            choices: ["Engineer", "Intern"],
          },
        ])
        .then(function (answers) {
          Q2(answers);
        });
      break;
  }
};

init = () => {
  Q1();
};

init();
