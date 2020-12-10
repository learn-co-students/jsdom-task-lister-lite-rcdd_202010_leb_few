document.addEventListener("DOMContentLoaded", () => {
document.getElementById("create-task-form").addEventListener("submit", function(event){
  event.preventDefault()
let newt=document.getElementById("new-task-description").value;
console.log(newt)
let t=document.getElementById("tasks").innerHTML =newt
  
  
  
});
  
});
