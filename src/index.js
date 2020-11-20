document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newform = document.getElementById('create-task-form');
  const input   = document.getElementById('new-task-description');

  newform.addEventListener("submit", addTask);
});

const addTask = event =>{
  event.preventDefault();
  const input = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = input.value;

  writeOnBoard(newTask);
  event.target.reset();
};

const writeOnBoard = task => {
  document.getElementById("tasks").appendChild(task);
};
