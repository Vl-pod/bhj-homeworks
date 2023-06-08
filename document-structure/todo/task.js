// Получаем необходимые элементы DOM
const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

// Функция для создания новой задачи
function createTask(title) {
  // Создаем элементы
  const taskElement = document.createElement('div');
  const taskTitleElement = document.createElement('div');
  const taskRemoveElement = document.createElement('a');

  // Устанавливаем классы для элементов
  taskElement.className = 'task';
  taskTitleElement.className = 'task__title';
  taskRemoveElement.className = 'task__remove';

  // Устанавливаем текст для задачи
  taskTitleElement.textContent = title;
  taskRemoveElement.textContent = '×';

  // Добавляем обработчик события для удаления задачи
  taskRemoveElement.addEventListener('click', function () {
    tasksList.removeChild(taskElement);
  });

  // Добавляем элементы в DOM
  taskElement.appendChild(taskTitleElement);
  taskElement.appendChild(taskRemoveElement);
  tasksList.appendChild(taskElement);
}

// Функция для обработки события добавления задачи
function handleTaskAdd(event) {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (title !== '') {
    createTask(title);
    taskInput.value = '';
  }
}

// Добавляем обработчик события для формы
tasksForm.addEventListener('submit', handleTaskAdd);