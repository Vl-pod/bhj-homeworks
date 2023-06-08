let modal = document.getElementById("modal_main");

function openModal() { 
    modal.classList.add("modal_active"); // Функция, которая отк рывает модальное окно
}

  
function closeModal() {
	modal.classList.remove("modal_active"); // Функция, которая закрывает модальное окно
}

  
let modalClose = document.querySelector(".modal__close"); // Получаем элемент закрытия модального окна по классу

  
modalClose.addEventListener("click", closeModal); // Добавляем обработчик события клика на элемент закрытия модального окна


let showSuccess = document.querySelector(".show-success"); // Получаем элемент с классом show-success


function openModalSuccess() {
  let modalSuccess = document.getElementById("modal_success"); // Функция, которая открывает модальное окно "Хорошо сделано!"
  modalSuccess.classList.add("modal_active");
}

// Добавляем обработчик события клика на элемент с классом show-success
showSuccess.addEventListener("click", openModalSuccess);

modalClose.addEventListener("click", closeModal); // Добавляем обработчик события клика на элемент закрытия модального окна


setTimeout(openModal, 1000);

