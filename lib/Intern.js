const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if (typeof school === "string") {
      this.school = school;
    } else {
      console.error("Input String value");
    }

    super(name, id, email);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
