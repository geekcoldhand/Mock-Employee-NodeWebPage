const employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
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
