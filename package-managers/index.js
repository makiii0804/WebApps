let figlet = require("figlet");

console.log(
  figlet.textSync("Hello World!", {
    font: "slant",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);

console.log(
  figlet.textSync("Hello World!", {
    font: "3D-ASCII",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 160,
    whitespaceBreak: true,
  })
);