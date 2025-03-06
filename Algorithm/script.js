function calculateArea() {
    let radius = parseFloat(document.getElementById("radius").value);

    if (!isNaN(radius) && radius > 0) {
        let area = Math.PI * Math.pow(radius, 2); // พื้นที่วงกลม = π * r^2
        document.getElementById("result").innerText = `พื้นที่ของวงกลมคือ: ${area.toFixed(2)} ตารางหน่วย`;
    } else {
        document.getElementById("result").innerText = "กรุณากรอกค่ารัศมีที่ถูกต้อง (มากกว่า 0)";
    }
}
