const listContainer = document.querySelector('.list-container');
const itemsContainer = document.querySelector('.list-container');

export default class Collection {
  static tasks = [];

  static createTask = (task) => {
    const objTasks = {
      description: task,
      completed: false,
      index: Collection.tasks.length + 1,
    };
    Collection.tasks.push(objTasks);
    return objTasks;
  };

  static showTasks = () => {
    listContainer.innerHTML = '';
    Collection.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!Collection.tasks) {
      Collection.tasks = [];
    } else {
      Collection.tasks.forEach((element) => {
        const items = document.createElement('li');
        items.classList.add('item-list');
        items.id = element.index - 1;
        items.innerHTML = `
          <input type="checkbox" class="check">        
          <p class="label" contenteditable="true">${element.description}</p>
          <box-icon class="icon" name='dots-vertical-rounded'></box-icon>
          <box-icon class="trash-icon d-none" name='trash'></box-icon>`;
        itemsContainer.appendChild(items);
      });
    }
  };

  static deleteTask = (del) => {
    let indexArray;
    Collection.tasks.forEach((element, index) => {
      if (element.description === del) {
        indexArray = index;
      }
    });
    Collection.tasks.splice(indexArray, 1);
    Collection.setLocalStorage();
    window.location.reload();
  };

  static setLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(Collection.tasks));
  };
}
