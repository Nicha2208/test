
// For loop to display numbers 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While loop to keep receiving input until "exit" is entered
let input;
while (input !== "exit") {
    input = prompt("Enter a value (type 'exit' to quit):");
    console.log(input);
}
