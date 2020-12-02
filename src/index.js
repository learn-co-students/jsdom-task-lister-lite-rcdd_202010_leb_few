document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
const button=document.getElementById("create-task-form");
button.addEventListener("submit",taskstring);

function taskstring (e) {
  e.preventDefault();
 const task=document.getElementById("new-task-description");
 const st=document.createElement('li');
 st.innerText= task.value;
 document.getElementById('tasks').appendChild(st);
}
});


