import Collection from './functions.js';

const clear = () => {
  const result = Collection.tasks.filter((e) => e.completed === false);
  Collection.tasks = result;
  Collection.setLocalStorage();
  window.location.reload();
};

export { clear as default };
