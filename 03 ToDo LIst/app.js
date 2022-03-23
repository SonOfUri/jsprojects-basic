const taskVal = document.querySelector("#taskval"); //The Form Input
const addTaskBtn = document.querySelector("#addtask"); //The Add TAsk Btn
const tasks = document.querySelector(".tasks"); //The tasks ul
const task = document.querySelector(".task"); //The task li
const delTask = document.querySelector(".deltask"); //The delete btn
const clearTasks = document.querySelector("#cleartasks"); //The clear tasks btn
const searchVal = document.querySelector("#searchval"); //The search input
const searchValBtn = document.querySelector("#searchtaskbtn"); //The search button

const bg = document.body;

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', fetchTask)
    addTaskBtn.addEventListener("click", addTask);
    tasks.addEventListener("click", removeTask);
    clearTasks.addEventListener("click", clearAll);
    searchVal.addEventListener("keyup", searchForTask);
    bg.addEventListener("mousemove", bgManipulator);
}

function bgManipulator(e) {
    bg.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
}

function fetchTask() {
    let storedTask;
    if (localStorage.getItem('storedTask') === null) {
        storedTask = [];
    } else {
        storedTask = JSON.parse(localStorage.getItem('storedTask'));
    }

    storedTask.forEach(function(taskFetcher) {
        let newTask = document.createElement("li");
        newTask.className = "task";
        newTask.appendChild(document.createTextNode(taskFetcher));

        let link = document.createElement("a");
        link.className = "deltask";
        link.appendChild(document.createTextNode("X"));

        newTask.appendChild(link);
        tasks.appendChild(newTask);
    });
}




function addTask(e) {
    if (taskVal.value === "") {
        alert("PLEASE INPUT A VALID TASK");
    } else {
        let newTask = document.createElement("li");
        newTask.className = "task";
        newTask.appendChild(document.createTextNode(taskVal.value));
        let link = document.createElement("a");
        link.className = "deltask";
        link.appendChild(document.createTextNode("X"));
        newTask.appendChild(link);
        tasks.appendChild(newTask);
        persistTask(taskVal.value);

        taskVal.value = "";
    }
    e.preventDefault();
}

function persistTask(task) {
    let storedTask;
    if (localStorage.getItem('storedTask') === null) {
        storedTask = [];
    } else {
        storedTask = JSON.parse(localStorage.getItem('storedTask'));
    }
    storedTask.push(task);
    localStorage.setItem('storedTask', JSON.stringify(storedTask));


}


function removeTask(e) {
    if (e.target.classList.contains("deltask")) {
        e.target.parentElement.remove();
    }

    e.preventDefault();
}

function clearAll(e) {
    // tasks.innerHTML = ''; //This method is slow

    //Faster method
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }

    e.preventDefault();
}

function searchForTask(e) {
    let tasksArr = document.querySelectorAll(".task");
    const searchKey = e.target.value.toLowerCase();

    for (i = 0; i < tasksArr.length; i++) {
        if (
            tasksArr[i].firstChild.textContent.toLowerCase().indexOf(searchKey) != -1
        ) {
            //if indexOf is less than 0 it means chars searched are absent
            tasksArr[i].style.display = "block";
        } else {
            tasksArr[i].style.display = "none";
        }
    }

    e.preventDefault();
}