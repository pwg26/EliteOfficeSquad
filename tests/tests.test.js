const { Employee, Manager, Engineer, Intern } = require("../src/classes");
// employee class
describe("Employee class", () => {
  describe("getName method", () => {
    it("displays inputed employee name", () => {
      const Emp = new Employee("Pierce", "1869", "kcaskade@gmail.com");
      Emp.getName();
      expect(Emp.name).toBe("Pierce");
    });
  });

  describe("getId method", () => {
    it("displays inputed employee's ID", () => {
      const Emp = new Employee("Pierce", "1869", "kcaskade@gmail.com");
      Emp.getId();
      expect(Emp.id).toBe("1869");
    });
  });

  describe("getEmail method", () => {
    it("displays inputed employee's Email", () => {
      const Emp = new Employee("Pierce", "1869", "kcaskade@gmail.com");
      Emp.getEmail();
      expect(Emp.getEmail()).toBe(
        `<a class= "text-dark" href = "mailto: "kcaskade@gmail.com"> kcaskade@gmail.com</a>`
      );
    });
  });

  describe("getRole method", () => {
    it("displays the inputed employee's role", () => {
      const Emp = new Employee("Pierce", "1869", "kcaskade@gmail.com");
      Emp.getRole();
      expect(Emp.getRole()).toBe("Employee");
    });
  });
});

// manager class
describe("Manager class", () => {
  describe("OfficeNumber method", () => {
    it("displays inputed managers's office number", () => {
      const M = new Manager("Pierce", "1869", "kcaskade@gmail.com", "666");
      M.getOfficeNumber();
      expect(M.getOfficeNumber()).toBe("Office #: 666");
    });
  });

  describe("getRole method", () => {
    it("displays the inputed manager's role", () => {
      const M = new Manager("Pierce", "1869", "kcaskade@gmail.com", "666");
      M.getRole();
      expect(M.getRole()).toBe("Manager");
    });
  });
});

// engineer class
describe("Engineer class", () => {
  describe("getGithub method", () => {
    it("displays inputed engineers's office number", () => {
      const E = new Engineer("Pierce", "1869", "kcaskade@gmail.com", "pwg21");
      E.getGithub();
      expect(E.getGithub()).toBe(
        `GitHub: <a class="text-dark" href = "github.com/pwg21"> pwg21</a>`
      );
    });
  });

  describe("getRole method", () => {
    it("displays the inputed engineers's role", () => {
      const E = new Engineer("Pierce", "1869", "kcaskade@gmail.com", "pwg21");
      E.getRole();
      expect(E.getRole()).toBe("Engineer");
    });
  });
});

// intern
describe("Intern class", () => {
  describe("getSchool method", () => {
    it("displays inputed Interns college", () => {
      const I = new Intern(
        "Pierce",
        "1869",
        "kcaskade@gmail.com",
        "Ball so Hard U"
      );
      I.getEmail();
      expect(I.getSchool()).toBe("School: Ball so Hard U");
    });
  });

  describe("getRole method", () => {
    it("displays the inputed Intern's role", () => {
      const I = new Intern(
        "Pierce",
        "1869",
        "kcaskade@gmail.com",
        "Ball so Hard U"
      );
      I.getRole();
      expect(I.getRole()).toBe("Intern");
    });
  });
});
