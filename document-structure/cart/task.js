// Получаем все элементы с классом "product"
const products = document.querySelectorAll('.product');

// Обрабатываем каждый товар
products.forEach(product => {
  // Находим элементы внутри товара
  const quantityValue = product.querySelector('.product__quantity-value');
  const addToCartButton = product.querySelector('.product__add');

  // Обработчик события для кнопки добавления в корзину
  addToCartButton.addEventListener('click', () => {
    // Получаем артикул товара
    const productId = product.getAttribute('data-id');
    
    // Получаем текущее количество товара
    const quantity = parseInt(quantityValue.textContent);

    // Проверяем, есть ли товар уже в корзине
    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

    if (cartProduct) {
      // Если товар уже в корзине, увеличиваем его количество
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      const currentCount = parseInt(cartProductCount.textContent);
      cartProductCount.textContent = currentCount + quantity;
    } else {
      // Если товара нет в корзине, добавляем его
      const cartProducts = document.querySelector('.cart__products');

      // Создаем элемент товара в корзине
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.setAttribute('data-id', productId);

      // Копируем изображение товара
      const productImage = product.querySelector('.product__image');
      const cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.setAttribute('src', productImage.getAttribute('src'));
      cartProduct.appendChild(cartProductImage);

      // Добавляем количество товара
      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = quantity;
      cartProduct.appendChild(cartProductCount);

      // Добавляем товар в корзину
      cartProducts.appendChild(cartProduct);
    }
  });

  // Обработчики событий для кнопок увеличения/уменьшения количества товара
  const quantityControls = product.querySelectorAll('.product__quantity-control');
  quantityControls.forEach(control => {
    control.addEventListener('click', () => {
      // Получаем текущее значение количества товара
      let currentValue = parseInt(quantityValue.textContent);

      // Проверяем, какая кнопка была нажата
      if (control.classList.contains('product__quantity-control_dec')) {
        // Если нажата кнопка уменьшения, уменьшаем количество на 1 (но не менее 1)
        currentValue = Math.max(currentValue - 1, 1);
      } else if (control.classList.contains('product__quantity-control_inc')) {
        // Если нажата кнопка увеличения, увеличиваем количество на 1
        currentValue++;
      }

      // Обновляем значение количества товара
      quantityValue.textContent = currentValue;
    });
  });
});