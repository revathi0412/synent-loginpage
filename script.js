function addTask(){

  let input = document.getElementById("taskInput");

  let li = document.createElement("li");

  li.innerHTML = input.value;

  document.getElementById("taskList").appendChild(li);

  localStorage.setItem(
    "tasks",
    document.getElementById("taskList").innerHTML
  );

  input.value="";
}

window.onload=function(){

  document.getElementById("taskList").innerHTML=
  localStorage.getItem("tasks");

}