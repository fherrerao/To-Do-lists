import './style.css';

const tasks = [
  {
    description: 'Study webpack',
    completed: false,
    index: 0,
  },
  {
    description: 'Review classes',
    completed: true,
    index: 1,
  },
  {
    description: 'Study objects',
    completed: false,
    index: 2,
  },
];

const itemsContainer = document.querySelector('.list-container');

const createTasks = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const items = document.createElement('li');
    items.classList.add('item-list');

    items.innerHTML = `
      <input type="checkbox" id="id-${tasks[i].index}">
      <label for="id-${tasks[i].index}">${tasks[i].description}</label>
      <box-icon class="icon" name='dots-vertical-rounded'></box-icon>`;

    itemsContainer.appendChild(items);
  }
};

document.addEventListener('DOMContentLoaded', createTasks());