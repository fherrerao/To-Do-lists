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
  const inputDescription = document.querySelector('.add').value;
  createTask(inputDescription);
  setLocalStorage();  
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
      items.id=element.index
      items.innerHTML = `
        <input type="checkbox" id="id-${element.index}">
        <label>${element.description}</label>
        <box-icon class="icon" name='dots-vertical-rounded'></box-icon>`;
      itemsContainer.appendChild(items);
    });
  }
};

document.addEventListener('DOMContentLoaded', showTasks());

const itemList = document.querySelectorAll('.item-list');
itemList.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const deleteTask = tasks.splice(item.id-1,1);
    //setLocalStorage()
    console.log(tasks);
  })
});
