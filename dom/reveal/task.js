document.addEventListener("DOMContentLoaded", function () {
	var revealElements = document.getElementsByClassName("reveal");

	function revealInView() {
		for (var i = 0; i < revealElements.length; i++) {
			var revealElement = revealElements[i];
			var revealPosition = revealElement.getBoundingClientRect().top;
			var windowHeight = window.innerHeight;

			if (revealPosition < windowHeight) {
				revealElement.classList.add("reveal_active");
			} else {
				revealElement.classList.remove("reveal_active");
			}
		}
	}

	window.addEventListener("scroll", revealInView);
});