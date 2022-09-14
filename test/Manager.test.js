const { TestScheduler } = require("jest");
const manager = require("../lib/Manager");

test("returning the name, id, officeNum, and email", () => {
  const obj = new Manager("kay", 4, "k@gmail.com", 44);

  expect(Manager.getRole()).toBe("Manager");
  expect(obj.name).toBe("kay");
  expect(obj.id).toEqual(4);
  expect(obj.email).toBe("k@gmaill.com");
  expect(obj.officeNum).toEqual(44);
});
