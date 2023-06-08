// Получаем ссылки на элементы управления размером шрифта
const fontLinks = document.querySelectorAll('.font-size');

// Получаем ссылку на элемент книги
const book = document.getElementById('book');

// Функция для изменения размера шрифта
function changeFontSize(event) {
	event.preventDefault();

	// Удаляем класс font-size_active у всех элементов
	fontLinks.forEach(link => {
		link.classList.remove('font-size_active');
	});

	// Добавляем класс font-size_active к выбранному элементу
	const selectedLink = event.target;
	selectedLink.classList.add('font-size_active');

	// Получаем выбранный размер шрифта из атрибута data-size
	const fontSize = selectedLink.getAttribute('data-size');

	// Удаляем все классы, начинающиеся с book_fs-
	book.className = book.className.replace(/(^|\s)book_fs-\S+/g, '');

	// Если выбран small, добавляем класс book_fs-small
	if (fontSize === 'small') {
		book.classList.add('book_fs-small');
	}

	// Если выбран big, добавляем класс book_fs-big
	if (fontSize === 'big') {
		book.classList.add('book_fs-big');
	}
}

// Назначаем обработчик события для каждого элемента управления размером шрифта
fontLinks.forEach(link => {
	link.addEventListener('click', changeFontSize);
});