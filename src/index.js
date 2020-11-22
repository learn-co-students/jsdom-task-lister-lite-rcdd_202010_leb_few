document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
 
document.getElementById("create-task-form").addEventListener('submit', function(event) {
  
   let newTaskDesc = document.getElementById("new-task-description").value;
   let taskList = document.getElementById("tasks");
   
    taskList.innerHTML += `<li> ${newTaskDesc} </li>`;
    event.preventDeafault()
    
  });
});
