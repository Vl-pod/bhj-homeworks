// Получение ссылок на элементы DOM
const form = document.getElementById('form');
const progress = document.getElementById('progress');

// Обработчик события отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращение отправки формы по умолчанию

  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  if (file) {
    // Создание объекта FormData для отправки файла через AJAX
    const formData = new FormData();
    formData.append('file', file);

    // Создание объекта XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Обработчик события изменения состояния запроса
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Файл успешно загружен
          console.log('Файл успешно загружен');
        } else {
          // Возникла ошибка при загрузке файла
          console.error('Ошибка при загрузке файла');
        }
      }
    };

    // Обработчик события прогресса загрузки
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        progress.value = percent;
      }
    });

    // Отправка запроса на сервер
    xhr.open('POST', form.action);
    xhr.send(formData);
  }
});