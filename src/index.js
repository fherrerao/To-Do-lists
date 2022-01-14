import './style.css';

let tasks = [];

const btn = document.querySelector('.btn-clear');
const listContainer = document.querySelector('.list-container');

const createTask = (task) => {
  let objTasks = {
    description: task,
    completed: false,
    index: tasks.length+1
  }
  tasks.push(objTasks);  
  return objTasks;
}

const setLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showTasks();  
}

btn.addEventListener('click',() => {  
  // const inputDescription = document.querySelector('.add').value;
  // createTask(inputDescription);
  // setLocalStorage(); 
  // location.reload();
});

const itemsContainer = document.querySelector('.list-container');

const showTasks = () => {
  listContainer.innerHTML = '';  
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if(!tasks){
    tasks = [];    
  }
  else {    
    tasks.forEach(element => {
      const items = document.createElement('li');
      items.classList.add('item-list');
      items.id = element.index-1;
      items.innerHTML = `
        <input type="checkbox" id="id-${element.index}">        
        <p class="label" contenteditable="true">${element.description}</p>
        <box-icon class="icon" name='dots-vertical-rounded'></box-icon>
        <box-icon class="trash-icon d-none" name='trash'></box-icon>`;
        
      itemsContainer.appendChild(items);
      
    });
  }
};

const deleteTask = (del) => {
  
  let indexArray;
  tasks.forEach((element, index) => {    
    if(element.description === del){
      indexArray = index;
    }
  })
  tasks.splice(indexArray,1)
  setLocalStorage();
  location.reload();
}

document.addEventListener('DOMContentLoaded', showTasks());

const trashIcon = document.querySelectorAll('.trash-icon');
const iconDots = document.querySelectorAll('.icon') 
for (let i=0; i<tasks.length; i += 1){
  iconDots[i].setAttribute('id',i);  
}

const label = document.querySelectorAll('.label');

label.forEach(item => {
  item.addEventListener('click', (e) => {  
    e.preventDefault();
    let task = e.currentTarget.innerHTML;    
    let index = e.currentTarget.nextSibling.nextSibling.id;
    console.log(e.currentTarget.nextSibling.nextSibling.id);
    trashIcon[index].classList.remove('d-none')
    trashIcon[index].addEventListener('click', () => {
      deleteTask(task);
      location.reload();
    })
    iconDots[index].classList.add('d-none')            
  });
})
const inputDescription = document.querySelector('.add');
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && inputDescription.value !== "") {    
    
    createTask(inputDescription.value);
    setLocalStorage(); 
    location.reload();
    input.value = '';
  }
});