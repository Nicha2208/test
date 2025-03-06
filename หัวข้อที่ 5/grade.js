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
    let letterGrade = getLetterGradeFromGPA(gpa);
    document.getElementById("result").innerText = `GPA ของคุณ: ${gpa}\nGrade: ${letterGrade}`;
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

function getLetterGradeFromGPA(gpa) {
    if (gpa >= 3.75) {
        return "A";
    }
    if (gpa >= 3.50) {
        return "B+";
    }
    if (gpa >= 3.00) {
        return "B";
    }
    if (gpa >= 2.50) {
        return "C+";
    }
    if (gpa >= 2.00) {
        return "C";
    }
    if (gpa >= 1.50) {
        return "D+";
    }
    if (gpa >= 1.00) {
        return "D";
    }
    return "F";
}
