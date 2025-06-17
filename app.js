const inputBox=document.querySelector("#input-box");
const todoList=document.querySelector(".todo-list");
const addBtn=document.querySelector("#add-btn");

addBtn.addEventListener("click",addTask);

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        todoList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

todoList.addEventListener("click",(e)=>{
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveTasks();
   }
   else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove();
     saveTasks();
   }
},false); 

//false-used for bottom -up(means inner class -> outer class -> body -> html)-default false generally,but most developers use it 99% of time
//true-used for top -down(means html -> body -> outer class -> inner class)

function saveTasks(){
    localStorage.setItem("tasks",todoList.innerHTML);
}

function showTasks(){
    todoList.innerHTML=localStorage.getItem("tasks");
}
showTasks();