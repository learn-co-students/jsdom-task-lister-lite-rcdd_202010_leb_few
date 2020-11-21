document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const newTaskForm = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  const renderApp = () => (list.innerHTML = taskList.renderTasks());

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(description.value);
    e.target.reset();
    renderApp();
  });

  list.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});