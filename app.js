// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const claerBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#fitler');
const taskInput = document.querySelector('#task');


// Function to load all event listeners
loadEventListeners();

// load all event listeners 
function loadEventListeners() {
    // add event task
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click',removeTask);
    // clear all tasks
    claerBtn.addEventListener('click', clearTasks);
}

// add task
function addTask(e) {
    e.preventDefault();


    if (taskInput.value === '') {
        alert('Add a task.')
    }else{

        //Create li element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // create text node and append to li 
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element 
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        //add iconHTML 
        link.innerHTML = '<i class="fas fa-minus-circle fa-lg red-text "></i>';
        // append the link to li
        li.appendChild(link); 
        // append li to ul 
        taskList.appendChild(li);
    }


    // clear input 
    taskInput.value = '';

}

// remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
         if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

         }
    }
}

// clear tasks 
function clearTasks(e){
     while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);  
     };
}





