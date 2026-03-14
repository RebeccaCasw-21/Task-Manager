const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* Load tasks on page load */
document.addEventListener("DOMContentLoaded", loadTasks);

/* Event listener for adding task */
addBtn.addEventListener("click", addTask);

/* Allow Enter key to add task */
taskInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){
addTask();
}
});

/* Function: Load Tasks */
function loadTasks(){

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

const li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

const span = document.createElement("span");
span.textContent = task.text;

/* Toggle complete event */
span.addEventListener("click",function(){
toggleTask(index);
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.classList.add("deleteBtn");

/* Delete task event */
deleteBtn.addEventListener("click",function(){
deleteTask(index);
});

li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

/* Function: Add Task */
function addTask(){

const taskText = taskInput.value.trim();

if(taskText === "") return;

tasks.push({
text:taskText,
completed:false
});

saveTasks();

taskInput.value="";

loadTasks();
}

/* Function: Toggle Completed */
function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();

loadTasks();
}

/* Function: Delete Task */
function deleteTask(index){

tasks.splice(index,1);

saveTasks();

loadTasks();
}

/* Save to LocalStorage */
function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}
