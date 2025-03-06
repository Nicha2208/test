function loop() {
    const resultElement = document.getElementById("result");
    let result = "";
    
    for (let i = 0; i < 10; i++) {
        result += (i + 1) + " "; 
    }
    
    resultElement.textContent = result;
}

function getUserInput() {
    let input = "";
    
    while (input.toLowerCase() !== "exit") {
        input = prompt("กรอกข้อความ (พิมพ์ 'exit' เพื่อออก):");
        
        if (input.toLowerCase() !== "exit") {
            console.log("คุณพิมพ์: " + input);
        }
    }
    
    console.log("จบการทำงาน!");
}
