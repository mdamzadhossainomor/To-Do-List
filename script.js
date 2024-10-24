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


  const numCell = document.createElement('td');
  numCell.textContent = todoCount;

}
