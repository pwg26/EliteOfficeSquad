const { Employee, Manager, Engineer, Intern } = require("../src/classes");

describe("Employee class", () => {
  describe("getName method", () => {
    it("displays inputed employee name", () => {
      const Employee1 = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee1.getName();
      expect(Employee1.name).toBe("Dave");
    });
  });

  describe("getId method", () => {
    it("displays inputed employee's ID", () => {
      const Employee1 = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee1.getId();
      expect(Employee1.id).toBe(5);
    });
  });

  describe("getEmail method", () => {
    it("displays inputed employee's Email", () => {
      const Employee1 = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee1.getEmail();
      expect(Employee1.email).toBe("dave@manager.com");
    });
  });

  describe("getRole method", () => {
    it("displays the employee role", () => {
      const Employee1 = new Employee("Pierce", 1869, "kcaskade@gmail.com");
      Employee1.getRole();
      expect(Employee1.getRole()).toBe("Employee");
    });
  });
});
