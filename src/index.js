document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let subButton=document.getElementById("sub-button");
  let description=document.getElementById("new-task-description");
  let result=document.getElementById("tasks");
  
subButton.addEventListener( 'click', function( event ) {
result.innerHTML += '<li>' + description.value + ' <button onclick="Delete(this);">x</button> </li>';
    event.preventDefault();
  });

});

function Delete(del){
  del.parentNode.parentNode.removeChild(del.parentNode);
  }

    