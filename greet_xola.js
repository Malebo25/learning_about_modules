import chalk from "chalk";
import greet from "./greet.js";
import figlet from "figlet";
// call the function & print the result on the screen
const styledMessage = chalk.bgGreen.black(greet("Xola"));
console.log(styledMessage);

figlet.text(
  "Boo!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
