const intern = require("../lib/Intern");

test("returns the name, id, school and email", () => {
  const obj = new Intern("jay", 3, "j@gmail.com", "Boku no Hero");

  expect(Manager.getRole()).toBe("Intern");
  expect(obj.name).toBe("jay");
  expect(obj.id).toEqual(3);
  expect(obj.email).toBe("j@gmaill.com");
  expect(obj.school).toBe("Boku no Hero");
});
