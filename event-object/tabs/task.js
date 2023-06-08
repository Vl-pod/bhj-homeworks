// Находим все элементы с классом "tab"
const tabs = document.querySelectorAll('.tab');

// Находим все элементы с классом "tab__content"
const tabContents = document.querySelectorAll('.tab__content');

// Функция для обработки события клика на вкладке
function handleTabClick(event) {
	// Удаляем класс "tab_active" у всех вкладок
	tabs.forEach(tab => {
		tab.classList.remove('tab_active');
	});

	// Добавляем класс "tab_active" для текущей вкладки
	event.target.classList.add('tab_active');

	// Получаем индекс текущей вкладки
	const tabIndex = Array.from(tabs).indexOf(event.target);

	// Перебираем все содержимое вкладок
	tabContents.forEach(content => {
		// Удаляем класс "tab__content_active" у всех содержимого вкладок
		content.classList.remove('tab__content_active');
	});

	// Добавляем класс "tab__content_active" для соответствующего содержимого вкладки
	tabContents[tabIndex].classList.add('tab__content_active');
}

// Регистрируем обработчик события "click" для каждой вкладки
tabs.forEach(tab => {
	tab.addEventListener('click', handleTabClick);
});