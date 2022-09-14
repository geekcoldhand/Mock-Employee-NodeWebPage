const Employee = require("../lib/Employee");

test("role top be returned as employee", () => {
  const obj = new Employee("ray", 3, "h@gmail.com");

  expect(Employee.getRole()).toBe("employee");
  expect(obj.name).toBe("ray");
  expect(obj.id).toBe(3);
  expect(obj.email).toBe("h@gmaill.com");
});
