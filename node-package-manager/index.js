let figlet = require("figlet");
let funnyWords = require("funny-words");


console.log(funnyWords("Don't worry, be happy!"));


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