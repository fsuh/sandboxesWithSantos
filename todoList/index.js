// Collect the DOM elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task_input');
const dueDate = document.querySelector('#task_date');
const desText = document.querySelector('#task_Description');
const taskDisplay = document.querySelector('.task_list');
const isChecked = document.querySelector('input[type="checkbox"]')


// Define a storage for the inputed data
let taskArray = localStorage.getItem('taskArray')? JSON.parse(localStorage.getItem('taskArray')):[];

let data = () =>{
    taskArray.push({
        task: taskInput.value.trim(),
        date: dueDate.value,
        taskDes: desText.value,
        checked: false,
        id: Date.now(),
    });
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
    console.log(taskArray);
    DisplayTask();

}

// Create and Display new task
let DisplayTask = () => {
    taskDisplay.innerHTML = '';
    taskArray.map((todo) => {
        return(taskDisplay.innerHTML += `
        <li>
            <input id="${todo.id}" type="checkbox" onClick="doneTask(this)" />
            <label for="${todo.id}" class="ticked"></label>
            <span class='bold'>${todo.task}</span>
            <span class='small_text'>${todo.date}</span>
            <p>${todo.taskDes}</p>

            <span class='icons'>
                <i onClick="editTask(this)" class="fa-solid fa-pencil"></i>    
                <i onClick="deleteTask(this); DisplayTask()" class="fa-solid fa-trash-can"></i>
            </span>
        </li>
        `);
    });

}
// Deleting task
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    taskArray.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem('taskArray', JSON.stringify(data));
    console.log(taskArray);
}

// editing task
 let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    taskInput.value = selectedTask.children[2].innerHTML;
    dueDate.value = selectedTask.children[3].innerHTML;
    desText.value = selectedTask.children[4].innerHTML;

    deleteTask(e);
 }

// checking done task
let doneTask = (e) =>{
    let selectedTask = e.parentElement.parentElement;
    taskInput.value = selectedTask.checked;
}

 
 
// form validation
let formValidation = () => {
    if(taskInput.value === ''){
        alert('add a task first');
        taskInput.focus();
        taskDisplay.innerHTML= 'Task cannot be blank'
        console.log('failure')
    }else {
        console.log('success')
        data();
        form.reset();
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    formValidation();
})


