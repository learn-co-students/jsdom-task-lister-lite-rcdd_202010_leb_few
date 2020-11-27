document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoInput = document.querySelector("input[type='text']")
  const form = document.querySelector("#create-task-form")
  const submitButton = document.querySelector("input[type='submit']")
  const todoList = document.querySelector("#tasks")
  
  
  const renderHTML = () => { 
    const todo = `<li>
                    ${todoInput.value} <button class="delete">x</button>
                  </li>
                  `
    todoList.insertAdjacentHTML('afterbegin', todo)
  }
  
  const addTodo = e => { 
    e.preventDefault()
    if(todoInput.value.trim()){
        renderHTML()
        form.reset()
    }
  } 
  
  
  const deleteTodo = e => {
    const element = e.target
    if(element.classList.contains('delete')){
      element.parentElement.remove()
    }
  }
  
  form.addEventListener('submit', e => e.preventDefault())
  todoList.addEventListener('click', deleteTodo)
  submitButton.addEventListener('click', addTodo)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});
