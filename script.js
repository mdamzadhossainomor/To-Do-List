let todoCount = 0;
let totalTasks = 0;
let completedTasks = 0;

const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const summary = document.getElementById("summary");

addButton.addEventListener("click", () => {
  const taskText = todoInput.value;
  if (taskText.trim() !== "") {
    addTodoItem(taskText);
    todoInput.value = "";
  }
});

function addTodoItem(taskText) {
  todoCount++;
  totalTasks++;
  updateSummary();

  const now = new Date();
  const date = `${now.getDate()}/${now.getMonth() + 1}`;

  const listItem = document.createElement("tr");

  const numCell = document.createElement("td");
  numCell.textContent = todoCount;

  const taskCell = document.createElement("td");
  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  taskTextSpan.classList.add("task-text");
  taskCell.appendChild(taskTextSpan);

  const dateCell = document.createElement("td");
  dateCell.textContent = date;

  const statusCell = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      listItem.classList.add("line-through");
      completedTasks++;
    } else {
      listItem.classList.remove("line-through");
      completedTasks--;
    }
    updateSummary();
  });
  statusCell.appendChild(checkbox);

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i" class="fa-solid fa-trash-can"></i>`;
  deleteBtn.classList.add("text-red-500", "hover:text-red-700");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
    totalTasks--;
    if (checkbox.checked) {
      completedTasks--;
    }
    updateSummary();
  });
  deleteCell.appendChild(deleteBtn);

  const editCell = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i  class="fa-solid fa-pen-to-square"></i>`;
  editBtn.classList.add("text-blue-500", "hover:text-blue-900");

  editBtn.addEventListener("click", () => {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskTextSpan.textContent;
    inputField.classList.add("border", "px-2", "py-1", "w-full");

    taskCell.innerHTML = "";
    taskCell.appendChild(inputField);

    inputField.focus();

    inputField.addEventListener("blur", () => {
      const updatedText = inputField.value.trim();
      if (updatedText !== "") {
        taskTextSpan.textContent = updatedText;
        taskCell.innerHTML = "";
        taskCell.appendChild(taskTextSpan);
      } else {
        taskCell.appendChild(taskTextSpan);
      }
    });
  });
  editCell.appendChild(editBtn);

  listItem.appendChild(numCell);
  listItem.appendChild(taskCell);
  listItem.appendChild(dateCell);
  listItem.appendChild(statusCell);
  listItem.appendChild(deleteCell);
  listItem.appendChild(editCell);

  todoList.appendChild(listItem);
}

function updateSummary() {
  const pendingTasks = totalTasks - completedTasks;
  summary.textContent = `${totalTasks} Total, ${completedTasks} Completed, ${pendingTasks} Pending`;
}
