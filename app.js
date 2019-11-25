// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector('.collection');
const claerBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#fitler');
const taskInput = document.querySelector('#task');


// Function to load all event listeners
loadEventListeners();

// load all event listeners 
function loadEventListeners(){
    // add event task
    form.addEventListener('submit', addTask);
}

// add task
function addTask(e){
    e.preventDefault();


    if(taskInput.value === ''){
        alert('Add a task.')
    }
    
    //Create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element 
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //add iconHTML 
    link.innerHTML = '<i class="fas fa-minus-circle fa-lg red-text "></i>';
    // append the link to li
    li.appendChild(link);
    // append li to ul 
    taskList.appendChild(li);

    // clear input 
    taskInput.value='';

}



