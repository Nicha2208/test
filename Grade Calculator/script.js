function calculateGPA() {
    const subjects = ["CSI101", "CSI102", "CSI203", "CSI204", "CSI305"];
    const credits = 3; 
    let totalCredits = 0;
    let totalGradePoints = 0;

    subjects.forEach(subject => {
        let score = parseFloat(document.getElementById(subject).value);
        if (isNaN(score) || score < 0 || score > 100) {
            alert("กรุณากรอกคะแนนระหว่าง 0 - 100 สำหรับทุกวิชา");
            return;
        }

        let gradePoint = getGradePoint(score);
        totalGradePoints += gradePoint * credits;  
        totalCredits += credits;
    });

    let gpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById("result").innerText = `GPA ของคุณ: ${gpa}`;
}

function getGradePoint(score) {
    if (score >= 80) {
        return 4.0;
    }
    if (score >= 75) {
        return 3.5;
    }
    if (score >= 70) {
        return 3.0;
    }
    if (score >= 65) {
        return 2.5;
    }
    if (score >= 60) {
        return 2.0;
    }
    if (score >= 55) {
        return 1.5;
    }
    if (score >= 50) {
        return 1.0;
    }
    return 0.0;
}
