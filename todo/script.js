let tasInput=document.getElementById("taskInput");
let addBtn=document.getElementById("addBtn");
let taskList=document.getElementById("taskList");
let count=document.getElementById("count");


let tasks = [];

function render() {
    taskList.innerHTML = "";

    for(let i=0; i<tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i].text + " ";

        if (tasks[i].done) {
            li.style.textDecoration ="line-through";
        }

        li.addEventListener("click", function() {
            tasks[i].done=!tasks[i].done;
            render();
        });

        let delBtn = document.createElement("button");
        delBtn.textContent="Delete";
        delBtn.addEventListener("click", function(event) {
            event.stopPropagation()
            tasks.splice(i, 1);
            render();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
    }

    count.textContent="Tasks: "+tasks.length;
}

function addTask() {
    if (taskInput.value === "") {
        return;
    }
    tasks.push({ text: taskInput.value, done: false});
    taskInput.value ="";
    render();
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event){
    if (event.key ==="Enter") {
        addTask();
    }
});
