const tooltips = document.querySelectorAll('.has-tooltip');

// Создаем элемент для подсказки
const tooltipElement = document.createElement('div');
tooltipElement.classList.add('tooltip');
document.body.appendChild(tooltipElement);

// Обработчик события клика
function handleTooltipClick(event) {
  event.preventDefault();
  event.stopPropagation();

  const isActive = this.classList.contains('tooltip_active');

  tooltips.forEach((tooltip) => {
    tooltip.classList.remove('tooltip_active');
    tooltip.style.color = '#000';
  });

  if (!isActive) {
    const tooltipText = this.getAttribute('title');
    tooltipElement.textContent = tooltipText;

    const elementRect = this.getBoundingClientRect();
    const tooltipHeight = tooltipElement.offsetHeight;
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipTop = elementRect.top - tooltipHeight - 10;
    const tooltipLeft = elementRect.left + elementRect.width / 2 - tooltipWidth / 2;

    tooltipElement.style.top = tooltipTop + 'px';
    tooltipElement.style.left = tooltipLeft + 'px';

    this.classList.add('tooltip_active');
    this.style.color = 'red';
  } else {
    this.classList.remove('tooltip_active');
    this.style.color = '#000';
  }
}

// Добавляем обработчик клика для каждой ссылки с классом "has-tooltip"
tooltips.forEach((tooltip) => {
  tooltip.addEventListener('click', handleTooltipClick);
});