tooltips.forEach((element) => {
	element.addEventListener('click', (event) => {
	  event.preventDefault();
	  event.stopPropagation();
  
	  const isActive = element.classList.contains('tooltip_active');
  
	  tooltips.forEach((tooltip) => {
		tooltip.classList.remove('tooltip_active');
	  });
  
	  if (!isActive) {
		const tooltipText = element.getAttribute('title');
		tooltipElement.textContent = tooltipText;
  
		const elementRect = element.getBoundingClientRect();
		const tooltipHeight = tooltipElement.offsetHeight;
		const tooltipWidth = tooltipElement.offsetWidth;
		const tooltipTop = elementRect.top - tooltipHeight - 10;
		const tooltipLeft = elementRect.left + elementRect.width / 2 - tooltipWidth / 2;
  
		tooltipElement.style.top = tooltipTop + 'px';
		tooltipElement.style.left = tooltipLeft + 'px';
  
		tooltips.forEach((tooltip) => {
		  tooltip.classList.remove('tooltip_active');
		});
  
		element.classList.add('tooltip_active');
	  }
	});
  });