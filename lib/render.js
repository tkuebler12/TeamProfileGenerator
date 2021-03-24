var path = require("path");
var fs = require("fs");

var templateDirectory = path.resolve(__dirname, "../template");
var render = employees => {
    var html = [];
    html.push(employees
        .filter(employee => 
            employee.getRole() === "manager")
        .map(manager => 
            renderManager(manager).join("")
            )
        );
        html.push(employees
            .filter(employee => 
                employee.getRole() === "engineer")
            .map(engineer => 
                renderEngineer(engineer).join("")
                )
            );
            html.push(employees
                .filter(employee => 
                    employee.getRole() === "intern")
                .map(intern => 
                    renderIntern(intern).join("")
                    )
                );
                return renderMain(html.join(""));
}
var renderManager = manager => {
    var template = fs.readFileSync(path.resolve(templateDirectory, "manager.html"), "utf-8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
}
var renderEngineer = engineer => {
    var template = fs.readFileSync(path.resolve(templateDirectory, "engineer.html"), "utf-8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "officeNumber", engineer.getOfficeNumber());
    return template;
}
var renderIntern = intern => {
    var template = fs.readFileSync(path.resolve(templateDirectory, "intern.html"), "utf-8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "officeNumber", intern.getOfficeNumber());
    return template;
}
var renderMain = html => {
    var template = fs.readFileSync(path.resolve(templateDirectory, "main.html"), "utf-8");
    return replacePlaceholders(template, "team", html);
}
var replacePlaceholders = (template, placeholder, value) => {
    var pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
}
module.exports = render;