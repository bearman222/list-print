console.log("Welcome to Wierd Foods! 🌮")

const readLineSync = require("readline-sync");
let menu = ["turkey leg", "pig ears", "taco beans"]

function displayMenu() {
    console.log("Here is the current menu: ")
    for (i = 0; i < menu.length; i++) {
        console.log(i + ' ' + menu[i])
    }
}

let choice = '';
choice = readLineSync.keyInPause()

while (choice != 'quit') {
    console.clear()
    displayMenu()
    choice = readLineSync.question("add/del/quit: ")

    switch (choice) {
        case 'add':
            let item = readLineSync.question("Add Item: ");
            menu.push(item);
            break;
        case 'del':
            let num = readLineSync.question("Delete #: ");
            menu.splice(num, 1);
            console.debug('deleted');
            break;
        case 'quit':
            break;
        default:
            console.log("Hmm... I didn't get that.");
            break;
    }
}
