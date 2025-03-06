
// Function to determine age category
function determineAgeCategory(age) {
    // ลบเท่ากับออก
    if (age < 13 && age >=0) {
        return "เด็ก";
    } else if (age >= 13 && age <= 19) {
        return "วัยรุ่น";
    } else {
        return "ผู้ใหญ่";
    }
}

// Function to check if a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "เลขคู่";
    } else {
        return "เลขคี่";
    }
}
