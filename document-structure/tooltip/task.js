document.addEventListener('DOMContentLoaded', function () {
        let tooltipElements = document.querySelectorAll('.has-tooltip');
        let activeTooltip = null;

        tooltipElements.forEach(function (element) {
            element.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (activeTooltip && activeTooltip.parentElement === element) {
                        activeTooltip.classList.remove('tooltip_active');
                        activeTooltip = null;
                } else {
                    if (activeTooltip) {
                            activeTooltip.classList.remove('tooltip_active');
                    }
                    activeTooltip = element.querySelector('.tooltip');
                    if (!activeTooltip) {
                        activeTooltip = document.createElement('div');
                        activeTooltip.className = 'tooltip';
                        activeTooltip.innerText = element.dataset.title;
                        element.appendChild(activeTooltip);
                    }
                    activeTooltip.style.left = element.getBoundingClientRect().left + 'px';
                    activeTooltip.style.top = element.getBoundingClientRect().bottom + 2 + window.scrollY + 'px';
                    activeTooltip.classList.add('tooltip_active');
                }
            });
        });
    });
    