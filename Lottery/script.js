// ฟังก์ชันสุ่มเลขหวย 6 หลัก
function generateLotteryNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}

// สร้างเลขหวย
const lotteryNumber = generateLotteryNumber();
console.log("เลขหวยที่ออก:", lotteryNumber);

function checkLottery() {
    const userInput = document.getElementById("userGuess").value;
    const resultText = document.getElementById("result");

    // ตรวจสอบว่ากรอกเป็นตัวเลข 6 หลักหรือไม่
    if (!/^\d{6}$/.test(userInput)) {
        resultText.style.color = "red";
        resultText.textContent = "กรุณากรอกตัวเลข 6 หลัก!";
        return;
    }

    if (parseInt(userInput) === lotteryNumber) {
        resultText.style.color = "green";
        resultText.textContent = `🎉 ยินดีด้วย! คุณถูกรางวัล เลขที่ออกคือ ${lotteryNumber}`;
    } else {
        resultText.style.color = "red";
        resultText.textContent = `😢 เสียใจด้วย! เลขที่ออกคือ ${lotteryNumber}`;
    }
}
