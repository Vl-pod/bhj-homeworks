// Функция для выполнения GET-запроса
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

// Функция для создания кнопок ответов
function createAnswerButtons(answers) {
  const pollAnswers = document.getElementById('poll__answers');

  // Очищаем содержимое элемента
  pollAnswers.innerHTML = '';

  answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.innerText = answer;
    button.addEventListener('click', () => {
      // Изменяем цвет кнопки во время клика
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
      setTimeout(async () => {
        // Возвращаем цвет кнопки после окончания клика
        button.style.backgroundColor = '';
        button.style.color = '';
        alert('Спасибо, ваш голос засчитан!');

        // Загружаем следующий опрос
        const nextPollData = await fetchData('https://students.netoservices.ru/nestjs-backend/poll');
        const pollTitle = document.getElementById('poll__title');
        pollTitle.innerText = nextPollData.data.title;
        createAnswerButtons(nextPollData.data.answers);
      }, 300);
    });
    pollAnswers.appendChild(button);
  });
}

// Загрузка первого опроса при загрузке страницы
window.addEventListener('DOMContentLoaded', async () => {
  const pollData = await fetchData('https://students.netoservices.ru/nestjs-backend/poll');
  const pollTitle = document.getElementById('poll__title');
  pollTitle.innerText = pollData.data.title;
  createAnswerButtons(pollData.data.answers);
});