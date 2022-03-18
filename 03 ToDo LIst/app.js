const taskVal = document.querySelector('#taskval'); //The Form Input
const addTaskBtn = document.querySelector('#addtask'); //The Add TAsk Btn
const tasks = document.querySelector('.tasks'); //The tasks ul
const task = document.querySelector('.task'); //The task li
const delTask = document.querySelector('.deltask'); //The delete btn
const clearTasks = document.querySelector('#cleartasks'); //The clear tasks btn

loadEventListeners();

function loadEventListeners() {
    addTaskBtn.addEventListener('click', addTask);
    tasks.addEventListener('click', removeTask);
    clearTasks.addEventListener('click', clearAll);
}


function addTask(e) {
    if (taskVal.value === '') {
        alert("PLEASE INPUT A VALID TASK");
    } else {
        let newTask = document.createElement('li');
        newTask.className = 'task';
        newTask.appendChild(document.createTextNode(taskVal.value));


        let link = document.createElement('a');
        link.className = "deltask";
        link.appendChild(document.createTextNode("X"));

        newTask.appendChild(link);

        tasks.appendChild(newTask);

        taskVal.value = '';
    }
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.classList.contains('deltask')) {
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