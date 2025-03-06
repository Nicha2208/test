document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <span class="status" onclick="toggleTaskStatus(this)">❌</span> <span class="delete" onclick="deleteTask(this)">🗑️</span>`;
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
}

function toggleTaskStatus(element) {
    if (element.textContent === "❌") {
        element.textContent = "✔";
        element.parentElement.classList.add("completed");
    } else {
        element.textContent = "❌";
        element.parentElement.classList.remove("completed");
    }
    saveTasks();
}

function deleteTask(element) {
    element.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        const text = li.childNodes[0].textContent.trim();
        const completed = li.classList.contains("completed");
        tasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `${task.text} <span class="status" onclick="toggleTaskStatus(this)">${task.completed ? "✔" : "❌"}</span> <span class="delete" onclick="deleteTask(this)">🗑️</span>`;
        if (task.completed) li.classList.add("completed");
        document.getElementById("taskList").appendChild(li);
    });
}
