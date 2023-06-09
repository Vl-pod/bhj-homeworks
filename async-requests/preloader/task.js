const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

// Отображаем анимацию загрузки
loader.classList.add('loader_active');

// Отправляем GET-запрос по указанному адресу
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    // Обрабатываем полученные данные и создаем HTML для каждой валюты
    const valutes = data.response.Valute;
    const html = Object.keys(valutes)
      .map(key => {
        const valute = valutes[key];
        return `
          <div class="item">
            <div class="item__code">${valute.CharCode}</div>
            <div class="item__value">${valute.Value}</div>
            <div class="item__currency">руб.</div>
          </div>
        `;
      })
      .join('');

    // Вставляем HTML с данными о валютах в контейнер
    itemsContainer.innerHTML = html;

    // Скрываем анимацию загрузки
    loader.classList.remove('loader_active');
  })
  .catch(error => {
    // Обрабатываем ошибку, если запрос не удался
    console.error('Произошла ошибка:', error);

    // Скрываем анимацию загрузки
    loader.classList.remove('loader_active');
  });