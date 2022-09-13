const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);

    if (!isNaN(parseInt(officeNum))) {
      this.officeNum = officeNum;
    } else {
      console.error("input string");
    }
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
