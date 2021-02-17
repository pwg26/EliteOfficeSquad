// employeeclass
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName = () => this.name;

  getId = () => this.id;

  getEmail = () => this.email;

  getRole = () => "Employee";
}

// manager class
class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole = () => "Manager";
}

// engineer class
class Engineer extends Employee {
  constructor(github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub = () => this.github;

  getRole = () => "Engineer";
}

// itern class
class Intern extends Employee {
  constructor(school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool = () => this.school;

  getRole = () => "Intern";
}

const a = new Employee("Nick", 4355, 345345);
const b = new Manager(1112);

console.log(b.getName());

module.exports = {
  Manager,
  Engineer,
  Intern,
};
