// Функция для смены активного объявления
const changeCase = (rotator) => {
	const cases = rotator.querySelectorAll('.rotator__case'); // Получаем все элементы rotator__case

	let currentIndex = 0; // Текущий индекс активного объявления

	// Функция для изменения стилей объявления
	const applyStyles = (caseElement) => {
		const color = caseElement.dataset.color || 'black'; // Получаем цвет текста из атрибута data-color или используем значение "black" по умолчанию

		caseElement.style.color = color; // Устанавливаем цвет текста
	};

	// Запускаем функцию applyStyles для всех объявлений
	cases.forEach(applyStyles);

	// Запускаем бесконечный цикл смены объявлений
	setInterval(() => {
		const currentCase = cases[currentIndex];
		const nextIndex = (currentIndex + 1) % cases.length; // Вычисляем индекс следующего объявления

		currentCase.classList.remove('rotator__case_active'); // Удаляем класс у текущего объявления
		cases[nextIndex].classList.add('rotator__case_active'); // Добавляем класс к следующему объявлению

		currentIndex = nextIndex; // Обновляем текущий индекс

		applyStyles(cases[nextIndex]); // Применяем стили к новому активному объявлению
	}, rotator.dataset.speed || 1000); // Получаем скорость смены слайдов из атрибута data-speed или используем значение 1000 (1 секунда) по умолчанию
};

// Получаем все элементы rotator на странице
const rotators = document.querySelectorAll('.rotator');

// Перебираем каждый rotator
rotators.forEach(changeCase);