document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("mySubmit").addEventListener("click", function(event){
  event.preventDefault()
});
document.getElementById("mySubmit").addEventListener("click", function(){
  
  let value= document.getElementById("new-task-description").value;
  if(value!="")
  {document.getElementById("tasks").innerHTML+=`<li> ${value}</li>`;}
})
});
