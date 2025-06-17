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
}