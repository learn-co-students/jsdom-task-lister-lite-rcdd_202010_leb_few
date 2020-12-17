document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let task = document.getElementById('new-task-description')
  let list = document.getElementById('list')
  let ul = document.getElementById('tasks')

  form.addEventListener("submit",(e) => {
    e.preventDefault();
    let li = document.createElement('li')
    li.innerText = task.value
    li.style.color = "black"
    ul.appendChild(li)
  })
});
