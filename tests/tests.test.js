const { Employee, Manager, Engineer, Intern } = require("../src/classes");
// employee
describe("Employee class", () => {
  describe("getName method", () => {
    it("displays inputed employee name", () => {
      const Employee = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee.getName();
      expect(Employee.name).toBe("Dave");
    });
  });

  describe("getId method", () => {
    it("displays inputed employee's ID", () => {
      const Employee = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee.getId();
      expect(Employee.id).toBe(5);
    });
  });

  describe("getEmail method", () => {
    it("displays inputed employee's Email", () => {
      const Employee = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee.getEmail();
      expect(Employee.email).toBe("dave@manager.com");
    });
  });

  describe("getRole method", () => {
    it("displays the inputed employee's role", () => {
      const Employee = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee.getRole();
      expect(Employee.getRole()).toBe("Employee");
    });
  });
});

// manager
describe("Manager class", () => {
  describe("OfficeNumber method", () => {
    it("displays inputed managers's office number", () => {
      const M = new Manager("Pierce", 1869, "kcaskade@gmail.com", 666);
      M.getOfficeNumber();
      expect(M.getOfficeNumber()).toBe(666);
    });
  });

  describe("getRole method", () => {
    it("displays the inputed manager's role", () => {
      const M = new Manager("Pierce", 1869, "kcaskade@gmail.com", 666);
      M.getRole();
      expect(M.getRole()).toBe("Manager");
    });
  });
});

// engineer
describe("Engineer class", () => {
  describe("getGithub method", () => {
    it("displays inputed engineers's office number", () => {
      const E = new Engineer("Pierce", 1869, "kcaskade@gmail.com", "pwg21");
      E.getGithub();
      expect(E.email).toBe("github.com/pwg21");
    });
  });

  describe("getRole method", () => {
    it("displays the inputed engineers's role", () => {
      const E = new Engineer("Pierce", 1869, "kcaskade@gmail.com", "pwg21");
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
        1869,
        "kcaskade@gmail.com",
        "Ball so Hard U"
      );
      I.getEmail();
      expect(I.email).getSchool("Ball so Hard U");
    });
  });

  describe("getRole method", () => {
    it("displays the inputed Intern's role", () => {
      const I = new Intern(
        "Pierce",
        1869,
        "kcaskade@gmail.com",
        "Ball so Hard U"
      );
      I.getRole();
      expect(I.getRole()).toBe("Student");
    });
  });
});
