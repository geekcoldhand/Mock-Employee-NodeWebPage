const enginner = require("../lib/Intern");

test("returns the name, id, git and email", () => {
  const obj = new Intern(
    "xay",
    3,
    "x@gmail.com",
    "https://github.com/geekcoldhand"
  );

  expect(Manager.getRole()).toBe("Engineer");
  expect(obj.name).toBe("xay");
  expect(obj.id).toEqual(3);
  expect(obj.email).toBe("x@gmaill.com");
  expect(obj.gitHub).toBe("https://github.com/geekcoldhand");
});
