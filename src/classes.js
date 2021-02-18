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
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber = () => this.officeNumber;

  getRole = () => "Manager";
}

// engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub = () => `github.com/${this.github}`;

  getRole = () => "Engineer";
}

// itern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool = () => this.school;

  getRole = () => "Intern";
}

module.exports = { Employee, Manager, Engineer, Intern };
