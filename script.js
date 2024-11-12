// script.js
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Ignore empty input

  // Create task card
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  // Task text element
  const taskTextElem = document.createElement("span");
  taskTextElem.className = "task-text";
  taskTextElem.innerText = taskText;
  taskTextElem.onclick = () => toggleComplete(taskCard);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => deleteTask(taskCard);

  // Append elements to task card
  taskCard.appendChild(taskTextElem);
  taskCard.appendChild(deleteBtn);

  // Add task card to task list
  const taskList = document.getElementById("task-list");
  taskList.appendChild(taskCard);

  // Clear input field
  taskInput.value = "";
}

function deleteTask(taskCard) {
  taskCard.remove();
}

function toggleComplete(taskCard) {
  taskCard.classList.toggle("completed");
}
