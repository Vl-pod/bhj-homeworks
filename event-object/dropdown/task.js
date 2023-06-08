// Получаем все элементы с классом dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события click для каждого dropdown
dropdowns.forEach((dropdown) => {
	// Находим необходимые элементы внутри текущего dropdown
	const valueElement = dropdown.querySelector('.dropdown__value');
	const listElement = dropdown.querySelector('.dropdown__list');

	// Добавляем обработчик события click на элемент с классом dropdown__value
	valueElement.addEventListener('click', () => {
		// Проверяем, содержит ли список класс dropdown__list_active
		const isActive = listElement.classList.contains('dropdown__list_active');

		// Если список активен, скрываем его, иначе показываем
		if (isActive) {
			listElement.classList.remove('dropdown__list_active');
		} else {
			listElement.classList.add('dropdown__list_active');
		}
	});

	// Добавляем обработчик события click на каждый элемент списка
	const linkElements = dropdown.querySelectorAll('.dropdown__link');
	linkElements.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault(); // Предотвращаем переход по ссылке

			// Закрываем список
			listElement.classList.remove('dropdown__list_active');

			// Устанавливаем новое значение в элемент dropdown__value
			valueElement.textContent = link.textContent;
		});
	});
});