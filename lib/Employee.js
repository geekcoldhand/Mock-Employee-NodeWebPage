class Employee {
  constructor(name, id, email) {
    if (typeof name === "string") {
      this.name = name;
    } else {
      console.error("input string");
    }

    if (typeof id === "number") {
      this.id = id;
    } else {
      console.error("input number");
    }

    if (typeof email === "string") {
      this.email = email;
    } else {
      console.error("input string");
    }
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
