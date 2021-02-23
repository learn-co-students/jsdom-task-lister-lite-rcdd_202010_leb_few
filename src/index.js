document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", AddTask);
});

const AddTask = event => {
  event.preventDefault();
  const task = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = task.value;
  task.value='';
   document.getElementById("tasks").appendChild(newTask);
};