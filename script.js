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

  
  const taskCell = document.createElement('td');
  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  taskTextSpan.classList.add('task-text');
  taskCell.appendChild(taskTextSpan);

  
  const dateCell = document.createElement('td');
  dateCell.textContent = date;

  const statusCell = document.createElement('td');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      listItem.classList.add('line-through');
      completedTasks++;
    } else {
      listItem.classList.remove('line-through');
      completedTasks--;
    }
    updateSummary();
  });
  statusCell.appendChild(checkbox);

 
  const deleteCell = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i" class="fa-solid fa-trash-can"></i>`;
  deleteBtn.classList.add('text-red-500', 'hover:text-red-700');
  deleteBtn.addEventListener('click', () => {
    listItem.remove();
    totalTasks--;
    if (checkbox.checked) {
      completedTasks--;
    }
    updateSummary();
  });
  deleteCell.appendChild(deleteBtn);

}
