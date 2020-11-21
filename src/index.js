document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit",createNewTask);
});
const createNewTask=event=>{
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask=document.createElement("li");
  newTask.innerText= newTaskDescription.value;
  document.getElementById("tasks").appendChild(newTask);
  event.target.reset();
};