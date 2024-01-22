import inquirer from "inquirer";
let autogenerated = Math.floor(Math.random() * 50) + 1;
let user = await inquirer.prompt({
    type: "number",
    name: "usernumber",
    message: "Enter your number between 1 to 50"
});
if (user.usernumber === autogenerated) {
    console.log("you have guessed the correct number");
}
else {
    console.log("Sorry! better luck next time");
}
console.log("correct number is", autogenerated);
