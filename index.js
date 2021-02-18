const { Manager, Engineer, Intern } = require("./src/classes");


var inquirer = require("inquirer");
const { switchCase } = require("babel-types");

const Basic = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's the employees name?",
        },
        {
            type: "input",
            name: "ID",
            message: "Whats the emloyees ID",
        },
        {
            type: "input",
            name: "eamil",
            message: "Whats the employees email",
        },
        {
            type: "list",
            name: "type",
            message: "What type of employee would you like to add?",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ]);
}

Q1().then(answer => {
    switch("Manager"){
        M1()
    }

  })

var x = new Manager("Nick", 4355, 345345);

console.log(x.getId());
