function checkAge() {
    const age = parseInt(document.getElementById("number").value);
    const resultText = document.getElementById("result");

    if (isNaN(age)) {
        resultText.textContent = "กรุณากรอกตัวเลขที่ถูกต้อง!";
        return;
    }

    if (age >= 0 && age <= 12) {
        resultText.textContent = "คุณเป็น 'เด็ก'";
    } else if (age >= 13 && age <= 19) {
        resultText.textContent = "คุณเป็น 'วัยรุ่น'";
    } else if (age >= 20) {
        resultText.textContent = "คุณเป็น 'ผู้ใหญ่'";
    } else {
        resultText.textContent = "กรุณากรอกตัวเลขที่ถูกต้อง!";
    }
}

function checkNumber() {
    const number = parseInt(document.getElementById("number").value);
    const resultText = document.getElementById("result");

    if (isNaN(number)) {
        resultText.textContent = "กรุณากรอกตัวเลขที่ถูกต้อง!";
        return;
    }

    if (number % 2 === 0) {
        resultText.textContent = "เลขคู่";
    } else {
        resultText.textContent = "เลขคี่";
    }
}
