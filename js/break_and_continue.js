(function ({

//    problem 1: create a file named break_and_continue.js in the js directory
//
//    problem 2: Prompt the user for an odd number between 1 and 50. Use a loop
//     and a break statement to continue prompting the user if they
//     enter invalid input.
//

var userInput = prompt("Enter a odd number between 1 and 50");
while(true){
    if (userInput % 2 === 0 || userInput < 1 || userInput > 50) {
        alert("Invalid input.");
        userInput = prompt("Enter a odd number between 1 and 50");
    } else {
        break;
    }
}


//problem 3: Use a loop and the continue statement to output all the odd
//      numbers between 1 and 50, except for the number the user
//      entered.
//

console.log("Skipped number: " + userInput);
for (var i = 1; i < 50; i++) {
    if (i === parseFloat(userInput)) {
        console.log("Skipping number: " + userInput)
        continue;
    }
    if (i % 2 !== 0)
        console.log("The odd number: " + i)
}


}());