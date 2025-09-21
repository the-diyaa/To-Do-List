const { createElement } = require("react");

const input = document.getElementById("search");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

window.addEventListener("DOMContentLoaded", loadTask);

addBtn.addEventListener("click" , addTask);

input.addEventListener("keypress" , (e) => {
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){
    const text = input.Value.trim();
    if(text == ""){
        alert("Please enter a task");
        return;
    }

    createTaskElement(text);
    savetask(text);
    input.Value = "";
}

function createTaskElement(text, completed = false){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    if(completed) span.classList.add("completed");
}

span.addEventListener("clicl" , () => {
    span.classList.toggle("completed");
    updateTaskStatus(taskText, span.classList.contains("completed"));
})

const delBtn = document.createElement("button");
delBtn.textContent = "❌";
delBtn.className = "delete";
delBtn.addEventListener("click", () => {
  li.remove();
  deleteTask(taskText);
});

li.appendChild(span);
li.appendChild(delBtn);
taskList.appendChild(li);

function saveTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
}

function updateTaskStatus(taskText, completed) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map(task =>
    task.text === taskText ? { ...task, completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
