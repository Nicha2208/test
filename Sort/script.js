       let numbers = [];

     // ฟังก์ชันสุ่มตัวเลข 100 ตัว
    function generateRandomArray() {
        numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
        document.getElementById("originalArray").textContent = numbers.join(", ");
        document.getElementById("sortedArray").textContent = "ยังไม่มีข้อมูล";
    }

     // Bubble Sort
    function bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

     // Selection Sort
    function selectionSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] > arr[minIndex]) {
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
    }

    function sortArray(method) {
        if (numbers.length === 0) {
            alert("กรุณาสุ่มตัวเลขก่อน!");
            return;
        }

         let sortedArray = method === 'bubble' ? bubbleSort([...numbers]) : selectionSort([...numbers]);
        document.getElementById("sortedArray").textContent = sortedArray.join(", ");
    }