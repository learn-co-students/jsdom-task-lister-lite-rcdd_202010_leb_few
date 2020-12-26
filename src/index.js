document.addEventListener("DOMContentLoaded", () => {
let form = document.queryselector("#create-task-form");
let list = document.queryselector("#tasks");
let task = document.queryselector("#new-task-description");

form.addEventListener("submit",function(e) {
  e.preventdefault();
  list.innerHTML = `<li> ${task.value} <li>`
})
});
