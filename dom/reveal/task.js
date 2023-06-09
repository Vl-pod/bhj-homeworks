document.addEventListener("DOMContentLoaded", function () {
	let revealElements = document.getElementsByClassName("reveal");

	function revealInView() {
		for (let i = 0; i < revealElements.length; i++) {
			let revealElement = revealElements[i];
			let revealPosition = revealElement.getBoundingClientRect().top;
			let windowHeight = window.innerHeight;

			if (revealPosition < windowHeight) {
				revealElement.classList.add("reveal_active");
			} else {
				revealElement.classList.remove("reveal_active");
			}
		}
	}

	window.addEventListener("scroll", revealInView);
});