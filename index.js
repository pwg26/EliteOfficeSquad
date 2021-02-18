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
  redundant("Manager");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What's the team managers office number?`,
    },
    {
      type: "list",
      name: "type",
      message: "Add additional Engineer or Inten",
      choices: ["Engineer", "Intern"],
    },
  ]);
};

Q2 = () => {
  switch (answer) {
    case "Engineer":
      redundant("Manager");
      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What's the Engineers office Github?`,
        },
        {
          type: "list",
          name: "type",
          message: "Add additional Engineer or Inten",
          choices: ["Engineer", "Intern"],
        },
      ]);
      break;

    case "Intern":
      redundant("Manager");
      inquirer.prompt([
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
      ]);
      break;
  }
};
