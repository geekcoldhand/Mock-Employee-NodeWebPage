const employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    if (typeof github === "string") {
      this.github = github;
    } else {
      console.error("Input String value");
    }
    super(name, id, email);
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
