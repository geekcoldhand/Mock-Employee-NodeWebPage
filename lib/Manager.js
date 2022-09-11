const employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNum) {
    if (typeof officeNum === "string") {
      this.officeNum = officeNum;
    } else {
      console.error("input string");
    }

    super(name, id, email);
  }

  getRole() {
    return "Manager";
  }
}
