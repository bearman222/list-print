// This is a JavaScript program written to demo input and data manipulation using readline-sync & Node.JS
console.log("Welcome to Weird Foods! 🌮");

// This is how we import the readline-sync package into the program.
const readLineSync = require("readline-sync");
// create the menu list object and fill with some values
let menu = ["turkey leg", "pig ears", "taco beans"];

// Use a function to easily display the entire menu
function displayMenu() {
    console.log("Here is the current menu: ");
    // loop will iterate through the menu list items and and print each to console.
    for (i = 0; i < menu.length; i++) {
        console.log(i + " " + menu[i]);
    }
}

let choice = "";
choice = readLineSync.keyInPause();

while (choice != "quit") {
    console.clear();
    displayMenu();
    choice = readLineSync.question("add/del/quit: ");

    switch (choice) {
        case "add":
            let item = readLineSync.question("Add Item: ");
            menu.push(item);
            break;
        case "del":
            let num = readLineSync.question("Delete #: ");
            menu.splice(num, 1);
            console.debug("deleted");
            break;
        case "quit":
            break;
        default:
            console.log("Hmm... I didn't get that.");
            break;
    }
}
