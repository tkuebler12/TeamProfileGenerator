var Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "engineer";
    }
    github() {
        return this.github;
    }
}
module.exports = Engineer;