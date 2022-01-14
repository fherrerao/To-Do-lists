import './style.css';
import Collection from './functions'

document.addEventListener('DOMContentLoaded', Collection.showTasks());

const trashIcon = document.querySelectorAll('.trash-icon');
const iconDots = document.querySelectorAll('.icon') 
for (let i=0; i<Collection.tasks.length; i += 1){
  iconDots[i].setAttribute('id',i);  
}

const label = document.querySelectorAll('.label');
label.forEach(item => {
  item.addEventListener('click', (e) => {  
    e.preventDefault();
    let task = e.currentTarget.innerHTML;    
    let index = e.currentTarget.nextSibling.nextSibling.id;    
    trashIcon[index].classList.remove('d-none')
    trashIcon[index].addEventListener('click', () => {
      Collection.deleteTask(task);
      location.reload();      
    })
    iconDots[index].classList.add('d-none')            
  });
})

label.forEach(item => {
  item.addEventListener('blur', (e) => {  
    e.preventDefault();    
    let index = e.currentTarget.nextSibling.nextSibling.id;    
    setTimeout(() => {
      trashIcon[index].classList.add('d-none')    
      iconDots[index].classList.remove('d-none') 
    }, 90);                 
  });
})

label.forEach(item => {
  item.addEventListener('input', (e) => {    
    let index = e.currentTarget.nextSibling.nextSibling.id;
    Collection.tasks[index].description = item.innerHTML
    Collection.setLocalStorage();    
  })  
})


const inputDescription = document.querySelector('.add');
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && inputDescription.value !== "") {    
    Collection.createTask(inputDescription.value);
    Collection.setLocalStorage(); 
    location.reload();
    input.value = '';
  }
});